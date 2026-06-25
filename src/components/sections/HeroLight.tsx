"use client";

import { useRef } from "react";

/*
 * Hero symbol with cursor-reactive light (Vercel-style). White light emanates
 * from the brand mark and tracks the pointer: the light is masked by the symbol
 * shape so it reads as light shining *through* the glyph, with a soft ambient
 * halo behind it.
 *
 * The light position is driven by two CSS custom properties (--mx/--my, in %)
 * updated on pointer move and smoothed by a CSS transition (see @property in
 * globals.css). No JS animation loop — cheap, and it idles when the cursor is
 * still. Reduced motion keeps it centered and skips tracking.
 *
 * The mask is the standalone Stralis "S" symbol (portrait). Size is set by
 * height so the tall mark stays centered within the square stage.
 */
const SYMBOL = {
  src: "/brand/symbol-white.svg",
  size: "auto 62%",
};

const LIGHT =
  "radial-gradient(circle at calc(var(--mx) * 1%) calc(var(--my) * 1%), #ffffff 0%, rgba(255,255,255,0.85) 14%, rgba(255,255,255,0.25) 34%, rgba(255,255,255,0.05) 52%, transparent 66%)";
const HALO =
  "radial-gradient(closest-side at calc(var(--mx) * 1%) calc(var(--my) * 1%), rgba(255,255,255,0.18), rgba(255,255,255,0.04) 45%, transparent 70%)";

export function HeroLight() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", String(((e.clientX - r.left) / r.width) * 100));
    el.style.setProperty("--my", String(((e.clientY - r.top) / r.height) * 100));
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "50");
    el.style.setProperty("--my", "42");
  };

  const maskStyle = {
    WebkitMaskImage: `url(${SYMBOL.src})`,
    maskImage: `url(${SYMBOL.src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: SYMBOL.size,
    maskSize: SYMBOL.size,
  } as const;

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative aspect-square w-full select-none [transition:--mx_0.3s_var(--ease-out-brand),--my_0.3s_var(--ease-out-brand)]"
      aria-hidden
    >
      {/* Ambient halo — soft light spilling out behind the mark */}
      <div
        className="absolute inset-0"
        style={{ background: HALO, filter: "blur(36px)" }}
      />

      {/* Base mark — faint, so the whole symbol is always legible */}
      <div
        className="absolute inset-0"
        style={{ ...maskStyle, background: "rgba(255,255,255,0.10)" }}
      />

      {/* Light shining through the mark, brightest under the cursor */}
      <div className="absolute inset-0" style={{ ...maskStyle, background: LIGHT }} />

      {/* Hairline frame ticks — subtle schematic framing of the symbol stage */}
      <Corners />
    </div>
  );
}

function Corners() {
  const common = "absolute h-4 w-4 border-graphite-line";
  return (
    <>
      <span className={`${common} left-0 top-0 border-l border-t`} />
      <span className={`${common} right-0 top-0 border-r border-t`} />
      <span className={`${common} bottom-0 left-0 border-b border-l`} />
      <span className={`${common} bottom-0 right-0 border-b border-r`} />
    </>
  );
}
