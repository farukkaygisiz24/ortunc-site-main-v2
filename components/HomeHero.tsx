"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MagneticLink from "@/components/ui/MagneticLink";
import TriangleIcon from "@/components/ui/TriangleIcon";
import { useTilt } from "@/lib/hooks/useTilt";
import { hero } from "@/content/site-content";

const HERO_WORDS = ["mevzuata uygun", "hızlı ve güvenilir", "şeffaf"];

type FloatingLogo = {
  top: string;
  left: string;
  heightClass: string;
  opacity: string;
  rotate?: string;
  parallaxX: string;
  parallaxY: string;
  duration?: string;
  delay?: string;
};

const FLOATING_LOGOS: FloatingLogo[] = [
  { top: "10%", left: "57%", heightClass: "h-14 min-[901px]:h-[88px]", opacity: ".14", parallaxX: "34px", parallaxY: "24px", duration: "7s" },
  { top: "66%", left: "46%", heightClass: "h-10 min-[901px]:h-[52px]", opacity: ".18", rotate: "12deg", parallaxX: "-26px", parallaxY: "-18px", duration: "9s", delay: "0.8s" },
  { top: "14%", left: "86%", heightClass: "h-[72px] min-[901px]:h-[150px]", opacity: ".11", rotate: "-10deg", parallaxX: "-40px", parallaxY: "26px", duration: "11s", delay: "0.4s" },
  { top: "78%", left: "12%", heightClass: "h-8 min-[901px]:h-10", opacity: ".16", rotate: "8deg", parallaxX: "22px", parallaxY: "-14px", duration: "6s", delay: "0.4s" },
];

function FloatingLogoMark({ logo }: { logo: FloatingLogo }) {
  return (
    <div
      className="absolute w-fit transition-transform duration-700 ease-out max-[900px]:duration-500"
      style={{
        top: logo.top,
        left: logo.left,
        transform: `translate(calc(var(--hx, 0) * ${logo.parallaxX}), calc(var(--hy, 0) * ${logo.parallaxY}))`,
      }}
    >
      <span className="inline-block" style={logo.rotate ? { transform: `rotate(${logo.rotate})` } : undefined}>
        <span
          className="inline-block animate-float-y"
          style={{ animationDuration: logo.duration, animationDelay: logo.delay }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/onlylogo-watermark.png"
            alt=""
            draggable={false}
            className={`block w-auto max-w-none shrink-0 ${logo.heightClass}`}
            style={{ opacity: logo.opacity }}
          />
        </span>
      </span>
    </div>
  );
}

export default function HomeHero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [parallax, setParallax] = useState({ hx: 0, hy: 0 });
  const tilt = useTilt();

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((i) => (i + 1) % HERO_WORDS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const onHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(max-width: 900px)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const hx = (e.clientX - rect.left) / rect.width - 0.5;
    const hy = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ hx, hy });
    e.currentTarget.style.setProperty("--hx", String(hx));
    e.currentTarget.style.setProperty("--hy", String(hy));
  };

  return (
    <section
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#141418] max-[900px]:min-h-0"
      onMouseMove={onHeroMove}
      style={
        {
          "--hx": parallax.hx,
          "--hy": parallax.hy,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-text-bg.png"
          alt=""
          fill
          priority
          className="animate-kenburns object-cover object-center max-[900px]:animate-none max-[900px]:scale-100"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,16,20,.97)_0%,rgba(16,16,20,.86)_45%,rgba(16,16,20,.55)_100%)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 max-[900px]:opacity-70 max-[900px]:[--hx:0] max-[900px]:[--hy:0]" aria-hidden>
        {FLOATING_LOGOS.map((logo, i) => (
          <FloatingLogoMark key={i} logo={logo} />
        ))}
      </div>

      <div className="site-container relative z-[2] grid w-full grid-cols-[1.15fr_.85fr] items-center gap-[72px] py-20 pb-[110px] max-[900px]:grid-cols-1 max-[900px]:gap-0 max-[900px]:py-[52px] max-[900px]:pb-16">
        <div>
          <div className="flex items-start gap-2.5 overflow-hidden animate-rise-in" style={{ animationDelay: "0.1s" }}>
            <TriangleIcon fill="#5a5af5" className="mt-1 shrink-0" />
            <span className="text-[12.5px] font-extrabold tracking-[.18em] text-[#a9aefc] uppercase">
              ORTUNÇ Yetkilendirilmiş Gümrük Müşavirliği A.Ş.
              <span className="mt-[7px] block text-[#7c80d8]">2008&apos;den bu yana</span>
            </span>
          </div>

          <h1 className="m-0 mt-[26px] text-[56px] leading-[1.12] font-extrabold tracking-[-.02em] text-white max-[900px]:text-[34px]">
            <span className="mb-[-.16em] block overflow-hidden pb-[.16em]">
              <span className="inline-block animate-word-in" style={{ animationDelay: "0.22s" }}>
                Dış ticaret süreçlerinize
              </span>
            </span>
            <span className="mb-[-.16em] block min-h-[1.14em] overflow-hidden pb-[.16em]">
              <span key={wordIdx} className="inline-block animate-word-in text-[#8a8dff]">
                {HERO_WORDS[wordIdx]}
              </span>
            </span>
            <span className="mb-[-.16em] block overflow-hidden pb-[.16em]">
              <span className="inline-block animate-word-in" style={{ animationDelay: "0.5s" }}>
                denetimle değer katıyoruz
              </span>
            </span>
          </h1>

          <p
            className="mt-[26px] max-w-[520px] text-[16.5px] leading-[1.75] text-[#b7b8c2] animate-rise-in"
            style={{ animationDelay: "0.65s" }}
          >
            {hero.subtitle}
          </p>

          <div className="mt-[34px] flex flex-wrap gap-3.5 animate-rise-in" style={{ animationDelay: "0.8s" }}>
            <MagneticLink
              href="/hizmetler"
              className="rounded-[10px] bg-brand-blue px-8 py-[15px] text-[14.5px] font-extrabold text-white hover:bg-brand-blue-dark hover:shadow-[0_16px_40px_rgba(38,38,188,.45)]"
            >
              Hizmetlerimizi Keşfedin
            </MagneticLink>
            <MagneticLink
              href="/iletisim"
              className="rounded-[10px] border-[1.5px] border-white/40 px-8 py-[15px] text-[14.5px] font-extrabold text-white hover:bg-white/10"
            >
              Bize Ulaşın
            </MagneticLink>
          </div>
        </div>

        <div className="hidden justify-center animate-rise-in min-[901px]:flex" style={{ animationDelay: "0.5s" }}>
          <div
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            className="relative w-full max-w-[360px] transition-transform duration-200 ease-out will-change-transform"
          >
            <div className="absolute top-[22px] right-[-22px] bottom-[-22px] left-[22px] rounded-[20px] border-2 border-brand-blue" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-[0_40px_80px_rgba(0,0,0,.5)]">
              <Image
                src="/images/hero-corporate.png"
                alt="Modern lojistik merkezi ve antrepo tesisi"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 360px"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,16,20,.35),transparent_45%)]" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-[26px] left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 animate-rise-in max-[900px]:hidden"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-[11.5px] font-bold tracking-[.2em] text-white/50 uppercase">Keşfedin</span>
        <TriangleIcon fill="#8a8dff" className="rotate-180 animate-bounce-down opacity-70" size={13} />
      </div>
    </section>
  );
}
