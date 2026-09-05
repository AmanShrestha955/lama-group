import HeroSection, { HeroSectionProp } from "../shared/HeroSection";

const JOURNAL_HERO_CONTENT: HeroSectionProp = {
  topLeftTag: "5 - JOURNAL",
  topRightTag: "PERSPECTIVES FROM LAMA GROUP",

  title: [
    { content: "Perspectives on", type: "normal" },
    { content: "capital & growth", type: "italic" },
  ],

  content: [
    { title: "ARTICLES", body: "6" },
    { title: "AUTHORS", body: "4" },
    { title: "TOPICS", body: "5" },
  ],
};

export default function JournalHero() {
  return (
    <HeroSection
      content={JOURNAL_HERO_CONTENT.content}
      title={JOURNAL_HERO_CONTENT.title}
      topLeftTag={JOURNAL_HERO_CONTENT.topLeftTag}
      topRightTag={JOURNAL_HERO_CONTENT.topRightTag}
    />
  );
}
