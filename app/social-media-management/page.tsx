import HeroCardsService from "@/components/HeroCardsService";

export const metadata = {
  title: "Social Media Management for Contractors | Oakmont",
};

export default function SocialMediaManagement() {
  return (
    <HeroCardsService
      eyebrow="STAY VISIBLE WITHOUT LIVING ONLINE"
      titleLine1="Social media."
      titleLine2="No influencer career required."
      intro="We turn jobs, reviews, offers, and useful tips into consistent posts that make your business look alive."
      items={[
        {
          title: "Your work, posted",
          desc: "Recent jobs, reviews, useful tips, and the occasional offer.",
        },
        {
          title: "No content panic",
          desc: 'You stop asking, "What are we supposed to post today?"',
        },
        {
          title: "Look active",
          desc: "Fresh pages reassure customers that you are still in business.",
        },
        {
          title: "Build local trust",
          desc: "People see the quality of your work before they call.",
        },
      ]}
      ctaTitle="Ready to stop ghosting your own social pages?"
      ctaDesc="You do the work. We help turn it into content people notice."
    />
  );
}
