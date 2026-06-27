import Link from "next/link";
import { site } from "@/lib/site";
import { featuredProjects, projects } from "@/lib/projects";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Counter } from "@/components/motion/Counter";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { DimensionDivider } from "@/components/DimensionDivider";

const capabilities = [
  "Interior Architecture",
  "Residential",
  "Hospitality",
  "Workspace",
  "FF&E",
  "Lighting Design",
  "Joinery",
  "Material Studies",
];

const legend = [
  { k: "Discipline", v: "Interior Architecture" },
  { k: "Founded", v: `${site.founded} · ${site.city}` },
  { k: "Sectors", v: "Residential / Hospitality" },
  { k: "Practice", v: "Studio of six" },
];

export default function Home() {
  const hero = featuredProjects[0];

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="shell pt-10 md:pt-16">
        <p className="eyebrow anim-rise" style={{ animationDelay: "0.05s" }}>
          {site.role} — {site.city}, {site.country}
        </p>

        <h1 className="display-xl mt-6 md:mt-8">
          <AnimatedHeading
            trigger="load"
            delay={0.15}
            lines={["Spaces, drawn", "around the way", "you live."]}
          />
        </h1>

        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-7">
            <Reveal delay={0.5}>
              <p className="text-lg md:text-xl max-w-[48ch] text-ink/90 leading-relaxed">
                {site.intro}
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link href="/work" className="btn btn--solid">
                    View work
                    <span className="btn__arrow" aria-hidden>
                      →
                    </span>
                  </Link>
                </Magnetic>
                <Link href="/contact" className="btn">
                  Start a project
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Drawing legend */}
          <Reveal delay={0.7} className="md:col-span-5">
            <dl className="border-t border-line">
              {legend.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-6 py-3 border-b border-line"
                >
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-graphite">
                    {row.k}
                  </dt>
                  <dd className="font-mono text-xs md:text-sm text-ink text-right">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Hero plate */}
        <Reveal delay={0.3} y={28} className="mt-12 md:mt-16">
          <div className="plate">
            <ParallaxImage
              src={hero.cover}
              alt={`${hero.title} — featured interior`}
              priority
              sizes="100vw"
              intensity={60}
              className="aspect-16/10 md:aspect-21/9"
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-xs text-graphite">
            <span>Fig. 01 — {hero.title}</span>
            <span>
              {hero.location} · {hero.year}
            </span>
          </div>
        </Reveal>
      </section>

      {/* ── Capabilities marquee ───────────────────────────── */}
      <section className="mt-24 md:mt-36 py-6 border-y border-line">
        <Marquee items={capabilities} />
      </section>

      {/* ── Studio teaser + stats ──────────────────────────── */}
      <section className="shell mt-24 md:mt-36">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">The studio</p>
            <Reveal>
              <p className="font-display text-2xl md:text-4xl font-semibold tracking-tight leading-[1.1] max-w-[20ch]">
                We resolve structure, light and material together — so a room
                feels <span className="text-redline">inevitable</span>, not
                decorated.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[52ch] text-graphite leading-relaxed">
                {site.name} is a {site.city}-based interior design studio working
                across homes, restaurants and workspaces. Every project begins
                as a drawing and ends as a place you don&rsquo;t want to leave.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] ulink"
              >
                About the studio
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-px bg-line border border-line self-start">
            {[
              { n: 12, s: "", label: "Years practising" },
              { n: 40, s: "+", label: "Projects delivered" },
              { n: 9, s: "", label: "Cities" },
              { n: 6, s: "", label: "Design awards" },
            ].map((stat) => (
              <div key={stat.label} className="bg-paper p-5 md:p-6">
                <p className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                  <Counter value={stat.n} suffix={stat.s} />
                </p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-graphite">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured work ──────────────────────────────────── */}
      <section className="shell mt-24 md:mt-36">
        <DimensionDivider label={`Selected work — ${projects.length} sheets`} />
        <div className="mt-10 md:mt-14 flex items-end justify-between gap-6">
          <h2 className="display-lg">Selected work</h2>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] ulink shrink-0 pb-2"
          >
            All projects
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-x-6 gap-y-12 md:gap-y-16">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              position={i}
              priority={i === 0}
            />
          ))}
        </div>

        <Link href="/work" className="sm:hidden mt-12 btn w-full justify-center">
          All projects
        </Link>
      </section>
    </>
  );
}
