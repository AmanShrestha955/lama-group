"use client";
import { useGSAP, gsap } from "@/utils/gsap";
import ConnecterNode from "../ConnecterNode";
import { MEMBERS } from "@/utils/Members";

const founder = MEMBERS.filter((item) => item.role === "founder");

const cMember = MEMBERS.filter((item) => item.role === "c-suite");

export default function OrgTree() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".org-lable", start: "top, 70%" },
    });

    tl.fromTo(
      ".org-lable",
      { opacity: 0, y: 20, duration: 0.3, ease: "power3.out" },
      { opacity: 1, y: 0 },
    )
      .fromTo(
        ".tree",
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          duration: 0.3,
          ease: "power3.out",
        },
        { opacity: 1, y: 0, scale: 1 },
      )
      .fromTo(
        ".tree-line",
        { scaleX: 0, opacity: 0.4, duration: 0.2, ease: "power3.out" },
        { scaleX: 1, opacity: 1 },
      );
  });
  return (
    <section className="flex flex-col w-full px-12 py-30">
      <h1 className="org-lable font-body tracking-[0.2rem] text-[0.75rem] text-bronze uppercase">
        Organizational Structure
      </h1>
      <div className="tree flex flex-col justify-center items-center w-full">
        {/* node, title and name  */}
        {founder.map((item, index) => (
          <ConnecterNode
            initial={item.initial}
            line="down"
            name={item.name}
            title={item.title}
            key={index}
          />
        ))}
        {/* vertical line */}
        <div className="tree-line w-5xl h-0.5 bg-rule"></div>

        <div className="flex flex-row items-start w-5xl">
          {cMember.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 justify-center items-center"
            >
              <ConnecterNode
                initial={item.initial}
                line="up"
                name={item.name}
                title={item.title}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row items-start w-5xl">
          {cMember.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 gap-4 justify-center items-center"
            >
              <ConnecterNode
                initial={item.initial}
                line="up"
                name="Future Role"
                title=" "
                preview={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
