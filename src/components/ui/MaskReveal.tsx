"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT, inView } from "@/lib/motion";

/*
 * Clip-path wipe reveal for short, punchy lines (e.g. "AI-augmented.
 * Engineer-led."). A left-to-right inset wipe reads as more crafted than a
 * plain fade — used sparingly, only where there are few such moments.
 * Reduced motion shows the line immediately.
 *
 * Render one MaskReveal per line and pass an incrementing `delay` to cascade.
 */
export function MaskReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <span className={className}>{children}</span>;

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      viewport={inView}
      transition={{ duration: 0.7, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.span>
  );
}
