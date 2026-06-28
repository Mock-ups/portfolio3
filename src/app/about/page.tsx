import type { Metadata } from "next";
import { site } from "@/lib/site";
import { experience, education, skills } from "@/lib/resume";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — ${site.role} based in ${site.city}, ${site.country}. Experience, education and software.`,
};

export default function AboutPage() {
  return (
    <>
      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="shell pt-16 md:pt-24">
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
          <p className="lede mt-7 max-w-[58ch]">{site.intro}</p>
        </Reveal>
      </section>

      {/* ── Image ─────────────────────────────────────────── */}
      <section className="shell mt-14 md:mt-20">
        <Reveal y={28}>
          <div className="media">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1920"
              alt="At work"
              sizes="100vw"
              intensity={50}
              className="aspect-16/10 md:aspect-21/9"
            />
          </div>
        </Reveal>
      </section>

      {/* ── Statement ─────────────────────────────────────── */}
      <section className="shell section">
        <Reveal>
          <p className="h-xl max-w-[22ch]">
            I transform complex briefs into detailed plans and{" "}
            <span className="text-accent">photorealistic</span> renderings.
          </p>
        </Reveal>
      </section>

      {/* ── Experience ────────────────────────────────────── */}
      <section className="bg-white">
        <div className="shell section">
          <p className="subtitle mb-5">
            <span className="subtitle__dot" />
            Experience
          </p>
          <h2 className="h-xl mb-12 md:mb-16">Where I&rsquo;ve worked</h2>

          <div>
            {experience.map((job, i) => (
              <Reveal key={`${job.org}-${i}`} delay={(i % 2) * 0.06}>
                <div className="grid md:grid-cols-12 gap-3 md:gap-6 border-t border-line-strong/50 py-7 md:py-9">
                  <div className="md:col-span-3">
                    <p className="text-sm font-medium">{job.period}</p>
                    {job.current && (
                      <span className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="h-md">{job.role}</h3>
                    <p className="mt-1 text-sm font-medium text-slate">
                      {job.org} · {job.location}
                    </p>
                    <p className="mt-4 text-slate leading-relaxed max-w-[60ch]">
                      {job.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-bg px-5 py-4 flex items-center gap-3 text-sm font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {skill}
              </li>
            ))}
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
