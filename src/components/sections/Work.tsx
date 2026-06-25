import Link from "next/link";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";
import { PROJECTS } from "@/lib/content";

/*
 * Work — four projects. Images are intentional dark placeholders (no fabricated
 * screenshots per brief). Each card links via "View →". Hover scales the
 * placeholder slightly inside an overflow-hidden frame; sharp 0-radius edges.
 */
export function Work() {
  return (
    <Section id="work">
      <Container>
        <SectionHeading
          eyebrow="The Stralis Output"
          title="Recent work."
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 gap-px border border-graphite-line bg-graphite-line sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.08} className="bg-black">
              <Link
                href={`/work/${project.slug}`}
                className="group block focus-visible:outline-orange"
              >
                {/* Placeholder visual — schematic frame, no fabricated screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <div className="absolute inset-0 transition-transform duration-500 [transition-timing-function:var(--ease-out-brand)] group-hover:scale-[1.04]">
                    {/* faint grid */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #232323 1px, transparent 1px), linear-gradient(to bottom, #232323 1px, transparent 1px)",
                        backgroundSize: "34px 34px",
                        opacity: 0.5,
                      }}
                    />
                    {/* crosshair + center node */}
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-graphite-line" />
                    <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-graphite-line" />
                    <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 border border-gray-mid" />
                  </div>
                  <span className="absolute left-5 top-5 t-mono text-gray-dark">
                    Image pending
                  </span>
                  <span className="absolute bottom-5 right-5 t-mono text-gray-dark">
                    {String(i + 1).padStart(2, "0")} / 04
                  </span>
                </div>

                <div className="flex items-center justify-between p-6">
                  <h3 className="t-h2 text-white">{project.name}</h3>
                  <span className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-gray-light transition-colors group-hover:text-orange">
                    View
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-150 [transition-timing-function:var(--ease-out-brand)] group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
