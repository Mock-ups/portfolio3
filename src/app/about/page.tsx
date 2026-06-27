import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { DimensionDivider } from "@/components/DimensionDivider";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a ${site.city}-based interior design studio. Our approach, process and people.`,
};

// PLACEHOLDER — replace with the studio's real process copy.
const process = [
  {
    n: "01",
    t: "Brief",
    d: "We start in your space, listening for how you actually live and work before a single line is drawn.",
  },
  {
    n: "02",
    t: "Concept",
    d: "Plans, references and material studies set the architecture of the idea — proportion, light and circulation first.",
  },
  {
    n: "03",
    t: "Documentation",
    d: "A complete drawing set and specification, so every joint, finish and fitting is resolved before we reach site.",
  },
  {
    n: "04",
    t: "Realisation",
    d: "We run the build with trusted makers, protecting the detail all the way through to the final fixing.",
  },
];

// PLACEHOLDER recognition — swap for real awards / press.
const recognition = [
  "2024 — Restaurant & Bar Design Awards · Shortlist",
  "2023 — Dezeen Awards · Longlist",
  "2023 — AD100 Próximo · Featured",
  "2022 — FRAME Awards · Finalist",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="shell pt-10 md:pt-16">
        <p className="eyebrow">About — The studio</p>
        <h1 className="display-xl mt-6 md:mt-8">
          <AnimatedHeading
            trigger="load"
            delay={0.1}
            lines={["A small studio,", "a long view."]}
          />
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-8 max-w-[56ch] text-lg md:text-xl leading-relaxed text-ink/90">
            {site.intro} We keep the practice deliberately small so the people
            who design your project are the people who see it through.
          </p>
        </Reveal>
      </section>

      {/* ── Studio image ──────────────────────────────────── */}
      <section className="shell mt-14 md:mt-20">
        <Reveal y={28}>
          <div className="plate">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1920"
              alt="Inside the studio"
              sizes="100vw"
              intensity={50}
              className="aspect-16/10 md:aspect-21/9"
            />
          </div>
          <p className="mt-3 font-mono text-xs text-graphite">
            The studio — {site.city}, {site.country}
          </p>
        </Reveal>
      </section>

      {/* ── Philosophy ────────────────────────────────────── */}
      <section className="shell mt-24 md:mt-36">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] max-w-[18ch] md:max-w-[20ch]">
            Good interiors aren&rsquo;t styled on. They are{" "}
            <span className="text-redline">built in</span> — drawn with the same
            rigour as the architecture they sit within.
          </p>
        </Reveal>
      </section>

      {/* ── Approach ──────────────────────────────────────── */}
      <section className="shell mt-24 md:mt-36">
        <DimensionDivider label="Approach — four phases" />
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-10 gap-y-12">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={(i % 2) * 0.08}>
              <div className="flex gap-5 border-t border-line pt-5">
                <span className="font-mono text-sm text-redline shrink-0">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                    {step.t}
                  </h3>
                  <p className="mt-3 text-graphite leading-relaxed max-w-[42ch]">
                    {step.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="shell mt-24 md:mt-36">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
          {[
            { n: 12, s: "", label: "Years practising" },
            { n: 40, s: "+", label: "Projects delivered" },
            { n: 9, s: "", label: "Cities" },
            { n: 6, s: "", label: "Design awards" },
          ].map((stat) => (
            <div key={stat.label} className="bg-paper p-6 md:p-8">
              <p className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                <Counter value={stat.n} suffix={stat.s} />
              </p>
              <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-graphite">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── People + recognition ──────────────────────────── */}
      <section className="shell mt-24 md:mt-36 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="eyebrow mb-6">People</p>
          {/* PLACEHOLDER principal — replace name + bio */}
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Mara Vance
          </h2>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-graphite">
            Founder &amp; Principal Designer
          </p>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-[56ch] leading-relaxed text-ink/90">
              Mara founded {site.name} in {site.founded} after a decade in
              architecture practice. She leads every project from first sketch
              to final walkthrough, working closely with a tight circle of
              joiners, lighting designers and makers.
            </p>
            <p className="mt-4 max-w-[56ch] leading-relaxed text-graphite">
              The studio takes on a small number of projects each year — enough
              to stay personal, few enough to stay precise.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <p className="eyebrow mb-6">Recognition</p>
          <ul>
            {recognition.map((r) => (
              <li
                key={r}
                className="font-mono text-sm text-ink py-3 border-b border-line first:border-t"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
