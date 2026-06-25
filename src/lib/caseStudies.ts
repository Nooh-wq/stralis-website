/*
 * Case studies. PLACEHOLDER / DUMMY content — built from the Project Atlas
 * template to establish the case-study page structure. Each of the four work
 * projects currently reuses this template body; swap in real per-project details
 * and real outcome metrics when available. Do NOT treat the Outcome as real data.
 */

import { PROJECTS } from "./content";

type TechGroup = { label: string; items: string };

const TEMPLATE = {
  shortDescription:
    "A SaaS platform rebuild for a mid-market logistics company, replacing a legacy system that couldn't keep pace with their growth.",
  problem:
    "The client was running a 6-year-old internal platform that had been patched repeatedly to handle new business lines it was never designed for. Page load times had degraded to the point where dispatch teams were losing time every shift, and the system couldn't support the reporting their leadership team needed to make decisions. Every new feature request took weeks longer than it should have, because the codebase had no clear architecture left to build on.",
  solution:
    "We rebuilt the platform from the ground up, starting with the workflows that mattered most to dispatch and operations teams rather than migrating every legacy feature as-is. The new system was built on a modern, modular architecture so future features could be added in days, not weeks. We integrated a lightweight predictive model to help dispatch teams anticipate delays before they happened, scoped specifically to that one use case rather than added as a general AI feature.",
  techStack: [
    { label: "Frontend", items: "React, TypeScript, Tailwind CSS" },
    { label: "Backend", items: "Node.js, PostgreSQL" },
    { label: "Infrastructure", items: "AWS, Docker" },
    {
      label: "AI / ML",
      items: "Python predictive model for delay forecasting, integrated via API",
    },
  ] as TechGroup[],
  gallery: [
    "Dashboard view",
    "Mobile view",
    "Before / after comparison",
    "Architecture diagram",
    "Team workflow",
    "Open slot",
  ],
};

export type CaseStudy = typeof TEMPLATE & { slug: string; title: string };

export const CASE_STUDIES: CaseStudy[] = PROJECTS.map((p) => ({
  ...TEMPLATE,
  slug: p.slug,
  title: p.name,
}));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
