"use client";

import { useId, useState } from "react";
import { faq } from "@/content/site-content";

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div
      className={`overflow-hidden rounded-[14px] border bg-white transition-[border-color,box-shadow] duration-200 ${
        open
          ? "border-[rgba(38,38,188,.35)] shadow-[0_10px_28px_rgba(28,28,30,.06)]"
          : "border-brand-line hover:border-[rgba(38,38,188,.35)] hover:shadow-[0_10px_28px_rgba(28,28,30,.06)]"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-[26px] py-[22px] text-left font-[inherit] text-[16px] font-extrabold text-brand-ink"
      >
        {question}
        <span
          className={`relative inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border-[1.5px] transition-[transform,background,border-color] duration-[350ms] ${
            open
              ? "rotate-[135deg] border-brand-blue bg-brand-blue text-white"
              : "border-brand-line text-brand-ink"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          aria-hidden
        >
          <span className="absolute h-[1.8px] w-[11px] rounded-sm bg-current" />
          <span className="absolute h-[11px] w-[1.8px] rounded-sm bg-current" />
        </span>
      </button>
      <div
        id={contentId}
        className="grid transition-[grid-template-rows] duration-[400ms]"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="overflow-hidden">
          <p className="m-0 max-w-[640px] px-[26px] pb-6 text-[14.5px] leading-[1.78] text-[#3a3b42]">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <div className="flex flex-col gap-3">
      {faq.map((item, i) => (
        <FaqItem key={item.question} question={item.question} answer={item.answer} defaultOpen={i === 0} />
      ))}
    </div>
  );
}
