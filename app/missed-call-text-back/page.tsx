import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Missed Call Text Back for Contractors | Oakmont",
};

export default function MissedCallTextBack() {
  return (
    <ServiceDetail
      title="Missed Call Text Back"
      stats={[
        { value: "84%", desc: "of customers like getting a text after a missed call." },
        { value: "73%", desc: "more customers reply to texts than voicemails." },
        { value: "68%", desc: "of businesses can win more customers with missed-call text back." },
      ]}
      sectionEyebrow="What is missed call text back?"
      cards={[
        {
          title: "Stand out from your competition",
          desc: "Every contractor misses phone calls, but most do nothing after. A quick text makes your business feel responsive.",
        },
        {
          title: "No more lost leads",
          desc: "If the call goes unanswered, customers often try the next contractor before your voicemail finishes talking.",
        },
        {
          title: "Show customers you care",
          desc: "A simple reply tells people you noticed their call and want to help. That small moment builds trust.",
        },
        {
          title: "Be available 24/7",
          desc: "After hours or busy on a job, the system can still start the conversation for you.",
        },
      ]}
      ctaTitle="Missed a call? Your competitor heard it too."
      ctaDesc="A fast text-back keeps the conversation alive while you are on a roof, under a sink, or simply busy."
    />
  );
}
