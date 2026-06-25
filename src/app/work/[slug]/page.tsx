import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { ArrowRight } from "@/components/ui/icons";
import { CASE_STUDIES, getCaseStudy } from "@/lib/caseStudies";
import { BOOK_A_CALL_URL } from "@/lib/content";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return { title: study.title, description: study.shortDescription };
}

/* Schematic placeholder tile — no fabricated screenshots. */
function PlaceholderTile({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden border border-graphite-line bg-black ${className ?? ""}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />
      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 border border-gray-mid" />
      <span className="absolute left-5 top-5 t-mono text-gray-dark">{label}</span>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = CASE_STUDIES.filter((c) => c.slug !== slug);

  return (
    <>
      {/* Title */}
      <Section className="pb-10 pt-16 md:pb-12 md:pt-24">
        <Container>
          <Reveal className="flex flex-col gap-6">
            <Link
              href="/work"
              className="t-mono inline-flex w-fit items-center gap-2 text-gray-mid transition-colors hover:text-orange"
            >
              <ArrowRight size={14} className="rotate-180" />
              All work
            </Link>
            <Eyebrow tone="orange">Case study</Eyebrow>
            <h1 className="t-display-1 max-w-[16ch] text-balance text-white">
              {study.title}
            </h1>
            <p className="t-body-lg measure text-gray-mid">
              {study.shortDescription}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Hero image */}
      <Container>
        <Reveal>
          <PlaceholderTile label="Hero image — pending" className="aspect-[16/9] w-full" />
        </Reveal>
      </Container>

      {/* Problem + Solution */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>Problem statement</Eyebrow>
              <p className="t-body measure text-gray-light">{study.problem}</p>
            </Reveal>
            <Reveal delay={0.06} className="flex flex-col gap-5">
              <Eyebrow>Solution</Eyebrow>
              <p className="t-body measure text-gray-light">{study.solution}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Tech stack */}
      <Section className="border-t border-graphite-line pt-16 md:pt-20">
        <Container>
          <Reveal>
            <h2 className="t-h1 mb-10 text-white md:mb-12">Tech stack</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px border border-graphite-line bg-graphite-line sm:grid-cols-2 lg:grid-cols-4">
            {study.techStack.map((group, i) => (
              <Reveal
                key={group.label}
                delay={(i % 4) * 0.05}
                className="flex flex-col gap-3 bg-black p-8"
              >
                <span className="t-eyebrow text-orange">{group.label}</span>
                <span className="t-body-sm text-gray-light">{group.items}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcome */}
      <Section className="pt-0 md:pt-0">
        <Container>
          <Reveal className="flex flex-col gap-5">
            <Eyebrow tone="orange">Outcome</Eyebrow>
            <p className="t-h2 measure border-l-2 border-orange pl-6 text-white">
              Quantified results will appear here once real metrics are available
              — load-time improvement, reduction in manual dispatch corrections,
              time saved per shift.
            </p>
            <p className="t-mono text-gray-dark">
              Placeholder — no fabricated numbers shown until real data is provided.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Gallery */}
      <Section className="border-t border-graphite-line pt-16 md:pt-20">
        <Container>
          <Reveal>
            <h2 className="t-h1 mb-10 text-white md:mb-12">Project gallery</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {study.gallery.map((label, i) => (
              <Reveal key={label} delay={(i % 3) * 0.05}>
                <PlaceholderTile label={label} className="aspect-[4/3] w-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA + cross-links */}
      <Section className="border-t border-graphite-line">
        <Container>
          <div className="flex flex-col items-start gap-8">
            <h2 className="t-display-2 max-w-[18ch] text-balance text-white">
              Have a project like this?
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

          <div className="mt-20 border-t border-graphite-line pt-10">
            <p className="t-eyebrow mb-6 text-gray-mid">More work</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((c) => (
                <TextLink key={c.slug} href={`/work/${c.slug}`}>
                  {c.title}
                </TextLink>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
