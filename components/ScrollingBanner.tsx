export default function ScrollingBanner() {
  const items = ["Finance", "Technology", "Media", "Insurance"];

  return (
    <div className="w-full overflow-hidden border-y border-rule py-3 bg-ink-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* copy 1 */}
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-body font-light text-[0.65rem] tracking-[0.22em] uppercase text-mist px-6">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            </div>
          ))}
        </div>

        {/* copy 2 — identical, creates seamless loop */}
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-body font-light text-[0.65rem] tracking-[0.22em] uppercase text-mist px-6">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            </div>
          ))}
        </div>
        {/* copy 2 — identical, creates seamless loop */}
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-body font-light text-[0.65rem] tracking-[0.22em] uppercase text-mist px-6">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            </div>
          ))}
        </div>
        {/* copy 2 — identical, creates seamless loop */}
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-body font-light text-[0.65rem] tracking-[0.22em] uppercase text-mist px-6">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            </div>
          ))}
        </div>
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-body font-light text-[0.65rem] tracking-[0.22em] uppercase text-mist px-6">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            </div>
          ))}
        </div>
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-body font-light text-[0.65rem] tracking-[0.22em] uppercase text-mist px-6">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            </div>
          ))}
        </div>
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-body font-light text-[0.65rem] tracking-[0.22em] uppercase text-mist px-6">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            </div>
          ))}
        </div>
        <div className="flex items-center shrink-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-body font-light text-[0.65rem] tracking-[0.22em] uppercase text-mist px-6">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
