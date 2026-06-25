import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

/*
 * Inline action link ("Explore Solutions →", "View →"). Text shifts to the
 * brand orange on hover and the arrow nudges — orange stays a hover-only signal
 * rather than competing at rest.
 */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-white",
        "transition-colors duration-150 [transition-timing-function:var(--ease-out-brand)]",
        "hover:text-orange focus-visible:text-orange",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        size={16}
        className="transition-transform duration-150 [transition-timing-function:var(--ease-out-brand)] group-hover:translate-x-1"
      />
    </Link>
  );
}
