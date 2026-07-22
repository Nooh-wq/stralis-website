/*
 * Centralized site copy. Marketing text the brief pinned as "verbatim" lives
 * here unchanged (services, reviews). Edit copy here, not in components.
 */

import { SOLUTION_LINKS } from "./solutions";

export type NavLink = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Solutions", href: "/#services", children: SOLUTION_LINKS },
  { label: "Stralis Method", href: "/stralis-method" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT_EMAIL = "hello@thestralis.com";

/* External scheduling link used by every "Book a call" CTA. */
export const BOOK_A_CALL_URL = "https://cal.com/noohthestralis/30min";

export const PHONE = { display: "(602) 600-6618", href: "tel:+16026006618" };

/* Registered US legal entity — used in legal-disclosure spots only (footer
 * copyright, Privacy/Cookie policy identification + contact sections). Brand
 * name "The Stralis" everywhere else stays unchanged. */
export const LEGAL_ENTITY_NAME = "The Stralis LLC";
export const LEGAL_ENTITY_ADDRESS =
  "3101 N. Central Ave, Ste 183 #7425, Phoenix, Arizona 85012, US";

/* TODO: replace with the real office addresses before launch. */
export const OFFICES = [
  { name: "Office one", lines: ["Address line — pending", "City, Country"] },
  { name: "Office two", lines: ["Address line — pending", "City, Country"] },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/thestralis" },
  { label: "Instagram", href: "https://www.instagram.com/the.stralis/" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Cookie policy", href: "/cookies" },
] as const;

/* Section 3 — Services. Each links to its full /solutions/<slug> page. */
export const SERVICES = [
  {
    slug: "digital-products-platforms",
    eyebrow: "Digital products",
    title: "Build digital experiences that support growth",
    description:
      "Websites, platforms, and applications designed to improve customer experiences and create new opportunities for growth.",
  },
  {
    slug: "custom-business-applications",
    eyebrow: "Business applications",
    title: "Improve efficiency across your operations",
    description:
      "Applications that streamline processes, improve visibility, and support more effective day-to-day operations.",
  },
  {
    slug: "data-ai",
    eyebrow: "Data & AI",
    title: "Turn information into insights and action",
    description:
      "Solutions that help organizations make informed decisions and uncover opportunities for improvement.",
  },
  {
    slug: "cloud-infrastructure",
    eyebrow: "Cloud & infrastructure",
    title: "Modern technology built for business growth",
    description:
      "Cloud and infrastructure solutions that support performance, scalability, security, and long-term success.",
  },
  {
    slug: "digital-trust-blockchain",
    eyebrow: "Digital trust & blockchain",
    title: "Strengthen trust in digital interactions",
    description:
      "Secure solutions that improve transparency, protect information, and support trusted business processes.",
  },
  {
    slug: "experience-design",
    eyebrow: "Experience design",
    title: "Create better experiences for users",
    description:
      "Research, strategy, and design services that improve usability, adoption, and customer satisfaction.",
  },
] as const;

/* Section 4 — Applied AI pillars. */
export const AI_PILLARS = [
  {
    title: "AI as a service",
    description:
      "We design and build the AI and ML layer itself when a product needs one: recommendation systems, document intelligence, agents, predictive models. This is engineering work, built and owned by our team, not an API call we relabel.",
  },
  {
    title: "Integrated, not injected",
    description:
      "When an existing project can genuinely benefit from AI, we build it in deliberately, scoped to a real use case. We do not add AI features to a product just to say the product has AI.",
  },
  {
    title: "Honest scoping",
    description:
      "If AI is not the right tool for a problem, we say so before we start, not after we've billed for it. Knowing when not to use AI is as much a part of the service as building it.",
  },
] as const;

/* Section 5 — Work. Each links to its /work/<slug> case study. */
export const PROJECTS = [
  { name: "Galaxy Techno", slug: "galaxy-techno" },
  { name: "NovaHealth", slug: "novahealth" },
  { name: "GT Motors", slug: "gt-motors" },
  { name: "Repair4u", slug: "repair4u" },
] as const;

/* Section 6 — Stats. Real placeholder figures per brief (3 shown). */
export const STATS = [
  { label: "Clients assisted", value: 40, suffix: "+" },
  { label: "Client retention", value: 92, suffix: "%" },
  { label: "Countries reached", value: 12, suffix: "+" },
] as const;

/* Section 7 — Client reviews. Verbatim, real attribution per brief. */
export const REVIEWS = [
  {
    quote:
      "Stralis did a great job on my MVP. We will work together again.",
    name: "Sean Burke",
    location: "United States",
  },
  {
    quote:
      "The Stralis did a great job on the dev work. They understood the requirements clearly, communicated well throughout the process, and implemented the changes exactly as requested. The final result works smoothly and looks much better on the site. I'd be happy to work with them again on future updates.",
    name: "Matthew",
    location: "United Kingdom",
  },
  {
    quote:
      "Loved working with Stralis, They listened to everything and nailed it!",
    name: "Liam Tilenius",
    location: "United States",
  },
  {
    quote:
      "The best devs in the game. Does a good job every time and has a good understanding.",
    name: "Melville",
    location: "United Kingdom",
  },
  {
    quote:
      "One of the best I have worked with, hands down. I had many offers and I am glad I went with Stralis, They exceeded expectations, thank you.",
    name: "Taylor Hill",
    location: "United States",
  },
  {
    quote: "Great to work with",
    name: "Isaiah Xavier",
    location: "United States",
  },
] as const;
