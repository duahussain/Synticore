import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Contractor Website Process | Oakmont Digital",
};

const callSteps = [
  { n: "01", label: "Demo call", time: "20 minutes" },
  { n: "02", label: "System build", time: "7–10 days" },
  { n: "03", label: "Launch call", time: "25 minutes" },
];

const steps = [
  {
    n: "01",
    badge: "20 MIN",
    title: "Quick demo call",
    desc: "You tell us what you do, where leads get lost, and what you want fixed. We ask useful questions. Wild concept, we know.",
    tag: "You Leave With",
    result: "A clear plan",
  },
  {
    n: "02",
    badge: "7–10 DAYS",
    title: "We build your system",
    desc: "You send the basics. We build the website, lead capture, reviews, chat, and follow-up around your business.",
    tag: "You Get",
    result: "A working system to review",
  },
  {
    n: "03",
    badge: "25 MIN",
    title: "Test it & go live",
    desc: "We walk through everything together, press the important buttons, and make sure nothing catches fire.",
    tag: "You Finish With",
    result: "A clean launch",
  },
];

export default function OurProcess() {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF1FF] to-white pt-[93px] pb-24">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 pt-16 md:grid-cols-[1.3fr_1fr] md:px-10">
          <div>
            <span className="inline-block rounded-full border border-[#0B55FF]/20 bg-white px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
              The Oakmont Process
            </span>
            <h1 className="mt-5 text-[40px] font-extrabold leading-[1.08] text-[#101832] sm:text-[48px] lg:text-[56px]">
              Three steps.
              <br />
              <em className="not-italic italic text-[#7C35ED]">
                Zero agency
                <br />
                obstacle course.
              </em>
            </h1>
            <p className="mt-5 max-w-lg text-[17px] font-medium leading-relaxed text-[#5A6172]">
              One quick call, one focused build, one launch call. Nobody needs twelve meetings
              to get a website live.
            </p>
            <div className="mt-8">
              <a
                href="/book-a-call"
                className="inline-flex items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[16px] font-extrabold text-white shadow-[0_14px_28px_rgba(11,85,255,0.3)] hover:bg-[#0a49dd]"
              >
                Book a Call <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-7 shadow-[0_20px_50px_rgba(16,24,50,0.1)]">
            <div className="flex items-center gap-3 border-b border-black/5 pb-4">
              <Image
                src="/assets/auriboost-logo.jpeg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl bg-[#EEF1FF] object-contain p-1.5"
              />
              <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#8A90A0]">
                From Call To Launch
              </span>
            </div>
            <ul className="divide-y divide-black/5">
              {callSteps.map((item) => (
                <li key={item.n} className="flex items-center justify-between gap-4 py-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] font-extrabold text-[#0B55FF]">{item.n}</span>
                    <span className="text-[15px] font-bold text-[#101832]">{item.label}</span>
                  </div>
                  <span className="text-[13.5px] font-semibold text-[#8A90A0]">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1120px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
              The Whole Process
            </span>
            <h2 className="mt-3 text-[32px] font-extrabold leading-[1.1] text-[#101832] sm:text-[42px]">
              Here is the whole thing. Seriously.
            </h2>
          </div>
          <p className="self-center text-[16px] font-medium leading-relaxed text-[#5A6172]">
            No confusing handoffs. No weekly meeting about the next meeting.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-[18px] border-[0.8px] border-[#101832]/[0.09] bg-white/[0.92] p-[22px] pt-6 shadow-[0_18px_42px_rgba(16,24,50,0.07)] sm:p-[27px] sm:pt-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#0B55FF] to-[#7C35ED] text-[14px] font-extrabold text-white">
                  {s.n}
                </span>
                <span className="rounded-full bg-[#EEF3FB] px-3 py-1.5 text-[12px] font-extrabold text-[#48536A]">
                  {s.badge}
                </span>
              </div>
              <h3 className="mt-6 text-[20px] font-extrabold text-[#101832] sm:text-[22px]">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] font-semibold leading-relaxed text-[#4B5568] sm:text-[15px]">
                {s.desc}
              </p>
              <div className="mt-5 rounded-[12px] bg-[#F5F7FB] px-4 py-3">
                <div className="text-[12px] font-extrabold uppercase tracking-wide text-[#7C35ED]">
                  {s.tag}
                </div>
                <div className="mt-0.5 text-[14.5px] font-extrabold text-[#101832]">
                  {s.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-[#F5F7FB] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#151A2F] to-[#1D1440] p-10 md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="text-[12.5px] font-extrabold uppercase tracking-wide text-white/60">
                Ready When You Are
              </span>
              <h2 className="mt-3 text-[28px] font-extrabold leading-[1.15] text-white sm:text-[34px]">
                Ready to get this off
                <br />
                your to-do list?
              </h2>
              <p className="mt-3 text-[14.5px] font-medium text-white/50">
                Twenty minutes. No pressure. No 47-slide deck. We promise.
              </p>
            </div>
            <a
              href="/book-a-call"
              className="inline-flex shrink-0 items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[15.5px] font-extrabold text-white hover:bg-[#0a49dd]"
            >
              Book a Call <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
