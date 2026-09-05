"use client";
import { Mail } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import SlideIn from "./animation/SideIn";
type ProfileCardProps = {
  photo?: StaticImageData;
  initial: string;
  totalProfileNumber: number;
  currentProfileNumber: number;
  title: string;
  name: string;
  detail: string;
  linkedin: string;
  email: string;
  imagePosition?: "left" | "right";
};

const corner = [
  "left-2 top-2 border-l border-t border-l-bronze border-t-bronze",
  "right-2 top-2 border-r border-t border-r-bronze border-t-bronze",
  "left-2 bottom-2 border-l border-b border-l-bronze border-b-bronze",
  "right-2 bottom-2 border-r border-b border-r-bronze border-b-bronze",
];
export default function ProfileCard({
  photo,
  initial,
  totalProfileNumber,
  currentProfileNumber,
  detail,
  email,
  linkedin,
  name,
  title,
  imagePosition = "left",
}: ProfileCardProps) {
  return (
    <div
      className={`flex ${imagePosition === "left" ? "flex-row" : "flex-row-reverse"} gap-16 py-20 border-y border-y-rule items-center overflow-hidden`}
    >
      <SlideIn
        start="top 60%"
        duration={1}
        direction={imagePosition === "left" ? "left" : "right"}
        className="relative w-73.5 h-92 aspect-4/5"
      >
        {corner.map((item, index) => (
          <div className={`absolute size-3 ${item}`} key={index}></div>
        ))}
        <div className="w-full h-full bg-bronze/8 hover:bg-bronze/13 transition-colors duration-300 absolute"></div>
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={294}
            height={368}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center bg-ink-2">
            <span className="font-display font-light text-[8rem] text-bronze-dark/40">
              {initial}
            </span>
          </div>
        )}
      </SlideIn>
      <SlideIn
        duration={1}
        direction={imagePosition === "left" ? "right" : "left"}
        className="flex flex-col items-start flex-1"
      >
        <p className="font-display text-mist italic text-[0.75rem]">
          0{currentProfileNumber}/0{totalProfileNumber}
        </p>
        <h1 className="font-body text-bronze text-[0.75rem] tracking-[0.2rem] uppercase pt-5">
          {title}
        </h1>
        <h2 className="font-display capitalize text-3xl text-smoke pt-2">
          {name}
        </h2>
        <div className="size-8 border-b border-b-bronze-dark"></div>
        <div className="flex flex-col gap-4 pt-6">
          {detail
            .split("\n\n")
            .filter(Boolean)
            .map((paragraph, i) => (
              <p
                key={i}
                className="font-body font-light text-mist text-sm w-2xl leading-6.5"
              >
                {paragraph.trim()}
              </p>
            ))}
        </div>
        <div className="flex flex-row justify-start gap-4 items-center pt-9">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center size-11 border  group border-rule hover:border-bronze transition-colors duration-300"
          >
            <svg
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-mist group-hover:text-bronze transition-colors duration-300"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center size-11 border  group border-rule hover:border-bronze transition-colors duration-300"
          >
            <Mail
              size={"1rem"}
              className="text-mist group-hover:text-bronze transition-colors duration-300"
            />
          </a>
        </div>
      </SlideIn>
    </div>
  );
}
