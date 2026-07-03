"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, BOOK_A_CALL_URL } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Menu } from "@/components/ui/icons";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

/*
 * Primary navigation, reused site-wide. Transparent over the hero, then gains a
 * graphite hairline + subtle blurred backdrop once the user scrolls — keeps the
 * dark field clean at the top without the bar disappearing on content.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-colors duration-300 [transition-timing-function:var(--ease-out-brand)]",
          scrolled
            ? "border-b border-graphite-line bg-black/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:h-[72px] md:px-8 lg:px-10">
          <Logo height={24} priority />

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (!!link.children && pathname.startsWith("/solutions"));
              const linkClass = cn(
                "text-[0.9375rem] transition-colors duration-150 [transition-timing-function:var(--ease-out-brand)]",
                active ? "text-orange" : "text-gray-light hover:text-white",
              );

              if (link.children) {
                return (
                  <div key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      aria-haspopup="true"
                      className={linkClass}
                    >
                      {link.label}
                    </Link>
                    <div className="pointer-events-none absolute left-0 top-full z-50 w-72 pt-4 group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                      <div className="flex origin-top-left scale-95 flex-col border border-graphite-line bg-black p-2 opacity-0 transition-[transform,opacity] duration-150 [transition-timing-function:var(--ease-out-brand)] group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-3 py-2.5 text-[0.9375rem] text-gray-light transition-colors duration-150 hover:bg-white/[0.04] hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button
                href={BOOK_A_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-white transition-transform duration-150 active:scale-[0.92] focus-visible:outline-orange md:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
