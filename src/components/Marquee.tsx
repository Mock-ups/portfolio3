import { Fragment } from "react";

type Props = {
  items: string[];
  className?: string;
};

function Track({ items }: { items: string[] }) {
  return (
    <div className="marquee__track" aria-hidden>
      {items.map((item, i) => (
        <Fragment key={i}>
          <span className="font-display text-2xl md:text-4xl tracking-tight text-ink">
            {item}
          </span>
          <span className="text-redline text-xl md:text-2xl">✳</span>
        </Fragment>
      ))}
    </div>
  );
}

/** Single looping strip. Track is duplicated so the loop is seamless. */
export function Marquee({ items, className }: Props) {
  return (
    <div className={className}>
      <div className="marquee">
        <Track items={items} />
        <Track items={items} />
      </div>
    </div>
  );
}
