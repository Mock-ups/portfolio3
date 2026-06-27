import Link from "next/link";
import { nav, site } from "@/lib/site";
import { DimensionDivider } from "./DimensionDivider";

export function Footer() {
  return (
    <footer className="mt-32 md:mt-48">
      {/* CTA band */}
      <div className="shell">
        <DimensionDivider label={`${site.city} — ${site.country}`} />
        <div className="py-16 md:py-24">
          <p className="eyebrow mb-6">Start a project</p>
          <Link
            href="/contact"
            className="font-display font-bold tracking-tight leading-[0.95] block text-[clamp(2.2rem,7vw,5.5rem)] hover:text-redline transition-colors"
          >
            Let&rsquo;s shape your space.
          </Link>
        </div>
      </div>

      {/* Columns */}
      <div className="shell">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 py-12 border-t border-line">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-lg font-bold tracking-tight">
              Form <span className="text-redline">&amp;</span> Field
            </p>
            <p className="mt-3 text-sm text-graphite max-w-[28ch]">
              {site.role}. {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-graphite mb-4">
              Navigate
            </p>
            <ul className="space-y-2 text-sm">
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
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-graphite mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="ulink break-all">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="ulink">
                  {site.phone}
                </a>
              </li>
              <li className="text-graphite max-w-[26ch]">{site.address}</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-graphite mb-4">
              Follow
            </p>
            <ul className="space-y-2 text-sm">
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
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between py-8 lg:pb-28 border-t border-line font-mono text-[0.65rem] uppercase tracking-[0.12em] text-graphite">
          <p>
            © {site.founded}–2026 {site.name}
          </p>
          <p>Drawing set · Rev. A</p>
        </div>
      </div>
    </footer>
  );
}
