import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 md:px-20">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: March 27, 2026
        </p>

        <p className="mb-8 leading-relaxed">
          Welcome to <span className="font-semibold">Fahim Automation</span>. 
          Your privacy matters. This policy explains how your data is handled 
          when you use our automation services.
        </p>

        <Section title="1. Information We Access">
          When you connect your account (such as Google), we may access limited
          information like your email address and authorization tokens. This is
          strictly permission-based and initiated by you.
        </Section>

        <Section title="2. How Your Data Is Used">
          Your data is used only to:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Send emails via Gmail on your behalf</li>
            <li>Execute automation workflows configured by you</li>
          </ul>
        </Section>

        <Section title="3. No Selling. No Sharing. No Nonsense.">
          We do not sell, rent, or share your personal data with third parties.
          Ever.
        </Section>

        <Section title="4. Data Security">
          We take reasonable steps to protect your data. Credentials and tokens
          are stored securely and used only for authorized actions.
        </Section>

        <Section title="5. Third-Party Services">
          This application integrates with Google APIs. By using this service,
          you also agree to Google's policies and terms.
        </Section>

        <Section title="6. Your Control">
          You can revoke access at any time through your Google Account
          permissions.
        </Section>

        <Section title="7. Updates">
          This policy may be updated occasionally. Any changes will be reflected
          on this page.
        </Section>

        <Section title="8. Contact">
          For any questions, reach out at:
          <br />
          <span className="font-medium">alphagym2001@gmail.com</span>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}