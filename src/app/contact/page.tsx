import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { GridBackground } from "@/components/ui/GridBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT_EMAIL, PHONE, BOOK_A_CALL_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building. Reach The Stralis by email, phone, or book a call directly.",
};

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="t-eyebrow text-gray-mid">{label}</p>
      <div className="t-body text-gray-light">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden pt-16 pb-10 md:pt-24 md:pb-14">
        <GridBackground className="-z-10" />
        <Container>
          <Reveal className="flex flex-col gap-6">
            <Eyebrow tone="orange">Contact</Eyebrow>
            <h1 className="t-display-1 max-w-[16ch] text-balance text-white">
              Tell us what you&apos;re building.
            </h1>
            <p className="t-body-lg measure mt-2 text-gray-mid">
              Send us the details and we&apos;ll reply within one business day —
              or book a call and skip the back-and-forth.
            </p>
            <Button
              href={BOOK_A_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              withArrow
              className="mt-2 w-fit"
            >
              Book a call
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Details + form */}
      <Section className="pt-8 md:pt-12">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal className="flex flex-col gap-10">
              <Detail label="Email">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-orange"
                >
                  {CONTACT_EMAIL}
                </a>
              </Detail>

              <Detail label="Phone">
                <a
                  href={PHONE.href}
                  className="transition-colors hover:text-orange"
                >
                  {PHONE.display}
                </a>
              </Detail>
            </Reveal>

            <Reveal delay={0.06}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
