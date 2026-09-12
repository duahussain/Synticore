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
            heading="Workflow Automation"
            description="Reduce repetitive work and keep routine processes moving across intake, approvals, routing, notifications, and follow-up."
            items={[
              {
                title: "Simplify routine work",
                desc: "Remove unnecessary steps and clarify what should happen next.",
              },
              {
                title: "Keep work moving",
                desc: "Automate intake, approvals, notifications, follow-up, and status changes.",
              },
              {
                title: "Reduce manual coordination",
                desc: "Replace repeated entry, status checking, reminders, and routing handled by hand.",
              },
              {
                title: "Build around the real process",
                desc: "Use automation where it helps and keep people involved where judgment matters.",
              },
            ]}
          />

          <FeatureTextBlock
            heading="Microsoft Business Solutions"
            description="Make the Microsoft tools your business already owns work together better."
            items={[
              {
                title: "SharePoint and Microsoft 365",
                desc: "Modernize document management, permissions, internal processes, and legacy workflows.",
              },
              {
                title: "Power Automate and Power Apps",
                desc: "Add practical structure to workflows and internal operating experiences.",
              },
              {
                title: "Teams, forms, lists, and documents",
                desc: "Connect the tools that otherwise operate separately.",
              },
              {
                title: "Modernize with purpose",
                desc: "Improve what already works instead of replacing systems unnecessarily.",
              },
            ]}
          />

          <FeatureTextBlock
            heading="AI & Customer Operations"
            description="Use AI for routine customer work while keeping people involved where judgment matters."
            items={[
              {
                title: "SyntiDesk",
                desc: "A self-contained AI front desk for calls, leads, appointments, and follow-up.",
              },
              {
                title: "Customer intake and routing",
                desc: "Qualify requests, capture details, and move work to the right person.",
              },
              {
                title: "Scheduling and follow-up",
                desc: "Reduce manual back-and-forth while keeping customer communication moving.",
              },
              {
                title: "Human escalation",
                desc: "Keep people involved for exceptions and decisions that need judgment.",
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
