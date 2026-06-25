"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS, BOOK_A_CALL_URL } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { Close } from "@/components/ui/icons";

/*
 * Full-screen mobile menu. Geometric, fast: a clean top-down clip-path wipe
 * (not a bouncy slide), links fade up in a short stagger. Esc closes; body
 * scroll locks while open; reduced motion falls back to a plain fade.
 */
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-[60] bg-black md:hidden"
          initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
          exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-6 py-5">
              <Logo height={24} />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-white transition-transform duration-150 active:scale-[0.92] focus-visible:outline-orange"
              >
                <Close size={24} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 py-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: EASE_OUT,
                    delay: reduce ? 0 : 0.12 + i * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-2.5 text-3xl font-semibold tracking-tight text-white transition-colors hover:text-orange"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mb-2 ml-0.5 flex flex-col gap-1 border-l border-graphite-line pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-1.5 text-base text-gray-mid transition-colors hover:text-orange"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="border-t border-graphite-line px-6 py-6">
              <Button
                href={BOOK_A_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full"
                onClick={onClose}
              >
                Book a call
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
