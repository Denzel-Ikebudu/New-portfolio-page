
export const metadata = {
  title: "Terms & Conditions | Denzel Ikebudu",
  description: "Terms and conditions for using Denzel Ikebudu's portfolio and web development services.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to the portfolio website of Denzel Ikebudu. By accessing this website, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the website.`,
  },
  {
    title: "2. Website Purpose",
    content: `This website showcases my web development work, projects, skills, and professional services. Information presented here is for general informational and promotional purposes.`,
  },
  {
    title: "3. Intellectual Property",
    content: `Unless otherwise stated, the content on this website, including text, graphics, design elements, and original materials, belongs to Denzel Ikebudu. You may not reproduce, redistribute, or commercially use these materials without prior permission. Project names, logos, and third-party assets remain the property of their respective owners.`,
  },
  {
    title: "4. Project Enquiries and Agreements",
    content: `Submitting an enquiry through this website or contacting me through email or WhatsApp does not automatically create a client relationship or service agreement. Project scope, pricing, timelines, payment arrangements, revisions, and deliverables will be agreed upon separately before work begins.`,
  },
  {
    title: "5. Payments and Deliverables",
    content: `Where development services are engaged, payment terms and project deliverables will be communicated and agreed upon before commencement. Any deposits, milestones, additional work, or cancellation arrangements will be governed by the individual project agreement.`,
  },
  {
    title: "6. Third-Party Links",
    content: `This website may contain links to external websites, platforms, and services. I do not control or take responsibility for the content, availability, or privacy practices of those external websites.`,
  },
  {
    title: "7. Website Availability",
    content: `I aim to keep this website accessible and accurate. However, I do not guarantee uninterrupted availability or that all information will always be current or error-free.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the extent permitted by applicable law, I am not liable for losses arising from the use of this website, reliance on its content, or temporary inability to access it.`,
  },
  {
    title: "9. Changes to These Terms",
    content: `These Terms & Conditions may be updated from time to time. Any changes will be published on this page, together with an updated revision date.`,
  },
  {
    title: "10. Contact",
    content: `For questions about these Terms & Conditions, you can contact me through the contact section of this website or via email.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--bg))] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl">

        <div className="mb-14 border-b border-[rgb(var(--card))] pb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Legal information
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[rgb(var(--muted))]">
            Please read these terms carefully before using this website
            or engaging with my services.
          </p>

          <p className="mt-6 text-xs text-[rgb(var(--muted))]">
            Last updated: November 13, 2026
          </p>
        </div>

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

        <div className="mt-16 border-t border-[rgb(var(--card))] pt-8">
          <p className="text-sm text-[rgb(var(--muted))]">
            Thank you for visiting my website.
          </p>
        </div>
      </div>
    </main>
  );
}
