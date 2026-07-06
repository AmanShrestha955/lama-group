import About from "@/components/About";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import ScrollingBanner from "@/components/ScrollingBanner";
import Statement from "@/components/Statement";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-ink">
      {/* hero section */}
      <Hero />
      <ScrollingBanner />
      <About />
      <Numbers />
      <Statement />
      <Team />
    </div>
  );
}
