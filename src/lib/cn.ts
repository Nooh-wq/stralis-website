/** Tiny classname joiner — filters falsy values. No extra deps. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
