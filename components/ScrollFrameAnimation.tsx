import Image from "next/image";
import { Children } from "react";

export default function ScrollFrameAnimation({
  frameSources,
  children,
}: {
  frameSources?: string[];
  children: React.ReactNode;
}) {
  const items = Children.toArray(children);

  return (
    <div className="systems-flow flex flex-col gap-14 md:gap-20">
      {items.map((child, i) => {
        const src = frameSources?.[i % frameSources.length];
        const imageFirst = i % 2 === 0;
        return (
          <div key={i} className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-16">
            {src && (
              <div className={`w-full shrink-0 md:w-[420px] ${imageFirst ? "md:order-1" : "md:order-2"}`}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-[#EEF1F7] shadow-[0_24px_60px_rgba(16,24,50,0.12)] ring-1 ring-black/5">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 420px, 90vw"
                  />
                </div>
              </div>
            )}
            <div className={`w-full ${imageFirst ? "md:order-2" : "md:order-1"}`}>{child}</div>
          </div>
        );
      })}
    </div>
  );
}
