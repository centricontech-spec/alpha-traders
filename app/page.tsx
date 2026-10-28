import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { RevealObserver } from "@/components/reveal";
import {
  About,
  Closing,
  Daily,
  Different,
  Faq,
  Method,
  Pricing,
  Program,
  Socials,
  Testimonials,
  Ticker,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-[#17120a]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Ticker />
        <About />
        <Method />
        <Daily />
        <Different />
        <Program />
        <Pricing />
        <Testimonials />
        <Socials />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
