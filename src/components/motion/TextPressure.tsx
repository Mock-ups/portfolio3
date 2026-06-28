"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

type Props = {
  /** each string is one line */
  lines: string[];
  className?: string;
  /** cursor influence radius in px */
  radius?: number;
};

/**
 * Interactive "pressure" headline: each letter swells in weight and width as
 * the cursor approaches, using a variable font (Roboto Flex, wght + wdth axes).
 * Values are eased every frame for a fluid feel. Reduced-motion safe.
 */
export function TextPressure({ lines, className = "", radius = 240 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const chars = Array.from(
      containerRef.current?.querySelectorAll<HTMLSpanElement>("[data-char]") ?? []
    );
    const eased = new Array(chars.length).fill(0);

    const onMove = (e: PointerEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onLeave, { passive: true });

    let raf = 0;
    const tick = () => {
      const { x, y } = mouse.current;
      for (let i = 0; i < chars.length; i++) {
        const el = chars[i];
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = Math.hypot(x - cx, y - cy);
        const target = Math.max(0, 1 - dist / radius);
        eased[i] += (target - eased[i]) * 0.16;
        const inf = eased[i];
        const wght = Math.round(450 + inf * 450); // 450 → 900
        const wdth = Math.round(95 + inf * 45); // 95 → 140
        el.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
    };
  }, [reduce, radius, lines]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ fontFamily: "var(--font-pressure), system-ui, sans-serif" }}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {Array.from(line).map((ch, ci) =>
            ch === " " ? (
              <span key={ci}>&nbsp;</span>
            ) : (
              <span
                key={ci}
                data-char
                style={{
                  display: "inline-block",
                  fontVariationSettings: "'wght' 700, 'wdth' 100",
                  willChange: "font-variation-settings",
                }}
              >
                {ch}
              </span>
            )
          )}
        </span>
      ))}
    </div>
  );
}
