import { Container } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

/*
 * Minimal "page in progress" state for routes that exist so the nav resolves
 * but aren't designed yet. Deliberately bare — just the section eyebrow + a
 * one-line placeholder + a route home.
 */
export function PageInProgress({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center gap-6 py-24">
      <Eyebrow tone="orange">{eyebrow}</Eyebrow>
      <h1 className="t-display-2 max-w-[16ch] text-white text-balance">{title}</h1>
      <p className="t-body-lg measure text-gray-mid">
        This page is in progress. We&apos;re building it out next — the rest of
        the site is live in the meantime.
      </p>
      <Button href="/" variant="ghost" withArrow className="mt-2">
        Back to home
      </Button>
    </Container>
  );
}
