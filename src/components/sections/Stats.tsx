import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { STATS } from "@/lib/content";

/*
 * Proof in Performance — three animated count-up stats. Oversized numerals with
 * a short orange accent rule and a mono label, in a hairline-separated grid.
 */
export function Stats() {
  return (
    <Section id="stats">
      <Container>
        <SectionHeading
          eyebrow="Proof in performance"
          title="The numbers behind the work."
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 gap-px border border-graphite-line bg-graphite-line sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={(i % 3) * 0.08}
              className="flex flex-col gap-6 bg-black p-10 lg:p-14"
            >
              <span className="text-[clamp(3.25rem,7vw,5rem)] font-semibold leading-none tracking-tight text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="h-0.5 w-10 bg-orange" aria-hidden />
              <span className="t-mono text-gray-mid">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
