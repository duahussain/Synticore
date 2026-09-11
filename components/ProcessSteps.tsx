const steps = [
  {
    n: "01",
    badge: "Understand the work",
    title: "Review",
    desc: "We understand users, workflow, systems, data, ownership, bottlenecks, and exceptions.",
  },
  {
    n: "02",
    badge: "Remove friction",
    title: "Simplify",
    desc: "We remove unnecessary steps and clarify what should happen next.",
  },
  {
    n: "03",
    badge: "Make it practical",
    title: "Build / Connect",
    desc: "We implement the right combination of automation, Microsoft tools, integrations, AI, or custom systems.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="oak-layout-process mx-auto max-w-[1120px] px-6 py-20 text-center md:px-10">
      <span className="inline-block rounded-full border border-black/10 px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wide text-[#5A6172]">
        How we work
      </span>
      <h2 className="mt-5 text-[34px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#101832] sm:text-[42px] lg:text-[50px]">
        Process before technology.
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-[15px] font-medium text-[#5A6172] sm:text-[16px]">
        We start with how work actually moves through your organization before choosing a solution.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative overflow-hidden rounded-[18px] border-[0.8px] border-[#101832]/[0.09] bg-white/[0.92] p-[22px] pt-6 shadow-[0_18px_42px_rgba(16,24,50,0.07)] sm:p-[27px] sm:pt-7"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B55FF] to-[#7C35ED]" />
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
          </div>
        ))}
      </div>
    </section>
  );
}
