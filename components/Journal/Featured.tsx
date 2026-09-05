import Image from "next/image";
import img from "@/assets/Journal/image.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SlideIn from "../animation/SideIn";

const FEATURED_DATA = {
  date: "August 2026",
  readTime: "8 min read",
  heading: "Nepal's Capital Markets at an Inflection Point",
  info: "Why the next five years will define whether Kathmandu becomes a regional financial hub — or misses the window entirely.",
  author: "Karan Yonzan",
  title: "CFO, Lama Group",
  link: { text: "Read", nav: "#" },
  initial: "K",
};

export default function Featured() {
  return (
    <section className="w-full border-t pt-20 px-12 flex flex-col gap-8 border-rule">
      <h2 className="font-body text-[0.625rem] text-bronze uppercase tracking-[0.1363rem] leading-[0.9313rem]">
        Featured
      </h2>
      <SlideIn>
        <div
          data-cursor-hover
          className="flex flex-row w-full bg-ink-3 group overflow-hidden"
        >
          <div className="flex-1 border-r border-rule overflow-hidden">
            <Image
              src={img}
              alt="Featured Image"
              className="object-cover h-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="flex-1 flex flex-col gap-10 px-16 py-14">
            <div className="flex flex-col">
              <div className="flex flex-row gap-6 font-body text-mist text-[0.625rem] leading-[0.9313rem] tracking-[0.1363rem] uppercase">
                <p>{FEATURED_DATA.date}</p>
                <p>·</p>
                <p>{FEATURED_DATA.readTime}</p>
              </div>
              <h2 className="font-display font-light text-3xl text-smoke mt-4 group-hover:text-bronze transition-colors duration-300 ease-in-out">
                {FEATURED_DATA.heading}
              </h2>
              <p className="text-mist font-body font-light text-sm leading-loose mt-5">
                {FEATURED_DATA.info}
              </p>
            </div>
            <div className="border-t border-rule pt-8 flex flex-row justify-between">
              <div className="flex flex-row gap-3.5 items-center">
                <div className="size-8 border border-bronze-dark/60 flex items-center justify-center text-md text-bronze-dark font-display font-light">
                  {FEATURED_DATA.initial}
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-display text-[1rem] font-light text-smoke leading-tight">
                    {FEATURED_DATA.author}
                  </p>
                  <p className="text-mist/60 text-[0.625rem] leading-[0.9313rem] tracking-[0.1363rem] uppercase">
                    {FEATURED_DATA.title}
                  </p>
                </div>
              </div>
              <Link
                href={FEATURED_DATA.link.nav}
                className="flex flex-row shrink-0 gap-2 font-body font-light text-mist text-xs leading-relaxed items-center uppercase group-hover:text-bronze transition-colors duration-300 ease-in-out"
              >
                {FEATURED_DATA.link.text} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </SlideIn>
    </section>
  );
}
