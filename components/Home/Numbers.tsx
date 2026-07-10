"use client";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";

export default function Numbers() {
  const NUMBERS = [
    {
      value: "4",
      suffix: " ×",
      label: "Target Sectors",
      valueClass: "text-bronze",
      countUp: true,
    },
    {
      value: "4",
      suffix: "",
      label: "Founding Members",
      valueClass: "text-smoke",
      countUp: true,
    },
    {
      value: "KTM",
      suffix: "",
      label: "Built from the Valley",
      valueClass: "text-smoke",
      countUp: false,
    },
    {
      value: "IPO",
      suffix: "",
      label: "The Destination",
      valueClass: "text-smoke",
      countUp: false,
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".numbers",
        start: "top 70%",
      },
    });

    // ── all blocks fade in with stagger ──
    tl.from(".number-block", {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    })

      // ── count up numbers after blocks appear ──
      .to(
        ".number-countup",
        {
          innerText: 4,
          duration: 1.2,
          ease: "power1.in",
          snap: { innerText: 1 },
          stagger: 0.1,
        },
        "<0.3",
      );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="numbers w-full border-y-[0.5px] border-y-rule bg-ink-2 z-2">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {NUMBERS.map((item, index) => (
          <div
            key={index}
            className={`
              number-block
              flex flex-col gap-3
              py-12 sm:py-16 lg:py-20
              justify-center items-center
              ${index % 2 !== 0 ? "border-l-[0.5px] border-l-rule" : ""}
              ${index !== 0 ? "lg:border-l-[0.5px] lg:border-l-rule" : "lg:border-l-0"}
              ${index >= 2 ? "border-t-[0.5px] border-t-rule" : ""}
              lg:border-t-0
            `}
          >
            <h1
              className={`
              font-display font-light
              text-4xl sm:text-5xl lg:text-6xl
              ${item.valueClass}
            `}
            >
              {/* countup numbers get separate span */}
              {item.countUp ? (
                <>
                  <span className="number-countup">0</span>
                  {item.suffix}
                </>
              ) : (
                item.value
              )}
            </h1>
            <p
              className="
              text-mist font-body uppercase
              text-[0.65rem] sm:text-[0.75rem]
              tracking-widest text-center px-4
            "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
