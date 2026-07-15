"use client";

import { useEffect, useState, type ReactElement } from "react";
import Image from "next/image";
import { ArrowRight, Close, Menu } from "@/components/icons";

function Wordmark(): ReactElement {
  return (
    <a href="#hero" className="flex items-center" aria-label="Escencion — home">
      <Image
        src="/images/escencion-logo-white.png"
        alt="Escencion"
        width={150}
        height={30}
        priority
        className="h-7 w-auto md:h-8"
      />
    </a>
  );
}

export default function SiteChrome(): ReactElement {
  const [scrollPct, setScrollPct] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      const top = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(height > 0 ? (top / height) * 100 : 0);
      setScrolled(top > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollPct}%` }} />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-border bg-bg/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-12">
          <Wordmark />
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="hidden rounded-lg bg-accent px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-dark)] transition-all hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(139, 92, 246,0.35)] sm:inline-block"
            >
              Get Started
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          drawerOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-bg/80 backdrop-blur-sm transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col border-l border-border bg-surface p-6 transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>
          <a
            href="#hero"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-ink-dark)]"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Floating sticky CTA */}
      <div
        className={`fixed bottom-6 right-6 z-40 hidden transition-all duration-300 md:block ${
          scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <a
          href="#get-started"
          className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-ink-dark)] shadow-[0_0_28px_rgba(139, 92, 246,0.4)] transition-all hover:bg-accent-hover"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
          scrolled ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#get-started"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-ink-dark)]"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
