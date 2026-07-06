"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

type TeamCardProps = {
  firstLetter: string;
  fullName: string;
  position: string;
  detail: string;
  borderLeft: boolean;
};

export default function TeamCard({
  firstLetter,
  fullName,
  position,
  detail,
  borderLeft,
}: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      data-cursor-hover
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group flex flex-col h-full
          px-18 py-12
          hover:bg-ink hover:z-10
          hover:shadow-2xl hover:shadow-black
          hover:scale-105
          transition-[background,shadow,scale] duration-500
          ${borderLeft && "border-l border-l-rule"}`}
    >
      <h1 className="font-display font-light text-[5rem] text-bronze-dark/60">
        {firstLetter}
      </h1>
      <h2 className="font-display font-normal text-[1.25rem] text-smoke">
        {fullName}
      </h2>
      <p className="font-body text-[0.75rem] tracking-[0.15rem] text-bronze uppercase pt-2">
        {position}
      </p>
      <p className="font-body text-[0.90rem] text-mist pt-4 tracking-[0.05rem]">
        {detail}
      </p>
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full group-hover:opacity-100 opacity-10 bg-linear-to-r from-bronze-dark/60 to-bronze-dark transition-[background,opacity,width] duration-500"></div>
    </motion.div>
  );
}
