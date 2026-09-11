import HeroCardsService from "@/components/HeroCardsService";

export const metadata = {
  title: "24/7 Human Website Chat for Contractors | Oakmont",
};

export default function RealUserChat() {
  return (
    <HeroCardsService
      eyebrow="REAL PEOPLE. REAL REPLIES."
      titleLine1="Human chat."
      titleLine2="No bot maze."
      intro="A real person talks to website visitors, gets the useful details, and keeps good leads from wandering off."
      items={[
        {
          title: "A person answers",
          desc: 'No "press 4 to feel confused." Just a useful conversation.',
        },
        {
          title: "Gets the basics",
          desc: "Name, phone, location, and what needs fixing.",
        },
        {
          title: "Covers busy hours",
          desc: "Helpful when you are driving, working, or finally eating lunch.",
        },
        {
          title: "Clean handoff",
          desc: "Your team gets the details and follows up with context.",
        },
      ]}
      ctaTitle="Stop giving good visitors the silent treatment."
      ctaDesc="Let us see if human chat makes sense for your website."
    />
  );
}
