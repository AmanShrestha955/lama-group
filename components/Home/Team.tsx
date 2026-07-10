"use client";
import { useEffect } from "react";
import TeamCard from "../TeamCard";
import { gsap, ScrollTrigger } from "@/utils/gsap";

const TEAM = [
  {
    firstLetter: "B",
    fullname: "Binamra Bhattarai",
    position: "executive advisor, insurance & risk management",
    detail:
      "Providing deep expertise in insurance, risk management, and strategic advisory across the portfolio.",
  },
  {
    firstLetter: "A",
    fullname: "Aman Shrestha",
    position: "Chief technology officer",
    detail:
      "Responsible for technological innovation, digital transformation, and product development across the group's ventures.",
  },
  {
    firstLetter: "N",
    fullname: "Nitesh Lama",
    position: "Founder, chairman & CEO",
    detail:
      "Leading the group's strategic vision, business development, and long-term expansion. The founding force behind Lama Group",
  },
  {
    firstLetter: "K",
    fullname: "Karan Lama",
    position: "chief financial officer",
    detail:
      "Leading financial planning, investment strategy, and capital allocation to build ventures on sound financial foundations.",
  },
];

export default function Team() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".team", start: "top 60%" },
    });

    tl.from(".team-label", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power3.out",
    }).from(".cards div", {
      y: -50,
      scale: 1.1,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="team px-6 py-12 md:px-12 md:py-14 flex-1 w-full bg-ink-2 flex flex-col gap-3 z-2"
      style={{ perspective: "1000px" }}
    >
      <h1 className="team-label font-body font-light text-[0.75rem] uppercase tracking-[0.2rem] text-bronze">
        The Team
      </h1>

      {/* mobile: 1 col, tablet: 2 col, desktop: 4 col */}
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-1">
        {TEAM.map((item, index) => (
          <TeamCard
            key={index}
            firstLetter={item.firstLetter}
            fullName={item.fullname}
            detail={item.detail}
            position={item.position}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
