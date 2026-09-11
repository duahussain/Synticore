import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LegalSection = { id: string; title: string; body: string[] };

export default function LegalPage({
  eyebrow,
  titleLine1,
  titleLine2,
  intro,
  lastUpdated,
  chips,
  sections,
}: {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  lastUpdated: string;
  chips: { label: string; text: string }[];
  sections: LegalSection[];
}) {
  return (
    <>
      <Navbar />

      <section className="bg-[#F5F7FB] px-6 pt-[93px] pb-16 md:px-10">
        <div className="mx-auto max-w-[1120px]">
          <div className="mt-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-[13px] font-extrabold tracking-wide text-[#0B55FF]">
                {eyebrow}
              </span>
              <h1 className="mt-3 text-[44px] font-extrabold leading-[1.1] text-[#101832] sm:text-[52px]">
                {titleLine1}
                <br />
                <span className="italic text-[#7C35ED]">{titleLine2}</span>
              </h1>
              <p className="mt-4 max-w-xl text-[16px] font-medium leading-relaxed text-[#5A6172]">
                {intro}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-[#D9DEEA] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#5A6172]">
              Last updated: {lastUpdated}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
            <nav className="hidden md:block">
              <h2 className="text-[16px] font-extrabold text-[#101832]">
                On this page
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-[14px] font-semibold text-[#5A6172] hover:text-[#0B55FF]"
                    >
                      {s.title.replace(/^\d+\.\s*/, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {chips.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-[16px] bg-white p-5 shadow-[0_10px_30px_rgba(16,24,50,0.05)]"
                  >
                    <span className="text-[12px] font-extrabold tracking-wide text-[#0B55FF]">
                      {c.label}
                    </span>
                    <p className="mt-2 text-[15px] font-semibold leading-relaxed text-[#101832]">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[20px] bg-white p-8 shadow-[0_10px_30px_rgba(16,24,50,0.05)] md:p-12">
                {sections.map((s, i) => (
                  <div
                    key={s.id}
                    id={s.id}
                    className={i > 0 ? "mt-10 scroll-mt-24" : "scroll-mt-24"}
                  >
                    <h2 className="text-[24px] font-extrabold text-[#101832]">
                      {s.title}
                    </h2>
                    {s.body.map((p, j) => (
                      <p
                        key={j}
                        className="mt-3 text-[15px] leading-relaxed text-[#3F495B] whitespace-pre-line"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
