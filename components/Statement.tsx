export default function Statement() {
  return (
    <section className="relative w-full flex items-center justify-center">
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
          className="
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
