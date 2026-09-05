import HeroSection, { HeroSectionProp } from "../shared/HeroSection";

const TEAM_HERO_CONTENT: HeroSectionProp = {
  topLeftTag: "04 — People",
  topRightTag: "Lama Group / Kathmandu",

  title: [
    { content: "The people building", type: "normal" },
    { content: "the foundation.", type: "italic" },
  ],
  content: [
    { title: "Menber", body: "4" },
    { title: "Location", body: "Kathmandu, Nepal" },
    { title: "Founded", body: "2024" },
    { title: "Focus", body: "Zero to IPO" },
  ],
};
export default function TeamHero() {
  return (
    <HeroSection
      content={TEAM_HERO_CONTENT.content}
      title={TEAM_HERO_CONTENT.title}
      topLeftTag={TEAM_HERO_CONTENT.topLeftTag}
      topRightTag={TEAM_HERO_CONTENT.topRightTag}
    />
  );
}
