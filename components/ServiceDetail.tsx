import { ChevronRight } from "lucide-react";
import { ServiceMedia } from "@/components/Interactions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type Stat = { value: string; desc: string };
export type FeatureCard = { title: string; desc: string };

export default function ServiceDetail({
  title,
  intro,
  stats,
  demoLabel = "See a short demo below",
  sectionEyebrow,
  cards,
  ctaTitle,
  ctaDesc,
}: {
  title: string;
  intro?: string;
  stats: Stat[];
  demoLabel?: string;
  sectionEyebrow: string;
  cards: FeatureCard[];
  ctaTitle: string;
  ctaDesc: string;
}) {
  return (
    <div className="service-page">
      <Navbar />

      <section className="bg-[#F5F7FB] px-6 pt-[93px] pb-16 md:px-10">
        <div className="mx-auto max-w-[1120px]">
          <h1 className="mt-14 text-center text-[36px] font-extrabold text-[#101832] sm:text-[44px]">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-4 max-w-3xl text-center text-[16px] font-medium leading-relaxed text-[#5A6172]">
              {intro}
            </p>
          )}

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col gap-6">
              {stats.map((s) => (
                <div
                  key={s.desc}
                  className="rounded-[20px] bg-white p-6 shadow-[0_10px_30px_rgba(16,24,50,0.05)]"
                >
                  <div className="bg-gradient-to-r from-[#0B55FF] to-[#7C35ED] bg-clip-text text-[34px] font-extrabold text-transparent">
                    {s.value}
                  </div>
                  <p className="mt-2 text-[15px] font-semibold leading-relaxed text-[#101832]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[20px] bg-white p-7 shadow-[0_10px_30px_rgba(16,24,50,0.05)]">
              <h2 className="text-center text-[22px] font-extrabold text-[#101832]">
                {demoLabel}
              </h2>
              <ServiceMedia />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0C1220] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="text-[30px] font-extrabold text-white sm:text-[38px]">
            {sectionEyebrow}
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-[18px] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                <h3 className="text-[19px] font-extrabold text-[#0B55FF]">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#3F495B]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-20 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[24px] bg-gradient-to-br from-[#151A2F] to-[#1D1440] p-10 md:flex-row md:items-center md:p-14">
          <div>
            <h2 className="max-w-lg text-[28px] font-extrabold leading-[1.2] text-white sm:text-[34px]">
              {ctaTitle}
            </h2>
            <p className="mt-3 max-w-lg text-[15px] font-medium leading-relaxed text-white/60">
              {ctaDesc}
            </p>
          </div>
          <a
            href="/book-a-call"
            className="inline-flex shrink-0 items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[15.5px] font-extrabold text-white hover:bg-[#0a49dd]"
          >
            Book a Call <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
