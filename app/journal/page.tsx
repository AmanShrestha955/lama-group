import AllArticles from "@/components/Journal/AllArticles";
import Featured from "@/components/Journal/Featured";
import JournalHero from "@/components/Journal/JournalHero";

export default function Page() {
  return (
    <main className="flex flex-col flex-1 w-full bg-ink gap-5">
      <JournalHero />
      <Featured />
      <AllArticles />
    </main>
  );
}
