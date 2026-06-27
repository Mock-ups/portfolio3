"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="font-display text-xl md:text-2xl font-bold tracking-tight leading-none"
      aria-label={`${site.name} — home`}
    >
      Form <span className="text-redline">&amp;</span> Field
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="shell flex items-center justify-between h-16 md:h-20">
        <Wordmark onClick={() => setOpen(false)} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] py-2 transition-colors",
                  active ? "text-ink" : "text-graphite hover:text-ink"
                )}
              >
                <span
                  className={cn(
                    "h-px w-0 bg-redline transition-all duration-300",
                    active ? "w-4" : "group-hover:w-4"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle — 44px target */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden grid place-items-center w-11 h-11 -mr-2"
        >
          <span className="relative block w-6 h-3">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-300",
                open && "translate-y-1.25 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-6 bg-ink transition-transform duration-300",
                open && "-translate-y-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-paper"
            initial={reduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="shell pt-24 pb-12 h-full flex flex-col">
              <nav
                className="flex flex-col gap-1 border-t border-line"
                aria-label="Mobile"
              >
                {nav.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline justify-between gap-4 py-5 border-b border-line"
                      >
                        <span
                          className={cn(
                            "font-display text-4xl font-bold tracking-tight",
                            active ? "text-redline" : "text-ink"
                          )}
                        >
                          {item.label}
                        </span>
                        <span className="font-mono text-xs text-graphite">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto pt-10 font-mono text-xs text-graphite space-y-2">
                <a href={`mailto:${site.email}`} className="block ulink">
                  {site.email}
                </a>
                <p>
                  {site.city}, {site.country}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
