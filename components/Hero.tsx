import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";

const bullets = [
  "Answers calls and website chats 24/7",
  "Books appointments and captures qualified leads",
  "Texts back missed calls in seconds",
];

export default function Hero() {
  return (
    <section className="oak-layout-hero home-hero relative overflow-hidden bg-[#EEF4FF] pt-[93px] pb-8">
        <div className="absolute inset-0">
        <Image
          src="/assets/syntidesk/overview-poster.jpg"
          alt="AuriBoost product overview"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#D9E7FA_0%,#D9E7FA_38%,rgba(217,231,250,0.1)_72%)]" />
      </div>

        <div className="relative min-h-[607px] px-6 md:px-[112px]">
        <div className="max-w-[660px]">
          <h1 className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#101832] sm:text-[44px] lg:text-[54px]">
            Never miss{" "}
            <em className="not-italic italic text-[#7C35ED]">another lead.</em>
          </h1>
          <p className="mt-5 max-w-[460px] text-[16px] font-bold leading-[1.55] text-[#566073] sm:text-[17.5px]">
            AuriBoost answers calls, follows up by text, books appointments, and helps growing businesses turn more inquiries into customers.
          </p>

          <ul className="hero-checklist mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="relative mt-[1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] bg-[#0B55FF]/10">
                  <Check size={14} strokeWidth={2.5} className="text-[#0B55FF]" />
                </span>
                <span className="text-[15.5px] font-bold leading-[1.3] text-[#596376] sm:text-[17px]">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="/book-a-call"
            className="hero-book-demo mt-7 inline-flex h-[58px] min-w-[196px] items-center justify-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 text-[17px] font-extrabold text-white shadow-[0_14px_28px_rgba(11,85,255,0.3)] hover:bg-[#0a49dd] sm:text-[18px]"
          >
            Book a Demo <ChevronRight size={18} />
          </a>

          <div className="hero-ratings mt-8 flex flex-wrap items-center gap-6">
            <RatingBadge src="/assets/auriboost-logo.jpeg" name="AuriBoost" />
          </div>
          </div>
        </div>

        <div className="hero-synticore-brand" aria-label="AuriBoost">
          <Image
            src="/assets/auriboost-logo.jpeg"
            alt="AuriBoost"
            width={1383}
            height={260}
          />
        </div>
      </section>
  );
}

function RatingBadge({ src, name }: { src: string; name: string }) {
  return (
    <div className="rating-badge flex items-center gap-2.5">
      <Image src={src} alt={name} width={41} height={41} className="h-[41px] w-[41px] object-contain" />
      <div>
        <div className="text-[16px] font-extrabold leading-none text-[#202532]">{name}</div>
        <div className="mt-1 text-[16px] leading-none text-[#FFB81C]">★★★★★</div>
      </div>
    </div>
  );
}
