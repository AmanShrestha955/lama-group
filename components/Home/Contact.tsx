"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/utils/gsap";
import Button from "../Button";

export default function Contact() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".contact", start: "top 60%" },
    });
    tl.fromTo(
      ".label",
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      },
      {
        opacity: 1,
        y: 0,
      },
    )
      .fromTo(
        ".title",
        {
          opacity: 0,
          y: 20,
          ease: "power3.out",
          duration: 0.5,
        },
        {
          opacity: 1,
          y: 0,
        },
      )
      .fromTo(
        ".form div",
        {
          opacity: 0,
          x: 30,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
        },
      )
      .fromTo(
        ".details div",
        {
          opacity: 0,
          x: 30,
          stagger: 0.2,
          duration: 0.7,
          ease: "power3.out",
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
        },
      );
  }, []);

  return (
    <section className=" contact flex-1 flex flex-col gap-2 px-6 py-16 md:px-12 md:py-24 lg:py-30 bg-ink">
      {/* label */}
      <h1 className="label text-bronze uppercase font-body tracking-[0.2rem] text-[0.75rem]">
        Get in Touch
      </h1>

      {/* title */}
      <h2 className="title text-2xl md:text-3xl font-display text-smoke italic">
        Start a conversation.
      </h2>

      {/* main grid — stacks on mobile, side by side on desktop */}
      <div className="flex-1 flex flex-col lg:flex-row gap-12 lg:gap-20 pt-4 md:pt-0">
        {/* ── form ── */}
        <form className="form flex flex-1 flex-col gap-6 pt-4 md:pt-7.5">
          {/* name */}
          <div className="relative flex flex-col">
            <input
              data-cursor-hover
              type="text"
              placeholder="YOUR NAME"
              className="
                peer placeholder:text-mist/40 focus:placeholder:text-mist
                text-[0.75rem] pb-6 md:pb-12
                border-b border-b-mist/45
                outline-0 text-smoke bg-transparent w-full
                placeholder:transition-[color] placeholder:duration-500
              "
            />
            <span className="absolute h-px bg-linear-to-r from-bronze-dark to-bronze w-0 bottom-0 peer-focus:w-full transition-[width] duration-500 ease-out" />
          </div>

          {/* email */}
          <div className="relative flex flex-col">
            <input
              data-cursor-hover
              type="email"
              placeholder="YOUR EMAIL"
              className="
                peer placeholder:text-mist/40 focus:placeholder:text-mist
                text-[0.75rem] pb-6 md:pb-12
                border-b border-b-mist/45
                outline-0 text-smoke bg-transparent w-full
                placeholder:transition-[color] placeholder:duration-500
              "
            />
            <span className="absolute h-px bg-linear-to-r from-bronze-dark to-bronze w-0 bottom-0 peer-focus:w-full transition-[width] duration-500 ease-out" />
          </div>

          {/* subject */}
          <div className="relative flex flex-col">
            <input
              data-cursor-hover
              type="text"
              placeholder="SUBJECT"
              className="
                peer placeholder:text-mist/40 focus:placeholder:text-mist
                text-[0.75rem] pb-6 md:pb-12
                border-b border-b-mist/45
                outline-0 text-smoke bg-transparent w-full
                placeholder:transition-[color] placeholder:duration-500
              "
            />
            <span className="absolute h-px bg-linear-to-r from-bronze-dark to-bronze w-0 bottom-0 peer-focus:w-full transition-[width] duration-500 ease-out" />
          </div>

          {/* message */}
          <div className="relative flex flex-col">
            <textarea
              ref={textareaRef}
              data-cursor-hover
              rows={4}
              onInput={handleInput}
              placeholder="YOUR MESSAGE"
              className="
                peer placeholder:text-mist/40 focus:placeholder:text-mist
                text-[0.75rem] pb-4
                border-b border-b-mist/45
                outline-0 text-smoke bg-transparent w-full
                placeholder:transition-[color] placeholder:duration-500
                resize-none overflow-hidden leading-relaxed
                transition-[height] duration-200
              "
            />
            <span className="absolute h-px bg-linear-to-r from-bronze-dark to-bronze w-0 bottom-0 peer-focus:w-full transition-[width] duration-500 ease-out" />
          </div>

          {/* submit */}
          <div className="relative">
            <Button
              text="Send Message"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          </div>
        </form>

        {/* ── details ── */}
        <div className="flex flex-col flex-1">
          {/* on mobile — 2 col grid for details, on desktop — single col */}
          <div className="details grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
            <div className="py-6 md:py-8 flex flex-col border-y border-y-rule">
              <h1 className="font-body text-[0.75rem] text-bronze tracking-[0.2rem] uppercase">
                Group
              </h1>
              <p className="font-display text-xl md:text-2xl text-smoke">
                Lama Holdings Pvt. Ltd.
              </p>
            </div>
            <div className="py-6 md:py-8 flex flex-col border-b border-b-rule sm:border-l sm:border-l-rule sm:pl-8 lg:border-l-0 lg:pl-0">
              <h1 className="font-body text-[0.75rem] text-bronze tracking-[0.2rem] uppercase">
                Location
              </h1>
              <p className="font-display text-xl md:text-2xl text-smoke">
                Kathmandu, Nepal
              </p>
            </div>
            <div className="py-6 md:py-8 flex flex-col border-b border-b-rule">
              <h1 className="font-body text-[0.75rem] text-bronze tracking-[0.2rem] uppercase">
                Focus
              </h1>
              <p className="font-display text-xl md:text-2xl text-smoke">
                Finance · Technology · Media · Insurance
              </p>
            </div>
            <div className="py-6 md:py-8 flex flex-col border-b border-b-rule sm:border-l sm:border-l-rule sm:pl-8 lg:border-l-0 lg:pl-0">
              <h1 className="font-body text-[0.75rem] text-bronze tracking-[0.2rem] uppercase">
                Email
              </h1>
              <p className="font-display text-lg md:text-2xl text-smoke break-all">
                lamagroup.official@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
