import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { DimensionDivider } from "@/components/DimensionDivider";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected interior architecture projects across residential, hospitality and workspace.",
};

export default function WorkPage() {
  const years = projects.map((p) => p.year);
  const span = `${Math.min(...years)}–${Math.max(...years)}`;

  return (
    <section className="shell pt-10 md:pt-16">
      <p className="eyebrow">Work — Project register</p>

      <h1 className="display-xl mt-6 md:mt-8">
        <AnimatedHeading trigger="load" delay={0.1} lines={["Selected", "work."]} />
      </h1>

      <Reveal delay={0.4}>
        <p className="mt-8 max-w-[52ch] text-lg text-graphite leading-relaxed">
          A register of recent interiors — each resolved as a complete drawing
          set, from first plan to final fixing.
        </p>
      </Reveal>

      <DimensionDivider
        className="mt-12 md:mt-16"
        label={`${projects.length} sheets · ${span}`}
      />

      <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-6 gap-y-12 md:gap-y-20">
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
