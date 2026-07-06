"use client";

import { useEffect, useRef } from "react";
import { SplitText, loaderTl, masterTl } from "@/utils/gsap";
import { useLoader } from "@/utils/LoaderProvider";

export default function Loader() {
  const { setIsLoaded } = useLoader();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    const split = new SplitText(".loader-wordmark", { type: "chars" });

    // ── main timeline ──
    loaderTl
      .from(
        split.chars,
        {
          y: "110%",
          opacity: 0,
          stagger: 0.04,
          duration: 0.7,
          ease: "expo.out",
        },
        "loader",
      )
      // counter fades in — same time as line
      .to(".loader-counter", {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })
      // bronze line sweeps — starts as first letter lands
      .to(".loader-line", {
        width: 260,
        duration: 1.0,
        ease: "expo.out",
      })
      .to(
        ".loader-counter",
        {
          innerText: 100,
          snap: { innerText: 1 },
          duration: 1.0,
          ease: "power2.out",
        },
        "<",
      )
      // hold briefly
      .to({}, { duration: 0.5 })
      // exit — whole loader lifts and fades
      .to(wrapRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(
        wrapRef.current,
        {
          y: "-100%",
          duration: 0.8,
          ease: "power2.in",
          onComplete: () => {
            setIsLoaded(true);
            masterTl.play();
          },
        },
        "<0.2",
      );
    loaderTl.play();
    return () => {
      loaderTl.kill();
      split.revert();
    };
  }, [setIsLoaded]);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-99999 bg-ink flex flex-col items-center justify-center gap-8 pointer-events-none"
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
      <span className="loader-counter opacity-0 font-body font-light text-xs tracking-[0.22em] uppercase text-mist">
        0
      </span>
    </div>
  );
}
