import Link from "next/link";
import { Container } from "@/components/ui/layout";
import { Logo } from "./Logo";
import { LinkedIn, Instagram } from "@/components/ui/icons";
import {
  CONTACT_EMAIL,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "@/lib/content";
import { SOLUTION_LINKS } from "@/lib/solutions";

const FOOTER_NAV = [
  { label: "Stralis Method", href: "/stralis-method" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_ICON = { LinkedIn, Instagram } as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-graphite-line bg-black">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-5">
            <Logo height={26} />
            <p className="t-body-sm measure text-gray-mid">
              An IT engineering studio. We design and ship software, SaaS, MVPs,
              and AI/ML systems.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="t-mono w-fit text-gray-light transition-colors hover:text-orange"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:flex-row sm:gap-16">
            <nav aria-label="Solutions" className="flex flex-col gap-3">
              <p className="t-eyebrow text-gray-mid">Solutions</p>
              {SOLUTION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.9375rem] text-gray-light transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav aria-label="Navigate" className="flex flex-col gap-3">
              <p className="t-eyebrow text-gray-mid">Navigate</p>
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-[0.9375rem] text-gray-light transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <p className="t-eyebrow text-gray-mid">Follow</p>
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICON[s.label as keyof typeof SOCIAL_ICON];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[0.9375rem] text-gray-light transition-colors hover:text-white"
                  >
                    <Icon size={18} />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI disclosure — small, mono, muted */}
        <p className="t-mono measure mt-14 text-gray-dark">
          Stralis treats AI as a service we deliver, built and reviewed by our
          own engineers. We are direct about where it is used in your project and
          where it isn&apos;t.
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-graphite-line pt-8 text-gray-mid sm:flex-row sm:items-center sm:justify-between">
          <p className="t-body-sm">© The Stralis 2026. All rights reserved.</p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="t-body-sm transition-colors hover:text-gray-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
