import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Review Management for Contractors | Oakmont",
};

export default function ReviewFunnel() {
  return (
    <ServiceDetail
      title="5-Star Review Funnel"
      stats={[
        { value: "96%", desc: "of people read reviews before choosing a business." },
        { value: "73%", desc: "of people use Google reviews to find a business." },
        { value: "2.8x", desc: "more people choose a service business when it has strong reviews." },
      ]}
      sectionEyebrow="What is a review funnel?"
      cards={[
        {
          title: "Ask happy customers",
          desc: "The best time to ask is when the customer is happy with the job. We make that easier.",
        },
        {
          title: "Gentle reminders",
          desc: 'People forget—even the ones who said, "Absolutely, I will do it tonight." A simple follow-up helps.',
        },
        {
          title: "Build trust online",
          desc: "More good reviews help new customers feel safer choosing you.",
        },
        {
          title: "Keep it easy",
          desc: "The easier the review process is, the more likely customers are to finish it.",
        },
      ]}
      ctaTitle="Happy customers rarely review you by telepathy."
      ctaDesc="We make asking easy, following up polite, and leaving a review almost impossible to overthink."
    />
  );
}
