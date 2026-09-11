import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | The Oakmont Digital",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="PRIVACY POLICY"
      titleLine1="Your data."
      titleLine2="Handled like it matters."
      intro="This policy explains what Oakmont collects, why we use it, when it may be shared, and the choices you have. Plain English. No hide-and-seek."
      lastUpdated="August 18, 2026"
      chips={[
        {
          label: "COLLECTION",
          text: "We collect what you provide and basic website-use data.",
        },
        {
          label: "PURPOSE",
          text: "We use it to respond, deliver services, bill, secure, and improve.",
        },
        {
          label: "YOUR CALL",
          text: "You can ask to access, correct, or delete your information.",
        },
      ]}
      sections={[
        {
          id: "scope",
          title: "1. Who and what this covers",
          body: [
            'This Privacy Policy describes how Oakmont Digital LLC, doing business as The Oakmont Digital ("Oakmont," "we," "us," or "our"), handles personal information through this website, sales conversations, client relationships, and related communications. Oakmont Digital LLC is responsible for the personal information covered by this policy.',
            "It does not control the independent privacy practices of third-party websites, platforms, or services linked from our site. Their own policies apply.",
          ],
        },
        {
          id: "information-we-collect",
          title: "2. Information we collect",
          body: [
            "Information you provide\nContact details such as your name, business name, email address, phone number, and service area.\nProject and business information, website URLs, marketing goals, account access, files, content, feedback, and support messages.\nTransaction details such as the service purchased, amount, billing status, and invoice history. Payment processors handle full card or bank details under their own privacy and security practices.\nCommunications with us, including emails, texts, calls, meeting notes, and any recording made with notice or consent where required.",
            "Information collected automatically\n\nWhen you visit the website, our hosting and security providers may receive technical information such as your IP address, browser and device type, approximate location derived from IP, referral page, pages viewed, timestamps, and diagnostic or security logs.",
            "Please do not send Social Security numbers, government identification, medical records, account passwords, or other sensitive personal information unless we specifically request it through an appropriate secure method.",
          ],
        },
        {
          id: "how-we-use-it",
          title: "3. How we use information",
          body: [
            "We may use personal information to:",
            "respond to inquiries, prepare recommendations and proposals, and communicate with you;\nset up, provide, support, personalize, and improve our services;\nprocess billing, maintain business records, and enforce agreements;\noperate, troubleshoot, measure, and secure the website and our systems;\nsend service notices and, where permitted, relevant marketing communications;\nprevent fraud, abuse, security threats, and unlawful activity; and\ncomply with legal obligations and protect our rights and the rights of others.",
            "If you contact us by phone or text, we may reply about your inquiry or services. Marketing texts, if any, are sent only when you separately opt in as required. Consent to marketing SMS is not a condition of purchase.",
          ],
        },
        {
          id: "sms-mobile-information",
          title: "4. SMS and mobile information",
          body: [
            "When you provide a phone number, you may separately choose whether to receive (1) informational SMS concerning your inquiry, appointment or lead follow-ups, service-related updates, and reminders, and (2) marketing or promotional SMS concerning offers and service promotions. Each messaging choice is optional, uses a separate unchecked opt-in, and applies only to the message category you select. Marketing consent is not a condition of purchase. Message frequency may vary, and message and data rates may apply.",
            "Mobile phone numbers and SMS opt-in consent information are used only for the purposes described in this policy and at the point of consent. We do not sell, rent, or share mobile phone numbers or SMS consent information with third parties or affiliates for their own marketing or promotional purposes. We may provide this information to communications and technology service providers solely as needed to deliver and support Oakmont's messages, subject to appropriate restrictions.",
            "You may opt out of SMS at any time by replying STOP to any Oakmont message. Reply HELP for help. Opting out of SMS does not prevent us from communicating with you through other channels when permitted.",
          ],
        },
        {
          id: "how-we-share-it",
          title: "5. When information is shared",
          body: [
            "We may share personal information only as reasonably needed with:",
            "service providers that support hosting, communications, scheduling, analytics, payments, security, customer management, advertising, and project delivery;\nprofessional advisers such as accountants, insurers, auditors, and legal counsel;\ngovernment authorities or other parties when required by law or reasonably necessary to protect rights, safety, systems, or users;\na buyer, successor, lender, or adviser involved in a merger, financing, reorganization, or sale of all or part of the business; and\nother parties when you direct us or give consent.",
            'We do not sell personal information for money. If we later use advertising technology that is treated as a "sale," "sharing," or targeted advertising under applicable privacy law, we will provide the notices and opt-out method that law requires.',
          ],
        },
        {
          id: "cookies-analytics",
          title: "6. Cookies and similar technology",
          body: [
            "The current website may use essential browser storage or similar technology needed for navigation, preferences, performance, fraud prevention, and security. Hosting providers may also maintain standard server logs.",
            "We use the Meta Pixel to measure advertising performance, understand visits and completed inquiries, and improve delivery of our Facebook and Instagram advertising. Meta may use cookies, pixels, or similar identifiers under its own terms and privacy practices. We may add other analytics or advertising tools in the future and will update this policy and provide legally required controls when doing so.",
            'You can limit cookies through your browser settings. Blocking essential storage may affect site functionality. Because browser "Do Not Track" signals are not interpreted consistently, the site does not currently respond to them. We will honor recognized opt-out preference signals where required by applicable law and technically applicable to our processing.',
          ],
        },
        {
          id: "retention-security",
          title: "7. Retention and security",
          body: [
            "We keep personal information only as long as reasonably necessary for the purposes described here, including providing services, maintaining records, resolving disputes, enforcing agreements, meeting tax or legal requirements, and protecting against fraud. Retention periods vary by the type of information and relationship.",
            "We use reasonable administrative, technical, and organizational safeguards appropriate to the information we handle. No internet transmission or storage method is completely secure, so we cannot promise absolute security.",
          ],
        },
        {
          id: "your-privacy-choices",
          title: "8. Your privacy choices",
          body: [
            "Depending on where you live and subject to legal exceptions, you may have the right to request access to, correction of, deletion of, or a portable copy of personal information; to opt out of certain targeted advertising, sale, sharing, or profiling; or to appeal a decision about your request.",
            'To make a request, email rayyan@theoakmontdigital.com with "Privacy Request" in the subject line, or call (888) 810-0013. Tell us the request you are making and the state or country where you live. We may need to verify your identity and authority before completing it. Authorized agents may submit requests where applicable law permits.',
            "We will not discriminate against you for exercising a privacy right. You may unsubscribe from marketing email using its unsubscribe link or by contacting us. Service and transaction messages may continue while you remain a client.",
          ],
        },
        {
          id: "childrens-privacy",
          title: "9. Children's privacy",
          body: [
            "Our website and services are intended for businesses and adults, not children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided information to us, contact us so we can review and delete it as appropriate.",
          ],
        },
        {
          id: "international",
          title: "10. Visitors outside the United States",
          body: [
            "Oakmont operates from the United States. If you access the site from another country, your information may be processed in the United States or other places where our service providers operate, subject to applicable legal safeguards.",
          ],
        },
        {
          id: "policy-updates",
          title: "11. Policy updates",
          body: [
            "We may update this policy when our practices, technology, or legal obligations change. The updated version will appear on this page with a revised date. If a change materially affects how we use information already collected, we will provide additional notice or seek consent when required by law.",
          ],
        },
        {
          id: "contact",
          title: "12. Privacy questions? We answer those.",
          body: [
            "Contact Oakmont to ask a question or submit a privacy request.",
            "Oakmont Digital LLC\n1001 S. Main St. STE 12843\nKalispell, MT 59901\nrayyan@theoakmontdigital.com\n(888) 810-0013",
          ],
        },
      ]}
    />
  );
}
