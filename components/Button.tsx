import { MouseEventHandler } from "react";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
};
export default function Button({ onClick, text }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
                group relative uppercase text-bronze
                font-semibold font-body text-[0.75rem]
                border border-bronze
                px-8 py-3 md:px-10.5 md:py-4
                hover:text-ink duration-500 transition-[color]
                w-full md:w-auto
              "
    >
      <p className="relative z-2 uppercase tracking-[0.2rem]">{text}</p>
      <div className="absolute w-0 h-full bg-bronze top-0 left-0 z-1 group-hover:w-full transition-[width] duration-500 ease-out" />
    </button>
  );
}
