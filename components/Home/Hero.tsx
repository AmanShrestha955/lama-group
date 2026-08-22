"use client";
import { ArrowRight } from "lucide-react";
import { SplitText, gsap, useGSAP } from "@/utils/gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useLoader } from "@/utils/LoaderProvider";

const MAX = 15;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Hero() {
  const { isLoaded } = useLoader();
  const containerRef = useRef<HTMLElement>(null);
  const titleWrapRef = useRef<HTMLDivElement>(null);
  const bgTitleWrapRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollTextRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const titleX = useSpring(rawX, { stiffness: 80, damping: 20 });
  const titleY = useSpring(rawY, { stiffness: 80, damping: 20 });

  const lgX = useSpring(rawX, { stiffness: 50, damping: 18 });
  const lgY = useSpring(rawY, { stiffness: 50, damping: 18 });

  const lgFinalX = useTransform(lgX, (v) => -v);
  const lgFinalY = useTransform(lgY, (v) => -v);

  // ── mouse tracking — desktop only ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      rawX.set(clamp(nx * MAX * 2, -MAX, MAX));
      rawY.set(clamp(ny * MAX * 2, -MAX, MAX));
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
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const titleElement = titleWrapRef.current?.querySelector("h1");
      if (!titleElement) return;

      const title = new SplitText(titleElement, { type: "words" });
      const rightWords = new SplitText(wordsRef.current!, { type: "lines" });

      const tl = gsap.timeline({
        delay: isLoaded ? 0 : 4.5, // ← matches loader duration, hero animates after loader done
      });

      tl.fromTo(
        title.words,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power3.out" },
      )
        .fromTo(
          bgTitleWrapRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        )
        .fromTo(
          rightWords.lines,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, stagger: 0.2, duration: 0.5, ease: "power3.out" },
          "<0.2",
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        )
        .fromTo(
          scrollTextRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "all",
          },
        );

      return () => {
        title.revert();
        rightWords.revert();
        tl.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="
        relative flex h-screen w-full flex-col
        bg-ink overflow-hidden
        p-6 sm:p-10 md:p-12
      "
    >
      <Image
        src="/hero_patten.svg"
        alt="Hero Image"
        className="absolute inset-0 object-cover opacity-60 md:opacity-100"
        width={1920}
        height={1080}
      />

      {/* ── main title ── */}
      <div
        ref={titleWrapRef}
        className="absolute bottom-32 sm:bottom-40 md:top-72 lg:top-80 left-6 sm:left-10 md:left-12"
      >
        <motion.h1
          style={{ x: titleX, y: titleY }}
          className="
            font-normal text-smoke font-display
            text-6xl sm:text-7xl md:text-8xl lg:text-9xl
            leading-none
          "
        >
          Lama <br /> Group
        </motion.h1>
      </div>

      {/* ── LG background text ── */}
      <div
        ref={bgTitleWrapRef}
        className="hidden md:block absolute top-32 lg:top-52 right-0 lg:left-200"
      >
        <motion.h1
          style={{ x: lgFinalX, y: lgFinalY }}
          className="
            font-normal text-[#303030] font-display
            text-[10rem] lg:text-[24rem]
            select-none pointer-events-none
          "
        >
          LG
        </motion.h1>
      </div>

      {/* ── descriptor ── */}
      <p
        ref={wordsRef}
        className="
          hidden sm:block
          absolute font-body uppercase text-[0.70rem] text-mist text-right
          right-6 sm:right-10 md:right-10
          top-16 sm:top-20
        "
      >
        Venture & Investment Group
        <br />
        Finance · Technology
        <br />
        Media · Insurance
      </p>

      {/* ── bottom bar ── */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          flex flex-row justify-between items-center
          border-t border-t-rule
          bg-linear-to-t from-ink to-transparent
          p-6 sm:p-8 md:p-10
        "
      >
        <p
          ref={subtitleRef}
          className="font-display italic font-normal text-bronze text-base sm:text-lg md:text-xl"
        >
          Zero to IPO.
        </p>
        <div ref={scrollTextRef} className="flex flex-row items-center gap-2">
          <p className="hidden sm:block text-[0.65rem] sm:text-[0.70rem] text-mist uppercase font-body">
            Scroll to explore
          </p>
          <ArrowRight className="text-mist animate-movesideways" size={14} />
        </div>
      </div>
    </main>
  );
}
