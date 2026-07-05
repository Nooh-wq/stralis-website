"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/layout";
import { Button } from "@/components/ui/Button";
import { EASE_OUT } from "@/lib/motion";
import { BOOK_A_CALL_URL } from "@/lib/content";
import { HeroLight } from "./HeroLight";

// WebGL light-rays (React Bits SideRays) — client-only.
const SideRays = dynamic(() => import("@/components/SideRays"), { ssr: false });

/*
 * Hero. Tall, full-bleed section with a dark mountain background image (subtle
 * scroll parallax), light rays cascading from the top-right corner (brand
 * orange + white), and two columns: copy on the left, the brand symbol on the
 * right with a cursor-reactive light (see HeroLight). Headline renders as two
 * beats — "Engineering, accelerated by AI." (white) and "Judgment, not
 * automated." with a single orange emphasis on "Judgment".
 */
export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Subtle parallax only — background drifts ~7% of its own height, capped
  // per brand restraint (never a dramatic scroll-scrub effect).
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-3%", "4%"],
  );

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-24 pb-20 md:min-h-[90vh] md:pt-28 md:pb-28"
    >
      {/* Background image — overscanned so the parallax drift never reveals an edge */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -z-[8]"
        style={{ top: "-6%", height: "112%", y: parallaxY }}
      >
        <Image
          src="/hero/mountain-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Darkens the image and fades to solid black at the bottom — seamless
          transition into the next section. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[7]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Light rays from the top-right corner — behind all content */}
      <div className="pointer-events-none absolute inset-0 -z-[5]">
        <SideRays origin="top-right" />
      </div>

      <Container className="w-full">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left: copy */}
          <div className="flex flex-col">
            <motion.p className="t-eyebrow mb-8 text-gray-mid" {...rise(0)}>
              IT engineering studio
            </motion.p>

            <h1 className="t-display-1 max-w-[14ch] text-white">
              <motion.span className="block" {...rise(0.08)}>
                Engineering, accelerated by AI.
              </motion.span>
              <motion.span className="block" {...rise(0.2)}>
                <span className="text-orange">Judgment</span>, not automated.
              </motion.span>
            </h1>

            <motion.p
              className="t-body-lg measure mt-10 text-gray-mid"
              {...rise(0.32)}
            >
              The Stralis designs and ships software, SaaS products, MVPs, and
              AI/ML systems for companies who can&apos;t afford to guess. Our
              engineers write the code. AI is where it earns its place in your
              product, not a layer we bolt on for the sake of it.
            </motion.p>

            <motion.div className="mt-12 flex flex-wrap gap-4" {...rise(0.42)}>
              <Button
                href={BOOK_A_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Book a call
              </Button>
              <Button href="/work" size="lg" variant="ghost" withArrow>
                View work
              </Button>
            </motion.div>
          </div>

          {/* Right: brand symbol + cursor-reactive light */}
          <motion.div
            className="mx-auto w-full max-w-[380px] sm:max-w-[460px] lg:mx-0 lg:ml-auto lg:max-w-[520px]"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.2 }}
          >
            <HeroLight />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
