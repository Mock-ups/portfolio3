"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** parallax travel in px (each direction) */
  intensity?: number;
};

/** next/image with a subtle vertical parallax tied to scroll position. */
export function ParallaxImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  intensity = 50,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.div
        style={{
          y: reduce ? 0 : y,
          position: "absolute",
          left: 0,
          right: 0,
          top: -intensity,
          bottom: -intensity,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
