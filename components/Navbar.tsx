"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Layout,
  MessageSquare,
  Star,
  RefreshCcw,
  Inbox,
  PhoneMissed,
  Search,
  Repeat,
  Smartphone,
  MessageCircle,
  Share2,
  ThumbsUp,
  Megaphone,
  Music2,
  PhoneCall,
  Video,
  Users,
  TrendingUp,
  Mail,
  Menu,
  X,
} from "lucide-react";

const solutionsColumns = [
  {
    title: "Solution Areas",
    items: [
      { icon: Layout, title: "Workflow Automation", desc: "Keep routine work moving", href: "/functional-website" },
      { icon: MessageSquare, title: "Microsoft Business Solutions", desc: "Make Microsoft tools work together", href: "/ai-chat-agent" },
      { icon: Star, title: "AI & Customer Operations", desc: "SyntiDesk lives here", href: "/review-funnel" },
      { icon: RefreshCcw, title: "Custom Business Systems", desc: "Build around the process", href: "/automated-follow-up" },
      { icon: Inbox, title: "Integrations", desc: "Connect the systems you use", href: "/all-in-one-inbox" },
    ],
  },
  {
    title: "Services",
    items: [
      { icon: PhoneMissed, title: "AI Receptionist & Voice Agents", desc: "Calls, appointments, and routing", href: "/missed-call-text-back" },
      { icon: Search, title: "CRM & Sales Automation", desc: "Follow-up and handoffs", href: "/local-seo" },
      { icon: Repeat, title: "Microsoft 365 Workflows", desc: "SharePoint and Power Platform", href: "/one-click-campaigns" },
      { icon: Smartphone, title: "Customer Support Automation", desc: "FAQs, routing, and handoffs", href: "/business-phone" },
    ],
  },
  {
    title: "Company",
    items: [
      { icon: MessageCircle, title: "About Synticore", desc: "Business systems company", href: "/about-us" },
      { icon: Share2, title: "Our Approach", desc: "Process before technology", href: "/our-process" },
      { icon: ThumbsUp, title: "Industries Served", desc: "Where operational friction lives", href: "/who-we-help" },
      { icon: Megaphone, title: "Workflow Efficiency Check", desc: "Start with the business problem", href: "/book-a-call" },
    ],
  },
];

const aboutItems = [
  { icon: Users, title: "About Us", desc: "Get to know Oakmont", href: "/about-us" },
  { icon: TrendingUp, title: "Our Process", desc: "Discover how we work", href: "/our-process" },
  { icon: Mail, title: "Contact", desc: "Chat with us", href: "/contact" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"solutions" | "about" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeReady, setThemeReady] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => { if (!navRef.current?.contains(event.target as Node)) { setOpenMenu(null); setMobileOpen(false); } };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("oakmont-theme");
    const initialTheme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : document.documentElement.dataset.theme === "dark"
        ? "dark"
        : "light";
    setTheme(initialTheme);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("oakmont-theme", theme);
  }, [theme, themeReady]);

  return (
    <div className="oak-nav sticky top-4 z-50 mx-auto w-[94%] max-w-[1400px]">
      <nav ref={navRef} onKeyDown={e => { if(e.key === "Escape") {setOpenMenu(null); setMobileOpen(false);} }}
        className="relative flex h-[64px] items-center justify-between gap-3 rounded-[18px] border border-black/5 bg-white/90 pl-4 pr-3 shadow-[0_8px_30px_rgba(16,24,50,0.08)] backdrop-blur sm:h-[76px] sm:gap-4 sm:rounded-[22px] sm:pl-[30px] sm:pr-6"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <Link href="/" aria-label="Synticore home" className="flex items-center gap-2 shrink-0">
          <Image
            src="/assets/syntidesk-logo.jpg"
            alt="SyntiDesk"
            width={230}
            height={47}
            className="h-[30px] w-auto sm:h-[40px] lg:h-[47px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <button
            className="flex items-center gap-1 text-[15.5px] font-semibold text-[#5A6172] hover:text-[#101832]"
            aria-expanded={openMenu === "solutions"} onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}
          >
            Solutions <ChevronDown size={16} />
          </button>
          <a href="/who-we-help" className="text-[15.5px] font-semibold text-[#5A6172] hover:text-[#101832]">
            Industries
          </a>
          <a href="/pricing" className="text-[15.5px] font-semibold text-[#5A6172] hover:text-[#101832]">
            SyntiDesk
          </a>
          <button
            className="flex items-center gap-1 text-[15.5px] font-semibold text-[#5A6172] hover:text-[#101832]"
            aria-expanded={openMenu === "about"} onClick={() => setOpenMenu(openMenu === "about" ? null : "about")}
          >
            About <ChevronDown size={16} />
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="theme-toggle" role="tablist" aria-label="Color theme">
            <button type="button" role="tab" aria-selected={theme === "light"} className={theme === "light" ? "active" : ""} onClick={() => setTheme("light")}>Light</button>
            <button type="button" role="tab" aria-selected={theme === "dark"} className={theme === "dark" ? "active" : ""} onClick={() => setTheme("dark")}>Dark</button>
          </div>
          <a
            href="tel:+18888100013"
            className="hidden text-[15.5px] font-semibold text-[#0B55FF] md:block"
          >
            Talk to Synticore
          </a>
          <a
            href="/book-a-call"
            className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-[14px] bg-[#0B55FF] px-4 py-2.5 text-[14px] font-extrabold text-white shadow-[0_10px_20px_rgba(11,85,255,0.25)] hover:bg-[#0a49dd] sm:px-5 sm:text-[15px]"
          >
            Workflow Check <ChevronRight size={16} />
          </a>
          <a href="/dashboard" className="hidden text-[15.5px] font-semibold text-[#5A6172] sm:block">
            Login
          </a>
          <button
            aria-label="Toggle menu" aria-expanded={mobileOpen}
            className="shrink-0 text-[#101832] lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {openMenu === "solutions" && (
          <div
            className="absolute left-0 top-[calc(100%+2px)] grid w-[min(920px,90vw)] grid-cols-1 gap-6 rounded-2xl border border-black/5 bg-white p-7 shadow-2xl md:grid-cols-3"
          >
            {solutionsColumns.map((col, ci) => (
              <div key={ci} className={ci === 1 ? "md:border-l md:border-r md:px-6 border-black/5" : ""}>
                {col.title && (
                  <div className="mb-3 flex items-center gap-1 text-[15px] font-bold text-[#101832]">
                    {col.title} <ChevronRight size={14} className="text-[#0B55FF]" />
                  </div>
                )}
                <ul className="space-y-3">
                  {col.items.map((item, ii) => (
                    <li key={ii}>
                      <a href={item.href} className="flex items-start gap-3">
                        <span className="mt-0.5 text-[#101832]">
                          <item.icon size={18} strokeWidth={1.75} />
                        </span>
                        <div>
                          <div className="text-[14.5px] font-bold leading-tight text-[#101832]">
                            {item.title}
                          </div>
                          {item.desc && (
                            <div className="text-[13px] text-[#8A90A0]">{item.desc}</div>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {openMenu === "about" && (
          <div
            className="absolute left-1/2 top-[calc(100%+2px)] w-[300px] -translate-x-[10%] rounded-2xl border border-black/5 bg-white p-3 shadow-2xl"
          >
            {aboutItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-start gap-3 rounded-xl p-3 hover:bg-[#F5F7FB]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F1F3F8] text-[#101832]">
                  <item.icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-[14.5px] font-bold text-[#101832]">{item.title}</div>
                  <div className="text-[13px] text-[#8A90A0]">{item.desc}</div>
                </div>
              </a>
            ))}
          </div>
        )}

        {mobileOpen && (
          <div className="absolute left-0 top-[calc(100%+10px)] w-full rounded-2xl border border-black/5 bg-white p-4 shadow-2xl lg:hidden">
            <div className="flex flex-col gap-1">
              <details className="mobile-solutions"><summary>All solutions</summary>{solutionsColumns.flatMap(c=>c.items).map(item=><a key={item.href} href={item.href}>{item.title}</a>)}</details>
              <a href="/functional-website" className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-[#101832] hover:bg-[#F5F7FB]">
                Solutions
              </a>
              <a href="/who-we-help" className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-[#101832] hover:bg-[#F5F7FB]">
                Industries
              </a>
              <a href="/pricing" className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-[#101832] hover:bg-[#F5F7FB]">
                SyntiDesk
              </a>
              <a href="/about-us" className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-[#101832] hover:bg-[#F5F7FB]">
                About
              </a>
              <div className="mt-2 border-t border-black/5 pt-3">
                <a href="tel:+18888100013" className="block px-3 py-2 text-[15px] font-semibold text-[#0B55FF]">
                  Talk to Synticore
                </a>
                <a href="/dashboard" className="block px-3 py-2 text-[15px] font-semibold text-[#5A6172]">
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
