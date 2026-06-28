"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.76, 0, 0.24, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  /** delay in seconds — use index * 0.1 for a staggered row */
  delay?: number;
  /** Tailwind background class for the lifting panel */
  curtain?: string;
};

/**
 * Column-curtain reveal: content is covered by a single panel that lifts
 * away on scroll-into-view, mirroring the hero/header column reveal.
 * The wrapper carries the layout classes (grid placement, background, padding).
 */
export function CurtainReveal({
  children,
  className,
  delay = 0,
  curtain = "bg-white",
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {children}

      {!reduce && (
        <motion.div
          aria-hidden
          className={`absolute inset-0 ${curtain}`}
          initial={{ y: "0%" }}
          whileInView={{ y: "-101%" }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE, delay }}
          style={{ willChange: "transform" }}
        />
      )}
    </div>
  );
}
