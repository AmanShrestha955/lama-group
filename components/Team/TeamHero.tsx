const CONTENT = [
  { title: "Menber", body: "4" },
  { title: "Location", body: "Kathmandu, Nepal" },
  { title: "Founded", body: "2024" },
  { title: "Focus", body: "Zero to IPO" },
];
export default function TeamHero() {
  return (
    <section className=" relative w-full h-screen bg-ink flex flex-col justify-end px-12">
      <div className="flex flex-row justify-between">
        <p className="text-bronze-dark font-body uppercase tracking-[0.2rem] text-[0.75rem] pb-25 ">
          04 — People
        </p>
        <p className="text-mist font-body uppercase tracking-[0.2rem] text-[0.75rem] pb-25 ">
          Lama Group / Kathmandu
        </p>
      </div>
      <h1 className="font-display text-6xl text-smoke leading-20 pb-20">
        The people building
        <br /> <p className="italic">the foundation.</p>
      </h1>
      <div className="w-full border-t border-t-rule flex flex-row gap-16 py-12">
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
