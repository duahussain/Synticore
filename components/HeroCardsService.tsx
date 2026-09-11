import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type NumberedItem = { title: string; desc: string };

export default function HeroCardsService({
  eyebrow,
  titleLine1,
  titleLine2,
  intro,
  items,
  ctaTitle,
  ctaDesc,
}: {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  items: NumberedItem[];
  ctaTitle: string;
  ctaDesc: string;
}) {
  return (
    <>
      <Navbar />

      <section className="bg-[#F5F7FB] px-6 pt-[93px] pb-24 md:px-10">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 pt-16 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-[#D9DEEA] bg-white px-4 py-2 text-[13px] font-bold tracking-wide text-[#5A6172]">
              {eyebrow}
            </span>

            <h1 className="mt-6 text-[44px] font-extrabold leading-[1.1] text-[#101832] sm:text-[52px]">
              {titleLine1}
              <br />
              <span className="bg-gradient-to-r from-[#0B55FF] to-[#7C35ED] bg-clip-text italic text-transparent">
                {titleLine2}
              </span>
            </h1>

            <p className="mt-5 max-w-md text-[16px] font-medium leading-relaxed text-[#5A6172]">
              {intro}
            </p>

            <a
              href="/book-a-call"
              className="mt-8 inline-flex items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[15.5px] font-extrabold text-white hover:bg-[#0a49dd]"
            >
              Book a Call <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {items.map((item, i) => {
              const n = String(i + 1).padStart(2, "0");
              const purple = i === 1 || i === 3;
              return (
                <div
                  key={item.title}
                  className="rounded-[20px] bg-white p-6 shadow-[0_10px_30px_rgba(16,24,50,0.05)]"
                >
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[12px] font-extrabold ${
                      purple
                        ? "bg-[#F2E8FE] text-[#7C35ED]"
                        : "bg-[#E5EDFF] text-[#0B55FF]"
                    }`}
                  >
                    {n}
                  </span>
                  <h3 className="mt-3 text-[17px] font-extrabold text-[#101832]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-semibold leading-relaxed text-[#5A6172]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
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
    </>
  );
}
