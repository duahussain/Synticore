import BookingForm from "@/components/BookingForm";
import { MediaPlayer } from "@/components/Interactions";
import Image from "next/image";
import { MessageSquareText } from "lucide-react";

export const metadata = {
  title: "Contractor Marketing System | Book a Call | Oakmont",
};

export default function BookACall() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F3EEFE] via-[#F1F4FF] to-white px-6 py-14 md:px-10">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="flex justify-center">
          <Image
            src="/assets/syntidesk-logo.jpg"
            alt="The Oakmont Digital"
            width={230}
            height={47}
            className="h-[36px] w-auto"
          />
        </div>

        <span className="mt-8 inline-block rounded-full border border-[#D9DEEA] bg-white px-4 py-2 text-[13px] font-extrabold tracking-wide text-[#0B55FF]">
          BUILT FOR CONTRACTORS
        </span>

        <h1 className="mt-6 text-[38px] font-extrabold leading-[1.15] text-[#101832] sm:text-[48px]">
          More Leads.
          <br />
          Faster Replies.
          <br />
          <span className="italic text-[#7C35ED]">More Jobs.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-relaxed text-[#5A6172]">
          A FREE smart website and follow-up system built to help contractors
          get more leads, make more money, while we handle everything else.
        </p>

        <p className="mt-6 text-[16px] font-bold text-[#101832]">
          <span className="mr-2 rounded-full bg-[#F2E8FE] px-3 py-1 text-[12px] font-extrabold text-[#7C35ED]">
            BRAND NEW
          </span>
          <span className="text-[#0B55FF]">FREE Smart Website</span> + Full
          System for{" "}
          <span className="italic text-[#0B55FF]">$297/month</span>
        </p>

        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3">
          <div className="rounded-[12px] border border-[#D9DEEA] bg-white px-5 py-3 text-left text-[14px] font-semibold text-[#101832]">
            <span className="text-[#0B55FF]">Step 1:</span> Watch this short
            video and <span className="font-extrabold">turn your volume up.</span>
          </div>
          <div className="rounded-[12px] border border-[#D9DEEA] bg-white px-5 py-3 text-left text-[14px] font-semibold text-[#101832]">
            <span className="text-[#0B55FF]">Step 2:</span> Click{" "}
            <span className="font-extrabold">Book Free Demo Call</span> below
            to get started.
          </div>
        </div>

        <MediaPlayer src="https://theoakmontdigital.com/assets/video/oakmont-short-vsl.mp4" title="Two-minute Oakmont overview" />

        <BookingForm />
        <p className="mt-3 text-[13px] font-semibold text-[#8A90A2]">
          Takes 20 seconds.
        </p>
      </div>

      <section className="mx-auto mt-24 max-w-[1120px] text-center">
        <span className="text-[13px] font-extrabold tracking-wide text-[#0B55FF]">
          CLIENT RESULTS
        </span>
        <h2 className="mt-3 text-[34px] font-extrabold text-[#101832] sm:text-[40px]">
          Real Results. Real Conversations.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] font-medium text-[#5A6172]">
          See genuine feedback and results shared by businesses using
          Oakmont.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            "Website looks great and we've had more people reaching out.",
            "The AI followed up right away and got all the info from him too.",
            "The review campaign has been going out to your past customers.",
          ].map((line) => (
            <div
              key={line}
              className="rounded-[24px] border-4 border-[#7C35ED]/70 bg-[#F5F5F5] p-5 text-left shadow-[0_10px_30px_rgba(16,24,50,0.08)]"
            >
              <div className="flex items-center gap-2 border-b border-black/10 pb-3">
                <MessageSquareText size={18} className="text-[#5A6172]" />
                <span className="text-[13px] font-bold text-[#101832]">
                  Client
                </span>
              </div>
              <div className="mt-4 rounded-2xl rounded-tr-sm bg-[#0B55FF] px-4 py-3 text-[13px] font-medium text-white">
                {line}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="book"
        className="mx-auto mt-24 max-w-[900px] rounded-[24px] bg-gradient-to-br from-[#151A2F] to-[#1D1440] p-10 text-center md:p-16"
      >
        <h2 className="text-[28px] font-extrabold text-white sm:text-[34px]">
          Ready to see it for yourself?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] font-medium text-white/60">
          Book a free demo call and we will walk you through the whole
          system.
        </p>
        <BookingForm />
      </section>
    </main>
  );
}
