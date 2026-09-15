import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="oak-layout-cta mx-auto max-w-[1120px] px-6 pb-24 md:px-10">
      <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] bg-[#0C1220] p-10 md:grid-cols-[1.4fr_1fr] md:p-14">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] font-bold tracking-wide text-white/70">
            START WITH THE WORKFLOW
          </span>
          <h2 className="mt-5 text-[28px] font-extrabold leading-[1.05] text-white sm:text-[33px] lg:text-[38.2px]">
            Want a clearer view of
            <br />
            what should improve?
          </h2>
          <p className="mt-4 max-w-sm text-[15.5px] leading-relaxed text-white/60">
            Start with a free Workflow Efficiency Check, then choose the simplest practical system.
          </p>
          <a
            href="/book-a-call"
            className="mt-7 inline-flex items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[15.5px] font-extrabold text-white hover:bg-[#0a49dd]"
          >
            Start Free Workflow Check <ChevronRight size={18} />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 text-center">
          <Image
            src="/assets/auriboost-logo.jpeg"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <div className="mt-4 text-[26px] font-extrabold text-white">AuriBoost</div>
          <div className="text-[14.5px] text-white/60">AI &amp; Customer Operations</div>
        </div>
      </div>
    </section>
  );
}
