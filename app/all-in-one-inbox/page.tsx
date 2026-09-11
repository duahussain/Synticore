import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Mobile App & Inbox for Contractors | Oakmont",
};

export default function AllInOneInbox() {
  return (
    <ServiceDetail
      title="Mobile App & Inbox"
      stats={[
        { value: "71%", desc: "of contractors respond faster when every message is in one inbox." },
        { value: "60%", desc: "of contractors feel less overwhelmed when messages stay in one place." },
        { value: "84%", desc: "of contractors feel more organized with one simple inbox." },
      ]}
      sectionEyebrow="What is the Mobile App & Inbox?"
      cards={[
        {
          title: "Run it from your phone",
          desc: "See business calls, texts, leads, and conversations while you are out on a job. Leads do not wait for you to get back to the office.",
        },
        {
          title: "Keep every lead together",
          desc: "Website forms, chats, calls, texts, and follow-ups stay connected in one place. No more searching through different apps.",
        },
        {
          title: "Reply without switching tools",
          desc: "Continue conversations from one inbox so customers get a faster response. One inbox. Fewer apps. Less confusion.",
        },
        {
          title: "Know what happens next",
          desc: "See who replied, where each lead came from, and which conversation still needs attention. Nothing gets forgotten after a busy day.",
        },
      ]}
      ctaTitle="Your whole business inbox now fits in your pocket."
      ctaDesc="Use the Oakmont mobile app to keep calls, texts, leads, and follow-ups together from the office, the truck, or the jobsite. No desk, no problem."
    />
  );
}
