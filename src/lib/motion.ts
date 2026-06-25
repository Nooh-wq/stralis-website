import type { Variants } from "framer-motion";

/*
 * One easing curve family, reused site-wide (brand restraint — no mixing
 * bounce/spring/linear across sections). Mirrors the CSS tokens in globals.css.
 */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

/** Standard section / element entrance: short, fast fade-up. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/** Reduced-motion entrance: end state, opacity only, no movement. */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: EASE_OUT } },
};

/** Parent for staggered grids (Services, Reviews, pillars). */
export const staggerParent = (stagger = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Shared in-view viewport config — trigger once, slightly before fully visible. */
export const inView = { once: true, margin: "-80px" } as const;
