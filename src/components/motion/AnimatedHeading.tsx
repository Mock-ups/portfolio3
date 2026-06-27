"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  /** each string becomes one masked line */
  lines: string[];
  className?: string;
  /** "load" animates on mount (hero); "view" animates on scroll-in */
  trigger?: "load" | "view";
  delay?: number;
  stagger?: number;
};

/**
 * Line-mask reveal: each line slides up from behind an overflow-hidden mask.
 * Architectural, composed — not a per-letter typewriter.
 */
export function AnimatedHeading({
  lines,
  className,
  trigger = "view",
  delay = 0,
  stagger = 0.1,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className={className} style={{ display: "block" }}>
        {lines.map((line, i) => (
          <span key={i} style={{ display: "block" }}>
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className} style={{ display: "block" }}>
      {lines.map((line, i) => {
        const motionProps =
          trigger === "load"
            ? { initial: { y: "115%" }, animate: { y: 0 } }
            : {
                initial: { y: "115%" },
                whileInView: { y: 0 },
                viewport: { once: true, margin: "0px 0px -12% 0px" },
              };
        return (
          <span
            key={i}
            style={{ display: "block", overflow: "hidden", paddingBottom: "0.12em" }}
          >
            <motion.span
              style={{ display: "block", willChange: "transform" }}
              {...motionProps}
              transition={{ duration: 0.9, ease: EASE, delay: delay + i * stagger }}
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
