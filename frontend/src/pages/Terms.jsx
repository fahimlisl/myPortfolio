import React from "react";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 md:px-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: March 27, 2026
        </p>

        <p className="mb-8 leading-relaxed">
          By using <span className="font-semibold">Fahim Automation</span>, 
          you agree to the following terms.
        </p>

        <Section title="1. Use of Service">
          This platform provides automation services, including sending emails
          via Gmail using authorized access.
        </Section>

        <Section title="2. User Responsibility">
          You are responsible for:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Maintaining the security of your accounts</li>
            <li>Granting permissions knowingly</li>
          </ul>
        </Section>

        <Section title="3. Acceptable Use">
          You agree not to use this service for:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Spam or bulk unsolicited emails</li>
            <li>Illegal or abusive activities</li>
          </ul>
        </Section>

        <Section title="4. Service Availability">
          We aim to keep the service reliable but do not guarantee uninterrupted
          uptime.
        </Section>

        <Section title="5. Limitation of Liability">
          We are not liable for any damages arising from the use of this service.
        </Section>

        <Section title="6. Third-Party Services">
          This platform integrates with Google APIs. Use of those services is
          subject to Google's terms and policies.
        </Section>

        <Section title="7. Termination">
          Access may be suspended if misuse or violation of terms is detected.
        </Section>

        <Section title="8. Updates to Terms">
          These terms may be updated at any time. Continued use means acceptance
          of changes.
        </Section>

        <Section title="9. Contact">
          For any questions:
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