import { Container, Section } from "@/components/ui/layout";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";

/*
 * Short positioning strip directly under the hero. The headline gets a crafted
 * per-line clip-path reveal (appropriate here — few such moments on the page);
 * the supporting line is a plain fade so it stays readable, not animated.
 */
export function PositioningStrip() {
  return (
    <Section className="relative overflow-hidden border-t border-graphite-line bg-[#0A0A0A] py-20 md:py-28 lg:py-32">
      {/* Faint measurement-grid texture — distinct from the pure-black hero
          without a hard visual break; echoes the terrain-overlay quality
          used elsewhere without being a literal image. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container>
        <div className="grid items-end gap-8 md:grid-cols-12">
          <h2 className="t-display-2 text-white md:col-span-5">
            <MaskReveal className="block">AI as a priority,</MaskReveal>
            <MaskReveal className="block" delay={0.12}>
              not a buzzword.
            </MaskReveal>
          </h2>
          <Reveal className="md:col-span-6 md:col-start-7">
            <p className="t-body-lg measure text-gray-mid">
              We offer AI and ML as a core service, not a marketing label. Our
              engineers do the building. AI gets integrated into a project only
              when it solves a real problem for your users.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
