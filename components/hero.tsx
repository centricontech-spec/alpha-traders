"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { site } from "@/lib/content";
import { ArrowRight } from "./icons";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

// Deterministic candles for the decorative chart (no randomness, so server and client match)
const candles = [
  [62, 70, 55, 66], [66, 72, 60, 61], [61, 64, 52, 54], [54, 58, 47, 57],
  [57, 66, 55, 64], [64, 69, 59, 60], [60, 63, 50, 52], [52, 56, 44, 47],
  [47, 55, 45, 53], [53, 62, 51, 60], [60, 68, 58, 66], [66, 75, 63, 72],
  [72, 76, 66, 68], [68, 74, 65, 73], [73, 82, 71, 80], [80, 86, 76, 84],
  [84, 88, 79, 81], [81, 87, 78, 86],
];

const W = 420;
const H = 220;
const STEP = W / candles.length;
const y = (v: number) => H - 10 - ((v - 40) / 52) * (H - 20);
const lastClose = y(candles[candles.length - 1][3]);

function Chart() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full overflow-visible" role="img" aria-label="Example gold chart showing a bullish break of structure above a key level">
      <line data-level x1="0" x2={W} y1={y(57)} y2={y(57)} stroke="var(--gold)" strokeDasharray="3 4" />
      <text data-level-label x={W - 4} y={y(57) - 6} textAnchor="end" fill="var(--gold)" fontSize="9" fontFamily="var(--font-plex-mono)">
        KEY LEVEL
      </text>
      <line data-level x1="0" x2={W} y1={y(45)} y2={y(45)} stroke="var(--bear)" strokeOpacity="0.7" strokeDasharray="3 4" />
      <text data-level-label x={W - 4} y={y(45) + 13} textAnchor="end" fill="var(--bear)" fontSize="9" fontFamily="var(--font-plex-mono)">
        INVALIDATION
      </text>
      {candles.map(([o, hi, lo, c], i) => {
        const up = c >= o;
        const x = i * STEP + STEP / 2;
        const color = up ? "var(--bull)" : "var(--bear)";
        return (
          <g key={i} data-candle>
            <line x1={x} x2={x} y1={y(hi)} y2={y(lo)} stroke={color} strokeWidth="1" />
            <rect
              data-body={i === candles.length - 1 ? "live" : undefined}
              x={x - STEP * 0.28}
              width={STEP * 0.56}
              y={y(Math.max(o, c))}
              height={Math.max(1.5, Math.abs(y(o) - y(c)))}
              fill={up ? "transparent" : color}
              stroke={color}
              strokeWidth="1"
            />
          </g>
        );
      })}
      {/* Live price marker that tracks the last close */}
      <g data-price>
        <line x1="0" x2={W} y1={lastClose} y2={lastClose} stroke="var(--bone)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 3" />
        <circle cx={W - STEP / 2} cy={lastClose} r="3" fill="var(--bull)" />
        <circle data-ping cx={W - STEP / 2} cy={lastClose} r="3" fill="none" stroke="var(--bull)" />
      </g>
    </svg>
  );
}

function PlanPanel() {
  const rows = [
    { label: "Bias", value: "Bullish above 4H structure", tone: "text-bull" },
    { label: "Key level", value: "Previous day high", tone: "text-gold" },
    { label: "Invalidation", value: "Close below Asia low", tone: "text-bear" },
  ];
  return (
    <div data-panel className="hero-hide border border-line-strong bg-ink-2 will-change-transform">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="label text-bone">Daily plan / XAU/USD</span>
        <span className="label flex items-center gap-2 text-bull">
          <span data-live-dot className="h-1.5 w-1.5 bg-bull" aria-hidden />
          Posted pre-open
        </span>
      </div>
      <div className="grid-paper px-3 pb-2 pt-4">
        <Chart />
      </div>
      <dl className="border-t border-line">
        {rows.map((r) => (
          <div key={r.label} data-row className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 last:border-b-0">
            <dt className="label text-bone-dim">{r.label}</dt>
            <dd className={`text-right font-mono text-sm ${r.tone}`}>{r.value}</dd>
          </div>
        ))}
      </dl>
      <p data-row className="border-t border-line px-4 py-3 text-xs text-bone-dim">
        Illustration of the daily format, not a live trade.
      </p>
    </div>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Full choreography for people who haven't asked for reduced motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(root);
        const ease = "expo.out";

        const split = SplitText.create(q("[data-headline]"), {
          type: "lines,words",
          mask: "lines",
          linesClass: "hero-line",
        });

        const tl = gsap.timeline({ defaults: { ease } });
        tl.set(q(".hero-hide"), { autoAlpha: 1 })
          // Eyebrow types in
          .from(q("[data-eyebrow]"), { autoAlpha: 0, x: -12, duration: 0.6 })
          // Headline lines rise out of their masks
          .from(split.lines, { yPercent: 105, duration: 1.1, stagger: 0.09 }, "-=0.35")
          .from(q("[data-copy]"), { autoAlpha: 0, y: 18, duration: 0.8 }, "-=0.7")
          .from(q("[data-cta]"), { autoAlpha: 0, y: 18, duration: 0.7, stagger: 0.08 }, "-=0.6")
          // Panel wipes open from the left like a terminal window
          .from(q("[data-panel]"), { clipPath: "inset(0 100% 0 0)", duration: 1.1, ease: "expo.inOut" }, 0.35)
          // Candles print left to right
          .from(
            q("[data-candle]"),
            { scaleY: 0, autoAlpha: 0, transformOrigin: "50% 50%", duration: 0.5, stagger: 0.045, ease: "back.out(2)" },
            0.95,
          )
          // Key levels draw across, then their labels appear
          .from(
            q("[data-level]"),
            { scaleX: 0, transformOrigin: "0% 50%", duration: 0.9, stagger: 0.15, ease: "power2.inOut" },
            1.25,
          )
          .from(q("[data-level-label]"), { autoAlpha: 0, x: 8, duration: 0.5, stagger: 0.15 }, "-=0.4")
          .from(q("[data-price]"), { autoAlpha: 0, duration: 0.5 }, "-=0.2")
          .from(q("[data-row]"), { autoAlpha: 0, x: 16, duration: 0.6, stagger: 0.08 }, "-=0.6")
          .from(q("[data-stat]"), { autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.08 }, 1.0);

        // Idle life once the intro has played: live candle breathes, price marker pings
        tl.add(() => {
          gsap.to(q('[data-body="live"]'), {
            scaleY: 0.72,
            transformOrigin: "50% 100%",
            duration: 1.6,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.fromTo(
            q("[data-ping]"),
            { attr: { r: 3 }, opacity: 0.9 },
            { attr: { r: 11 }, opacity: 0, duration: 1.8, ease: "power2.out", repeat: -1, repeatDelay: 0.4 },
          );
          gsap.to(q("[data-live-dot]"), { opacity: 0.25, duration: 0.9, yoyo: true, repeat: -1, ease: "sine.inOut" });
        });

        // Scroll: the headline and panel drift apart as the hero leaves the screen
        gsap.to(q("[data-headline]"), {
          yPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        gsap.to(q("[data-panel-wrap]"), {
          y: -60,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });

        return () => split.revert();
      });

      // Pointer tilt on the panel, only for precise pointers (no touch)
      mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
        const panel = root.current?.querySelector<HTMLElement>("[data-panel]");
        const area = root.current;
        if (!panel || !area) return;
        gsap.set(panel, { transformPerspective: 900 });
        const rx = gsap.quickTo(panel, "rotationX", { duration: 0.6, ease: "power3.out" });
        const ry = gsap.quickTo(panel, "rotationY", { duration: 0.6, ease: "power3.out" });
        const onMove = (e: PointerEvent) => {
          const r = area.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          ry(px * 7);
          rx(-py * 5);
        };
        const onLeave = () => {
          rx(0);
          ry(0);
        };
        area.addEventListener("pointermove", onMove);
        area.addEventListener("pointerleave", onLeave);
        return () => {
          area.removeEventListener("pointermove", onMove);
          area.removeEventListener("pointerleave", onLeave);
        };
      });

      // Reduced motion: just show everything
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(root.current!.querySelectorAll(".hero-hide"), { autoAlpha: 1 });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="hero relative overflow-hidden border-b border-line pt-16">
      <noscript>
        <style>{`.hero-hide{visibility:visible!important}`}</style>
      </noscript>
      <div className="frame grid gap-12 pb-14 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-20">
        <div className="flex flex-col justify-between lg:col-span-7 xl:col-span-8">
          <div>
            <p data-eyebrow className="hero-hide label text-gold">
              Gold &amp; major FX / daily bias before the open
            </p>
            <h1 data-headline className="hero-hide display mt-6 text-[clamp(3.4rem,8.4vw,9.5rem)]">
              Read the structure.
              <br />
              <span className="text-gold">
                Find the bias.
              </span>
              <br />
              Trade the plan.
            </h1>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <p data-copy className="hero-hide max-w-xl text-lg leading-relaxed text-bone-dim">
              Learn to trade gold and forex with <span className="text-bone">{site.trader}</span>. Analysis,
              key levels and trade ideas shared before the market opens, with the reasoning behind every one.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a data-cta href={site.joinUrl} className="hero-hide btn btn-gold sm:min-w-56">
                Join Elite Forex Hub
                <ArrowRight className="h-4 w-4" />
              </a>
              <a data-cta href="#method" className="hero-hide btn btn-line">
                How it works
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div data-panel-wrap className="lg:col-span-5 lg:self-end xl:col-span-4">
          <PlanPanel />
        </div>
      </div>

      <dl className="frame grid grid-cols-2 border-t border-line md:grid-cols-4">
        {[
          ["Pre-open", "Bias posted before the session"],
          ["Every loss", "Broken down in the open"],
          ["XAU + majors", "A focused watchlist"],
          ["Zero", "Indicator overload"],
        ].map(([k, v], i) => (
          <div
            key={v}
            data-stat
            className={`hero-hide py-6 md:px-6 ${i % 2 === 1 ? "border-l border-line pl-5" : ""} ${i > 0 ? "md:border-l md:border-line" : "md:pl-0"} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
          >
            <dt className="sr-only">{v}</dt>
            <dd>
              <span className="display block text-3xl lg:text-4xl">{k}</span>
              <span className="label mt-2 block text-bone-dim">{v}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
