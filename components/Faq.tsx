"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "When will I start seeing results?",
    a: "Some things, like missed-call texts and lead forms, can help right away. SEO and ads usually need more time, but we build the system so you can start tracking real leads from day one.",
  },
  {
    q: "Why is your pricing so cheap?",
    a: "We keep our overhead low and focus on the tools that actually move the needle for contractors, so you are not paying for a bloated agency retainer.",
  },
  {
    q: "What happens if I want to cancel?",
    a: "There are no long contracts. If the system is not the right fit, you can cancel without getting locked into a huge agreement.",
  },
  {
    q: "Can people find my website on Google?",
    a: "Yes. Every site is built with local SEO basics in place, and we help you build on that over time so you show up for the searches that matter.",
  },
  {
    q: "Why do I need this if word of mouth already works?",
    a: "Word of mouth is great, but it does not scale on its own. This system helps you capture, follow up with, and convert the leads that word of mouth is not reaching.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="oak-layout-faq mx-auto max-w-[820px] px-6 py-20 md:px-10">
      <h2 className="text-center text-[32px] font-extrabold leading-[1.08] text-[#101832] sm:text-[40px] lg:text-[45.84px]">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 space-y-4">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-2xl">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                className={`flex w-full items-center justify-between px-[18px] py-[17px] text-left text-[17px] font-extrabold sm:text-[19px] lg:text-[21px] ${
                  isOpen
                    ? "bg-gradient-to-r from-[#0B55FF] to-[#7C35ED] text-white"
                    : "bg-[#F5F7FB] text-[#101832]"
                }`}
              >
                {f.q}
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div id={`faq-answer-${i}`} className="bg-white px-6 py-5 text-[15px] leading-relaxed text-[#5A6172]">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
