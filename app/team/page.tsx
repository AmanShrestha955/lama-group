import CTA from "@/components/Team/CTA";
import OrgTree from "@/components/Team/OrgTree";
import Profiles from "@/components/Team/Profiles";
import TeamHero from "@/components/Team/TeamHero";

export default function Team() {
  return (
    <main className="flex flex-col flex-1 w-full bg-ink">
      <TeamHero />
      <OrgTree />
      <Profiles />
      <CTA />
    </main>
  );
}
