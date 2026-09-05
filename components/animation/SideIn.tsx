"use client";
import { useRef, ReactNode } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/utils/gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Direction = "left" | "right" | "up" | "down";

type SlideInProps = {
  children: ReactNode;
  direction?: Direction;
  distance?: number; // px the element travels
  duration?: number; // seconds
  delay?: number; // seconds
  ease?: string; // gsap easing string
  start?: string; // ScrollTrigger "start" position
  once?: boolean; // play once vs re-trigger on re-entry
  className?: string;
};

const getOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
  }
};

export default function SlideIn({
  children,
  direction = "up",
  distance = 60,
  duration = 0.8,
  delay = 0,
  ease = "power3.out",
  start = "top 85%",
  once = true,
  className = "",
}: SlideInProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const { x, y } = getOffset(direction, distance);

      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, x, y },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        },
      );
    },
    {
      scope: containerRef,
      dependencies: [direction, distance, duration, delay, ease, start, once],
    },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
