"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.76, 0, 0.24, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

/**
 * Unrolls open from the left (animated clip-path), like opening a scroll —
 * the content is revealed left-to-right without distortion. Plays on mount.
 */
export function ScrollOpen({
  children,
  className,
  delay = 0,
  duration = 0.9,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration, ease: EASE, delay }}
      style={{ willChange: "clip-path" }}
    >
      {children}
    </motion.div>
  );
}
