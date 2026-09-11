import HeroCardsService from "@/components/HeroCardsService";

export const metadata = {
  title: "AI Call Agent for Contractors | Oakmont Digital",
};

export default function AiCallAgent() {
  return (
    <HeroCardsService
      eyebrow="YOUR BACKUP ON THE PHONE"
      titleLine1="Calls answered."
      titleLine2="Even when your hands are full."
      intro="An AI call assistant handles the basics, collects details, and keeps leads moving when you cannot pick up."
      items={[
        {
          title: "Picks up",
          desc: "Because ladders, power tools, and ringing phones rarely cooperate.",
        },
        {
          title: "Gets the details",
          desc: "Service, location, contact info, urgency, and timing.",
        },
        {
          title: "Works late",
          desc: "Nights, weekends, and the hours your office definitely does not love.",
        },
        {
          title: "Hands it over",
          desc: "Your team gets a useful summary instead of a mystery callback.",
        },
      ]}
      ctaTitle="Missing calls because you are doing the actual work?"
      ctaDesc="Let us show you how an AI call agent can cover the gaps."
    />
  );
}
