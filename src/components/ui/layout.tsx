import { cn } from "@/lib/cn";

/** Centered content column. ~1200px max, consistent gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

/** Vertical rhythm wrapper for page sections. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-24 md:py-36 lg:py-48", className)}>
      {children}
    </section>
  );
}
