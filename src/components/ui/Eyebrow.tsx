import { cn } from "@/lib/cn";

/*
 * Mono, uppercase section label. Optional index renders a "01 / 06"-style
 * page-section number (Geist Mono) ahead of the label.
 */
export function Eyebrow({
  children,
  index,
  total,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  index?: number;
  total?: number;
  tone?: "muted" | "orange";
  className?: string;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <p
      className={cn(
        "t-eyebrow inline-flex items-center gap-3",
        tone === "orange" ? "text-orange" : "text-gray-mid",
        className,
      )}
    >
      {index !== undefined && (
        <span className="text-gray-mid">
          {pad(index)}
          {total !== undefined && ` / ${pad(total)}`}
        </span>
      )}
      <span>{children}</span>
    </p>
  );
}
