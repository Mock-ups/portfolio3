import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-40 bg-black text-white mt-24 md:mt-40">
      <div className="shell">
        {/* CTA band */}
        <div className="py-20 md:py-28 border-b border-white/10">
          <Link
            href="/contact"
            className="font-display font-extrabold tracking-tight leading-[0.98] block whitespace-nowrap text-[clamp(1.5rem,6.5vw,5rem)] hover:text-accent transition-colors"
          >
            Shape your ideal space.
          </Link>
          {/* Brand statement on the left, CTA button on the right */}
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[46ch]">
              <p className="font-display text-lg md:text-xl font-extrabold tracking-tight">
                {site.brand}<span className="text-accent">.</span>
              </p>
              <p className="mt-3 text-sm md:text-base text-white/60">
                {site.role}. {site.tagline}
              </p>
            </div>
            <Link href="/contact" className="btn btn--light shrink-0">
              Get in touch
              <span className="btn__arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 py-14">
          <nav aria-label="Footer">
            <p className="subtitle subtitle--light mb-5 text-[0.65rem]">Menu</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="ulink">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="ulink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="subtitle subtitle--light mb-5 text-[0.65rem]">Contact</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${site.email}`} className="ulink wrap-break-word">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="ulink">
                  {site.phone}
                </a>
              </li>
              <li className="text-white/50 max-w-[24ch]">{site.locationLine}</li>
            </ul>
          </div>

          <div>
            <p className="subtitle subtitle--light mb-5 text-[0.65rem]">Follow</p>
            <ul className="space-y-3 text-sm text-white/70">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ulink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between py-8 border-t border-white/10 text-xs text-white/50">
          <p>© 2026 {site.brand}</p>
          <p>{site.availability}</p>
        </div>
      </div>
    </footer>
  );
}
