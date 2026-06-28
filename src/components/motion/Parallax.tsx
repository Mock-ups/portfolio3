"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  /** y offset (px) at the start of the scroll range */
  from?: number;
  /** y offset (px) at the end of the scroll range */
  to?: number;
};

/**
 * Scroll-linked vertical drift. As the element moves through the viewport the
 * content translates from `from` to `to` — a subtle parallax (e.g. content
 * drifting down as you scroll).
 */
export function Parallax({ children, className, from = -40, to = 70 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <motion.div ref={ref} className={className} style={{ y: reduce ? 0 : y }}>
      {children}
    </motion.div>
  );
}
