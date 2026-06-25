/*
 * Solutions — full content for the six standalone solution pages
 * (/solutions/<slug>). Edit copy here; the route and the homepage cards read
 * from this single source.
 */

export type Solution = {
  slug: string;
  eyebrow: string;
  headline: string;
  intro: string;
  builds: { title: string; description: string }[];
  howWeWork: string;
  outcome: string;
  cta: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "digital-products-platforms",
    eyebrow: "Digital Products & Platforms",
    headline: "Build digital experiences that support growth",
    intro:
      "Digital platforms play an important role in how businesses engage customers, deliver services, and support growth. We help organizations build digital products that improve customer experiences and create new opportunities for growth, from a first website to a full SaaS platform.",
    builds: [
      {
        title: "Corporate Websites",
        description:
          "Professional websites that showcase your business, build credibility, and make it easier for potential customers to engage with your services.",
      },
      {
        title: "SaaS Platforms",
        description:
          "We build SaaS platforms that help organizations deliver services online, create recurring revenue opportunities, and scale their offerings more efficiently.",
      },
      {
        title: "Customer Portals",
        description:
          "Customer portals that give users direct access to information, services, and support while reducing administrative effort for internal teams.",
      },
      {
        title: "Mobile Applications",
        description:
          "Mobile applications designed to improve accessibility, strengthen customer engagement, and keep your business connected with customers wherever they are.",
      },
    ],
    howWeWork:
      "We start by mapping the platform to your actual user journeys, not a generic template. From there we move in short build cycles, shipping a working version early so you're testing with real users instead of waiting for a single big release.",
    outcome:
      "A platform that holds up under real usage, not just a demo. Built to scale with you as your user base grows.",
    cta: "Let's build your digital platform",
  },
  {
    slug: "custom-business-applications",
    eyebrow: "Custom Business Applications",
    headline: "Improve efficiency across your operations",
    intro:
      "Efficient operations depend on systems that support collaboration, visibility, and productivity. Our custom business applications help organizations streamline processes, improve efficiency, and support business growth, built around how your team actually works, not how off-the-shelf software assumes you work.",
    builds: [
      {
        title: "CRM Solutions",
        description:
          "Centralized CRM solutions that help teams manage customer relationships, track opportunities, and deliver more consistent customer experiences.",
      },
      {
        title: "ERP Solutions",
        description:
          "ERP solutions that connect key business functions, improve visibility across departments, and support more efficient day-to-day operations.",
      },
      {
        title: "Workflow Automation",
        description:
          "We automate repetitive tasks and business processes so teams can spend less time on manual work and more time focusing on priorities that drive results.",
      },
      {
        title: "System Integrations",
        description:
          "Connected business systems that improve the flow of information, reduce duplicate work, and support better decision-making across the organization.",
      },
    ],
    howWeWork:
      "We audit the existing process first, including the workarounds your team has already built to cope with bad tooling. The application we build replaces those workarounds instead of adding another tool on top of them.",
    outcome:
      "Fewer manual steps, fewer duplicate systems, and a single source of truth your team actually trusts.",
    cta: "Discuss your business requirements",
  },
  {
    slug: "data-ai",
    eyebrow: "Data & AI",
    headline: "Turn information into insights and action",
    intro:
      "Data and AI help organizations make smarter decisions, improve efficiency, and uncover new opportunities. We help businesses turn information into actionable insights and apply AI where it creates measurable value, as a deliberate part of the solution, not a feature added for its own sake.",
    builds: [
      {
        title: "Business Intelligence & Dashboards",
        description:
          "Dashboards that bring key business data into one place, giving leaders greater visibility into performance and helping them make informed decisions.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Reporting and analytics solutions that turn business data into meaningful insights for planning, performance tracking, and strategic decision-making.",
      },
      {
        title: "AI Automation",
        description:
          "AI-powered automation that improves efficiency, reduces manual effort, and increases productivity across everyday operations.",
      },
      {
        title: "Predictive Insights",
        description:
          "Data-driven insights that help organizations identify trends, support forecasting, and make more confident business decisions.",
      },
    ],
    howWeWork:
      "Before any model gets built, we scope the actual decision it needs to support. If a simpler dashboard or report solves the problem, that's what we recommend. AI gets built in only where it earns its place.",
    outcome:
      "Decisions backed by real data instead of guesswork, and AI that's integrated where it solves a specific, measurable problem.",
    cta: "Explore data & AI opportunities",
  },
  {
    slug: "cloud-infrastructure",
    eyebrow: "Cloud & Infrastructure",
    headline: "Modern technology built for business growth",
    intro:
      "Reliable and secure technology is essential for business growth. We help organizations build modern technology foundations that support performance, scalability, and long-term success, so your infrastructure is an asset instead of a constraint.",
    builds: [
      {
        title: "Cloud Migration",
        description:
          "We help businesses move to modern cloud environments that improve flexibility, support growth, and reduce the challenges of maintaining legacy systems.",
      },
      {
        title: "Infrastructure Modernization",
        description:
          "Modernized technology environments that improve performance, support scalability, and create a stronger foundation for future growth.",
      },
      {
        title: "Security & Compliance",
        description:
          "Security and compliance solutions that help organizations reduce risk, protect information, and maintain trust with customers and stakeholders.",
      },
      {
        title: "Infrastructure Management",
        description:
          "Ongoing infrastructure management that helps businesses maintain reliability, reduce disruptions, and keep systems running smoothly.",
      },
    ],
    howWeWork:
      "Migrations and modernization happen in stages, with rollback points built in, not as a single high-risk cutover. You get visibility into every stage before the next one starts.",
    outcome:
      "Infrastructure that scales with demand, costs less to maintain, and doesn't depend on tribal knowledge to keep running.",
    cta: "Strengthen your technology foundation",
  },
  {
    slug: "digital-trust-blockchain",
    eyebrow: "Digital Trust & Blockchain",
    headline: "Strengthen trust in digital interactions",
    intro:
      "Trust, transparency, and security are increasingly important in today's digital economy. We help businesses create secure digital environments that protect information and strengthen confidence in business processes, using blockchain and verification tools where they solve a real trust problem.",
    builds: [
      {
        title: "Smart Contracts",
        description:
          "Smart contract solutions that automate processes, improve efficiency, and reduce reliance on manual verification.",
      },
      {
        title: "Digital Verification",
        description:
          "Trusted verification solutions that improve accuracy, strengthen accountability, and increase confidence in digital interactions.",
      },
      {
        title: "Secure Transactions",
        description:
          "Secure transaction solutions that protect sensitive information, strengthen data integrity, and support trusted business relationships.",
      },
      {
        title: "Blockchain Applications",
        description:
          "We develop blockchain-based applications that improve transparency, strengthen trust, and support secure digital business processes.",
      },
    ],
    howWeWork:
      "We treat blockchain as a tool, not a default. Where a traditional database solves the problem just as well, we say so. Where verifiable, tamper-resistant records actually matter, we build for that specifically.",
    outcome:
      "Digital processes your customers and partners can verify and trust, without unnecessary complexity.",
    cta: "Explore secure digital solutions",
  },
  {
    slug: "experience-design",
    eyebrow: "Experience Design",
    headline: "Create better experiences for users",
    intro:
      "Great user experiences help businesses increase adoption, improve customer satisfaction, and strengthen digital products. We create intuitive experiences that balance user needs with business goals, grounded in research rather than opinion.",
    builds: [
      {
        title: "UX Strategy",
        description:
          "UX strategies that help businesses create intuitive experiences, improve customer satisfaction, and support product adoption.",
      },
      {
        title: "User Research",
        description:
          "Research-driven insights that help organizations better understand customer needs and make informed product decisions.",
      },
      {
        title: "Product Design",
        description:
          "Digital product designs that simplify interactions, improve usability, and help users achieve their goals more easily.",
      },
      {
        title: "Interface Design",
        description:
          "Clear and consistent interfaces that improve usability, strengthen brand perception, and support long-term product adoption.",
      },
    ],
    howWeWork:
      "Design decisions are tested with real users before they're built, not validated after launch. We design the smallest version that proves the concept, then refine based on how people actually use it.",
    outcome:
      "Products people actually want to use, with usability and adoption numbers to back it up.",
    cta: "Create better user experiences",
  },
];

export const SOLUTION_LINKS = SOLUTIONS.map((s) => ({
  label: s.eyebrow,
  href: `/solutions/${s.slug}`,
}));

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
