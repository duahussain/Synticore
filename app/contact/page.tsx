import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Oakmont Digital | Book a Strategy Call",
};

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page relative overflow-hidden bg-gradient-to-b from-[#EEF1FF] to-white pt-[93px] pb-24">
        <div className="mx-auto max-w-[1120px] px-6 pt-16 md:px-10">
          <span className="inline-block rounded-full border border-[#0B55FF]/20 bg-white px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
            Contact Oakmont
          </span>
          <h1 className="mt-5 text-[40px] font-extrabold leading-[1.08] text-[#101832] sm:text-[48px] lg:text-[56px]">
            Let us talk about
            <br />
            <em className="not-italic italic text-[#7C35ED]">more booked work.</em>
          </h1>
          <p className="mt-5 max-w-lg text-[17px] font-medium leading-relaxed text-[#5A6172]">
            Call, text, email, or grab a quick call. Nice and simple.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-white p-8 shadow-[0_20px_50px_rgba(16,24,50,0.08)]">
              <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
                Direct Line
              </span>
              <h2 className="mt-3 text-[28px] font-extrabold text-[#101832]">
                Call, text, or email.
              </h2>
              <div className="mt-10 divide-y divide-black/5 border-t border-black/5">
                <div className="py-4">
                  <div className="text-[12.5px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
                    Phone
                  </div>
                  <a
                    href="tel:+18888100013"
                    className="mt-1 block text-[17px] font-extrabold text-[#101832]"
                  >
                    (888) 810-0013
                  </a>
                </div>
                <div className="py-4">
                  <div className="text-[12.5px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
                    Email
                  </div>
                  <a
                    href="mailto:rayyan@theoakmontdigital.com"
                    className="mt-1 block text-[17px] font-extrabold text-[#101832]"
                  >
                    rayyan@theoakmontdigital.com
                  </a>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B55FF] to-[#7C35ED] p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/15 text-white">
                  <ArrowUpRight size={20} />
                </span>
                <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-[12.5px] font-extrabold text-white">
                  20 MIN
                </span>
              </div>
              <span className="mt-8 block text-[12.5px] font-extrabold uppercase tracking-wide text-white/70">
                Best Place To Start
              </span>
              <h2 className="mt-2 text-[32px] font-extrabold text-white">Book a Call</h2>
              <p className="mt-3 max-w-xs text-[15px] font-medium leading-relaxed text-white/80">
                Show us what is going on. We will tell you what we would fix first. No awkward
                pitch deck.
              </p>
              <a
                href="/book-a-call"
                className="mt-6 inline-flex items-center gap-2 rounded-[14px] bg-white px-5 py-3 text-[15px] font-extrabold text-[#101832] hover:bg-white/90"
              >
                Book a Call <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
