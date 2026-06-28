import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { k: "Location", v: project.location },
    { k: "Year", v: String(project.year) },
    { k: "Area", v: project.area },
    { k: "Type", v: project.type },
    { k: "Sector", v: project.category },
  ].filter((f) => f.v);

  // Match the column count to the number of shown facts (Area may be omitted).
  const factCols =
    { 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5" }[
      facts.length
    ] ?? "md:grid-cols-5";

  // Project-wide gallery rotation direction; individual sections can override.
  const galleryRotate: "left" | "right" | undefined = project.rotateGallery
    ? "left"
    : undefined;

  // Adaptive gallery: first image full-width, the rest in 2-up rows
  // (a trailing odd image spans full-width). Works for any image count.
  const [galleryHero, ...galleryRest] = project.gallery;
  const galleryRows: string[][] = [];
  for (let i = 0; i < galleryRest.length; i += 2) {
    galleryRows.push(galleryRest.slice(i, i + 2));
  }

  return (
    <article className="shell pt-16 md:pt-24">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-slate hover:text-dark transition-colors"
      >
        <span aria-hidden>←</span> Back to work
      </Link>

      <p className="subtitle mt-8">
        <span className="subtitle__dot" />
        N° {project.index} — {project.category}
      </p>

      <h1 className="h-xxl mt-5 max-w-[16ch]">
        <AnimatedHeading trigger="load" delay={0.1} lines={[project.title]} />
      </h1>

      <Reveal delay={0.3}>
        <p className="lede mt-6 max-w-[56ch]">{project.summary}</p>
      </Reveal>

      {/* Facts */}
      <Reveal delay={0.4}>
        <dl className={`mt-10 grid grid-cols-2 ${factCols} border border-line rounded-md overflow-hidden bg-line gap-px`}>
          {facts.map((f) => (
            <div key={f.k} className="bg-bg p-5">
              <dt className="subtitle text-[0.6rem]">{f.k}</dt>
              <dd className="mt-2 font-display text-base font-bold">{f.v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Cover */}
      <Reveal delay={0.2} y={28} className="mt-12 md:mt-16">
        <div className="media">
          <ParallaxImage
            src={project.cover}
            alt={`${project.title} — visualization`}
            priority
            sizes="100vw"
            intensity={50}
            className="aspect-16/10 md:aspect-21/9"
          />
        </div>
      </Reveal>

      {/* Narrative + software */}
      <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7 md:col-start-2">
          {project.description.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-lg leading-relaxed mb-6 max-w-[58ch] text-dark/90">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="md:col-span-3">
          <Reveal>
            <p className="subtitle text-[0.65rem] mb-5">Software</p>
            <ul className="space-y-3">
              {project.software.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm border-b border-line pb-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-16 md:mt-24 space-y-6 md:space-y-8">
        {galleryHero && (
          <Reveal>
            <Plate src={galleryHero} alt={`${project.title} — view 1`} ratio="aspect-16/9" rotate={galleryRotate} />
          </Reveal>
        )}
        {galleryRows.map((row, ri) =>
          row.length === 2 ? (
            <div key={ri} className="grid md:grid-cols-2 gap-6 md:gap-8">
              {row.map((src, ci) => (
                <Reveal key={ci} delay={ci * 0.08}>
                  <Plate src={src} alt={`${project.title} — view ${ri * 2 + ci + 2}`} ratio="aspect-4/5" rotate={galleryRotate} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal key={ri}>
              <Plate src={row[0]} alt={`${project.title} — view ${ri * 2 + 2}`} ratio="aspect-16/9" rotate={galleryRotate} />
            </Reveal>
          )
        )}
      </div>

      {/* Extra titled galleries */}
      {project.extraGalleries?.map((g, gi) => {
        // "none" disables rotation for this section; otherwise fall back to the project default.
        const rot = g.rotate === "none" ? undefined : g.rotate ?? galleryRotate;
        return (
          <section key={gi} className="mt-20 md:mt-28">
            <Reveal>
              <h2 className="h-lg mb-8 md:mb-12 max-w-[20ch]">{g.title}</h2>
            </Reveal>
            <div className="space-y-6 md:space-y-8">
              {g.layout === "one-then-two" ? (
                <>
                  {/* First row: 1 full-width plate */}
                  <Reveal>
                    <Plate src={g.images[0]} alt={`${g.title} — view 1`} ratio="aspect-16/9" rotate={rot} />
                  </Reveal>
                  {/* Second row: 2 columns */}
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <Reveal>
                      <Plate src={g.images[1]} alt={`${g.title} — view 2`} ratio="aspect-4/5" rotate={rot} />
                    </Reveal>
                    {g.images[2] && (
                      <Reveal delay={0.08}>
                        <Plate src={g.images[2]} alt={`${g.title} — view 3`} ratio="aspect-4/5" rotate={rot} />
                      </Reveal>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* First row: 2 columns */}
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <Reveal>
                      <Plate src={g.images[0]} alt={`${g.title} — view 1`} ratio="aspect-4/5" rotate={rot} />
                    </Reveal>
                    <Reveal delay={0.08}>
                      <Plate src={g.images[1]} alt={`${g.title} — view 2`} ratio="aspect-4/5" rotate={rot} />
                    </Reveal>
                  </div>
                  {/* Second row: 1 full-width plate */}
                  {g.images[2] && (
                    <Reveal>
                      <Plate src={g.images[2]} alt={`${g.title} — view 3`} ratio="aspect-16/9" rotate={rot} />
                    </Reveal>
                  )}
                </>
              )}
            </div>
          </section>
        );
      })}

      {/* Next project */}
      <Link
        href={`/work/${next.slug}`}
        className="group block mt-24 md:mt-36 border-t border-line pt-8"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="subtitle text-[0.65rem]">Next — N° {next.index}</span>
          <span
            className="text-sm text-slate group-hover:translate-x-1 transition-transform"
            aria-hidden
          >
            →
          </span>
        </div>
        <p className="h-xl mt-3 group-hover:text-accent transition-colors">
          {next.title}
        </p>
      </Link>
    </article>
  );
}

function Plate({
  src,
  alt,
  ratio,
  rotate,
}: {
  src: string;
  alt: string;
  ratio: string;
  rotate?: "left" | "right";
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      className="object-cover"
    />
  );

  return (
    <div className={`media ${ratio}${rotate ? " @container-size" : ""}`}>
      {rotate ? (
        // Sideways source: rotate the frame 90°. Sized in container-query units
        // (swapped W/H) so the rotated frame still fills the plate.
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            rotate === "right" ? "rotate-90" : "-rotate-90"
          }`}
          style={{ width: "100cqh", height: "100cqw" }}
        >
          {image}
        </div>
      ) : (
        image
      )}
    </div>
  );
}
