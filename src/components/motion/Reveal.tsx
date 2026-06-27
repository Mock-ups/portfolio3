"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in seconds — use index * 0.06 for staggered lists */
  delay?: number;
  /** vertical travel in px */
  y?: number;
  duration?: number;
};

/** Fade + rise on scroll-into-view. Once only. Reduced-motion safe. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  duration = 0.6,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
