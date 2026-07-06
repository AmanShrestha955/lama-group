"use client";
import { ArrowRight } from "lucide-react";
import { masterTl, SplitText } from "@/utils/gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const MAX = 15;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const titleX = useSpring(rawX, { stiffness: 80, damping: 20 });
  const titleY = useSpring(rawY, { stiffness: 80, damping: 20 });

  const lgX = useSpring(rawX, { stiffness: 50, damping: 18 });
  const lgY = useSpring(rawY, { stiffness: 50, damping: 18 });

  const lgFinalX = useTransform(lgX, (v) => -v);
  const lgFinalY = useTransform(lgY, (v) => -v);

  // ── mouse tracking ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      const x = clamp(nx * MAX * 2, -MAX, MAX);
      const y = clamp(ny * MAX * 2, -MAX, MAX);
      rawX.set(x);
      rawY.set(y);
    };

    const onMouseLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [rawX, rawY]);

  // ── gsap animations ──
  useEffect(() => {
    const title = new SplitText(".hero-title-text", { type: "words" });
    const rightWords = new SplitText(".words", { type: "lines" });

    masterTl
      .from(
        title.words,
        {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.5,
          ease: "power3.out",
        },
        "hero",
      )
      .from(".hero-bg-title-wrap", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(
        rightWords.lines,
        {
          opacity: 0,
          x: 50,
          stagger: 0.2,
          duration: 0.5,
          ease: "power3.out",
        },
        "<0.2",
      )
      .from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(".scroll-text", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power3.out",
      });

    return () => {
      title.revert();
      rightWords.revert();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative flex h-screen w-full flex-col bg-ink sm:items-start overflow-hidden p-12"
    >
      <Image
        src="/hero_patten.svg"
        alt="Hero Image"
        className="absolute inset-0 object-cover"
        width={1920}
        height={1080}
      />

      <div className="hero-title-wrap absolute top-80">
        <motion.h1
          style={{ x: titleX, y: titleY }}
          className="hero-title-text text-9xl font-normal text-smoke font-display"
        >
          Lama <br /> Group
        </motion.h1>
      </div>

      <div className="hero-bg-title-wrap absolute top-52 left-200">
        <motion.h1
          style={{ x: lgFinalX, y: lgFinalY }}
          className="text-[24rem] font-normal text-[#303030] font-display"
        >
          LG
        </motion.h1>
      </div>

      <p className="words absolute font-body uppercase text-[0.70rem] text-mist text-right right-10 top-20">
        Venture & Investment Group
        <br />
        Finance · Technology
        <br />
        Media · Insurance
      </p>

      <div className="absolute bottom-0 left-0 w-full flex flex-row justify-between border-t border-t-rule bg-linear-to-t from-ink to-transparent p-10">
        <p className="hero-subtitle font-display italic font-normal text-bronze text-xl">
          Zero to IPO.
        </p>
        <div className="scroll-text flex flex-row items-center gap-2">
          <p className="text-[0.70rem] text-mist uppercase font-body">
            Scroll to explore
          </p>
          <ArrowRight className="text-mist animate-movesideways" size={16} />
        </div>
      </div>
    </main>
  );
}
