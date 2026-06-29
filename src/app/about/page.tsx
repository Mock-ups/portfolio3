import type { Metadata } from "next";
import { site } from "@/lib/site";
import { experience, education, skills, softwareMeta } from "@/lib/resume";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — ${site.role} based in ${site.city}, ${site.country}. Experience, education and software.`,
};

const introMeta = [
  { k: "Based in", v: `${site.city}, ${site.country}` },
  { k: "Discipline", v: site.discipline },
  { k: "Status", v: "Open to work" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Intro — editorial split: heading + portrait ───── */}
      <section className="shell pt-16 md:pt-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="subtitle">
              <span className="subtitle__dot" />
              About — {site.name}
            </p>
            <h1 className="h-xxl mt-7 max-w-[16ch]">
              <AnimatedHeading
                trigger="load"
                delay={0.1}
                lines={["Civil engineer with", "a designer's eye."]}
              />
            </h1>
            <Reveal delay={0.4}>
              <p className="lede mt-7 max-w-[52ch]">{site.intro}</p>
            </Reveal>
            <Reveal delay={0.5}>
              <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
                {introMeta.map((m) => (
                  <div key={m.k}>
                    <dt className="subtitle text-[0.6rem] mb-1">{m.k}</dt>
                    <dd className="text-sm font-medium">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.3} y={28} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[360px] aspect-square">
              {/* Accent circle with the portrait clipped inside it */}
              <div className="absolute inset-0 rounded-full bg-accent overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/me.png"
                  alt="Muhammed Ramees"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[126%] w-auto max-w-none object-bottom"
                />
              </div>
              {/* Same portrait on top (upper half only) so the head rises out of the circle */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[126%] w-auto max-w-none object-bottom"
                style={{ clipPath: "inset(0 0 50% 0)" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Statement ─────────────────────────────────────── */}
      <section className="shell section">
        <Reveal>
          <div className="border-l-2 border-accent pl-6 md:pl-10">
            <p className="h-xl max-w-[22ch]">
              I transform complex briefs into detailed plans and{" "}
              <span className="text-accent">photorealistic</span> renderings.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Experience — ledger timeline ──────────────────── */}
      <section className="shell section">
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="subtitle mb-5">
              <span className="subtitle__dot" />
              Experience
            </p>
            <h2 className="h-xl">Where I&rsquo;ve worked</h2>
          </div>
          <span className="hidden sm:block font-mono text-xs text-slate pb-2">
            {String(experience.length).padStart(2, "0")} roles
          </span>
        </div>

        <div className="border-b border-line">
          {experience.map((job, i) => (
            <Reveal key={`${job.org}-${i}`}>
              <div className="group grid md:grid-cols-12 gap-x-8 gap-y-3 border-t border-line py-8 md:py-10 transition-colors duration-300 hover:bg-mist/60">
                {/* index + period */}
                <div className="md:col-span-3 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg md:text-xl font-bold tracking-tight transition-colors group-hover:text-accent">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Now
                    </span>
                  )}
                </div>

                {/* role + org */}
                <div className="md:col-span-4">
                  <h3 className="h-md">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {job.org}{" "}
                    <span className="text-slate">· {job.location}</span>
                  </p>
                </div>

                {/* description */}
                <div className="md:col-span-5">
                  <p className="text-slate leading-relaxed">{job.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Skills + Education ─────────────────────────────── */}
      <section className="shell section grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-7">
          <p className="subtitle mb-6">
            <span className="subtitle__dot" />
            Software
          </p>
          <ul className="grid grid-cols-2 gap-px bg-line border border-line rounded-md overflow-hidden">
            {skills.map((skill) => {
              const badge = softwareMeta[skill];
              return (
                <li
                  key={skill}
                  className="bg-bg px-5 py-4 flex items-center gap-3 text-sm font-medium"
                >
                  {badge?.icon ? (
                    <span className="grid place-items-center w-7 h-7 rounded-md bg-white border border-line shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={badge.icon}
                        alt=""
                        className="h-4 w-4 object-contain"
                      />
                    </span>
                  ) : (
                    <span
                      className="grid place-items-center w-7 h-7 rounded-md text-[0.7rem] font-bold text-white shrink-0"
                      style={{ backgroundColor: badge?.color ?? "var(--accent)" }}
                      aria-hidden
                    >
                      {badge?.short ?? skill[0]}
                    </span>
                  )}
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:col-span-5">
          <p className="subtitle mb-6">
            <span className="subtitle__dot" />
            Education
          </p>
          <ul>
            {education.map((ed) => (
              <li key={ed.qualification} className="py-5 border-b border-line first:border-t">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="h-md text-lg">{ed.qualification}</h3>
                  <span className="text-sm text-slate shrink-0">{ed.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate">{ed.institution}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
