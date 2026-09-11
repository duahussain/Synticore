import HeroCardsService from "@/components/HeroCardsService";

export const metadata = {
  title: "Facebook & Instagram Ads for Contractors | Oakmont",
};

export default function MetaAds() {
  return (
    <HeroCardsService
      eyebrow="FACEBOOK + INSTAGRAM ADS"
      titleLine1="Meta Ads that chase leads."
      titleLine2="Not likes."
      intro="Focused local campaigns that put a clear offer in front of people who might actually hire you."
      items={[
        {
          title: "Stay local",
          desc: "Reach the neighborhoods you serve, not somebody three states away.",
        },
        {
          title: "Clear offers",
          desc: 'One useful reason to call. No vague "we are the best" speech.',
        },
        {
          title: "Second chances",
          desc: "Remind past visitors before they forget your name.",
        },
        {
          title: "Track real leads",
          desc: "Measure calls and inquiries—not just thumbs-up icons.",
        },
      ]}
      ctaTitle="Want ads that do more than collect likes?"
      ctaDesc="We will show you what a sensible local campaign could look like."
    />
  );
}
