export default function Numbers() {
  return (
    <section className="flex flex-row w-full border-y-[0.5px] border-y-rule bg-ink-2">
      <div className="flex flex-col gap-3 flex-1 py-20 justify-center items-center">
        <h1 className="font-display font-light text-6xl first-letter:text-smoke text-bronze">
          4 ×
        </h1>
        <p className="text-mist font-body uppercase text-[0.75rem] pt-1.5">
          Target Sectors
        </p>
      </div>
      <div className="flex flex-col gap-3 flex-1 py-20 justify-center items-center border-l-[0.5px] border-l-rule">
        <h1 className="font-display font-light text-6xl text-smoke">4</h1>
        <p className="text-mist font-body uppercase text-[0.75rem] pt-1.5">
          Founding Members
        </p>
      </div>
      <div className="flex flex-col gap-3 flex-1 py-20 justify-center items-center border-l-[0.5px] border-l-rule">
        <h1 className="font-display font-light text-6xl text-smoke">KTM</h1>
        <p className="text-mist font-body uppercase text-[0.75rem]">
          Built from the Valley
        </p>
      </div>
      <div className="flex flex-col gap-3 flex-1 py-20 justify-center items-center border-l-[0.5px] border-l-rule">
        <h1 className="font-display font-light text-6xl text-smoke">IPO</h1>
        <p className="text-mist font-body uppercase text-[0.75rem]">
          The Destination
        </p>
      </div>
    </section>
  );
}
