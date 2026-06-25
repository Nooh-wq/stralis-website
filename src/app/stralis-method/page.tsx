import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { GridBackground } from "@/components/ui/GridBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BOOK_A_CALL_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stralis Method",
  description:
    "How we work: discover, architect, build, deploy, and evolve — lean, outcome-first delivery engineered for scale.",
};

const STEPS = [
  {
    title: "Discover & Define",
    body: "We start by understanding your goals, your users, and the constraints you're actually working under. That research becomes a clear, actionable roadmap, not a deck that sits unused after kickoff.",
  },
  {
    title: "Architect with Purpose",
    body: "No fluff, no over-engineering. We design clean, scalable solutions sized to what you need now, from MVP to full-scale platform. If AI has a role to play, we scope it here, deliberately, not as an afterthought.",
  },
  {
    title: "Build & Iterate Rapidly",
    body: "We ship fast, test early, and improve continuously. Full transparency, tight feedback loops, and engineers who stay close to the problem instead of disappearing into a sprint backlog.",
  },
  {
    title: "Deploy & Monitor",
    body: "We make deployment pain-free and give you real visibility into how your system performs after launch. Reliability and uptime you can verify, not just take our word for.",
  },
  {
    title: "Evolve & Expand",
    body: "Growth isn't a buzzword here. We evolve your product iteratively, adding features, refining the experience, and maximizing return on what you've already built.",
  },
];

const CLOSING = [
  "Client-centric from day one",
  "Lean, outcome-first delivery",
  "Engineered for scale and reliability",
  "Decisions backed by data",
];

export default function StralisMethodPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <GridBackground className="-z-10" />
        <Container>
          <Reveal className="flex flex-col gap-6">
            <Eyebrow tone="orange">The Stralis Method</Eyebrow>
            <h1 className="t-display-1 max-w-[18ch] text-balance text-white">
              Engineering what others only imagine
            </h1>
            <p className="t-body-lg measure mt-2 text-gray-mid">
              A deliberate, five-stage process — from understanding the problem to
              evolving the product long after launch. Lean where it counts,
              rigorous where it matters.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Steps */}
      <Section className="pt-8 md:pt-12">
        <Container>
          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.title}
                delay={(i % 2) * 0.05}
                className="grid grid-cols-1 gap-6 border-t border-graphite-line py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="flex items-start gap-5 md:col-span-5">
                  <span className="t-mono pt-2 text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="t-display-2 text-white">{step.title}</h2>
                </div>
                <p className="t-body-lg measure text-gray-mid md:col-span-6 md:col-start-7">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing strip */}
      <Section className="border-t border-graphite-line py-16 md:py-20">
        <Container>
          <Reveal className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center">
            {CLOSING.map((phrase, i) => (
              <span key={phrase} className="t-mono inline-flex items-center text-gray-mid">
                {i > 0 && <span className="mr-4 text-gray-dark">—</span>}
                {phrase}
              </span>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-graphite-line pt-16 md:pt-20">
        <Container>
          <div className="flex flex-col items-start gap-8">
            <h2 className="t-display-2 max-w-[18ch] text-balance text-white">
              Let&apos;s build what you&apos;ve been imagining.
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
        </Container>
      </Section>
    </>
  );
}
