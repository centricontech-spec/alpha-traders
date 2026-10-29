import fs from "node:fs";
import path from "node:path";
import { TestimonialSlider } from "./testimonial-slider";

const IMAGE_EXT = /\.(png|jpe?g|webp|avif|gif)$/i;

// Every image dropped into /public/testimonials shows up in the slider,
// sorted by file name. No code change is needed to add or remove one.
function getTestimonialImages() {
  const dir = path.join(process.cwd(), "public", "testimonials");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/testimonials/${encodeURIComponent(f)}`);
}

export function Testimonials() {
  const images = getTestimonialImages();
  if (images.length === 0) return null;
  return <TestimonialSlider images={images} />;
}
