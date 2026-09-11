import Image from "next/image";
import { ChevronRight } from "lucide-react";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Workflow Automation", href: "/functional-website" },
      { label: "Microsoft Business Solutions", href: "/ai-chat-agent" },
      { label: "AI & Customer Operations", href: "/missed-call-text-back" },
      { label: "Custom Business Systems", href: "/local-seo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Process", href: "/our-process" },
      { label: "Industries", href: "/who-we-help" },
      { label: "Why Synticore", href: "/about-us" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  {
    title: "SyntiDesk",
    links: [
      { label: "Interactions", href: "/dashboard" },
      { label: "Appointments", href: "/dashboard" },
      { label: "Work Queue", href: "/dashboard" },
      { label: "Customer Operations", href: "/dashboard" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C1220] px-6 pt-20 md:px-10">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 pb-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/assets/syntidesk-logo.jpg"
            alt="SyntiDesk"
            width={160}
            height={36}
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
            Business systems for practical operational improvement across workflow automation,
            Microsoft technologies, AI, integrations, and custom software.
          </p>
          <a
            href="/book-a-call"
            className="mt-6 inline-flex items-center gap-1 rounded-[14px] bg-[#0B55FF] px-5 py-3 text-[14.5px] font-extrabold text-white hover:bg-[#0a49dd]"
          >
            Start Free Workflow Check <ChevronRight size={16} />
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-[15px] font-bold text-white">{col.title}</div>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[14.5px] text-white/60 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-[13.5px] text-white/50 sm:flex-row">
        <div>&copy; 2026 Synticore. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms-and-conditions" className="hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
