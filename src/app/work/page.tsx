import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected 3D architectural and interior visualizations across residential and commercial projects.",
};

export default function WorkPage() {
  return (
    <section className="shell pt-16 md:pt-24">
      <p className="subtitle">
        <span className="subtitle__dot" />
        Projects — {projects.length} works
      </p>

      <h1 className="h-xxl mt-7 max-w-[14ch]">
        <AnimatedHeading trigger="load" delay={0.1} lines={["Selected work."]} />
      </h1>

      <Reveal delay={0.35}>
        <p className="lede mt-7 max-w-[56ch]">
          A selection of recent 3D architectural and interior visualizations —
          residential and commercial spaces, rendered before they were built.
        </p>
      </Reveal>

      <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-x-6 gap-y-14 md:gap-y-20">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            position={i}
            priority={i < 2}
          />
        ))}
      </div>
    </section>
  );
}
