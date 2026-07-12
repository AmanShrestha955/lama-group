"use client";
import Button from "../Button";

export default function CTA() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen bg-ink-2 relative">
      <div className="absolute w-full h-full flex justify-center items-center z-1 opacity-5">
        <h1 className="font-display text-[20rem] text-smoke text-center">
          TEAM
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center z-2">
        <p className="font-body uppercase text-[0.75rem] tracking-[0.2rem] text-bronze pb-8">
          We Are Hiring
        </p>
        <h1 className="font-display text-smoke text-3xl pb-1">
          We&apos;re building this team —
        </h1>
        <h1 className="font-display text-bronze text-3xl italic pb-14">
          get in touch if you&apos;d like to be part of it.
        </h1>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          text="GET IN TOUCH"
        />
        <div className="pt-13">
          <p className="font-body uppercase text-mist/60 text-[0.75rem] tracking-[0.2rem] pt-8 border-t border-t-rule w-2xl text-center">
            lamagroup.official@gmail.com · Kathmandu, Nepal
          </p>
        </div>
      </div>
    </section>
  );
}
