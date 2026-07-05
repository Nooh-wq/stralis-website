import { cn } from "@/lib/cn";

/*
 * Faint bathymetric-style contour lines — nested open isolines, stroke only,
 * no fill/terrain. Purely decorative geometry for a section that wants
 * texture without a background image or visual noise. Sits at very low
 * opacity so it reads as a detail, not a graphic.
 */
export function ContourLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 640"
      className={cn("pointer-events-none", className)}
      fill="none"
    >
      <path d="M120 40 C170 30 210 55 215 100 C238 130 225 175 195 190 C205 225 175 260 135 250 C110 275 65 260 60 220 C30 200 35 155 70 135 C65 100 90 55 120 40 Z" stroke="white" strokeWidth="1" />
      <path d="M118 10 C185 -5 235 30 242 90 C272 128 255 185 215 205 C228 250 188 295 138 282 C105 315 45 296 38 245 C0 218 8 158 52 132 C44 88 78 30 118 10 Z" stroke="white" strokeWidth="1" />
      <path d="M115 -25 C200 -45 265 0 275 75 C315 122 292 195 240 222 C256 280 204 335 140 318 C98 360 20 336 12 272 C-35 238 -25 160 30 126 C20 70 65 0 115 -25 Z" stroke="white" strokeWidth="1" />
      <path d="M112 -65 C218 -90 300 -32 313 62 C363 118 334 208 268 241 C288 313 222 380 143 358 C90 410 -6 379 -16 300 C-73 259 -60 162 8 120 C-4 52 52 -35 112 -65 Z" stroke="white" strokeWidth="1" />
    </svg>
  );
}
