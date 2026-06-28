"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

// Mirrors the hero ColumnRevealImage: same easing, panel ratios and stagger so
// the header lifts away as one continuous column curtain with the hero.
const REVEAL_EASE = [0.76, 0, 0.24, 1] as const;
const REVEAL_WIDTHS = [0.25, 2, 2, 2, 0.25] as const;
const REVEAL_ORDER = [1, 5, 2, 3, 4] as const;

function Wordmark({
  onClick,
  light,
}: {
  onClick?: () => void;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "font-display text-lg md:text-xl font-extrabold tracking-tight leading-none transition-colors",
        light ? "text-white" : "text-dark"
      )}
      aria-label={`${site.brand} — home`}
    >
      {site.brand}<span className="text-accent">.</span>
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

  // Transparent, light-text header while sitting over the dark home hero.
  const light = pathname === "/" && !scrolled && !open;

  // Columns 3–5: a solid white panel slides down into view as you scroll
  // (home only) — matching the reference's clean white slide, not a fade.
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  const whiteY = useTransform(scrollY, [0, 300], ["-100%", "0%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled} data-light={light}>
      {/* Column backdrop — column 2 is always white (behind the wordmark);
          columns 3–5 fill white gradually with scroll; column 1 stays clear. */}
      <div
        className="absolute inset-x-0 top-0 h-16 md:h-20 z-0 flex pointer-events-none overflow-hidden"
        aria-hidden
      >
        {REVEAL_WIDTHS.map((ratio, i) => {
          const base = { flexGrow: ratio, flexBasis: 0 };
          // Column 2 — always white (logo block).
          if (i === 1) {
            return <div key={i} className="h-full bg-white" style={base} />;
          }
          // Columns 3 & 4 — solid white slides down with scroll on home.
          if (i === 2 || i === 3) {
            return (
              <motion.div
                key={i}
                className="h-full bg-white"
                style={{ ...base, y: isHome ? whiteY : "0%" }}
              />
            );
          }
          // Columns 1 & 5 — stay transparent.
          return <div key={i} className="h-full" style={base} />;
        })}
      </div>

      <div className="relative z-10 shell flex items-center justify-between h-16 md:h-20">
        {/* Sits on the white column, so keep it dark regardless of hero. */}
        <Wordmark onClick={() => setOpen(false)} light={false} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {nav.slice(0, 2).map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                // White text + difference blend = auto-inverting: the label
                // renders dark over light areas and light over dark areas,
                // so it stays legible over the hero image or any page section.
                className={cn(
                  "text-sm font-medium text-white mix-blend-difference transition-opacity hover:opacity-70",
                  active && "underline underline-offset-[6px] decoration-1"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className={cn("btn", light && "btn--light")}>
            Contact
            <span className="btn__arrow" aria-hidden>
              →
            </span>
          </Link>
        </nav>

        {/* Mobile toggle */}
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
                "absolute left-0 top-0 h-0.5 w-6 rounded-full transition-transform duration-300",
                light ? "bg-white" : "bg-dark",
                open && "translate-y-1.25 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-0.5 w-6 rounded-full transition-transform duration-300",
                light ? "bg-white" : "bg-dark",
                open && "-translate-y-1 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {/* Column-reveal curtain — same staggered vertical panels as the hero,
          lifting away on load so the header reveals in sync with it. */}
      {!reduce && (
        <div
          className="absolute inset-x-0 top-0 h-16 md:h-20 z-20 flex overflow-hidden pointer-events-none"
          aria-hidden
        >
          {REVEAL_WIDTHS.map((ratio, i) => {
            const step = (REVEAL_ORDER as readonly number[]).indexOf(i + 1);
            return (
              <motion.div
                key={i}
                className="h-full bg-white border-r border-line last:border-r-0"
                initial={{ y: "0%" }}
                animate={{ y: "-101%" }}
                transition={{
                  duration: 0.85,
                  ease: REVEAL_EASE,
                  delay: 0.2 + (step === -1 ? i : step) * 0.085,
                }}
                style={{ flexGrow: ratio, flexBasis: 0, willChange: "transform" }}
              />
            );
          })}
        </div>
      )}

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="shell pt-24 pb-12 h-full flex flex-col">
              <nav className="flex flex-col" aria-label="Mobile">
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
                        className="flex items-center justify-between gap-4 py-5 border-b border-line"
                      >
                        <span
                          className={cn(
                            "font-display text-4xl font-bold tracking-tight",
                            active ? "text-accent" : "text-dark"
                          )}
                        >
                          {item.label}
                        </span>
                        <span className="text-sm text-slate">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto pt-10 text-sm text-slate space-y-2">
                <a href={`mailto:${site.email}`} className="block ulink">
                  {site.email}
                </a>
                <p>{site.locationLine}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
