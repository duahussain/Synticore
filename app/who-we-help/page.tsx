import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Industries Served | Synticore",
};

const categories = [
  {
    tag: "Industry",
    tagColor: "text-[#0B55FF] bg-[#0B55FF]/10",
    title: "Healthcare",
    desc: "Operational systems where controlled modernization, structured workflows, and reliable historical information matter.",
    chips: ["Care teams", "Healthcare operations", "Enterprise workflows", "Modernization"],
    img: "roofing",
  },
  {
    tag: "Industry",
    tagColor: "text-[#7C35ED] bg-[#7C35ED]/10",
    title: "Construction",
    desc: "Business processes that need clear ownership, better coordination, and a practical operating experience.",
    chips: ["Field operations", "Project teams", "Workflow systems", "Integrations"],
    img: "hvac",
  },
  {
    tag: "Industry",
    tagColor: "text-[#0B55FF] bg-[#0B55FF]/10",
    title: "Manufacturing",
    desc: "Connected systems that reduce repeated entry, status checking, reminders, and manual routing.",
    chips: ["Operations", "Approvals", "Document workflows", "Visibility"],
    img: "remodeling",
  },
  {
    tag: "Industry",
    tagColor: "text-[#1FA97C] bg-[#1FA97C]/10",
    title: "Professional Services",
    desc: "Purpose-built systems that organize information, ownership, status, notes, and next steps.",
    chips: ["Business systems", "Client operations", "Custom apps", "Automation"],
    img: "landscapers",
  },
  {
    tag: "Industry",
    tagColor: "text-[#E07A2C] bg-[#E07A2C]/10",
    title: "Facilities & Field Services",
    desc: "Workflows that help teams manage requests, scheduling, follow-up, routing, and operational visibility.",
    chips: ["Facilities", "Field teams", "Customer operations", "Scheduling"],
    img: "general-contractors",
  },
];

const fitPoints = [
  {
    n: "01",
    title: "Manual work repeats",
    desc: "Repeated entry, status checking, reminders, and routing are handled by people.",
  },
  {
    n: "02",
    title: "Systems are disconnected",
    desc: "Information moves by hand between CRM, Microsoft 365, accounting, project tools, and spreadsheets.",
  },
  {
    n: "03",
    title: "Workflows are outdated",
    desc: "Older SharePoint environments, forms, and processes have become hard to maintain.",
  },
  {
    n: "04",
    title: "Visibility is unclear",
    desc: "Teams need clear status, ownership, history, and next-step visibility.",
  },
];

export default function WhoWeHelp() {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0C1220] via-[#151A3A] to-[#2A1560] pt-[93px] pb-24">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 pt-16 md:grid-cols-[1.2fr_1fr] md:px-10">
          <div>
            <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#8FA8FF]">
              Who We Help
            </span>
            <h1 className="mt-5 text-[38px] font-extrabold leading-[1.1] text-white sm:text-[46px] lg:text-[52px]">
              Built for teams solving
              <br />
              <em className="not-italic italic text-[#B48CFF]">real operational problems.</em>
            </h1>
            <p className="mt-5 max-w-md text-[16px] font-medium leading-relaxed text-white/60">
              We work with organizations where information, people, processes, and systems need
              to work together more clearly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="/book-a-call"
                className="inline-flex items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[16px] font-extrabold text-white shadow-[0_14px_28px_rgba(11,85,255,0.35)] hover:bg-[#0a49dd]"
              >
                Start Free Workflow Check <ChevronRight size={18} />
              </a>
              <a href="#trades" className="text-[15px] font-extrabold text-white/80">
                See industries &darr;
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-[1.4fr_1fr] gap-3">
              <div className="relative h-[340px] overflow-hidden rounded-[20px]">
                <Image
                  src="/assets/trades/roofing.jpg"
                  alt="Business operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative h-[160px] overflow-hidden rounded-[20px]">
                  <Image
                    src="/assets/trades/hvac.jpg"
                  alt="Connected workflow"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[164px] overflow-hidden rounded-[20px]">
                  <Image
                    src="/assets/trades/remodeling.jpg"
                  alt="Business system"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 right-6 flex items-center gap-2 rounded-[14px] bg-[#0C1220] px-4 py-3 shadow-xl">
              <span className="text-[22px] font-extrabold text-[#8FA8FF]">18+</span>
              <span className="text-[13px] font-bold leading-tight text-white">
                solution
                <br />
                areas
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="trades" className="mx-auto mt-8 max-w-[1120px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(16,24,50,0.05)]"
            >
              <div className="relative h-[180px] w-full">
                <Image src={`/assets/trades/${c.img}.jpg`} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-7">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[11.5px] font-extrabold uppercase tracking-wide ${c.tagColor}`}
                >
                  {c.tag}
                </span>
                <h3 className="mt-3 text-[22px] font-extrabold text-[#101832]">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5A6172]">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-black/10 px-3 py-1.5 text-[13px] font-semibold text-[#3F495B]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="who-fit bg-gradient-to-br from-[#0B55FF] to-[#7C35ED] px-6 py-20 text-center md:px-10">
        <span className="text-[13px] font-extrabold uppercase tracking-wide text-white/70">
          Where Synticore helps
        </span>
        <h2 className="mx-auto mt-3 max-w-2xl text-[32px] font-extrabold leading-[1.15] text-white sm:text-[42px]">
          Operational friction is slowing work down.
        </h2>

        <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {fitPoints.map((f) => (
            <div key={f.n} className="rounded-[18px] bg-white/10 p-6 backdrop-blur">
              <span className="inline-block rounded-md bg-white/15 px-2.5 py-1 text-[12px] font-extrabold text-white">
                {f.n}
              </span>
              <h3 className="mt-4 text-[17px] font-extrabold text-white">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-20 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[24px] bg-gradient-to-br from-[#151A2F] to-[#1D1440] p-10 md:flex-row md:items-center md:p-14">
          <div>
            <span className="text-[12.5px] font-extrabold uppercase tracking-wide text-white/60">
              Do not see your exact industry?
            </span>
            <h2 className="mt-3 max-w-lg text-[28px] font-extrabold leading-[1.2] text-white sm:text-[34px]">
              Start with the business problem, then choose the right system.
            </h2>
            <p className="mt-3 max-w-lg text-[14.5px] font-medium leading-relaxed text-white/60">
              A real workflow usually crosses several solution areas. The goal is the simplest
              practical system that solves the actual process.
            </p>
          </div>
          <a
            href="/book-a-call"
            className="inline-flex shrink-0 items-center gap-1 rounded-[14px] bg-[#0B55FF] px-6 py-3.5 text-[15.5px] font-extrabold text-white hover:bg-[#0a49dd]"
          >
            Start Free Workflow Check <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
