import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export const loaderTl = gsap.timeline({ paused: true });

export const masterTl = gsap.timeline({ paused: true });

masterTl
  .addLabel("nav", 0) // nav entrance
  .addLabel("hero", 0.7); // hero entrance — 0.7s after nav starts

export { gsap, ScrollTrigger, SplitText };
