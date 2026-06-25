"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT, inView } from "@/lib/motion";

/*
 * Scroll-triggered fade-up. Triggers once, slightly before fully in view.
 * Respects prefers-reduced-motion: opacity-only, no movement (shows end state).
 * Pass `delay` for staggered grids (e.g. index * 0.06).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.3 : 0.5, ease: EASE_OUT, delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
