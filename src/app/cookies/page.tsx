import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How The Stralis uses cookies on thestralis.com, including essential and analytics cookies.",
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

export default function CookiesPage() {
  return (
    <Section className="pt-16 md:pt-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-14 flex flex-col gap-5">
            <Eyebrow tone="orange">Legal</Eyebrow>
            <h1 className="t-display-1 text-white">Cookie Policy</h1>
            <p className="t-mono text-gray-mid">Effective date: June 25, 2026</p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            <PolicySection title="What cookies are">
              <p>
                Cookies are small text files placed on your device when you visit a website. They
                help websites function properly and help site owners understand how visitors use
                their site.
              </p>
            </PolicySection>

            <PolicySection title="Cookies we use">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-medium text-gray-light mb-2">Essential cookies</p>
                  <p>
                    These are required for the Site to function correctly (for example, remembering
                    your cookie consent choice). The Site cannot function properly without these,
                    and they do not require consent under most cookie laws.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-light mb-2">Analytics cookies (Google Analytics)</p>
                  <p>
                    We use Google Analytics to understand how visitors use the Site, including which
                    pages are visited, how long visitors stay, and what device or browser they&rsquo;re
                    using. This helps us improve the Site over time. These cookies are not
                    essential, and we only set them with your consent.
                  </p>
                  <p className="mt-3">
                    Specifically, Google Analytics may set cookies such as <code className="t-mono text-sm text-gray-light bg-graphite-line px-1.5 py-0.5 rounded">_ga</code> and{" "}
                    <code className="t-mono text-sm text-gray-light bg-graphite-line px-1.5 py-0.5 rounded">_ga_*</code>, used to distinguish unique visitors and track session
                    information.
                  </p>
                  <p className="mt-3">
                    We do not use advertising or retargeting cookies at this time. If that changes,
                    this policy will be updated accordingly.
                  </p>
                </div>
              </div>
            </PolicySection>

            <PolicySection title="Managing your cookie preferences">
              <p>
                When you first visit the Site, you&rsquo;ll be asked to accept or decline
                non-essential cookies. You can change your preference at any time using the cookie
                settings link in the footer.
              </p>
              <p>
                You can also control or delete cookies through your browser settings. Most browsers
                let you refuse all cookies, accept only certain types, or delete cookies you&rsquo;ve
                already accepted. Instructions vary by browser &mdash; search &ldquo;[your browser name]
                cookie settings&rdquo; for guidance.
              </p>
              <p>
                Note that blocking analytics cookies does not affect your ability to use the Site,
                since analytics cookies are not essential to its functioning.
              </p>
            </PolicySection>

            <PolicySection title="Changes to this policy">
              <p>
                We may update this Cookie Policy as our use of cookies changes. The effective date
                above reflects the most recent revision.
              </p>
            </PolicySection>

            <PolicySection title="Contact us">
              <p>
                Questions about this policy can be sent to{" "}
                <a
                  href="mailto:hello@thestralis.com"
                  className="text-gray-light transition-colors hover:text-orange"
                >
                  hello@thestralis.com
                </a>
                .
              </p>
            </PolicySection>
          </div>
        </div>
      </Container>
    </Section>
  );
}
