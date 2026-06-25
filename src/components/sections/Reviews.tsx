"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { REVIEWS } from "@/lib/content";

/*
 * Client reviews — horizontal slider. Native scroll-snap track (swipe / trackpad
 * friendly) with prev/next controls that scroll one card at a time and disable
 * at each end. Cards share a uniform height with the attribution pinned to the
 * bottom, so the very uneven quote lengths read as a consistent set.
 */
export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <Section id="reviews">
      <Container>
        <div className="mb-16 flex items-end justify-between gap-6 md:mb-20">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Client reviews</Eyebrow>
            <h2 className="t-display-2 text-white">What clients say.</h2>
          </Reveal>

          <div className="flex shrink-0 gap-3">
            <SliderButton
              label="Previous reviews"
              direction="prev"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
            />
            <SliderButton
              label="Next reviews"
              direction="next"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
            />
          </div>
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-label="Client reviews"
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              data-card
              className="flex w-[85%] flex-none snap-start flex-col justify-between gap-6 border border-graphite-line bg-black p-7 transition-colors duration-200 [transition-timing-function:var(--ease-out-brand)] hover:border-white/25 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <blockquote className="t-body text-gray-light">
                “{review.quote}”
              </blockquote>
              <figcaption className="flex flex-col gap-0.5">
                <span className="t-h3 text-white">{review.name}</span>
                <span className="t-mono text-gray-mid">{review.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SliderButton({
  label,
  direction,
  disabled,
  onClick,
}: {
  label: string;
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-[color,border-color,opacity,transform] duration-150 [transition-timing-function:var(--ease-out-brand)] active:scale-[0.94] focus-visible:outline-orange",
        disabled
          ? "cursor-not-allowed border-graphite-line text-gray-dark opacity-50"
          : "border-white/25 text-white hover:border-orange hover:text-orange",
      )}
    >
      <ArrowRight size={18} className={direction === "prev" ? "rotate-180" : undefined} />
    </button>
  );
}
