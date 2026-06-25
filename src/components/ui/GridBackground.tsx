import { cn } from "@/lib/cn";

/*
 * Faint blueprint grid — a restrained schematic backdrop (on-brand: line
 * geometry, not decoration). Edge-faded with a radial mask so it never competes
 * with content. Decorative only.
 */
export function GridBackground({
  className,
  size = 64,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--color-graphite-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-graphite-line) 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 45%, black 20%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at 50% 45%, black 20%, transparent 78%)",
        opacity: 0.45,
      }}
    />
  );
}
