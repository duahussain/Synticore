"use client";

import { useState } from "react";
import { Check, ChevronRight, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const included = [
  "Functional website",
  "Missed call text back",
  "Live AI chat 24/7",
  "Local SEO setup",
  "5-star review funnel",
  "One-click marketing campaigns",
  "Automated lead follow-up",
  "Business phone",
  "All-in-one inbox",
];

const extras = [
  "Human website chat",
  "AI call agent",
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "Social media management",
  "Video animation",
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const price = yearly ? 247 : 297;

  return (
    <div className="pricing-page">
      <Navbar />

      <section className="bg-[#F5F7FB] px-6 pt-[93px] pb-20 md:px-10">
        <div className="mx-auto max-w-[1120px] text-center">
          <h1 className="mt-14 text-[40px] font-extrabold text-[#101832] sm:text-[48px]">
            Our pricing
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[16px] font-medium text-[#5A6172]">
            One simple monthly price. No bronze, silver, or mysterious &ldquo;call for
            enterprise pricing&rdquo; tier.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-[15px] font-extrabold ${!yearly ? "text-[#101832]" : "text-[#8A90A0]"}`}>
              Monthly
            </span>
            <button
              onClick={() => setYearly((v) => !v)}
              className="relative h-7 w-12 rounded-full bg-[#0B55FF] transition-colors"
              role="switch" aria-checked={yearly} aria-label="Toggle yearly pricing"
            >
              <span
                className={`absolute left-0 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  yearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-[15px] font-extrabold ${yearly ? "text-[#101832]" : "text-[#8A90A0]"}`}>
              Yearly
            </span>
          </div>

          <div className="mx-auto mt-10 max-w-[440px] overflow-hidden rounded-[24px] bg-gradient-to-b from-[#151A2F] to-[#1D1440] p-9 text-left">
            <div className="text-center">
              <span className="text-[12.5px] font-extrabold uppercase tracking-wide text-[#7C9CFF]">
                Everything Included
              </span>
              <h2 className="mt-2 text-[26px] font-extrabold text-white">The Oakmont System</h2>
              <p className="mx-auto mt-2 max-w-xs text-[14.5px] leading-relaxed text-white/60">
                Website, lead capture, follow-up, reviews, local SEO, and tracking in one simple
                system.
              </p>
              <div className="mt-6 flex items-end justify-center gap-1">
                <span className="text-[46px] font-extrabold leading-none text-white">
                  ${price}
                </span>
                <span className="pb-1.5 text-[16px] font-bold text-white/50">/mo</span>
              </div>
            </div>

            <ul className="mt-8 divide-y divide-white/10 border-t border-white/10">
              {included.map((item) => (
                <li key={item} className="py-3.5 text-center text-[15px] font-bold text-white">
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/book-a-call"
              className="mt-7 flex items-center justify-center gap-1 rounded-[14px] bg-white py-3.5 text-[15.5px] font-extrabold text-[#0B55FF] hover:bg-white/90"
            >
              Book a Call <ChevronRight size={18} />
            </a>
          </div>

          <div className="mx-auto mt-4 max-w-[440px] rounded-[14px] bg-white px-5 py-3 text-[14px] font-semibold text-[#5A6172] shadow-[0_4px_16px_rgba(16,24,50,0.05)]">
            Already ready to get started?{" "}
            <a href="https://theoakmontdigital.com/billing" className="font-extrabold text-[#101832] underline">
              Make a secure payment &rarr;
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 py-20 text-center md:px-10">
        <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
          Simple On Purpose
        </span>
        <h2 className="mt-3 text-[32px] font-extrabold text-[#101832] sm:text-[42px]">
          What is included&mdash;and what is extra.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-0 overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(16,24,50,0.06)] md:grid-cols-2">
          <div className="p-9 text-left">
            <span className="text-[12.5px] font-extrabold uppercase tracking-wide text-[#8A90A0]">
              Included In The Main Plan
            </span>
            <h3 className="mt-2 text-[24px] font-extrabold text-[#101832]">The Oakmont System</h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check size={16} className="shrink-0 text-[#0B55FF]" strokeWidth={3} />
                  <span className="text-[15px] font-bold text-[#101832]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-black/5 p-9 text-left md:border-t-0 md:border-l">
            <span className="text-[12.5px] font-extrabold uppercase tracking-wide text-[#8A90A0]">
              Available Separately
            </span>
            <h3 className="mt-2 text-[24px] font-extrabold text-[#101832]">Other services</h3>
            <ul className="mt-6 space-y-3.5">
              {extras.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Plus size={16} className="shrink-0 text-[#7C35ED]" strokeWidth={3} />
                  <span className="text-[15px] font-bold text-[#101832]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-6 rounded-[24px] bg-gradient-to-br from-[#151A2F] to-[#1D1440] p-9 text-left md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-[24px] font-extrabold text-white sm:text-[28px]">
              Not sure what you need?
            </h3>
            <p className="mt-2 text-[15px] font-medium text-white/60">
              Book a quick call. We will keep the answer simpler than this pricing page.
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
