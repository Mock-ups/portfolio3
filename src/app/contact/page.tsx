import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}. Tell us about your space and we'll be in touch.`,
};

export default function ContactPage() {
  const details = [
    { k: "Email", v: site.email, href: `mailto:${site.email}` },
    {
      k: "Phone",
      v: site.phone,
      href: `tel:${site.phone.replace(/\s+/g, "")}`,
    },
    { k: "Studio", v: site.address },
  ];

  return (
    <section className="shell pt-10 md:pt-16">
      <p className="eyebrow">Contact — Start a project</p>
      <h1 className="display-xl mt-6 md:mt-8">
        <AnimatedHeading
          trigger="load"
          delay={0.1}
          lines={["Tell us about", "your space."]}
        />
      </h1>
      <Reveal delay={0.4}>
        <p className="mt-8 max-w-[52ch] text-lg text-graphite leading-relaxed">
          Whether it&rsquo;s a single room or a whole building, we&rsquo;d love
          to hear what you&rsquo;re planning. The more you can tell us, the
          better we can help.
        </p>
      </Reveal>

      <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-12 lg:gap-16">
        {/* Form */}
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        {/* Details */}
        <aside className="md:col-span-5 lg:col-span-4 lg:col-start-9">
          <dl className="border-t border-line">
            {details.map((d) => (
              <div key={d.k} className="py-5 border-b border-line">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-graphite">
                  {d.k}
                </dt>
                <dd className="mt-2 text-base">
                  {d.href ? (
                    <a href={d.href} className="ulink break-words">
                      {d.v}
                    </a>
                  ) : (
                    <span className="text-ink">{d.v}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-graphite mb-4">
              Follow
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ulink text-sm"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 font-mono text-xs text-graphite leading-relaxed">
            Studio hours
            <br />
            Mon–Fri · 09:00–18:00 WET
          </p>
        </aside>
      </div>
    </section>
  );
}
