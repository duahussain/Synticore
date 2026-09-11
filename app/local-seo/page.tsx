import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Local SEO for Contractors | Oakmont Digital",
};

export default function LocalSeo() {
  return (
    <ServiceDetail
      title="Local SEO"
      stats={[
        { value: "94%", desc: "of people use Google to find local businesses." },
        { value: "96%", desc: "of people learn about a local company online before they choose." },
        { value: "47%", desc: "of searches have local buying intent." },
      ]}
      sectionEyebrow="What is local SEO?"
      cards={[
        {
          title: "Get found by nearby customers",
          desc: "When people search for your service in your area, your website should give Google clear signals.",
        },
        {
          title: "Service area clarity",
          desc: "Your site should explain what you do and where you do it. Google is smart. It is not psychic.",
        },
        {
          title: "Trust matters",
          desc: "Reviews, photos, and clear pages help customers feel better before they call.",
        },
        {
          title: "SEO takes time",
          desc: "No fake promises. We build the foundation and keep it practical.",
        },
      ]}
      ctaTitle={"Tired of being Google’s best-kept secret?"}
      ctaDesc="Let us build the local signals that help nearby customers find you before they find the other guy."
    />
  );
}
