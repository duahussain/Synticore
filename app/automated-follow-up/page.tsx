import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Automated Lead Follow-Up for Contractors | Oakmont",
};

export default function AutomatedFollowUp() {
  return (
    <ServiceDetail
      title="Automated Follow Up"
      demoLabel="Missed Call Follow Up"
      stats={[
        { value: "71%", desc: "of people reply within 24 hours to SMS follow-ups." },
        { value: "73%", desc: "of contractors can boost sales with automated follow-ups." },
        { value: "96%", desc: "of people read SMS messages within 24 hours." },
      ]}
      sectionEyebrow="What is automated follow-up?"
      cards={[
        {
          title: "Reply while interest is high",
          desc: "The longer a lead waits, the easier it is for them to call someone else.",
        },
        {
          title: "Keep people moving",
          desc: "Follow-up can remind customers what to send, what happens next, or how to book.",
        },
        {
          title: "Save team time",
          desc: "Your team should not have to remember every message manually. Sticky notes are brave, but this is not their job.",
        },
        {
          title: "Look more organized",
          desc: "Consistent follow-up makes your business feel sharper and more reliable.",
        },
      ]}
      ctaTitle="Still planning to follow up after lunch?"
      ctaDesc="Let the system remember the messages, reminders, and next steps—even when lunch turns into three job sites."
    />
  );
}
