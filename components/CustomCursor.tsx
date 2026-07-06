"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const dotX = useSpring(mx, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(my, { stiffness: 1000, damping: 50 });

  const ringX = useSpring(mx, { stiffness: 250, damping: 25 });
  const ringY = useSpring(my, { stiffness: 250, damping: 25 });

  // ── hover scale ──
  const dotScale = useMotionValue(1);
  const dotScaleSpring = useSpring(dotScale, { stiffness: 300, damping: 25 });

  // ── ring opacity ──
  const ringOpacity = useMotionValue(1);
  const ringOpacitySpring = useSpring(ringOpacity, {
    stiffness: 300,
    damping: 25,
  });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // track hover state so click knows what size to return to
  const isHovered = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const onContextMenu = () => {
      ringX.jump(mx.get());
      ringY.jump(my.get());
      if (ringRef.current) ringRef.current.style.opacity = "0";
      setTimeout(() => {
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }, 500);
    };

    const onDblClick = () => {
      ringX.jump(mx.get());
      ringY.jump(my.get());
    };

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    // ── delegation — works for ALL elements, even ones mounted later ──
    const onHover = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInteractive = target.closest("a, button, [data-cursor-hover]");
      if (isInteractive) {
        isHovered.current = true;
        dotScale.set(3.6);
        ringOpacity.set(0);
      }
    };

    const onHoverOut = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInteractive = target.closest("a, button, [data-cursor-hover]");
      if (isInteractive) {
        isHovered.current = false;
        dotScale.set(1);
        ringOpacity.set(1);
      }
    };

    const onMouseDown = () => {
      dotScale.set(0); // shrinks to nothing on click
    };

    const onMouseUp = () => {
      dotScale.set(isHovered.current ? 3.6 : 1); // returns to hover size or normal
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", move);
    window.addEventListener("contextmenu", onContextMenu);
    window.addEventListener("dblclick", onDblClick);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    // ── delegation listeners on document ──
    document.addEventListener("mouseover", onHover);
    document.addEventListener("mouseout", onHoverOut);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("contextmenu", onContextMenu);
      window.removeEventListener("dblclick", onDblClick);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onHover);
      document.removeEventListener("mouseout", onHoverOut);
    };
  }, [mx, my, ringX, ringY, dotScale, ringOpacity]);

  return (
    <>
      {/* dot */}
      <motion.div
        ref={dotRef}
        style={{ x: dotX, y: dotY, scale: dotScaleSpring }}
        className="
          fixed top-0 left-0 z-9999 pointer-events-none
          w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2
          rounded-full bg-smoke mix-blend-difference
          transition-opacity duration-200
        "
      />
      {/* ring */}
      <motion.div
        ref={ringRef}
        style={{ x: ringX, y: ringY, opacity: ringOpacitySpring }}
        className="
          fixed top-0 left-0 z-9998 pointer-events-none
          w-9 h-9 -translate-x-1/2 -translate-y-1/2
          rounded-full border border-bronze/40
        "
      />
    </>
  );
}
