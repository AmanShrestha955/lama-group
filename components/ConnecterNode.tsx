"use client";
import { useState } from "react";
import NodeCard from "./Node";
type ConnecterNodeProp = {
  initial: string;
  name: string;
  title: string;
  size?: number;
  textSize?: number;
  line: "up" | "down";
  preview?: boolean;
};
export default function ConnecterNode({
  initial,
  name,
  title,
  size = 4.5,
  textSize = 3,
  line,
  preview = false,
}: ConnecterNodeProp) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {line === "up" && (
        <div className="relative h-27 w-0.5 bg-rule ">
          <div
            className={`w-full h-full bg-linear-to-b from-bronze-dark to-bronze-dark/60 ${hovered ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          ></div>
        </div>
      )}
      <div
        onMouseEnter={() => {
          if (!preview) setHovered(true);
        }}
        onMouseLeave={() => {
          if (!preview) setHovered(false);
        }}
        className="group flex flex-col justify-center items-center gap-2"
      >
        {/* node */}
        <NodeCard
          size={size}
          textSize={textSize}
          letter={initial}
          preview={preview}
          hovered={hovered}
        />
        {/* name */}
        <h1
          className={`font-display ${preview ? "text-mist" : "text-smoke/50 group-hover:text-smoke"} text-xl transition-colors duration-500`}
        >
          {name}
        </h1>
        {/* title */}
        <p
          className={`font-body ${preview ? "text-rule" : "text-bronze-dark/50 group-hover:text-bronze-dark"} text-center uppercase text-[0.75rem] tracking-[0.2rem] transition-colors duration-500`}
        >
          {title}
        </p>
      </div>
      {/* horizontal line */}
      {line === "down" && (
        <div className="relative h-27 w-0.5 bg-rule ">
          <div
            className={`w-full h-full bg-linear-to-b from-bronze-dark to-bronze-dark/60 ${hovered ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          ></div>
        </div>
      )}
    </>
  );
}
