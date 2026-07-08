export default function Numbers() {
  const NUMBERS = [
    {
      value: "4 ×",
      label: "Target Sectors",
      valueClass: "first-letter:text-smoke text-bronze",
    },
    { value: "4", label: "Founding Members", valueClass: "text-smoke" },
    { value: "KTM", label: "Built from the Valley", valueClass: "text-smoke" },
    { value: "IPO", label: "The Destination", valueClass: "text-smoke" },
  ];

  return (
    <section className="w-full border-y-[0.5px] border-y-rule bg-ink-2">
      <div
        className="
        grid
        grid-cols-2      
        lg:grid-cols-4   
      "
      >
        {NUMBERS.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col gap-3
              py-12 sm:py-16 lg:py-20
              justify-center items-center
              ${
                /* border-l on right column mobile (odd), all except first on desktop */
                index % 2 !== 0 ? "border-l-[0.5px] border-l-rule" : ""
              }
              ${
                /* on desktop — border-l on all except first */
                index !== 0
                  ? "lg:border-l-[0.5px] lg:border-l-rule"
                  : "lg:border-l-0"
              }
              ${
                /* border-t on bottom row mobile (index 2,3) */
                index >= 2 ? "border-t-[0.5px] border-t-rule" : ""
              }
              ${/* remove border-t on desktop — single row */ "lg:border-t-0"}
            `}
          >
            <h1
              className={`
              font-display font-light
              text-4xl sm:text-5xl lg:text-6xl
              ${item.valueClass}
            `}
            >
              {item.value}
            </h1>
            <p
              className="
              text-mist font-body uppercase
              text-[0.65rem] sm:text-[0.75rem]
              tracking-widest
              text-center px-4
            "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
