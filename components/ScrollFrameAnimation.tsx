"use client";

import { Children, useEffect, useRef, useState } from "react";

function pad(n: number) {
  return String(n).padStart(3, "0");
}

const PIN_OFFSET = 120;
// Mild crop to trim the outer margin of the source frames without
// cutting into the subject (frames are well-composed 9:16 shots already).
const ZOOM = 1.08;

export default function ScrollFrameAnimation({
  frameCount,
  basePath,
  frameSources,
  children,
}: {
  frameCount: number;
  basePath: string;
  frameSources?: string[];
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyBoxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const sideRef = useRef<"left" | "right">("left");
  const activeRowRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [aspect, setAspect] = useState(9 / 16);
  const [ready, setReady] = useState(false);

  const items = Children.toArray(children);

  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = new Array(frameCount);

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = frameSources?.[i % frameSources.length] ?? `${basePath}${pad(i + 1)}.webp`;
      img.onload = () => {
        loadedCount++;
        if (i === 0) setAspect(img.naturalWidth / img.naturalHeight);
        if (loadedCount === 1) {
          setReady(true);
          draw(0);
        }
      };
      imgs[i] = img;
    }
    imagesRef.current = imgs;

    function draw(index: number) {
      const canvas = canvasRef.current;
      const img = imagesRef.current[index];
      if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const boxRatio = w / h;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let srcW: number;
      let srcH: number;
      if (imgRatio > boxRatio) {
        srcH = img.naturalHeight;
        srcW = srcH * boxRatio;
      } else {
        srcW = img.naturalWidth;
        srcH = srcW / boxRatio;
      }
      srcW /= ZOOM;
      srcH /= ZOOM;
      const srcX = (img.naturalWidth - srcW) / 2;
      const srcY = (img.naturalHeight - srcH) / 2;
      ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, w, h);
    }

    function update() {
      rafRef.current = null;
      const wrapper = wrapperRef.current;
      const stickyBox = stickyBoxRef.current;
      if (!wrapper || !stickyBox) return;

      const rect = wrapper.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const wrapperHeight = rect.height;
      const scrollable = wrapperHeight - viewportH;
      let progress = 0;
      if (scrollable > 0) {
        progress = -rect.top / scrollable;
      } else {
        progress = rect.top < 0 ? 1 : 0;
      }
      progress = Math.min(1, Math.max(0, progress));

      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        const boxH = stickyBox.offsetHeight;

        // Find which row is actually under the pin line, using real
        // measured row positions (rows can differ in height).
        const targetY = PIN_OFFSET + boxH / 2;
        let best = 0;
        let bestDist = Infinity;
        let bestRowTop = 0;
        let bestRowBottom = wrapperHeight;
        for (let i = 0; i < rowRefs.current.length; i++) {
          const r = rowRefs.current[i];
          if (!r) continue;
          const rr = r.getBoundingClientRect();
          const centerY = rr.top + rr.height / 2;
          const dist = Math.abs(centerY - targetY);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
            // Convert this row's viewport rect into wrapper-relative coords.
            bestRowTop = rr.top - rect.top;
            bestRowBottom = bestRowTop + rr.height;
          }
        }
        const side: "left" | "right" = best % 2 === 0 ? "left" : "right";
        const rowChanged = best !== activeRowRef.current;

        if (rowChanged) {
          activeRowRef.current = best;
          // Briefly enable a transition on top+left so the jump between
          // rows (and sides) glides instead of snapping; continuous
          // in-row scrubbing afterward stays instant/1:1 with scroll.
          stickyBox.style.transition =
            "top 550ms cubic-bezier(0.22,1,0.36,1), left 550ms cubic-bezier(0.22,1,0.36,1)";
          if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
          transitionTimeoutRef.current = setTimeout(() => {
            if (stickyBoxRef.current) stickyBoxRef.current.style.transition = "";
          }, 600);
        }

        if (side !== sideRef.current) {
          sideRef.current = side;
          const wrapperW = rect.width;
          const boxW = stickyBox.offsetWidth;
          stickyBox.style.left = side === "left" ? "0px" : `${wrapperW - boxW}px`;
        }

        // Pin within the active row's own bounds only, so the image can
        // never drift into a neighboring row (which may share its side).
        let top = PIN_OFFSET - rect.top;
        top = Math.max(bestRowTop, Math.min(top, bestRowBottom - boxH));
        top = Math.max(0, Math.min(top, wrapperHeight - boxH));
        stickyBox.style.top = `${top}px`;
      } else {
        stickyBox.style.left = "";
        stickyBox.style.top = "";
      }
    }

    function onScroll() {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(update);
    }

    function onResize() {
      sideRef.current = "left";
      activeRowRef.current = 0;
      const stickyBox = stickyBoxRef.current;
      if (stickyBox) {
        stickyBox.style.transition = "";
        stickyBox.style.left = "0px";
      }
      update();
      draw(frameIndexRef.current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // The device shell stays anchored while its existing screen frames play
    // independently. This avoids tying the visual motion to page scrolling.
    let playbackTimer: ReturnType<typeof setInterval> | null = null;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      playbackTimer = setInterval(() => {
        const next = (frameIndexRef.current + 1) % frameCount;
        const nextImage = imagesRef.current[next];
        if (!nextImage?.complete || !nextImage.naturalWidth) return;
        frameIndexRef.current = next;
        draw(next);
      }, 110);
    }
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      if (playbackTimer) clearInterval(playbackTimer);
    };
  }, [frameCount, basePath, frameSources]);

  return (
    <div ref={wrapperRef} className="systems-flow relative">
      <div
        ref={stickyBoxRef}
        className="systems-preview relative mx-auto mb-14 w-full max-w-[240px] md:absolute md:top-0 md:left-0 md:mb-0 md:mx-0 md:w-[240px]"
        style={{ aspectRatio: aspect }}
      >
        <div className="h-full w-full overflow-hidden rounded-[24px] bg-[#EEF1F7] shadow-[0_24px_60px_rgba(16,24,50,0.12)] ring-1 ring-black/5">
          <canvas ref={canvasRef} className="h-full w-full" />
          {!ready && <div className="absolute inset-0 animate-pulse bg-[#E4E9F2]" />}
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-16">
        {items.map((child, i) => (
          <div
            key={i}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className={`flex items-center py-10 first:pt-0 last:pb-0 md:py-6 ${
              i % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
            }`}
            style={{ minHeight: "580px", gridRow: i + 1 }}
          >
            <div className="w-full">{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
