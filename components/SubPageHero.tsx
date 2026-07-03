import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type SubPageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  titleClassName?: string;
};

export default function SubPageHero({ breadcrumbs, title, subtitle, titleClassName = "" }: SubPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(115deg,#101014_0%,#16161d_52%,#1e1e40_100%)] py-[76px] pb-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-[140px] -right-[180px] h-[440px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(64,64,225,.30),transparent_72%)]" />
        <span className="absolute top-1/2 right-16 block -translate-y-[46%] -rotate-[8deg] max-[900px]:hidden">
          <Image
            src="/images/onlylogo-watermark.png"
            alt=""
            width={320}
            height={320}
            className="h-[320px] w-auto opacity-45 animate-float-y"
          />
        </span>
        <div className="absolute right-0 bottom-0 left-0 h-px bg-[linear-gradient(90deg,transparent,rgba(90,90,245,.75),transparent)]" />
      </div>
      <div className="site-container relative z-[2]">
        <nav
          className="mb-3.5 text-[13px] font-bold text-[#8a8b95] animate-rise-in"
          style={{ animationDelay: "0.05s" }}
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((item, i) => (
            <span key={item.label}>
              {i > 0 && <span className="mx-1.5 text-[#5a5b66]">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-[#b7b8c2]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#b7b8c2]">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1
          className={`m-0 text-[44px] font-extrabold tracking-[-.015em] text-white max-[900px]:text-[34px] animate-rise-in ${titleClassName}`}
          style={{ animationDelay: "0.12s" }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#b7b8c2] animate-rise-in"
            style={{ animationDelay: "0.22s" }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function SubPageContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`site-container ${className}`}>{children}</div>;
}
