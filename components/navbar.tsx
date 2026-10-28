"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Close, LogoMark, Menu } from "./icons";

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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`glass transition-[background-color,border-color] duration-300 ${
          scrolled || open
            ? "border-b border-line bg-background/70 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        >
          <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
            <LogoMark className="h-8 w-8" />
            <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={site.joinUrl} className="btn btn-gold btn-sm hidden sm:inline-flex">
              Join the Hub
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition active:scale-95 lg:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-line px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-line text-base text-foreground/90"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={site.joinUrl} onClick={() => setOpen(false)} className="btn btn-gold mt-5 w-full">
            Join the Hub
          </a>
        </div>
      </div>
    </header>
  );
}
