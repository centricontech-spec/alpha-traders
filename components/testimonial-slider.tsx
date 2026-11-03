"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { Backdrop } from "./backdrop";
import { ArrowLeft, ArrowRight, Close } from "./icons";

gsap.registerPlugin(Flip);

const AUTOPLAY_MS = 1800;

// Position in the strip decides visibility and size.
// 0 is the featured card (wider), the rest share the remaining space.
// Phones show 2 cards, tablets 3, desktops 4. Everything after is hidden and waits its turn.
function slotClass(pos: number) {
  if (pos === 0) return "flex grow-[1.75]";
  if (pos === 1) return "flex grow";
  if (pos === 2) return "hidden sm:flex grow";
  if (pos === 3) return "hidden lg:flex grow";
  return "hidden";
}

export function TestimonialSlider({ images }: { images: string[] }) {
  const stripRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [order, setOrder] = useState(() => images.map((_, i) => i));
  const [zoomed, setZoomed] = useState<number | null>(null);

  // FLIP bookkeeping: capture the layout before React reorders, animate after
  const flipState = useRef<Flip.FlipState | null>(null);
  const direction = useRef<1 | -1>(1);
  const busy = useRef(false);

  const step = useCallback((dir: 1 | -1) => {
    const strip = stripRef.current;
    if (!strip || busy.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      flipState.current = Flip.getState(strip.querySelectorAll("[data-card]"));
      busy.current = true;
    }
    direction.current = dir;
    // Caterpillar: forward moves the first card to the back, backward pulls the last to the front
    setOrder((o) => (dir === 1 ? [...o.slice(1), o[0]] : [o[o.length - 1], ...o.slice(0, -1)]));
  }, []);

  useLayoutEffect(() => {
    const state = flipState.current;
    const strip = stripRef.current;
    if (!state || !strip) return;
    flipState.current = null;
    const fwd = direction.current === 1;
    Flip.from(state, {
      targets: strip.querySelectorAll("[data-card]"),
      duration: 0.9,
      ease: "power3.inOut",
      absolute: true,
      nested: true,
      // Card joining the strip grows in from the edge it arrives on
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { autoAlpha: 0, scale: 0.6, transformOrigin: fwd ? "100% 50%" : "0% 50%" },
          { autoAlpha: 1, scale: 1, duration: 0.9, ease: "power3.inOut" },
        ),
      // Card leaving shrinks away towards the edge it exits from
      onLeave: (els) =>
        gsap.fromTo(
          els,
          { autoAlpha: 1, scale: 1 },
          { autoAlpha: 0, scale: 0.6, transformOrigin: fwd ? "0% 50%" : "100% 50%", duration: 0.9, ease: "power3.inOut" },
        ),
      onComplete: () => {
        busy.current = false;
      },
    });
  }, [order]);

  // Autoplay: pauses on hover, focus or touch, while the lightbox is open,
  // when the section is off screen or the tab is hidden, and never runs with reduced motion
  const paused = useRef(false);
  const visible = useRef(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = sectionRef.current;
    const io = el ? new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), { threshold: 0.25 }) : null;
    if (el && io) io.observe(el);
    const id = window.setInterval(() => {
      if (paused.current || !visible.current || document.hidden || dialogRef.current?.open) return;
      step(1);
    }, AUTOPLAY_MS);
    return () => {
      window.clearInterval(id);
      io?.disconnect();
    };
  }, [step]);
  const pause = () => (paused.current = true);
  const resume = () => (paused.current = false);

  const open = (i: number) => {
    setZoomed(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    if (zoomed === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setZoomed((z) => (z === null ? z : (z + 1) % images.length));
      if (e.key === "ArrowLeft") setZoomed((z) => (z === null ? z : (z - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed, images.length]);

  const active = order[0];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative isolate overflow-hidden py-20 lg:py-28"
      aria-roledescription="carousel"
      aria-label="Member testimonials"
    >
      <Backdrop variant="streams" />
      <div className="frame">
        <div className="label flex items-center justify-between border-t border-line pt-4 text-bone-dim">
          <span>
            <span className="text-gold">05</span>
            <span className="mx-3" aria-hidden>
              /
            </span>
            Members
          </span>
          <span aria-live="polite">
            {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 data-reveal className="display text-[clamp(3rem,7vw,6.5rem)]">
            Straight from <span className="text-gold">the members.</span>
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous testimonial"
              className="flex h-14 w-14 items-center justify-center border border-line-strong transition-colors hover:border-gold hover:text-gold active:scale-95"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next testimonial"
              className="flex h-14 w-14 items-center justify-center bg-gold text-ink transition-colors hover:bg-gold-hi active:scale-95"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="mt-12"
          onPointerEnter={pause}
          onPointerLeave={resume}
          onFocus={pause}
          onBlur={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          <ul ref={stripRef} className="relative flex h-[clamp(300px,40vw,500px)] gap-3 sm:gap-4">
            {order.map((imgIndex, pos) => {
              const src = images[imgIndex];
              return (
                <li
                  key={src}
                  data-card
                  data-flip-id={src}
                  className={`${slotClass(pos)} min-w-0 basis-0`}
                  aria-roledescription="slide"
                  aria-label={`${imgIndex + 1} of ${images.length}`}
                  aria-hidden={pos > 3 || undefined}
                >
                  <button
                    type="button"
                    tabIndex={pos > 3 ? -1 : undefined}
                    onClick={() => open(imgIndex)}
                    className={`group relative block h-full w-full overflow-hidden border bg-ink-2 text-left transition-colors hover:border-gold ${pos === 0 ? "border-gold-deep" : "border-line"
                      }`}
                    aria-label={`Open testimonial ${imgIndex + 1} full size`}
                  >
                    <Image
                      src={src}
                      alt={`Member testimonial ${imgIndex + 1}`}
                      fill
                      sizes="(min-width: 1024px) 520px, (min-width: 640px) 45vw, 60vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="label absolute bottom-0 left-0 flex items-center gap-3 bg-ink/90 px-3 py-2 text-bone-dim transition-colors group-hover:bg-gold group-hover:text-ink">
                      {String(imgIndex + 1).padStart(2, "0")}
                      <span aria-hidden>/</span>
                      View
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Progress pips showing which testimonial is featured */}
          <ol className="mt-6 flex gap-1.5" aria-hidden>
            {images.map((src, i) => (
              <li key={src} className={`h-[3px] flex-1 transition-colors duration-500 ${i === active ? "bg-gold" : "bg-line-strong"}`} />
            ))}
          </ol>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setZoomed(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[92vh] max-w-[min(92vw,900px)] bg-transparent p-0 text-bone"
        aria-label="Testimonial"
      >
        {zoomed !== null && (
          <div className="relative">
            <Image
              src={images[zoomed]}
              alt={`Member testimonial ${zoomed + 1}`}
              width={900}
              height={1200}
              sizes="92vw"
              className="h-auto max-h-[86vh] w-auto object-contain"
            />
            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="label text-bone-dim">
                {zoomed + 1} / {images.length}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setZoomed((zoomed - 1 + images.length) % images.length)}
                  aria-label="Previous"
                  className="flex h-11 w-11 items-center justify-center border border-line-strong hover:border-gold"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomed((zoomed + 1) % images.length)}
                  aria-label="Next"
                  className="flex h-11 w-11 items-center justify-center border border-line-strong hover:border-gold"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="flex h-11 w-11 items-center justify-center bg-gold text-ink"
                >
                  <Close className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
