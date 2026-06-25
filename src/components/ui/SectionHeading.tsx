import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/*
 * Section header: eyebrow + heading (+ optional lede). Wrapped in a Reveal so
 * every section gets a consistent entrance without per-section boilerplate.
 * Emphasize at most one word by passing it as <span className="text-orange">…</span>.
 */
export function SectionHeading({
  eyebrow,
  index,
  total,
  title,
  lede,
  as = "h2",
  size = "display-2",
  align = "left",
  className,
}: {
  eyebrow?: React.ReactNode;
  index?: number;
  total?: number;
  title: React.ReactNode;
  lede?: React.ReactNode;
  as?: "h1" | "h2";
  size?: "display-2" | "h1";
  align?: "left" | "center";
  className?: string;
}) {
  const Tag = as;
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow index={index} total={total}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag className={cn(size === "display-2" ? "t-display-2" : "t-h1", "text-white text-balance")}>
        {title}
      </Tag>
      {lede && (
        <p className={cn("t-body-lg measure text-gray-mid", align === "center" && "mx-auto")}>
          {lede}
        </p>
      )}
    </Reveal>
  );
}
