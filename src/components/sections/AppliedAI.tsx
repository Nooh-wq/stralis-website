import Image from "next/image";
import { Container, Section } from "@/components/ui/layout";
import { GridBackground } from "@/components/ui/GridBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { AI_PILLARS } from "@/lib/content";

/*
 * Applied AI — the brand's core argument. Deliberately distinct from the
 * Services grid: no boxed cards, an editorial three-column layout with large
 * outline index numbers. The 2px solid orange rule (reserved for the single
 * most important divider on the page) sits at the top of this section. A
 * technical network-graph image plus the faint blueprint grid sit behind
 * everything — texture, not a competing graphic — since this is the section
 * that makes the brand's AI argument.
 */
export function AppliedAI() {
  return (
    <Section id="applied-ai" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero/network-graph.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.3]"
        />
      </div>
      <GridBackground className="-z-10" />

      <Container>
        {/* The one 2px orange rule on the page — marks the key section. */}
        <div className="mb-16 h-0.5 w-full bg-orange" aria-hidden />

        <div className="flex flex-col gap-5">
          <Eyebrow tone="orange">Applied AI, not hype</Eyebrow>
          <h2 className="t-display-2 max-w-[20ch] text-balance text-white">
            <MaskReveal>
              AI where it <span className="text-orange">earns</span> a place in
              your product.
            </MaskReveal>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-14 md:mt-28 md:grid-cols-3">
          {AI_PILLARS.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.08}
              className="flex flex-col gap-4 border-t border-graphite-line pt-6"
            >
              <span className="t-mono text-gray-mid">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="t-h2 text-white">{pillar.title}</h3>
              <p className="t-body measure text-gray-mid">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
