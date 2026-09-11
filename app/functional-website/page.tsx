import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Contractor Websites Built to Convert | Oakmont Digital",
};

export default function FunctionalWebsite() {
  return (
    <ServiceDetail
      title="Functional Website"
      stats={[
        { value: "76%", desc: "of people judge a company by how professional its website looks." },
        { value: "77%", desc: "of small business owners say their website helped them grow." },
        { value: "68%", desc: "of users trust a site more when it feels smooth and easy to use." },
      ]}
      sectionEyebrow="What is a functional website?"
      cards={[
        {
          title: "Actually show up online",
          desc: "If someone searches your business and cannot find you, that is a problem. Your site should make you easy to find and easy to trust.",
        },
        {
          title: "Built for phone users",
          desc: "Most customers check you from their phone. They should not need two fingers, three zooms, and a prayer to request a quote.",
        },
        {
          title: "Show your best work",
          desc: "Reviews, service areas, photos, and clear offers help people feel comfortable before they contact you.",
        },
        {
          title: "Turn visits into conversations",
          desc: "The goal is not just traffic. The goal is quote requests, calls, texts, and booked jobs.",
        },
      ]}
      ctaTitle="Is your website mostly standing around?"
      ctaDesc="Let us show you how to turn it into the employee that answers questions, collects leads, and never asks for lunch."
    />
  );
}
