// TeamCard.tsx
"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

type TeamCardProps = {
  firstLetter: string;
  fullName: string;
  position: string;
  detail: string;
  index: number; // ← replaced borderLeft with index, more flexible
};

export default function TeamCard({
  firstLetter,
  fullName,
  position,
  detail,
  index,
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
      // ── disable 3D tilt on touch devices ──
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`
        relative group flex flex-col
        px-8 py-10 md:px-12 md:py-12 lg:px-18
        hover:bg-ink hover:z-10
        hover:shadow-2xl hover:shadow-black
        transition-[background,box-shadow] duration-500
        ${
          /* mobile — border-t on all except first */
          index !== 0 ? "border-t border-t-rule" : ""
        }

  ${
    /* tablet — border-t on index 2,3 (second row) */
    index >= 2 ? "sm:border-t sm:border-t-rule" : "sm:border-t-0"
  }

  ${
    /* tablet — border-l on odd index (right card in each row) */
    index % 2 !== 0 ? "sm:border-l sm:border-l-rule" : "sm:border-l-0"
  }

  ${/* desktop — no border-t at all */ "lg:border-t-0"}

  ${
    /* desktop — border-l on all except first */
    index !== 0 ? "lg:border-l lg:border-l-rule" : "lg:border-l-0"
  }
      `}
    >
      {/* initial letter */}
      <h1 className="font-display font-light text-[3.5rem] md:text-[5rem] text-bronze-dark/60 group-hover:text-bronze-dark transition-colors duration-500">
        {firstLetter}
      </h1>

      {/* name */}
      <h2 className="font-display font-normal text-[1.1rem] md:text-[1.25rem] text-smoke">
        {fullName}
      </h2>

      {/* position */}
      <p className="font-body text-[0.7rem] md:text-[0.75rem] tracking-[0.15rem] text-bronze uppercase pt-2">
        {position}
      </p>

      {/* detail */}
      <p className="font-body text-[0.85rem] md:text-[0.90rem] text-mist pt-4 tracking-[0.05rem]">
        {detail}
      </p>

      {/* bottom line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full group-hover:opacity-100 opacity-10 bg-linear-to-r from-bronze-dark/60 to-bronze-dark transition-[opacity,width] duration-500" />
    </motion.div>
  );
}
