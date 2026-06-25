import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/layout";
import { GridBackground } from "@/components/ui/GridBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { ArrowRight } from "@/components/ui/icons";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { BOOK_A_CALL_URL } from "@/lib/content";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return { title: solution.eyebrow, description: solution.intro };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const others = SOLUTIONS.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <GridBackground className="-z-10" />
        <Container>
          <Reveal className="flex flex-col gap-6">
            <Link
              href="/#services"
              className="t-mono inline-flex w-fit items-center gap-2 text-gray-mid transition-colors hover:text-orange"
            >
              <ArrowRight size={14} className="rotate-180" />
              All solutions
            </Link>
            <Eyebrow tone="orange">{solution.eyebrow}</Eyebrow>
            <h1 className="t-display-1 max-w-[16ch] text-balance text-white">
              {solution.headline}
            </h1>
            <p className="t-body-lg measure mt-2 text-gray-mid">{solution.intro}</p>
          </Reveal>
        </Container>
      </section>

      {/* What we build */}
      <Section className="pt-8 md:pt-10">
        <Container>
          <Reveal>
            <h2 className="t-h1 mb-10 text-white md:mb-12">What we build</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px border border-graphite-line bg-graphite-line sm:grid-cols-2">
            {solution.builds.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 0.06}
                className="flex h-full flex-col gap-4 bg-black p-8 lg:p-10"
              >
                <span className="t-mono text-gray-mid">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3 text-white">{item.title}</h3>
                <p className="t-body-sm measure text-gray-mid">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* How we work + outcome */}
      <Section className="pt-0 md:pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-5">
              <h2 className="t-h1 text-white">How we work</h2>
              <p className="t-body measure text-gray-mid">{solution.howWeWork}</p>
            </Reveal>
            <Reveal delay={0.06} className="flex flex-col gap-5">
              <Eyebrow tone="orange">The outcome</Eyebrow>
              <p className="t-h2 measure border-l-2 border-orange pl-6 text-white">
                {solution.outcome}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-graphite-line">
        <Container>
          <div className="flex flex-col items-start gap-8">
            <h2 className="t-display-2 max-w-[18ch] text-balance text-white">
              {solution.cta}
            </h2>
            <Button
              href={BOOK_A_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              withArrow
            >
              Book a call
            </Button>
          </div>

          {/* Cross-links to other solutions */}
          <div className="mt-20 border-t border-graphite-line pt-10">
            <p className="t-eyebrow mb-6 text-gray-mid">Explore other solutions</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => (
                <TextLink key={s.slug} href={`/solutions/${s.slug}`}>
                  {s.eyebrow}
                </TextLink>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
