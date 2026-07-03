import type { ReactElement } from "react";

interface MarqueeItem {
  label: string;
  featured?: boolean;
}

interface MarqueeProps {
  items: MarqueeItem[];
}

function Row({ items, hidden }: { items: MarqueeItem[]; hidden?: boolean }): ReactElement {
  return (
    <div className="flex shrink-0" aria-hidden={hidden ? "true" : undefined}>
      {items.map((item, i) => (
        <div
          key={`${item.label}-${i}`}
          className="mx-3 flex items-center gap-2.5 whitespace-nowrap rounded-lg border border-border bg-surface px-6 py-3.5"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              item.featured ? "bg-accent" : "bg-muted-2"
            }`}
          />
          <span
            className={`font-mono text-sm tracking-wide ${
              item.featured ? "font-semibold text-ink" : "text-muted"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Marquee({ items }: MarqueeProps): ReactElement {
  return (
    <div className="marquee-mask w-full overflow-hidden py-2">
      <div className="marquee-track">
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}
