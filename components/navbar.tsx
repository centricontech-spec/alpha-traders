"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { ArrowRight, Close, LogoMark, Menu } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-ink/95 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="frame flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <LogoMark className="h-7 w-7" />
          <span className="display text-[1.35rem] leading-none tracking-wide">{site.name}</span>
        </a>

        <ul className="hidden items-center lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="label inline-flex h-16 items-center px-4 text-bone-dim transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={site.joinUrl} className="btn btn-gold btn-sm hidden sm:inline-flex">
            Join the Hub
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-line-strong text-bone transition active:scale-95 lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="frame border-t border-line pb-6 lg:hidden">
        <ul>
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-between border-b border-line"
              >
                <span className="display text-3xl">{item.label}</span>
                <span className="label text-bone-dim">{String(i + 1).padStart(2, "0")}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={site.joinUrl} onClick={() => setOpen(false)} className="btn btn-gold mt-5 w-full">
          Join the Hub
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
