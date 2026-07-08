// Team.tsx
import TeamCard from "./TeamCard";

const TEAM = [
  {
    firstLetter: "B",
    fullname: "Binamra Bhattarai",
    position: "executive advisor, insurance & risk management",
    detail:
      "Fifteen years across capital markets and venture. Previously led growth investments across South and Southeast Asia.",
  },
  {
    firstLetter: "A",
    fullname: "Aman Shrestha",
    position: "Chief technology officer",
    detail:
      "Former operator and CTO. Specializes in deep tech and enterprise software across emerging markets.",
  },
  {
    firstLetter: "N",
    fullname: "Nitesh Lama",
    position: "Founder, chairman & CEO",
    detail:
      "Trained in structured finance in London and Singapore. Leads portfolio strategy and LP relations.",
  },
  {
    firstLetter: "K",
    fullname: "Karan Lama",
    position: "chief financial officer",
    detail:
      "Founder twice over. Deep expertise in media distribution, content platforms, and risk product design.",
  },
];

export default function Team() {
  return (
    <section
      className="px-6 py-12 md:px-12 md:py-14 flex-1 w-full bg-ink-2 flex flex-col gap-3"
      style={{ perspective: "1000px" }}
    >
      <h1 className="font-body font-light text-[0.75rem] uppercase tracking-[0.2rem] text-bronze">
        The Team
      </h1>

      {/* mobile: 1 col, tablet: 2 col, desktop: 4 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-1">
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
