import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Tell me about your project and I'll be in touch.`,
};

export default function ContactPage() {
  const details = [
    { k: "Email", v: site.email, href: `mailto:${site.email}` },
    { k: "Phone", v: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
    { k: "Location", v: site.address },
  ];

  return (
    <section className="shell pt-16 md:pt-24">
      <p className="subtitle">
        <span className="subtitle__dot" />
        Contact
      </p>
      <h1 className="h-xxl mt-7 max-w-[14ch]">
        <AnimatedHeading
          trigger="load"
          delay={0.1}
          lines={["Let's work", "together."]}
        />
      </h1>
      <Reveal delay={0.4}>
        <p className="lede mt-7 max-w-[54ch]">
          Have a project that needs photorealistic visualization — or a role you
          think I&rsquo;d fit? Tell me a little about it and I&rsquo;ll get back
          to you.
        </p>
      </Reveal>

      <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-12 lg:gap-16">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <aside className="md:col-span-5 lg:col-span-4 lg:col-start-9">
          <dl className="border-t border-line">
            {details.map((d) => (
              <div key={d.k} className="py-5 border-b border-line">
                <dt className="subtitle text-[0.6rem]">{d.k}</dt>
                <dd className="mt-2 text-base">
                  {d.href ? (
                    <a href={d.href} className="ulink wrap-break-word">
                      {d.v}
                    </a>
                  ) : (
                    <span>{d.v}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="subtitle text-[0.6rem] mb-4">Follow</p>
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

          <div className="mt-10 inline-flex items-center gap-2 text-sm text-slate">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {site.availability}
          </div>
        </aside>
      </div>
    </section>
  );
}
