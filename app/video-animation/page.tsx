import HeroCardsService from "@/components/HeroCardsService";

export const metadata = {
  title: "Animated Marketing Videos for Contractors | Oakmont",
};

export default function VideoAnimation() {
  return (
    <HeroCardsService
      eyebrow="EXPLAIN IT WITHOUT OVEREXPLAINING IT"
      titleLine1="Animated videos"
      titleLine2="people actually finish."
      intro="Short, clear videos that explain your service before attention wanders off somewhere else."
      items={[
        {
          title: "Make it obvious",
          desc: "Turn a complicated service into something easy to understand.",
        },
        {
          title: "Skip the film crew",
          desc: "Look polished without spending Tuesday pretending to be an actor.",
        },
        {
          title: "Use it everywhere",
          desc: "Website, ads, social posts, emails, and follow-up messages.",
        },
        {
          title: "Keep it short",
          desc: "Enough to make the point. Not enough to become a documentary.",
        },
      ]}
      ctaTitle="Got a service that takes forever to explain?"
      ctaDesc="We can turn it into a short video people understand quickly."
    />
  );
}
