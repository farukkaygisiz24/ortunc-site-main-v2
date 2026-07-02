"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/site-content";

function TextStatValue({ value }: { value: string }) {
  const words = value.trim().split(/\s+/);

  if (words.length >= 2) {
    return (
      <p className="flex flex-col items-center gap-0.5 font-extrabold leading-none text-brand-blue">
        <span className="text-[1.65rem] sm:text-[1.875rem]">{words[0]}</span>
        <span className="text-[1.65rem] sm:text-[1.875rem]">{words.slice(1).join(" ")}</span>
      </p>
    );
  }

  return (
    <p className="text-3xl font-extrabold leading-none text-brand-blue sm:text-[2rem]">{value}</p>
  );
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const numericValue = Number(value);
  const isNumeric = value.trim() !== "" && !Number.isNaN(numericValue);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isNumeric) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setDisplayValue(numericValue);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isNumeric, numericValue]);

  return (
    <div
      ref={ref}
      className="flex h-full min-h-[6.5rem] flex-col items-center justify-start px-3 text-center sm:min-h-[7rem] lg:min-h-[7.25rem]"
    >
      <div className="flex min-h-12 w-full items-center justify-center sm:min-h-[3.25rem]">
        {isNumeric ? (
          <NumberFlow
            value={displayValue}
            format={{ useGrouping: false }}
            className="text-3xl font-extrabold leading-none text-brand-blue sm:text-[2rem]"
            spinTiming={{ duration: 900, easing: "cubic-bezier(0.34, 1.2, 0.64, 1)" }}
            transformTiming={{ duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        ) : (
          <TextStatValue value={value} />
        )}
      </div>
      <p className="mt-2 flex min-h-[2.5rem] w-full max-w-[12rem] items-start justify-center text-sm font-semibold leading-snug text-brand-muted sm:min-h-[2.75rem] sm:text-[14px] sm:leading-snug lg:max-w-[13rem]">
        {label}
      </p>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-brand-line/80">
      {stats.map((stat) => (
        <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
