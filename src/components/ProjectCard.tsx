"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import type { Project } from "@/lib/projects";
import { Reveal } from "./motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  project: Project;
  position?: number;
  priority?: boolean;
};

export function ProjectCard({ project, position = 0, priority = false }: Props) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });

  function moveCircle(e: React.MouseEvent<HTMLDivElement>) {
    if (!mediaRef.current) return;
    const rect = mediaRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function onEnter(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) {
      const rect = mediaRef.current?.getBoundingClientRect();
      if (rect) {
        x.set(rect.width / 2);
        y.set(rect.height / 2);
      }
    } else {
      moveCircle(e);
    }
    setHovered(true);
  }

  return (
    <Reveal delay={(position % 2) * 0.08}>
      <Link
        href={`/work/${project.slug}`}
        className="card-link group block focus-visible:outline-none"
      >
        <div
          ref={mediaRef}
          className="media aspect-4/3"
          onMouseEnter={onEnter}
          onMouseMove={reduce ? undefined : moveCircle}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={project.cover}
            alt={`${project.title} — ${project.type}, ${project.location}`}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            priority={priority}
            className="object-cover"
          />
          <span className="absolute top-4 left-4 z-2 bg-bg/90 text-dark text-xs font-medium tracking-wide rounded-full px-3 py-1">
            N° {project.index}
          </span>
          <motion.div
            className="view-circle"
            style={{ x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            View →
          </motion.div>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="h-md group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-slate shrink-0">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-slate">
          {project.meta ??
            `${project.category} · ${project.type} · ${project.location}`}
        </p>
      </Link>
    </Reveal>
  );
}
