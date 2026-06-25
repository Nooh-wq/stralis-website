import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SERVICES } from "@/lib/content";

/*
 * Six services in a hairline-separated grid (gap-px over a graphite bg yields
 * clean 1px Swiss dividers, sharp 0-radius cells). Each cell carries a mono
 * index, eyebrow, title, one-liner, and an "Explore Solutions →" link.
 */
export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Six ways we help teams ship."
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 gap-px border border-graphite-line bg-graphite-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 0.06}
              className="group flex h-full flex-col gap-5 bg-black p-8 transition-colors duration-200 [transition-timing-function:var(--ease-out-brand)] hover:bg-white/[0.03] lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="t-mono text-gray-mid">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Eyebrow>{service.eyebrow}</Eyebrow>
              </div>
              <h3 className="t-h3 text-balance text-white">{service.title}</h3>
              <p className="t-body-sm measure text-gray-mid">
                {service.description}
              </p>
              <div className="mt-auto pt-2">
                <TextLink href={`/solutions/${service.slug}`}>
                  Explore Solutions
                </TextLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
