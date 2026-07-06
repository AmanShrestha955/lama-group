export default function About() {
  const SECTORS = ["Finance", "Technology", "Media", "Insurance"];
  return (
    <section className="px-12 py-32 bg-ink w-full flex flex-row gap-20 items-start">
      <div className="flex flex-col flex-1 gap-5">
        <h1 className="font-body uppercase text-bronze tracking-[0.15rem] text-sm">
          About
        </h1>
        <div className="flex flex-col flex-1 gap-5">
          <h2 className="font-display capitalize italic text-smoke text-3xl">
            Building for the long term.
          </h2>
          <p className="font-body first-letter:uppercase lowercase font-light text-smoke pt-3.5">
            Lama Holdings is an emerging venture and investment group founded
            with a clear and singular vision to build sustainable, high-impact
            businesses that endure across generations.
          </p>
          <p className="font-body first-letter:uppercase lowercase font-light text-smoke">
            We are in the early stages, deliberately so. Currently focused on
            investment activities and identifying the right opportunities, we
            take the time to understand each sector before we commit capital or
            build.
          </p>
          <p className="font-body first-letter:uppercase lowercase font-light text-smoke">
            Our ambition is to construct a diversified portfolio of companies
            from the ground up and take each one as far as it can go.
          </p>
          <p className="font-body first-letter:uppercase lowercase font-light text-smoke">
            Rooted in the Kathmandu Valley, our perspective is shaped by a place
            that has built and rebuilt for centuries where craftsmanship,
            patience, and long horizons are not strategy, but inheritance.
          </p>
        </div>
        <div className="pt-5">
          {SECTORS.map((item, index) => (
            <div
              data-cursor-hover
              key={index}
              className={`
    relative overflow-hidden
    group flex items-center
    py-6 text-mist text-sm
    transition-[color,padding] duration-300
    hover:px-4 hover:text-smoke
    ${index === 0 ? "border-y border-y-rule" : "border-b border-b-rule"}
  `}
            >
              {/* left to right background sweep */}
              <span
                className="
      absolute inset-0 bg-ink-3
      -translate-x-full group-hover:translate-x-0
      transition-transform duration-500
    "
              />
              {/* text above the sweep */}
              <p className="relative uppercase font-light z-10">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="font-display flex flex-col gap-5 text-smoke border-l border-l-bronze flex-1 text-2xl p-7">
        <h1 className="italic leading-10">
          &quot;We believe in continuous exploration, long-term thinking, and
          building a diversified ecosystem of businesses that create value for
          generations to come.&quot;
        </h1>
        <h2 className="text-bronze font-body uppercase font-light text-[0.65rem] tracking-[0.2rem]">
          Founding Principle
        </h2>
      </div>
    </section>
  );
}
