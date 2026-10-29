"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Close } from "./icons";

export function TestimonialSlider({ images }: { images: string[] }) {
  const railRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [zoomed, setZoomed] = useState<number | null>(null);

  // Track which card is nearest the left edge, and whether we can scroll further
  const onScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.children) as HTMLElement[];
    const left = rail.scrollLeft;
    let nearest = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - rail.offsetLeft - left);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
    setAtStart(left <= 4);
    setAtEnd(left + rail.clientWidth >= rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    onScroll();
    const rail = railRef.current;
    rail?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      rail?.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll]);

  const scrollByCard = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.children[0] as HTMLElement | undefined;
    const step = card ? card.offsetWidth + 16 : rail.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

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

  return (
    <section id="testimonials" className="overflow-hidden py-20 lg:py-28" aria-roledescription="carousel" aria-label="Member testimonials">
      <div className="frame">
        <div className="label flex items-center justify-between border-t border-line pt-4 text-bone-dim">
          <span>
            <span className="text-gold">07</span>
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
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous testimonial"
              className="flex h-14 w-14 items-center justify-center border border-line-strong transition-colors hover:border-gold hover:text-gold active:scale-95 disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next testimonial"
              className="flex h-14 w-14 items-center justify-center bg-gold text-ink transition-colors hover:bg-gold-hi active:scale-95 disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* The rail starts aligned with the page frame and bleeds off the right edge */}
      <ul
        ref={railRef}
        className="rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 pl-5 pr-5 sm:pl-8 lg:pl-12 2xl:pl-16 [scroll-padding-left:1.25rem] sm:[scroll-padding-left:2rem] lg:[scroll-padding-left:3rem] 2xl:[scroll-padding-left:4rem]"
      >
        {images.map((src, i) => (
          <li
            key={src}
            className="w-[82vw] shrink-0 snap-start sm:w-[400px] lg:w-[440px]"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
          >
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block aspect-square w-full overflow-hidden border border-line bg-ink-2 text-left transition-colors hover:border-gold"
              aria-label={`Open testimonial ${i + 1} full size`}
            >
              <Image
                src={src}
                alt={`Member testimonial ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 400px, 82vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="label absolute bottom-0 left-0 bg-ink/90 px-3 py-2 text-bone-dim transition-colors group-hover:bg-gold group-hover:text-ink">
                View
              </span>
            </button>
          </li>
        ))}
        <li aria-hidden className="w-px shrink-0" />
      </ul>

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
