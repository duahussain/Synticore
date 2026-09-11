import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Business Phone System for Contractors | Oakmont",
};

export default function BusinessPhone() {
  return (
    <ServiceDetail
      title="Business Phone"
      intro="All calls to your new business number are forwarded to your personal phone. You keep ownership of the number and use it professionally for calls, tracking, missed call text back, lead follow-ups, and other automations."
      stats={[
        { value: "79%", desc: "more calls can turn into jobs when contractors use a business phone." },
        { value: "72%", desc: "of customers are more likely to trust a contractor with a business number." },
        { value: "59%", desc: "of contractors handle appointments better with a dedicated business phone." },
      ]}
      sectionEyebrow="What is the Oakmont Business Phone?"
      cards={[
        {
          title: "Calls reach your phone",
          desc: "Customers call your professional business number and the call is forwarded directly to the phone you already carry. One phone is enough.",
        },
        {
          title: "You own the number",
          desc: "Your business number stays under your ownership and continues representing your company. No awkward number changes later.",
        },
        {
          title: "Track business calls",
          desc: "See where calls came from and keep business communication separate from your personal number. No more guessing which call was for work.",
        },
        {
          title: "Connect automations",
          desc: "Use the number for missed call text back, lead follow-ups, and reminders. The system remembers, so you do not have to.",
        },
      ]}
      ctaTitle="One business number. The phone you already carry."
      ctaDesc="Answer calls normally while Oakmont handles tracking and connected follow-up behind the scenes. No second phone needed."
    />
  );
}
