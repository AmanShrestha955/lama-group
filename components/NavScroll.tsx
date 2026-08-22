"use client";
import { useGSAP, gsap } from "@/utils/gsap";
import { useLoader } from "@/utils/LoaderProvider";
import { useRef, useEffect, useState } from "react";

export default function NavScroll({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const { isLoaded } = useLoader();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      if (!navRef.current) return;

      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: isLoaded ? 0 : 4.5, // ← matches loader duration
          clearProps: "all", // ← clears inline styles after animation
        },
      );
    },
    { scope: navRef },
  );

  return (
    <nav
      ref={navRef}
      className={` nav-scroll
      fixed top-0 left-0 right-0 z-500
      flex items-center justify-between
      px-[4vw] transition-[padding,background-color,backdrop-filter,border-color] duration-500
      ${
        scrolled
          ? "py-5 bg-ink/85 backdrop-blur-lg border-b border-rule"
          : "py-8"
      }
    `}
    >
      {children}
    </nav>
  );
}
