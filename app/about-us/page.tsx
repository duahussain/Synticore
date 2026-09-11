import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Synticore | Business Systems Company",
};

const systemItems = [
  { n: "01", label: "Review how work actually moves" },
  { n: "02", label: "Simplify what should happen next" },
  { n: "03", label: "Build, connect, support, and improve" },
];

const approach = [
  {
    n: "01",
    title: "Process first",
    desc: "Understand how the work actually happens before selecting tools.",
  },
  {
    n: "02",
    title: "Use what already works",
    desc: "Use Microsoft 365 or an existing platform when it can solve the problem well.",
  },
  {
    n: "03",
    title: "AI with boundaries",
    desc: "Use AI where interpretation genuinely helps and keep people involved where judgment matters.",
  },
];

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF1FF] to-white pt-[93px] pb-24">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 pt-16 md:grid-cols-[1.3fr_1fr] md:px-10">
          <div>
            <span className="inline-block rounded-full border border-[#0B55FF]/20 bg-white px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
              About Synticore
            </span>
            <h1 className="mt-5 text-[40px] font-extrabold leading-[1.08] text-[#101832] sm:text-[48px] lg:text-[56px]">
              We improve the systems behind{" "}
              <em className="not-italic italic text-[#7C35ED]">everyday work.</em>
            </h1>
            <p className="mt-5 max-w-lg text-[17px] font-medium leading-relaxed text-[#5A6172]">
              Synticore is a business-systems company focused on practical operational improvement
              across workflow automation, Microsoft technologies, custom software, and product design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="/book-a-call"
                className="inline-flex items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[16px] font-extrabold text-white shadow-[0_14px_28px_rgba(11,85,255,0.3)] hover:bg-[#0a49dd]"
              >
                Start Free Workflow Check <ChevronRight size={18} />
              </a>
              <a
                href="/our-process"
                className="about-process-link inline-flex items-center gap-1.5 text-[15px] font-extrabold text-[#101832]"
              >
                See our approach <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-7 shadow-[0_20px_50px_rgba(16,24,50,0.1)]">
            <Image
              src="/assets/syntidesk-logo.jpg"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-2xl bg-[#EEF1FF] object-contain p-2"
            />
            <div className="mt-5 text-[13px] font-extrabold uppercase tracking-wide text-[#8A90A0]">
              The Synticore approach
            </div>
            <ul className="mt-3 divide-y divide-black/5">
              {systemItems.map((item) => (
                <li key={item.n} className="flex items-center gap-4 py-3.5">
                  <span className="text-[13px] font-extrabold text-[#0B55FF]">{item.n}</span>
                  <span className="text-[15px] font-bold text-[#101832]">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
              Who We Are
            </span>
            <h2 className="mt-3 text-[32px] font-extrabold leading-[1.1] text-[#101832] sm:text-[42px]">
              Process before technology.
            </h2>
          </div>
          <p className="self-center text-[16px] font-medium leading-relaxed text-[#5A6172]">
            We look at where information enters, who owns the next step, which systems are involved,
            where delays occur, and which parts should stay human before recommending a solution.
          </p>
        </div>
      </section>

      <section className="about-approach bg-[#F5F7FB] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
                How we think
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.1] text-[#101832] sm:text-[42px]">
                Practical systems, not unnecessary complexity.
              </h2>
            </div>
            <p className="self-center text-[16px] font-bold leading-relaxed text-[#5A6172]">
              The goal is the simplest practical system that solves the actual process.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {approach.map((a) => (
              <div
                key={a.n}
                className="rounded-[18px] bg-white p-7 shadow-[0_10px_30px_rgba(16,24,50,0.05)]"
              >
                <span className="text-[13px] font-extrabold text-[#7C35ED]">{a.n}</span>
                <h3 className="mt-3 text-[20px] font-extrabold text-[#101832]">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5A6172]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-20 md:px-10">
        <div className="overflow-hidden rounded-[24px] bg-gradient-to-br from-[#151A2F] to-[#1D1440] p-10 md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="text-[12.5px] font-extrabold uppercase tracking-wide text-white/60">
                Ready When You Are
              </span>
              <h2 className="mt-3 text-[28px] font-extrabold leading-[1.15] text-white sm:text-[34px]">
                Want a clearer view of
                <br />
                what should improve?
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a
                href="/book-a-call"
                className="inline-flex items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[15.5px] font-extrabold text-white hover:bg-[#0a49dd]"
              >
                Start Free Workflow Check <ChevronRight size={18} />
              </a>
              <div className="text-[13.5px] text-white/50">
                Prefer to talk to Synticore?
                <br />
                <span className="font-bold text-white/80">
                  Review the workflow before choosing the technology.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
