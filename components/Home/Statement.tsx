"use client";
import { gsap, SplitText, useGSAP } from "@/utils/gsap";
export default function Statement() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".statement",
        start: "top 60%",
      },
    });
    const statementText = new SplitText(".statement-text", { type: "chars" });
    tl.fromTo(
      statementText.chars,
      {
        stagger: 0.02,
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.02,
      },
    ).fromTo(
      ".statement h1",
      {
        y: -300,
        ease: "power3.out",
        scrollTrigger: {
          scrub: 2,
          end: "bottom 60%",
          trigger: ".statement",
        },
      },
      {
        y: 0,
        scrollTrigger: {
          scrub: 2,
          end: "bottom 60%",
          trigger: ".statement",
        },
      },
    );
  }, []);
  return (
    <section className=" statement relative w-full flex items-center justify-center">
      {/* background IPO text */}
      <h1
        className="
        font-display text-smoke font-light
        text-[6rem] sm:text-[10rem] lg:text-[16rem]
        absolute z-1 opacity-5
        select-none pointer-events-none
        w-full text-center
      "
      >
        IPO
      </h1>

      {/* foreground statement */}
      <div
        className="
        relative z-2
        py-20 sm:py-28 lg:py-40
        px-6 sm:px-12
        text-center
      "
      >
        <h2
          className=" statement-text
          font-display text-smoke
          text-xl sm:text-2xl lg:text-3xl
          leading-relaxed
        "
        >
          From a first investment to a public listing —{" "}
          {/* on mobile inline, on desktop new line */}
          <br className="hidden sm:block" />
          <span className="text-bronze italic">
            the journey is the strategy.
          </span>
        </h2>
      </div>
    </section>
  );
}
