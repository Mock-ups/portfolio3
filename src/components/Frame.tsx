"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

function sectionFor(path: string) {
  if (path === "/") return "Index";
  if (path.startsWith("/work"))
    return path === "/work" ? "Work" : "Work · Detail";
  if (path.startsWith("/about")) return "About";
  if (path.startsWith("/contact")) return "Contact";
  return "—";
}

/**
 * Signature chrome: a hairline drawing-sheet frame with corner crop marks
 * and a fixed title block — the site behaves like an architect's plan set.
 */
export function Frame() {
  const path = usePathname();
  const section = sectionFor(path);

  return (
    <>
      <div className="sheet-frame" aria-hidden="true">
        <span className="crop tl" />
        <span className="crop tr" />
        <span className="crop bl" />
        <span className="crop br" />
      </div>

      <div className="title-block" aria-hidden="true">
        <div className="tb-cell tb-row-top">
          <span className="tb-label">Studio</span>
          <span className="tb-value">{site.name}</span>
        </div>
        <div className="tb-cell tb-row-top tb-divider">
          <span className="tb-label">Sheet</span>
          <span className="tb-value">{section}</span>
        </div>
        <div className="tb-cell">
          <span className="tb-label">Scale</span>
          <span className="tb-value">1:1</span>
        </div>
        <div className="tb-cell tb-divider">
          <span className="tb-label">Status</span>
          <span className="tb-value">For Review</span>
        </div>
      </div>
    </>
  );
}
