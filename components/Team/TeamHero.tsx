"use client";
import { useLoader } from "@/utils/LoaderProvider";
import { useGSAP, gsap, SplitText } from "@/utils/gsap";
const CONTENT = [
  { title: "Menber", body: "4" },
  { title: "Location", body: "Kathmandu, Nepal" },
  { title: "Founded", body: "2024" },
  { title: "Focus", body: "Zero to IPO" },
];
export default function TeamHero() {
  const { isLoaded } = useLoader();
  useGSAP(() => {
    const title = new SplitText(".title", { type: "lines" });
    const tl = gsap.timeline({ delay: isLoaded ? 0.2 : 4.5 });
    tl.fromTo(
      ".people",
      {
        opacity: 0,
        x: -20,
        duration: 0.3,
        ease: "power3.out",
      },
      {
        opacity: 1,
        x: 0,
      },
    )
      .fromTo(
        ".location",
        {
          opacity: 0,
          x: 30,
          ease: "power3.out",
          duration: 0.3,
        },
        { opacity: 1, x: 0 },
        "<",
      )
      .fromTo(
        title.lines,
        { opacity: 0, y: 30, stagger: 0.1, duration: 0.3, ease: "power3.out" },
        { opacity: 1, y: 0, stagger: 0.1 },
      )
      .fromTo(
        ".line",
        { scaleX: 0, transformOrigin: "0%", duration: 0.3, ease: "power3.out" },
        { scaleX: 1 },
      )
      .fromTo(
        ".line div",
        { opacity: 0, y: 30, duration: 0.3, ease: "power3.out" },
        { opacity: 1, y: 0, stagger: 0.2 },
      );
  }, []);
  return (
    <section className=" relative w-full h-screen bg-ink flex flex-col justify-end px-12">
      <div className="flex flex-row justify-between">
        <p className="people text-bronze-dark font-body uppercase tracking-[0.2rem] text-[0.75rem] pb-25 ">
          04 — People
        </p>
        <p className="location text-mist font-body uppercase tracking-[0.2rem] text-[0.75rem] pb-25 ">
          Lama Group / Kathmandu
        </p>
      </div>
      <h1 className="title font-display text-6xl text-smoke leading-20 pb-20">
        The people building
        <br /> <p className="italic">the foundation.</p>
      </h1>
      <div className="line w-full border-t border-t-rule flex flex-row gap-16 py-12">
        {CONTENT.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <p className="uppercase font-body text-[0.75rem] tracking-[0.2rem] text-bronze-dark">
              {item.title}
            </p>
            <p className="font-display text-2xl text-smoke">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
