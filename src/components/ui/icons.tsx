/*
 * Line icons only. Stroke ~1.5px at 24px, square caps, 0 corner radius.
 * Color is inherited via `currentColor` so the one "draw-the-eye" icon can be
 * orange while the rest stay white/gray per context.
 */
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="3" y1="12" x2="20" y2="12" />
      <polyline points="14 6, 20 12, 14 18" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <line x1="7.5" y1="7" x2="7.5" y2="7" strokeWidth={2} />
      <path d="M11.5 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <line x1="11.5" y1="10" x2="11.5" y2="17" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17" y1="7" x2="17" y2="7" strokeWidth={2} />
    </svg>
  );
}
