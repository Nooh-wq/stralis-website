"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

/*
 * Count-up that runs once when scrolled into view. Reduced motion / non-visible
 * shows the final value immediately. Numerals are tabular (Geist Mono) so a
 * column of stats stays aligned while animating.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!isInView) return;

    if (reduce) {
      node.textContent = String(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE_OUT,
      onUpdate: (v) => {
        node.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [isInView, value, reduce]);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref} className="tabular">
        0
      </span>
      {suffix}
    </span>
  );
}
