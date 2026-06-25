import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium " +
  "transition-[transform,background-color,border-color,color] duration-150 " +
  "[transition-timing-function:var(--ease-out-brand)] active:scale-[0.97] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange " +
  "select-none";

const variants: Record<Variant, string> = {
  // Orange fill — primary action. Orange-on-black/white text passes AA at this size/weight.
  primary: "bg-orange text-black hover:bg-orange-deep",
  // Ghost / outline — secondary. Hairline that brightens on hover.
  ghost:
    "border border-white/25 text-white hover:border-white hover:bg-white/[0.04]",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;
type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

function Arrow() {
  // Subtle nudge on hover — the one place motion signals "this goes somewhere".
  return (
    <ArrowRight
      size={18}
      className="transition-transform duration-150 [transition-timing-function:var(--ease-out-brand)] group-hover:translate-x-0.5"
    />
  );
}

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", withArrow, className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, ...rest } =
      props;
    void _v; void _s; void _a; void _c; void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
        {withArrow && <Arrow />}
      </Link>
    );
  }

  const { variant: _v, size: _s, withArrow: _a, className: _c, children: _ch, ...rest } =
    props as AsButton;
  void _v; void _s; void _a; void _c; void _ch;
  return (
    <button className={classes} {...rest}>
      {children}
      {withArrow && <Arrow />}
    </button>
  );
}
