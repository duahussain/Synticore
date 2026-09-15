"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const trades = [
  { slug: "healthcare", name: "Healthcare", image: "/assets/syntidesk/interactions-review.jpg" },
  { slug: "construction", name: "Construction", image: "/assets/syntidesk/work-queue.jpg" },
  { slug: "manufacturing", name: "Manufacturing", image: "/assets/syntidesk/appointments.jpg" },
  { slug: "professional-services", name: "Professional Services", image: "/assets/syntidesk/interactions-review.jpg" },
  { slug: "facilities", name: "Facilities", image: "/assets/syntidesk/work-queue.jpg" },
  { slug: "field-services", name: "Field Services", image: "/assets/syntidesk/appointments.jpg" },
];

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function TradesBand() {
  const pages = chunk(trades, 3);
  const track = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(false);

  const moveToPage = useCallback(
    (nextPage: number) => {
      const carousel = track.current;
      if (!carousel) return;

      const page = (nextPage + pages.length) % pages.length;
      carousel.scrollTo({
        left: page * (carousel.clientWidth + 32),
        behavior: "smooth",
      });
      setActivePage(page);
    },
    [pages.length],
  );

  useEffect(() => {
    const motionOk = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!motionOk || paused) return;

    const timer = window.setInterval(() => moveToPage(activePage + 1), 5000);
    return () => window.clearInterval(timer);
  }, [activePage, moveToPage, paused]);

  return (
    <section
      className="oak-layout-trades relative bg-[#0C1220] pb-24 pt-20"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
    >
      <div className="mx-auto max-w-[1120px] px-6 text-center md:px-10">
        <h2 className="text-[26px] font-extrabold leading-[1.1] text-white sm:text-[30px] lg:text-[35px]">
          Built for operations that need to work better&hellip;
        </h2>

        <div
          ref={track}
          className="mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onScroll={() => {
            const carousel = track.current;
            if (!carousel) return;
            setActivePage(Math.round(carousel.scrollLeft / (carousel.clientWidth + 32)));
          }}
        >
          {pages.map((page, pi) => (
            <div
              key={pi}
              className="grid w-full shrink-0 snap-center grid-cols-2 gap-x-[30px] gap-y-[28px] sm:grid-cols-3"
            >
              {page.map((t) => (
                <article
                  key={t.slug}
                  className="overflow-hidden rounded-[14px] bg-white text-left shadow-[0_20px_42px_rgba(0,0,0,0.18)]"
                >
                  <div className="relative h-[110px] w-full sm:h-[158px]">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      priority={pi === 0}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="px-3.5 py-2.5 text-[16px] font-extrabold text-[#0F1728] sm:text-[18px]">
                    {t.name}
                  </h3>
                </article>
              ))}
            </div>
          ))}
        </div>

        <div className="gallery-controls trade-controls">
          <button aria-label="Show previous trades" onClick={() => moveToPage(activePage - 1)}>
            ← Previous
          </button>
          <div className="trade-pagination" aria-label={`Showing trade group ${activePage + 1} of ${pages.length}`}>
            {pages.map((_, index) => (
              <button
                key={index}
                className={index === activePage ? "is-active" : ""}
                aria-label={`Show trade group ${index + 1}`}
                aria-current={index === activePage ? "true" : undefined}
                onClick={() => moveToPage(index)}
              />
            ))}
          </div>
          <button aria-label="Show next trades" onClick={() => moveToPage(activePage + 1)}>
            Next →
          </button>
        </div>
        <a
          href="/who-we-help#trades"
          className="trades-explore-cta mt-10 inline-flex items-center gap-1 rounded-[14px] bg-[#14B7A5] px-6 py-3.5 text-[15.5px] font-extrabold text-white shadow-[0_14px_28px_rgba(20,183,165,0.3)] hover:bg-[#0fa896] dark:bg-[#0B55FF] dark:shadow-[0_14px_28px_rgba(11,85,255,0.3)] dark:hover:bg-[#0a49dd]"
        >
          Explore AuriBoost Solutions <ChevronRight size={18} />
        </a>
      </div>
    </section>
  );
}
