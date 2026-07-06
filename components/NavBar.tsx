"use client";
import { useEffect, useState } from "react";
import NavScroll from "./NavScroll";
import Link from "next/link";
import { gsap } from "@/utils/gsap";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "People", href: "/team" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      gsap.to(".mobile-link", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });
      return;
    }
    gsap.from(".mobile-link", {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.2,
    });
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
          <Link
            href="/"
            className="font-body font-light text-[0.68rem] tracking-[0.2em] uppercase text-mist hover:text-smoke transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="font-body font-light text-[0.68rem] tracking-[0.2em] uppercase text-mist hover:text-smoke transition-colors duration-300"
          >
            Team
          </Link>
        </div>

        {/* mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-smoke transition-all duration-300 ease-in-out origin-center
            ${open ? "rotate-45 translate-y-1.25" : ""}`}
          />
          <span
            className={`block h-px bg-smoke transition-all duration-300 ease-in-out
            ${open ? "w-6 -rotate-45 translate-y-[-1.5px]" : "w-4"}`}
          />
        </button>
      </NavScroll>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-499 bg-ink flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-link font-display font-light text-5xl tracking-widest text-smoke hover:text-bronze transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* bottom detail */}
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
      </AnimatePresence>
    </>
  );
}
