
export const metadata = {
  title: "Privacy Policy | Denzel Ikebudu",
  description:
    "Learn how Denzel Ikebudu collects, uses, and protects information submitted through this portfolio website.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `Your privacy matters. This Privacy Policy explains how Denzel Ikebudu ("I", "me", or "my") handles information when you visit this portfolio website or contact me about web development services.`,
  },
  {
    title: "2. Information I Collect",
    content: `When you use the contact form, you may provide your name, email address, and message. This information is submitted voluntarily so I can respond to your enquiry. If you contact me through WhatsApp or social media, I may also receive the information you choose to share through those platforms.`,
  },
  {
    title: "3. How Your Information Is Used",
    content: `Information you provide may be used to respond to enquiries, discuss potential projects, provide requested services, communicate about ongoing work, and maintain professional records. I do not intentionally collect information that is unrelated to these purposes.`,
  },
  {
    title: "4. Contact Form and EmailJS",
    content: `This website uses EmailJS to process messages submitted through the contact form. When you submit the form, your name, email address, and message are transmitted through EmailJS so that I can receive and respond to your enquiry. Your information may be processed by EmailJS in accordance with its own privacy policy and data handling practices.`,
  },
  {
    title: "5. WhatsApp and Social Media",
    content: `This website may link to WhatsApp, GitHub, LinkedIn, X, and other external platforms. If you choose to use these services, your interactions are subject to the privacy policies and terms of those respective providers. I do not control how external platforms collect or process your information.`,
  },
  {
    title: "6. Cookies and Analytics",
    content: `This website may use cookies or similar technologies if analytics, performance monitoring, or other website services are enabled. These technologies may help understand website usage and improve the visitor experience. Any analytics or tracking services used will process information according to their respective privacy policies.`,
  },
  {
    title: "7. Information Sharing",
    content: `I do not sell or rent personal information submitted through this website. Information may be processed by service providers necessary to operate the website and deliver communications, such as EmailJS. Information may also be disclosed where required by applicable law.`,
  },
  {
    title: "8. Data Retention",
    content: `Enquiry information may be retained for as long as reasonably necessary to respond to your request, manage a potential or existing project, maintain relevant business records, or meet legal obligations. You may contact me to request the deletion of information I hold, subject to applicable legal requirements.`,
  },
  {
    title: "9. Data Security",
    content: `I take reasonable steps to protect information submitted through this website. However, no method of online transmission or electronic storage is completely secure, and I cannot guarantee absolute security.`,
  },
  {
    title: "10. Your Privacy Rights",
    content: `Depending on applicable data protection laws, you may have rights to request access to, correction of, or deletion of your personal information, and to object to or restrict certain processing. You may exercise these rights by contacting me using the details provided below.`,
  },
  {
    title: "11. External Websites",
    content: `This website may contain links to third-party websites and services. I am not responsible for the privacy practices, security, or content of those websites. I encourage you to review their privacy policies before sharing personal information.`,
  },
  {
    title: "12. Changes to This Policy",
    content: `This Privacy Policy may be updated from time to time to reflect changes in website functionality, services, or applicable requirements. Updates will be published on this page with a revised date.`,
  },
  {
    title: "13. Contact",
    content: `If you have questions about this Privacy Policy or how your information is handled, please contact me through the contact form on this website or directly by email.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--bg))] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-14 border-b border-[rgb(var(--card))] pb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Legal information
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[rgb(var(--muted))]">
            This page explains what information I collect, why I collect
            it, and how it is handled when you use my website.
          </p>

          <p className="mt-6 text-xs text-[rgb(var(--muted))]">
            Last updated: November 13, 2026
          </p>
        </div>

        {/* POLICY CONTENT */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold sm:text-xl">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-8 text-[rgb(var(--muted))] sm:text-base">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 border-t border-[rgb(var(--card))] pt-8">
          <p className="text-sm text-[rgb(var(--muted))]">
            Thank you for trusting me with your information.
          </p>
        </div>
      </div>
    </main>
  );
}
