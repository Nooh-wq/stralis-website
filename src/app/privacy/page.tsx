import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LEGAL_ENTITY_NAME, LEGAL_ENTITY_ADDRESS, PHONE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Stralis collects, uses, and protects information gathered through thestralis.com.",
};

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-t border-graphite-line pt-8">
      <h2 className="t-h3 text-white">{title}</h2>
      <div className="flex flex-col gap-3 text-gray-mid leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <Section className="pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-14 flex flex-col gap-5">
            <Eyebrow tone="orange">Legal</Eyebrow>
            <h1 className="t-display-1 text-white">Privacy Policy</h1>
            <p className="t-mono text-gray-mid">Effective date: June 25, 2026</p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            <PolicySection title="Who we are">
              <p>
                {LEGAL_ENTITY_NAME}{" "}
                (&ldquo;Stralis,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides software development,
                SaaS, MVP, and AI/ML engineering services. This policy explains what information we
                collect through thestralis.com (the &ldquo;Site&rdquo;), how we use it, and the rights you
                have over it.
              </p>
              <p>
                {LEGAL_ENTITY_NAME}
                <br />
                {LEGAL_ENTITY_ADDRESS}
              </p>
              <p>Contact: hello@thestralis.com</p>
            </PolicySection>

            <PolicySection title="Information we collect">
              <p>We collect information in two ways:</p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-medium text-gray-light mb-1">1. Information you give us directly</p>
                  <p>
                    When you submit our contact form, we collect the information you provide, which
                    may include your name, email address, company name, and the details of your
                    message or project inquiry.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-light mb-1">2. Information collected automatically</p>
                  <p>
                    When you visit the Site, we use Google Analytics to collect information about
                    how visitors use the Site, including pages viewed, time spent on the Site,
                    referring websites, general location (city/country level, not precise location),
                    and device and browser information. This is collected through cookies and similar
                    technologies. See our separate Cookie Policy for details.
                  </p>
                </div>
              </div>
              <p>
                We do not collect payment information, government ID information, or any sensitive
                personal data through the Site.
              </p>
            </PolicySection>

            <PolicySection title="How we use your information">
              <p>We use the information we collect to:</p>
              <ul className="flex flex-col gap-1.5 pl-5 list-disc">
                <li>Respond to inquiries submitted through the contact form</li>
                <li>Understand how visitors use the Site so we can improve it</li>
                <li>Maintain the security and proper functioning of the Site</li>
                <li>Comply with legal obligations where applicable</li>
              </ul>
              <p>
                We do not sell your personal information. We do not use your information for
                automated decision-making or profiling that produces legal or similarly significant
                effects.
              </p>
            </PolicySection>

            <PolicySection title="Legal basis for processing (EU/UK visitors)">
              <p>If you are located in the EU or UK, our legal basis for processing your information is:</p>
              <ul className="flex flex-col gap-1.5 pl-5 list-disc">
                <li>
                  <span className="text-gray-light">Contact form submissions:</span> your consent,
                  given by submitting the form, and our legitimate interest in responding to business
                  inquiries.
                </li>
                <li>
                  <span className="text-gray-light">Analytics cookies:</span> your consent, which
                  you can withdraw at any time (see Cookie Policy).
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Who we share information with">
              <p>
                We share information with the following categories of third parties, and only as
                needed to operate the Site:
              </p>
              <ul className="flex flex-col gap-1.5 pl-5 list-disc">
                <li>
                  <span className="text-gray-light">Google Analytics (Google LLC)</span> &mdash;
                  processes Site usage data as described above. Google&rsquo;s privacy practices are
                  described at policies.google.com/privacy.
                </li>
                <li>
                  <span className="text-gray-light">Email/communication tools</span> we use to
                  receive and respond to contact form submissions.
                </li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for their
                own marketing purposes.
              </p>
            </PolicySection>

            <PolicySection title="International data transfers">
              <p>
                Some of our service providers, including Google, may process data outside your
                country of residence, including in the United States. Where required, these
                transfers rely on appropriate safeguards such as Standard Contractual Clauses.
              </p>
            </PolicySection>

            <PolicySection title="How long we keep your information">
              <p>
                We retain contact form submissions for as long as reasonably necessary to respond
                to your inquiry and maintain business records, and delete them when no longer
                needed. Analytics data is retained according to our Google Analytics retention
                settings.
              </p>
            </PolicySection>

            <PolicySection title="Your rights">
              <p>Depending on where you live, you may have the right to:</p>
              <ul className="flex flex-col gap-1.5 pl-5 list-disc">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing</li>
                <li>Withdraw consent at any time</li>
                <li>Request a copy of your information in a portable format</li>
                <li>Lodge a complaint with your local data protection authority (EU/UK residents)</li>
              </ul>
              <p>
                California residents have additional rights under the CCPA/CPRA, including the
                right to know what personal information is collected and the right to opt out of
                the sale or sharing of personal information. We do not sell or share personal
                information as defined under the CCPA/CPRA.
              </p>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:hello@thestralis.com"
                  className="text-gray-light transition-colors hover:text-orange"
                >
                  hello@thestralis.com
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection title="Children's privacy">
              <p>
                The Site is not directed at children, and we do not knowingly collect personal
                information from anyone under 16.
              </p>
            </PolicySection>

            <PolicySection title="Security">
              <p>
                We use reasonable administrative and technical measures to protect the information
                we collect. No method of transmission or storage is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection title="Changes to this policy">
              <p>
                We may update this policy from time to time. The effective date at the top of this
                page reflects the most recent revision. Material changes will be reflected here
                when they occur.
              </p>
            </PolicySection>

            <PolicySection title="Contact us">
              <p>
                Questions about this policy or your information can be sent to{" "}
                <a
                  href="mailto:hello@thestralis.com"
                  className="text-gray-light transition-colors hover:text-orange"
                >
                  hello@thestralis.com
                </a>
                .
              </p>
              <p>
                Phone:{" "}
                <a
                  href={PHONE.href}
                  className="text-gray-light transition-colors hover:text-orange"
                >
                  {PHONE.display}
                </a>
              </p>
            </PolicySection>
          </div>
        </div>
      </Container>
    </Section>
  );
}
