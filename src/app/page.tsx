import Link from "next/link";
import { site } from "@/lib/site";
import { skills, services } from "@/lib/resume";
import { featuredProjects, projects } from "@/lib/projects";
import { TextPressure } from "@/components/motion/TextPressure";
import { Reveal } from "@/components/motion/Reveal";
import { CurtainReveal } from "@/components/motion/CurtainReveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Counter } from "@/components/motion/Counter";
import { ColumnRevealImage } from "@/components/motion/ColumnRevealImage";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Parallax } from "@/components/motion/Parallax";
import { ScrollOpen } from "@/components/motion/ScrollOpen";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const stats = [
  { n: 3, s: "+", label: "Years of experience" },
  { n: 8, s: "", label: "Software tools" },
  { n: 2, s: "", label: "Sectors covered" },
  { n: 4, s: "", label: "Teams worked with" },
];

// Column boundaries for the hero's [0.25, 2, 2, 2, 0.25] grid, as % of width.
const COLUMN_LINES = [3.846, 34.615, 65.385, 96.154];

export default function Home() {
  return (
    <>
      {/* Page-wide column grid — fixed vertical lines that split the entire
          page into the hero's columns, staying visible from the hero through
          every section to the bottom. mix-blend-difference keeps them legible
          over both the dark hero/footer and the light sections. */}
      <div className="pointer-events-none fixed inset-0 z-30" aria-hidden>
        {COLUMN_LINES.map((left, i) => (
          <span
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/30 mix-blend-difference"
            style={{ left: `${left}%` }}
          />
        ))}
      </div>

      {/* ── Hero ───────────────────────────────────────────── */}
      {/* Pulled up under the sticky header so the hero image shows through the
          header's transparent columns. */}
      <section className="relative -mt-16 md:-mt-20">
        {/* Background image with column reveal */}
        <div className="absolute inset-0">
          <ColumnRevealImage
            src="/1.jpeg"
            alt="3D architectural interior visualization"
            priority
            widths={[0.25, 2, 2, 2, 0.25]}
            order={[1, 5, 2, 3, 4]}
            delay={0.2}
            sizes="100vw"
            className="h-full w-full"
          >
            {/* Scrim for text legibility — on the image, below the reveal
                panels so the reveal stays pure white. */}
            <div className="absolute inset-0 bg-linear-to-b from-dark/40 via-dark/20 to-dark/45" />
          </ColumnRevealImage>
        </div>

        {/* Foreground content — fades in AFTER the column reveal completes */}
        <div className="relative z-10 shell min-h-screen flex flex-col justify-center items-center text-center text-white py-32">
          <h1
            className="h-xxl max-w-[15ch]"
            style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
          >
            <Reveal delay={1.45}>
              <TextPressure lines={["Bringing spaces", "to life in 3D."]} />
            </Reveal>
          </h1>

          <Reveal delay={1.7}>
            <p className="mt-7 max-w-[56ch] text-lg md:text-xl leading-relaxed text-white/80">
              {site.intro}
            </p>
          </Reveal>
          <Reveal delay={1.85}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Link href="/work" className="btn btn--light">
                  View work
                  <span className="btn__arrow" aria-hidden>
                    →
                  </span>
                </Link>
              </Magnetic>
              <Link href="/contact" className="btn btn--ghost">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Featured tab — white box over the first two columns, bottom-left */}
        <ScrollOpen
          delay={1.45}
          className="absolute bottom-0 left-0 z-20 hidden md:flex h-[21vh] w-[34.615%] bg-white"
        >
          <div
            className="flex items-center justify-center border-r border-line py-6"
            style={{ flexGrow: 0.25, flexBasis: 0 }}
          >
            <span className="-rotate-90 whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-dark">
              Featured
            </span>
          </div>
          <div
            className="flex items-center justify-center px-6 py-6"
            style={{ flexGrow: 2, flexBasis: 0 }}
          >
            <span className="font-display text-base lg:text-lg font-bold leading-snug text-dark text-center">
              Architectural Visualization Designer
            </span>
          </div>
        </ScrollOpen>
      </section>

      {/* ── Skills marquee (flush directly below the hero) ─── */}
      <section className="py-7 border-b border-line">
        <Marquee items={skills} />
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      {/* Full-bleed so its content can line up with the page column grid.
          Small top padding keeps it tight under the marquee. */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Heading — spans columns 2–4, matching the cards below. */}
        <div className="grid grid-cols-1 md:grid-cols-[0.25fr_2fr_2fr_2fr_0.25fr]">
          <div className="px-6 md:px-8 lg:px-10 md:col-start-2 md:col-end-5 md:flex md:items-end md:justify-between gap-8">
            <div>
              <p className="subtitle mb-5">
                <span className="subtitle__dot" />
                What I do
              </p>
              <h2 className="h-xl max-w-[16ch]">
                From concept to photorealistic render.
              </h2>
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex btn btn--outline shrink-0"
            >
              Work with me
            </Link>
          </div>
        </div>

        {/* Each service sits in one of the page's middle columns (2, 3, 4),
            so the fixed grid lines fall on the card edges. */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-[0.25fr_2fr_2fr_2fr_0.25fr]">
          {services.map((service, i) => (
            <CurtainReveal
              key={service.no}
              delay={i * 0.1}
              className={cn(
                "bg-mist px-6 py-8 md:px-8 md:py-10 lg:px-10",
                ["md:col-start-2", "md:col-start-3", "md:col-start-4"][i]
              )}
            >
              <span className="font-display text-sm font-bold text-accent">
                {service.no}
              </span>
              <h3 className="h-md mt-6">{service.title}</h3>
              <p className="mt-4 text-slate leading-relaxed">
                {service.description}
              </p>
            </CurtainReveal>
          ))}
        </div>
      </section>

      {/* ── About teaser + stats (tall image bg, content rises on scroll) ── */}
      <section className="relative mt-20 md:mt-28 overflow-hidden">
        {/* Tall background image with a vertical parallax (no reveal) */}
        <div className="absolute inset-0">
          <ParallaxImage
            src="/5.jpeg"
            alt="3D architectural visualization"
            sizes="100vw"
            intensity={120}
            className="h-full w-full"
          />
        </div>
        {/* Scrim for text legibility */}
        <div className="absolute inset-0 bg-dark/60" />

        {/* Content sits in the lower half and drifts upward as you scroll */}
        <div className="relative z-10 shell min-h-[120vh] flex items-center text-white">
          <Parallax from={120} to={-120} className="w-full">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center w-full">
              <div className="md:col-span-7">
                <Reveal>
                  <p className="subtitle subtitle--light mb-6">
                    <span className="subtitle__dot" />
                    About me
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="h-xl max-w-[18ch]">
                    A builder&rsquo;s eye and an artist&rsquo;s hand.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-7 max-w-[54ch] text-white/75 leading-relaxed">
                    I&rsquo;m {site.name}, a {site.discipline.toLowerCase()} based in{" "}
                    {site.city} working in 3D architectural and interior
                    visualization. I take a project from concept and 2D drawings to
                    photorealistic images that help people see a space before it
                    exists.
                  </p>
                  <Link href="/about" className="mt-8 inline-flex btn btn--light">
                    More about me
                    <span className="btn__arrow" aria-hidden>
                      →
                    </span>
                  </Link>
                </Reveal>
              </div>

              <Reveal delay={0.15} className="md:col-span-5">
                <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">
                        <Counter value={stat.n} suffix={stat.s} />
                      </p>
                      <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Parallax>
        </div>
      </section>

      {/* ── Featured work ──────────────────────────────────── */}
      {/* Full-bleed opaque bg lifted just above the column-line overlay
          (z-30) so the grid lines are hidden across this section only. */}
      <section className="relative z-31 bg-bg pt-20 md:pt-28 pb-4">
        <div className="shell">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="subtitle mb-5">
                <span className="subtitle__dot" />
                Selected work
              </p>
              <h2 className="h-xl">Recent projects</h2>
            </div>
            <Link
              href="/work"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium ulink shrink-0 pb-2"
            >
              View all ({projects.length})
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-x-6 gap-y-12 md:gap-y-16">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                position={i}
                priority={i === 0}
              />
            ))}
          </div>

          <Link href="/work" className="sm:hidden mt-12 btn w-full">
            View all projects
          </Link>
        </div>
      </section>
    </>
  );
}
