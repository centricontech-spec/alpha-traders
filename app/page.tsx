import { Backdrop } from "@/components/backdrop";
import { BackdropMotion } from "@/components/backdrop-motion";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { RevealObserver } from "@/components/reveal";
import {
  About,
  Closing,
  Daily,
  Pricing,
  Program,
  Socials,
} from "@/components/sections";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero backdrop={<Backdrop variant="flow" />} />
        <About />
        <Daily />
        <Program />
        <Pricing />
        <Testimonials />
        <Socials />
        <Closing />
      </main>
      <Footer />
      <RevealObserver />
      <BackdropMotion />
    </>
  );
}
