import HeroCardsService from "@/components/HeroCardsService";

export const metadata = {
  title: "Google Ads for Contractors | Oakmont Digital",
};

export default function GoogleAds() {
  return (
    <HeroCardsService
      eyebrow="HIGH-INTENT SEARCH ADS"
      titleLine1="Show up when somebody"
      titleLine2="needs the job done."
      intro="Google Ads puts your business in front of local people already searching for the service you provide."
      items={[
        {
          title: "Ready buyers",
          desc: "Meet people searching now—not casually scrolling at midnight.",
        },
        {
          title: "Better jobs",
          desc: "Focus spend on the services and areas you actually want.",
        },
        {
          title: "Less junk",
          desc: "Cut irrelevant searches before they eat the budget.",
        },
        {
          title: "Know what rang",
          desc: "Track which ads turn into calls, forms, and booked work.",
        },
      ]}
      ctaTitle="Want customers who are already looking?"
      ctaDesc="Let us map out the searches worth paying for—and the ones to avoid."
    />
  );
}
