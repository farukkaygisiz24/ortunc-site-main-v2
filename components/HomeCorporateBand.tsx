"use client";

import Image from "next/image";
import MagneticLink from "@/components/ui/MagneticLink";
import Kicker from "@/components/ui/Kicker";
import ViewUp from "@/components/ui/ViewUp";
import { useTilt } from "@/lib/hooks/useTilt";
import { aboutHomeSummary } from "@/content/site-content";

export default function HomeCorporateBand() {
  const tilt = useTilt();

  return (
    <section className="relative border-y border-brand-line bg-brand-mist py-[104px]">
      <div className="site-container relative z-[2] grid grid-cols-[.9fr_1.1fr] items-center gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-11">
        <ViewUp className="w-full" range="entry 0% cover 30%">
          <div className="relative isolate w-full overflow-visible">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-[160%] select-none text-[clamp(7.5rem,19vw,14.375rem)] leading-none font-extrabold tracking-[-.03em] whitespace-nowrap text-transparent min-[901px]:-translate-y-[112%]"
              style={{ WebkitTextStroke: "1.5px #e2e3ea" }}
              aria-hidden
            >
              2008
            </div>
            <div
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              className="relative z-[1] flex items-center justify-center rounded-[18px] border border-brand-line bg-white px-11 py-[58px] shadow-[0_24px_56px_rgba(28,28,30,.08)] transition-transform duration-200 ease-out will-change-transform"
            >
              <Image
                src="/images/logo-horizontal.png"
                alt="ORTUNÇ Yetkilendirilmiş Gümrük Müşavirliği A.Ş."
                width={340}
                height={88}
                className="h-auto w-full max-w-[340px]"
              />
            </div>
          </div>
        </ViewUp>

        <ViewUp range="entry 0% cover 34%">
          <Kicker className="mb-3.5">Kurumsal</Kicker>
          <h2 className="m-0 text-[36px] font-extrabold tracking-[-.015em] text-brand-ink max-[900px]:text-[29px]">
            Hakkımızda
          </h2>
          <p className="mt-[18px] text-[15px] leading-[1.8] text-[#3a3b42]">{aboutHomeSummary}</p>
          <MagneticLink
            href="/hakkimizda"
            className="mt-7 inline-block rounded-[10px] bg-[#1c1c1e] px-7 py-[13px] text-[14px] font-extrabold text-white hover:bg-brand-blue"
          >
            Devamını Oku →
          </MagneticLink>
        </ViewUp>
      </div>
    </section>
  );
}
