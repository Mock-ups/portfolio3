import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { Reveal } from "./motion/Reveal";

type Props = {
  project: Project;
  /** position in the grid — drives the stagger */
  position?: number;
  priority?: boolean;
};

export function ProjectCard({ project, position = 0, priority = false }: Props) {
  return (
    <Reveal delay={(position % 2) * 0.08}>
      <Link
        href={`/work/${project.slug}`}
        className="plate-link group block focus-visible:outline-none"
      >
        <div className="plate aspect-[4/3]">
          <Image
            src={project.cover}
            alt={`${project.title} — ${project.type}, ${project.location}`}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            priority={priority}
            className="object-cover"
          />
          <span className="absolute top-3 left-3 font-mono text-[0.65rem] tracking-[0.1em] text-paper bg-ink/85 px-2 py-1">
            N° {project.index}
          </span>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight group-hover:text-redline transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-graphite shrink-0">
            {project.year}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-4 font-mono text-xs text-graphite">
          <span className="truncate">
            {project.category} · {project.type}
          </span>
          <span className="shrink-0">{project.location}</span>
        </div>
      </Link>
    </Reveal>
  );
}
