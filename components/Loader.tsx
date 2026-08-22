"use client";

import { useRef } from "react";
import { SplitText, useGSAP, gsap } from "@/utils/gsap";
import { useLoader } from "@/utils/LoaderProvider";

export default function Loader() {
  const { setIsLoaded } = useLoader();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const split = new SplitText(".loader-wordmark", { type: "chars" });

    const tl = gsap.timeline({ onComplete: () => setIsLoaded(true) });

    tl.from(split.chars, {
      y: "110%",
      opacity: 0,
      stagger: 0.04,
      duration: 0.7,
      ease: "expo.out",
    })
      .to(".loader-counter", { opacity: 1, duration: 0.4 })
      .to(".loader-line", { width: 260, duration: 1.0, ease: "expo.out" })
      .to(
        ".loader-counter",
        {
          innerText: 100,
          snap: { innerText: 1 },
          duration: 1.0,
          ease: "power2.out",
          onUpdate() {
            const el = document.querySelector(".loader-counter");
            if (el) el.textContent = Math.round(Number(el.textContent)) + "%";
          },
        },
        "<",
      )
      .to({}, { duration: 0.5 })
      .to(".loader-wrap", {
        opacity: 0,
        scale: 1.03,
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(
        ".loader-wrap",
        {
          y: "-100%",
          duration: 0.8,
          ease: "power2.in",
        },
        "<0.2",
      );

    return () => {
      tl.kill();
      split.revert();
    };
  });

  return (
    <div
      ref={containerRef}
      className="loader-wrap fixed inset-0 z-99999 bg-ink flex flex-col items-center justify-center gap-8 pointer-events-none"
    >
      {/* wordmark */}
      <div className="flex overflow-hidden">
        <p className="loader-wordmark font-display font-light text-4xl tracking-[0.25em] uppercase text-smoke">
          Lama Group
        </p>
      </div>

      {/* bronze line */}
      <div className="loader-line h-px w-0 bg-linear-to-r from-transparent via-bronze to-transparent" />

      {/* counter */}
      <span className="loader-counter opacity-0 font-body font-light text-[0.85rem] tracking-[0.22em] uppercase text-mist">
        0
      </span>
    </div>
  );
}
