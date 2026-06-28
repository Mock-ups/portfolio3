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
          <span className="font-display text-xl md:text-3xl font-bold tracking-tight text-dark">
            {item}
          </span>
          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
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
