import HeroCardsService from "@/components/HeroCardsService";

export const metadata = {
  title: "TikTok Ads for Contractors | Oakmont Digital",
};

export default function TikTokAds() {
  return (
    <HeroCardsService
      eyebrow="SHORT VIDEOS. LOCAL REACH."
      titleLine1="TikTok Ads."
      titleLine2="No dancing required."
      intro="Short, direct videos that get attention locally and give interested people an obvious next step."
      items={[
        {
          title: "Get there quickly",
          desc: "Lead with the problem, the result, and why somebody should care.",
        },
        {
          title: "Keep it local",
          desc: "Put your service in front of people around your actual territory.",
        },
        {
          title: "Easy next step",
          desc: "Call, message, or request a quote. No scavenger hunt.",
        },
        {
          title: "Build recognition",
          desc: "Become familiar before the customer suddenly needs you.",
        },
      ]}
      ctaTitle="Curious about TikTok—but not the dancing part?"
      ctaDesc="We will show you whether short-form ads make sense for your market."
    />
  );
}
