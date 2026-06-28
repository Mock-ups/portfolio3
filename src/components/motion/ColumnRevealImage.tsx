"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.76, 0, 0.24, 1] as const;

type Props = {
  src: string;
  alt: string;
  /** number of equal-width reveal columns (ignored when `widths` is set) */
  columns?: number;
  /** relative flex-grow ratios per column, e.g. [1,2,2,2,1] for narrow ends */
  widths?: number[];
  /** reveal sequence as 1-based column numbers, e.g. [1,5,2,3,4] */
  order?: number[];
  className?: string; // aspect ratio etc.
  sizes?: string;
  priority?: boolean;
  /** "load" plays on mount, "view" plays when scrolled into view */
  trigger?: "load" | "view";
  delay?: number;
  /** overlay rendered on the image but BELOW the reveal panels (e.g. a scrim),
   *  so the reveal stays the panel colour and the overlay applies after */
  children?: ReactNode;
};

/**
 * Column-wise image reveal: the image is covered by N vertical panels that
 * lift away in sequence (a staggered curtain/blinds reveal).
 */
export function ColumnRevealImage({
  src,
  alt,
  columns = 6,
  widths,
  order,
  className = "",
  sizes = "100vw",
  priority = false,
  trigger = "load",
  delay = 0.15,
  children,
}: Props) {
  const reduce = useReducedMotion();
  const ratios = widths ?? Array.from({ length: columns }, () => 1);

  const anim = () =>
    trigger === "view"
      ? {
          initial: { y: "0%" },
          whileInView: { y: "-101%" },
          viewport: { once: true, margin: "0px 0px -20% 0px" },
        }
      : { initial: { y: "0%" }, animate: { y: "-101%" } };

  return (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />

      {/* Overlay (scrim, etc.) — above the image, below the reveal panels. */}
      {children}

      {!reduce && (
        <div className="absolute inset-0 flex" aria-hidden>
          {ratios.map((ratio, i) => {
            const step = order && order.indexOf(i + 1) !== -1 ? order.indexOf(i + 1) : i;
            return (
              <motion.div
                key={i}
                className="h-full bg-white border-r border-line last:border-r-0"
                {...anim()}
                transition={{
                  duration: 0.85,
                  ease: EASE,
                  delay: delay + step * 0.085,
                }}
                style={{ flexGrow: ratio, flexBasis: 0, willChange: "transform" }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
