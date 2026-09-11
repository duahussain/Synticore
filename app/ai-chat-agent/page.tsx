import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "24/7 AI Website Chat for Contractors | Oakmont",
};

export default function AiChatAgent() {
  return (
    <ServiceDetail
      title="Live AI Chat 24/7"
      stats={[
        { value: "64%", desc: "of website visitors expect quick answers before they call." },
        { value: "52%", desc: "of visitors leave when they cannot get a simple answer fast." },
        { value: "4x", desc: "faster lead capture when chat asks the right questions right away." },
      ]}
      sectionEyebrow="What is AI chat for contractors?"
      cards={[
        {
          title: "Answer questions instantly",
          desc: "People ask about service areas, timing, pricing, and next steps. The chat helps them quickly.",
        },
        {
          title: "Capture lead details",
          desc: "Name, phone, location, service needed, and timeline can be collected before your team steps in.",
        },
        {
          title: "Help after hours",
          desc: "Your site can still help at night, on weekends, and when somebody suddenly remembers the leak at 11:47 p.m.",
        },
        {
          title: "Keep it simple",
          desc: "The chat is there to help start conversations, not make your business feel complicated.",
        },
      ]}
      ctaTitle="Visitors have questions at 11:47 p.m. Of course they do."
      ctaDesc="See how AI chat can answer the basics, collect the useful details, and let your team sleep."
    />
  );
}
