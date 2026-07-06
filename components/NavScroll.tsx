"use client";
import { masterTl } from "@/utils/gsap";
import { useEffect, useState } from "react";

export default function NavScroll({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("nav label time:", masterTl.labels); // ← add this
    console.log("nav element:", document.querySelector(".nav-scroll"));

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    masterTl.from(
      ".nav-scroll",
      {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.out",
      },
      "nav",
    );

    console.log("after register:", masterTl.getChildren()); // ← and this
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
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
