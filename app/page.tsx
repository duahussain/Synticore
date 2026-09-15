import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemsIntro from "@/components/SystemsIntro";
import ScrollFrameAnimation from "@/components/ScrollFrameAnimation";
import FeatureTextBlock from "@/components/FeatureTextBlock";
import TradesBand from "@/components/TradesBand";
import ProcessSteps from "@/components/ProcessSteps";
import WhyChoose from "@/components/WhyChoose";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="oak-layout">
      <Navbar />
      <Hero />
      <SystemsIntro />

      <section className="mx-auto max-w-[1280px] px-6 py-12 md:px-10 md:py-14">
        <ScrollFrameAnimation
          frameSources={[
            "/assets/syntidesk/interactions-review.jpg",
            "/assets/syntidesk/appointments.jpg",
            "/assets/syntidesk/work-queue.jpg",
            "/assets/syntidesk/overview-poster.jpg",
          ]}
        >
          <FeatureTextBlock
            heading="AI Receptionist"
            description="AuriBoost answers phone calls and website chats 24/7 in your business's own voice and knowledge."
            items={[
              {
                title: "Natural conversations",
                desc: "Give callers helpful answers instead of an IVR menu or voicemail.",
              },
              {
                title: "Website chat",
                desc: "Turn every chat into a qualified lead, an answer, or a booked appointment.",
              },
              {
                title: "Missed-call text back",
                desc: "Reply within seconds when a caller cannot reach your team.",
              },
              {
                title: "Human escalation",
                desc: "Transfer to a person or take a message whenever Synti needs help.",
              },
            ]}
          />

          <FeatureTextBlock
            heading="Smart Booking"
            description="Book real appointments while the conversation is happening, with live calendar availability."
            items={[
              {
                title: "Live availability",
                desc: "Check your calendar and confirm the right time immediately.",
              },
              {
                title: "Timezone-aware",
                desc: "Show every visitor a time in their own timezone and store it correctly.",
              },
              {
                title: "Automatic reminders",
                desc: "Keep customers informed before their appointment.",
              },
              {
                title: "Calendar sync",
                desc: "Keep Google Calendar and Outlook Calendar in sync.",
              },
            ]}
          />

          <FeatureTextBlock
            heading="Leads & Follow-up"
            description="Every call, chat, form, and appointment becomes an organized record your team can act on."
            items={[
              {
                title: "AuriBoost Desk",
                desc: "One view for every lead, call, chat, appointment, and follow-up.",
              },
              {
                title: "Lead scoring",
                desc: "Capture what each customer needs and prioritize the right next step.",
              },
              {
                title: "Unified interactions",
                desc: "Review recordings, transcripts, summaries, and conversations in one timeline.",
              },
              {
                title: "Work queue",
                desc: "Turn conversations into assigned follow-up tasks that do not get missed.",
              },
            ]}
          />

          <FeatureTextBlock
            heading="Custom Business Systems"
            description="Build around the process when existing software no longer fits the way work needs to happen."
            items={[
              {
                title: "Purpose-built applications",
                desc: "Create internal applications, portals, workflow systems, dashboards, and specialized business software.",
              },
              {
                title: "One operating experience",
                desc: "Replace spreadsheets, email, and workarounds with a system that fits the process.",
              },
              {
                title: "Operational visibility",
                desc: "Give teams clear status, ownership, history, and next-step visibility.",
              },
            ]}
          />

          <FeatureTextBlock
            heading="Integrations"
            description="Connect the systems your business already depends on so information moves without manual coordination."
            items={[
              {
                title: "Connected business systems",
                desc: "Bring Microsoft 365, CRM, accounting, project, ecommerce, communication, and custom systems together.",
              },
              {
                title: "Less copying, more clarity",
                desc: "Keep records aligned and make status changes visible without repeated exports or re-entry.",
              },
            ]}
          />

          <FeatureTextBlock
            heading="Human Expert Implementation"
            description="Real delivery and support from AI engineers, Microsoft 365 experts, developers, designers, and automation specialists."
            items={[
              {
                title: "Review",
                desc: "Understand users, workflow, systems, data, ownership, bottlenecks, and exceptions.",
              },
              {
                title: "Build / Connect",
                desc: "Implement the right combination of automation, Microsoft tools, integrations, AI, or custom systems.",
              },
              {
                title: "Support",
                desc: "Test, document, train, monitor, and improve the system over time.",
              },
            ]}
          />
        </ScrollFrameAnimation>
      </section>

      <TradesBand />
      <ProcessSteps />
      <WhyChoose />
      <Partners />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
