import { DemoButton } from "@/components/Interactions";
import { Check } from "lucide-react";

export type FeatureItem = { title: string; desc: string };

export default function FeatureTextBlock({
  heading,
  description,
  items,
  cta = "See Short Demo",
}: {
  heading: string;
  description: string;
  items: FeatureItem[];
  cta?: string;
}) {
  return (
    <div className="oak-layout-feature max-w-[507px]">
      <h3 className="text-[26px] font-extrabold leading-[1.05] text-[#101832] sm:text-[30px] lg:text-[35px]">
        {heading}
      </h3>
      <p className="mt-4 text-[16px] font-bold leading-[1.55] text-[#495568] sm:text-[18px]">
        {description}
      </p>

      <ul className="mt-7 space-y-5">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3.5">
            <span className="relative mt-[1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] bg-[#0B55FF]/10">
              <Check size={14} strokeWidth={2.5} className="text-[#0B55FF]" />
            </span>
            <div>
              <div className="text-[15px] font-extrabold leading-tight text-[#101832] sm:text-[16.5px]">
                {item.title}
              </div>
              <div className="mt-1 text-[14px] font-semibold leading-relaxed text-[#3F495B] sm:text-[15.5px]">
                {item.desc}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <DemoButton title={heading} src={`https://theoakmontdigital.com/assets/${({"Workflow Automation":"functional-website","Microsoft Business Solutions":"ai-chat-agent","AI & Customer Operations":"missed-call-text-back","Custom Business Systems":"review-funnel","Integrations":"one-click-campaigns","Human Expert Implementation":"local-seo"} as Record<string,string>)[heading]}-demo.mp4?v=oakmont-standalone-2`}>
        {cta}
      </DemoButton>
    </div>
  );
}
