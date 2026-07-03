"use client";

import { useState, type ReactElement } from "react";
import { ChevronDown } from "@/components/icons";

export interface FaqEntry {
  q: string;
  a: string;
}

function FaqRow({
  entry,
  index,
  open,
  onToggle,
}: {
  entry: FaqEntry;
  index: number;
  open: boolean;
  onToggle: (i: number) => void;
}): ReactElement {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;
  return (
    <div className="border-b border-border">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-accent"
        >
          {entry.q}
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        hidden={!open}
        className="overflow-hidden pb-5 pr-8"
      >
        <p className="leading-relaxed text-muted">{entry.a}</p>
      </div>
    </div>
  );
}

export default function Faq({ entries }: { entries: FaqEntry[] }): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {entries.map((entry, i) => (
        <FaqRow
          key={entry.q}
          entry={entry}
          index={i}
          open={openIndex === i}
          onToggle={(idx) => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
