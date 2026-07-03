"use client";

import { useState, type ReactElement } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "@/components/icons";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TestimonialSlider({
  items,
}: {
  items: Testimonial[];
}): ReactElement {
  const [index, setIndex] = useState(0);
  const active = items[index];
  const go = (dir: number): void =>
    setIndex((prev) => (prev + dir + items.length) % items.length);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="glow-hover relative rounded-2xl border border-border bg-surface p-8 md:p-12">
        <Quote className="absolute right-8 top-8 h-10 w-10 text-accent/15" />
        <div className="mb-5 flex gap-1 text-accent" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5" />
          ))}
        </div>
        <blockquote className="font-display text-xl leading-snug text-ink md:text-2xl">
          &ldquo;{active.quote}&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-surface-2 font-mono text-sm font-semibold text-accent">
            {initials(active.name)}
          </span>
          <div>
            <p className="font-semibold text-ink">{active.name}</p>
            <p className="text-sm text-muted">
              {active.role} · {active.company}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="glow-hover flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-accent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-2"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="glow-hover flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-accent"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
