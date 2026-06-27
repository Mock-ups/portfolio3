type Props = {
  label: string;
  className?: string;
};

/** A measured dimension line: |—— LABEL ——| */
export function DimensionDivider({ label, className }: Props) {
  return (
    <div className={className} role="separator" aria-label={label}>
      <div className="dim">
        <span className="dim__rule" />
        <span className="dim__label">{label}</span>
        <span className="dim__rule" />
      </div>
    </div>
  );
}
