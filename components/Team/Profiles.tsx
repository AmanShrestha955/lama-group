import ProfileCard from "../ProfileCard";
import { MEMBERS } from "./OrgTree";

export default function Profiles() {
  return (
    <section className="flex flex-col w-full bg-ink px-12">
      <div className="flex w-full py-12">
        <h1 className="font-body uppercase text-bronze text-[0.75rem] tracking-[0.2rem]">
          Individual Profiles
        </h1>
      </div>
      <div className="flex flex-col w-full">
        {MEMBERS.map((item, index) => (
          <ProfileCard
            key={index}
            initial={item.initial}
            url={item.photo}
            currentProfileNumber={index + 1}
            detail={item.bio}
            email={item.email}
            linkedin={item.linkedin}
            name={item.name}
            title={item.title}
            totalProfileNumber={MEMBERS.length}
            imagePosition={index % 2 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}
