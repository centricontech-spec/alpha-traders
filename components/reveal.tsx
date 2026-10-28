"use client";

import { useEffect } from "react";

// Fades in any [data-reveal] element as it scrolls into view.
// Content stays visible if JS never runs, because the hidden state
// only applies once the `js-reveal` class is on <html>.
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
