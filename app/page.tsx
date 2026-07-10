import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Numbers from "@/components/Home/Numbers";
import ScrollingBanner from "@/components/Home/ScrollingBanner";
import Statement from "@/components/Home/Statement";
import Team from "@/components/Home/Team";

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
      <Contact />
    </div>
  );
}
