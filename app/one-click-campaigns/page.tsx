import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "SMS Marketing Campaigns for Contractors | Oakmont",
};

export default function OneClickCampaigns() {
  return (
    <ServiceDetail
      title="One-Click Marketing Campaigns"
      stats={[
        { value: "97%", desc: "of text messages are read within a few minutes." },
        { value: "31%", desc: "of SMS marketing campaigns can create quick sales." },
        { value: "63%", desc: "of consumers are likely to engage with SMS promotions." },
      ]}
      sectionEyebrow="What are one-click campaigns?"
      cards={[
        {
          title: "Done-for-you basics",
          desc: "Start with a useful campaign instead of a blank screen, a blinking cursor, and absolutely no inspiration.",
        },
        {
          title: "Referral campaigns",
          desc: "Happy customers often know someone who needs your service. Remind them.",
        },
        {
          title: "Return customer campaigns",
          desc: "Past customers may need maintenance, upgrades, or another project later.",
        },
        {
          title: "Simple marketing",
          desc: "Click, send, follow up. No giant marketing department needed.",
        },
      ]}
      ctaTitle="Marketing should not need your whole Saturday."
      ctaDesc="Use ready-to-send campaigns for referrals, repeat work, and follow-up without becoming a full-time copywriter."
    />
  );
}
