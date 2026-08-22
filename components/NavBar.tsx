"use client";
import { useState, useEffect, useRef } from "react";
import NavScroll from "./NavScroll";
import Link from "next/link";
import { gsap, useGSAP } from "@/utils/gsap";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "People", href: "/team" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // ── contextSafe wraps functions so GSAP tracks and cleans them up ──
  const { contextSafe } = useGSAP({ scope: containerRef });

  // ── mobile menu open ──
  const handleOpen = contextSafe(() => {
    setVisible(true);
    setOpen(true);
    gsap.fromTo(
      ".mobile-link",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      },
    );
  });

  // ── mobile menu close ──
  const handleClose = contextSafe(() => {
    if (!visible) return;
    setOpen(false);
    gsap.to(".mobile-link", {
      y: 40,
      opacity: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setVisible(false),
    });
  });

  // close on route change
  useEffect(() => {
    handleClose();
  }, [pathname]);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <NavScroll>
        <Link
          href="/"
          className="font-display font-light text-sm tracking-[0.25em] uppercase text-smoke hover:text-bronze transition-colors duration-300"
        >
          Lama Group
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body font-light text-[0.68rem] tracking-[0.2em] uppercase text-mist hover:text-smoke transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => (open ? handleClose() : handleOpen())}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-smoke transition-all duration-300 origin-center
            ${open ? "rotate-45 translate-y-1.25" : ""}`}
          />
          <span
            className={`block h-px bg-smoke transition-all duration-300
            ${open ? "w-6 -rotate-45 translate-y-[-1.5px]" : "w-4"}`}
          />
        </button>
      </NavScroll>

      {visible && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          className="fixed inset-0 z-499 bg-ink flex flex-col items-center justify-center gap-10 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-link font-display font-light text-5xl tracking-widest text-smoke hover:text-bronze transition-colors duration-300"
              onClick={handleClose}
            >
              {link.label}
            </Link>
          ))}

          <div className="absolute bottom-10 left-[4vw] right-[4vw] flex justify-between items-center border-t border-rule pt-6">
            <span className="font-body font-light text-[0.65rem] tracking-[0.2em] uppercase text-mist">
              Lama Holdings
            </span>
            <span className="font-display font-light italic text-sm text-bronze">
              Zero to IPO.
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
}
