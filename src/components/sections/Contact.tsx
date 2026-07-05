import Image from "next/image";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT_EMAIL } from "@/lib/content";

/*
 * Contact section. Intro on the left, the two-step form on the right.
 * Anchored as #contact — every "Book a call" / "Contact" action lands here.
 * A glacier/ice-topology image sits behind everything, darkened so the copy
 * and the (opaque) form panel stay fully legible — cold and precise, giving
 * the black some depth without the drama of the hero's mountain image.
 */
export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero/glacier-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)",
          }}
        />
      </div>

      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <Eyebrow tone="orange">Start a project</Eyebrow>
            <Reveal>
              <h2 className="t-display-2 max-w-[14ch] text-balance text-white">
                Tell us what you&apos;re building.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="t-body-lg measure text-gray-mid">
                A couple of quick questions, then your details. We&apos;ll read it
                and reply — usually within one business day.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="t-mono w-fit text-gray-light transition-colors hover:text-orange"
              >
                {CONTACT_EMAIL}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
