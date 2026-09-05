// components/animation/SlideInGroup.tsx
"use client";
import { useRef, ReactNode, Children } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/utils/gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Direction = "left" | "right" | "up" | "down";

type SlideInGroupProps = {
  children: ReactNode;
  direction?: Direction;
  distance?: number; // px each item travels
  duration?: number; // seconds, per item
  stagger?: number; // seconds between each item's start (gsap native)
  ease?: string;
  start?: string; // ScrollTrigger "start" position for the whole group
  once?: boolean;
  className?: string;
  itemClassName?: string;
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

export default function SlideInGroup({
  children,
  direction = "up",
  distance = 60,
  duration = 0.8,
  stagger = 0.15,
  ease = "power3.out",
  start = "top 85%",
  once = true,
  className = "",
  itemClassName = "",
}: SlideInGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const { x, y } = getOffset(direction, distance);
      const items = containerRef.current
        ? Array.from(containerRef.current.children)
        : [];

      gsap.fromTo(
        items,
        { autoAlpha: 0, x, y },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration,
          ease,
          stagger,
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
      dependencies: [direction, distance, duration, stagger, ease, start, once],
    },
  );

  return (
    <div ref={containerRef} className={className}>
      {Children.map(children, (child) => (
        <div className={itemClassName}>{child}</div>
      ))}
    </div>
  );
}
