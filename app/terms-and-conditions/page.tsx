import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms and Conditions | The Oakmont Digital",
};

export default function TermsAndConditions() {
  return (
    <LegalPage
      eyebrow="TERMS & CONDITIONS"
      titleLine1="The rules."
      titleLine2="No legal fog machine."
      intro="These terms explain what you can expect from Oakmont, what we need from you, and how payments, deliverables, and cancellations work."
      lastUpdated="August 18, 2026"
      chips={[
        {
          label: "30-DAY GUARANTEE",
          text: "Monthly and annual plans include a no-questions-asked refund window.",
        },
        {
          label: "SCOPE",
          text: "Your signed proposal or order form controls the project details.",
        },
        {
          label: "RESULTS",
          text: "We do the work. Nobody can honestly promise the algorithm.",
        },
      ]}
      sections={[
        {
          id: "agreement",
          title: "1. Agreement to these terms",
          body: [
            'These Terms and Conditions (the "Terms") apply when you access this website or purchase services from Oakmont Digital LLC, doing business as The Oakmont Digital ("Oakmont," "we," "us," or "our"). By using the website, approving a proposal, signing an order form, or paying an invoice, you agree to these Terms.',
            "If a signed proposal, statement of work, order form, or other written agreement conflicts with these Terms, that document controls for the conflicting project term.",
          ],
        },
        {
          id: "services-scope",
          title: "2. Services, scope, and timing",
          body: [
            "Oakmont provides websites, lead-management systems, marketing, advertising, content, automation, consulting, and related digital services. The exact deliverables, fees, schedule, included revisions, and subscription period are stated in the applicable proposal or order form.",
            "Work outside the agreed scope may require a new estimate or change order.\nTimelines depend on timely access, approvals, content, and feedback from you.\nDelays caused by missing materials, access, feedback, third-party platforms, or events outside our control extend delivery dates.\nReasonable technical, platform, or strategic substitutions may be made when necessary to deliver the intended result.",
          ],
        },
        {
          id: "payments-refunds",
          title: "3. Payments, subscriptions, and refunds",
          body: [
            "You agree to pay the fees, taxes, ad spend, platform costs, and other charges shown in your proposal, order form, or invoice. Unless stated otherwise in writing, invoices are due when issued, and Oakmont may pause work or access when a payment is late.",
            "30-day, no-questions-asked refund\n\nMonthly and annual Oakmont subscription plans include a 30-day, no-questions-asked refund guarantee. Request your refund within 30 calendar days of your initial purchase by emailing rayyan@theoakmontdigital.com. We will refund the amount paid for the applicable plan.",
            "After the first 30 calendar days, payments are non-refundable. This includes annual plans: if an annual plan is purchased and more than 30 days have passed since the initial purchase, it is not eligible for a refund. The guarantee applies to both monthly and annual plans and does not create a refund right for later renewals, partial billing periods, third-party costs, advertising spend, or services outside the applicable plan.",
            "We normally issue approved refunds within 2–3 business days. In rare cases, the payment processor, bank, card network, or another technical issue may delay the refund. Where that happens, it may take up to 28 days for the funds to appear back on the original payment method.",
            "Recurring services\n\nIf your order includes recurring services, you authorize charges at the interval disclosed before purchase. You may cancel future renewals by emailing rayyan@theoakmontdigital.com before the next billing date, subject to any minimum term in your agreement. Cancellation stops future renewal after the current paid period; it does not create a refund or credit for amounts already charged outside the 30-day guarantee above.",
            "Payment disputes\n\nPlease contact us first if a charge looks wrong. Initiating an unsupported chargeback for properly delivered or authorized services may be treated as a payment default, and Oakmont may provide the applicable agreement, approvals, delivery records, and communications to the payment provider.",
          ],
        },
        {
          id: "your-responsibilities",
          title: "4. Your responsibilities",
          body: [
            "You agree to provide accurate information, timely decisions, required account access, and content you are legally permitted to use. You are responsible for reviewing and approving claims, pricing, offers, service areas, disclaimers, and regulated-industry content before publication.",
            "You may not use our services for unlawful, deceptive, abusive, infringing, discriminatory, or spam-related activity. You are also responsible for your own compliance with advertising, privacy, telemarketing, messaging, professional, licensing, and industry-specific rules.",
          ],
        },
        {
          id: "sms-messaging",
          title: "5. SMS messaging terms",
          body: [
            "If you provide your mobile number, you may separately opt in to informational SMS about your inquiry, appointment and lead follow-ups, service-related updates, and reminders, and/or to recurring marketing and promotional SMS about offers and service promotions. Consent for one category does not enroll you in the other. Both choices are optional, and consent to receive marketing SMS is not a condition of purchasing any product or service.",
            "Message frequency may vary.\nMessage and data rates may apply.\nReply STOP at any time to opt out of further SMS messages.\nReply HELP for help, email rayyan@theoakmontdigital.com, or call (888) 810-0013.",
            "Carriers are not liable for delayed or undelivered messages. Our handling of your mobile number and SMS consent is described in the Privacy Policy.",
          ],
        },
        {
          id: "ownership",
          title: "6. Content and ownership",
          body: [
            "You retain ownership of materials you provide. You grant Oakmont a limited license to use those materials to perform the services. You represent that your materials and instructions do not violate another person's rights.",
            "After full payment, you receive the rights to final custom deliverables expressly identified as yours in the applicable agreement. Oakmont retains ownership of its pre-existing know-how, processes, templates, reusable code, systems, internal tools, and methods. Third-party fonts, software, stock assets, plugins, platforms, and services remain subject to their own licenses.",
            "Unless confidentiality is agreed in writing, Oakmont may identify you as a client and display non-confidential completed work in its portfolio and marketing. You can ask us in writing not to do so.",
          ],
        },
        {
          id: "third-parties",
          title: "7. Third-party platforms",
          body: [
            "Some services rely on third parties such as hosting providers, domain registrars, advertising networks, social platforms, communications providers, payment processors, and software vendors. Their terms, fees, review processes, outages, account decisions, and policy changes are outside Oakmont's control.",
            "You remain responsible for third-party accounts held in your name and for platform fees or ad spend unless your written agreement says otherwise.",
          ],
        },
        {
          id: "results-warranties",
          title: "8. Results, availability, and warranties",
          body: [
            "We aim to deliver practical, professional work, but marketing is not a vending machine. We do not guarantee rankings, leads, sales, revenue, ad approval, platform access, uninterrupted availability, or a specific business result.",
            'To the fullest extent permitted by law, the website and services are provided "as is" and "as available," without implied warranties of merchantability, fitness for a particular purpose, title, or non-infringement. Nothing here limits a warranty or right that cannot legally be excluded.',
          ],
        },
        {
          id: "limitation-of-liability",
          title: "9. Limitation of liability",
          body: [
            "To the fullest extent permitted by law, Oakmont will not be liable for indirect, incidental, special, punitive, exemplary, or consequential damages; lost profits, revenue, data, goodwill, or business opportunities; or losses caused by third-party platforms, account suspensions, security events outside our reasonable control, or your content or instructions.",
            "Oakmont's total liability arising from a claim will not exceed the fees you paid Oakmont for the specific service giving rise to the claim during the three months before the event. These limits do not apply where applicable law prohibits them.",
            "You agree to defend and indemnify Oakmont against third-party claims arising from your unlawful use of the services, your materials, your breach of these Terms, or your violation of another person's rights.",
          ],
        },
        {
          id: "suspension-termination",
          title: "10. Suspension, termination, and changes",
          body: [
            "Either party may end services as allowed by the applicable proposal or order form. Oakmont may immediately suspend or terminate services for nonpayment, unlawful or abusive activity, material breach, security risk, or conduct that could harm Oakmont, its vendors, or others.",
            "Ending services does not cancel charges already earned, committed, or due. Sections concerning payments, ownership, confidentiality, disclaimers, liability, and disputes survive termination.",
            "We may update these Terms by posting a revised version and date. Material changes apply prospectively unless the law or a separate written agreement permits otherwise. Continued website use after an update means you accept the revised website terms.",
          ],
        },
        {
          id: "general-legal",
          title: "11. General legal terms",
          body: [
            "Before filing a formal claim, both sides agree to make a good-faith effort to resolve the issue directly for at least 30 days. Unless an applicable signed agreement expressly states otherwise, these Terms are governed by the laws of the State of Montana, without regard to conflict-of-law rules. Subject to any law that requires a different venue, the parties consent to the jurisdiction of the state courts located in Flathead County, Montana, and the federal courts with jurisdiction over Flathead County.",
            "If a provision is unenforceable, the rest remains effective. A failure to enforce a provision is not a waiver. You may not transfer your agreement without our written approval; Oakmont may transfer it as part of a merger, sale, reorganization, or transfer of the relevant business.",
          ],
        },
        {
          id: "contact",
          title: "12. Questions? Ask a human.",
          body: [
            "For billing, cancellation, or terms questions, contact Oakmont directly.",
            "Oakmont Digital LLC\n1001 S. Main St. STE 12843\nKalispell, MT 59901\nrayyan@theoakmontdigital.com\n(888) 810-0013",
          ],
        },
      ]}
    />
  );
}
