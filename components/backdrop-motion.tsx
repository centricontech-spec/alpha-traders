"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Scroll-driven motion for the section backdrops (components/backdrop.tsx):
// - each backdrop fades and settles in as its section arrives, then parallaxes while scrolling
// - the About contour rings draw themselves in, tied to scroll position
// - the hero and closing price lines wipe in from the left
// - every looping background speeds up with scroll velocity, then eases back to its idle pace
export function BackdropMotion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const roots = gsap.utils.toArray<HTMLElement>("[data-bd]");

      roots.forEach((root) => {
        const section = root.parentElement!;
        const layer = root.querySelector<HTMLElement>("[data-bd-layer]");
        const variant = root.dataset.bd;
        const isHero = variant === "flow";

        // Arrive: fade up from slightly zoomed in
        if (!isHero) {
          gsap.fromTo(
            root,
            { autoAlpha: 0, scale: 1.06 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 1.6,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none reverse" },
            },
          );
        }

        // Parallax: the background travels slower than the content
        if (layer) {
          gsap.fromTo(
            layer,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.8 },
            },
          );
        }

        // Price lines wipe in from the left
        const lines = root.querySelectorAll("[data-bd-line]");
        if (lines.length) {
          const wipe = { clipPath: "inset(0 100% 0 0)" };
          gsap.from(lines, {
            ...wipe,
            duration: 2.4,
            stagger: 0.25,
            ease: "power2.inOut",
            delay: isHero ? 0.6 : 0,
            scrollTrigger: isHero ? undefined : { trigger: section, start: "top 75%" },
          });
        }

        // Contour rings draw in from the centre outwards as you scroll through About
        const rings = gsap.utils.toArray<SVGPathElement>(root.querySelectorAll("[data-bd-draw]"));
        if (rings.length) {
          rings.forEach((r) => {
            const len = r.getTotalLength();
            gsap.set(r, { strokeDasharray: len, strokeDashoffset: len });
          });
          gsap.to(rings, {
            strokeDashoffset: 0,
            ease: "none",
            stagger: 0.06,
            scrollTrigger: { trigger: section, start: "top 85%", end: "center 45%", scrub: 1 },
          });
        }
      });

      // Scroll velocity speeds up every looping CSS background, then eases back
      const loops = () =>
        document
          .getAnimations()
          .filter((a): a is CSSAnimation => "animationName" in a && String((a as CSSAnimation).animationName).startsWith("bd-"));
      let anims = loops();
      const speed = { v: 1 };
      const apply = () => anims.forEach((a) => (a.playbackRate = speed.v));
      const toSpeed = gsap.quickTo(speed, "v", { duration: 0.5, ease: "power2.out", onUpdate: apply });
      let settle: gsap.core.Tween | null = null;

      const st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onRefresh: () => (anims = loops()),
        onUpdate: (self) => {
          const v = Math.min(6, 1 + Math.abs(self.getVelocity()) / 350);
          toSpeed(v);
          settle?.kill();
          settle = gsap.delayedCall(0.15, () => toSpeed(1));
        },
      });

      return () => {
        st.kill();
        settle?.kill();
        speed.v = 1;
        apply();
      };
    });
  });

  return null;
}
