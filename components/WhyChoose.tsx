import { FileText, DollarSign, Bookmark, Sparkles, ShieldCheck, LineChart } from "lucide-react";

const cards = [
  {
    icon: FileText,
    title: "Process first",
    desc: "Understand how work actually happens before selecting tools or platforms.",
  },
  {
    icon: DollarSign,
    title: "Use what already works",
    desc: "If an existing platform can solve the problem well, use it rather than replacing it.",
  },
  {
    icon: Bookmark,
    title: "Build only when needed",
    desc: "Custom software should solve a real operational constraint, not create another system to maintain.",
  },
  {
    icon: Sparkles,
    title: "AI with boundaries",
    desc: "Use AI where interpretation genuinely helps and keep predictable work deterministic.",
  },
  {
    icon: ShieldCheck,
    title: "Real implementation",
    desc: "Work with AI engineers, Microsoft 365 experts, developers, designers, and automation specialists.",
  },
  {
    icon: LineChart,
    title: "Support and improve",
    desc: "Test, document, train, monitor, and improve the system as your operational needs evolve.",
  },
];

export default function WhyChoose() {
  return (
    <section className="oak-layout-why mx-auto max-w-[1120px] px-6 py-20 text-center md:px-10">
      <h2 className="text-[32px] font-extrabold leading-[1.08] text-[#101832] sm:text-[40px] lg:text-[45.84px]">
        How Synticore thinks
        <br />
        about operational improvement
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-[18px] bg-[#151A2F] p-[22px] pt-6 text-white sm:p-6"
          >
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-white/[0.08]">
              <c.icon size={19} strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 text-[19px] font-extrabold sm:text-[20px]">{c.title}</h3>
            <p className="mt-2 text-[14px] font-semibold leading-relaxed text-white/90 sm:text-[14.5px]">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
