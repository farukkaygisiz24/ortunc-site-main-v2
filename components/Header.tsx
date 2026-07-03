"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  buildServicesNavGroups,
  headerNav,
  isMegaMenu,
  isNavGroup,
  siteInfo,
  type NavItem,
  type NavLink,
} from "@/content/site-content";
import TriangleIcon from "@/components/ui/TriangleIcon";
import MagneticLink from "@/components/ui/MagneticLink";

function isLink(item: NavItem): item is NavLink {
  return "href" in item;
}

function isHrefActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavItemActive(item: NavItem, pathname: string): boolean {
  if (isLink(item)) return isHrefActive(pathname, item.href);
  if (isMegaMenu(item)) {
    return (
      isHrefActive(pathname, item.href) ||
      item.groups.some(
        (group) =>
          isHrefActive(pathname, group.href) ||
          group.links.some((child) => isHrefActive(pathname, child.href)),
      )
    );
  }
  if (isNavGroup(item)) {
    return item.children.some((child) => isHrefActive(pathname, child.href));
  }
  return false;
}

function NavPill({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-[10px] px-4 py-2.5 text-[15px] font-bold transition-colors duration-150 ${
        active
          ? "bg-brand-blue text-white"
          : "text-brand-ink hover:text-brand-blue"
      }`}
    >
      {children}
    </Link>
  );
}

function MegaMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const groups = buildServicesNavGroups();
  const active =
    isHrefActive(pathname, "/hizmetler") ||
    groups.some(
      (g) =>
        isHrefActive(pathname, g.href) || g.links.some((l) => isHrefActive(pathname, l.href)),
    );

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/hizmetler"
        className={`inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[15px] font-bold transition-colors duration-150 ${
          active ? "bg-brand-blue text-white" : "text-brand-ink hover:text-brand-blue"
        }`}
      >
        Hizmetlerimiz
        <svg
          viewBox="0 0 20 20"
          className={`h-[11px] w-[11px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          aria-hidden
        >
          <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <div
        className={`absolute top-full left-1/2 z-[110] -translate-x-1/2 pt-2.5 transition-[opacity,visibility] duration-[180ms] ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="w-[620px] overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-[0_20px_48px_rgba(28,28,30,.14)]">
          <div className="grid grid-cols-[1.25fr_1fr]">
            {groups.map((group, gi) => (
              <div
                key={group.title}
                className={`px-6 py-[22px] ${gi === 0 ? "border-r border-[#eef0f3]" : ""}`}
              >
                <Link
                  href={group.href}
                  className="mb-3 flex items-center gap-[7px] text-[11.5px] font-extrabold tracking-[.12em] text-brand-blue uppercase hover:underline"
                >
                  <TriangleIcon size={9} />
                  {group.title}
                </Link>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="-mx-2.5 block rounded-lg px-2.5 py-[7px] text-[13.5px] leading-[1.4] font-semibold text-brand-ink transition-all hover:translate-x-1 hover:bg-brand-mist hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-[#eef0f3] bg-[#fafbfc] px-6 py-3">
            <Link href="/hizmetler" className="text-[13px] font-extrabold text-brand-blue hover:underline">
              Tüm hizmetlerimiz →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const updateScroll = useCallback(() => {
    const el = progressRef.current;
    if (el) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      el.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
    }
    setScrolled(window.scrollY > 14);
  }, []);

  useEffect(() => {
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [updateScroll, pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-[100] border-b border-[rgba(28,28,30,.06)] bg-[rgba(255,255,255,.72)] backdrop-blur-[24px] backdrop-saturate-[180%] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_32px_rgba(28,28,30,.08)]" : ""
      }`}
    >
      <div
        ref={progressRef}
        className="absolute top-0 left-0 z-[5] h-[3px] w-0 bg-[linear-gradient(to_right,#2626bc,#5a5af5)]"
        aria-hidden
      />
      <div className="site-container flex h-[100px] items-center justify-between gap-8 max-[900px]:h-[92px]">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-horizontal.png"
            alt={siteInfo.name}
            width={260}
            height={56}
            className="h-12 w-auto min-[901px]:h-[58px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-[26px] max-[900px]:gap-3">
          <nav className="flex items-center gap-1 max-[900px]:hidden" aria-label="Ana menü">
            {headerNav.map((item) => {
              if (isLink(item)) {
                return (
                  <NavPill key={item.href} href={item.href} active={isHrefActive(pathname, item.href)}>
                    {item.label}
                  </NavPill>
                );
              }
              if (isMegaMenu(item)) {
                return <MegaMenu key={item.label} pathname={pathname} />;
              }
              if (isNavGroup(item)) {
                const active = isNavItemActive(item, pathname);
                return (
                  <NavPill key={item.label} href={item.children[0].href} active={active}>
                    {item.label}
                  </NavPill>
                );
              }
              return null;
            })}
          </nav>

          <MagneticLink
            href="/iletisim"
            className="rounded-[10px] bg-brand-blue px-7 py-3 text-[15px] font-extrabold whitespace-nowrap text-white hover:bg-brand-blue-dark max-[900px]:px-4 max-[900px]:py-2.5 max-[900px]:text-[13px]"
          >
            İletişim
          </MagneticLink>

          <button
            type="button"
            className="hidden h-12 w-12 shrink-0 cursor-pointer items-center justify-center border-none bg-transparent p-0 text-brand-ink max-[900px]:flex"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="absolute top-full right-0 left-0 hidden flex-col border-b border-brand-line bg-white px-[22px] pt-1.5 pb-5 shadow-[0_28px_48px_rgba(28,28,30,.14)] animate-rise-in max-[900px]:flex">
          <Link href="/" className="border-b border-[#eef0f3] py-[15px] text-[16px] font-extrabold text-brand-ink">
            Ana Sayfa
          </Link>
          <Link href="/hizmetler" className="border-b border-[#eef0f3] py-[15px] text-[16px] font-extrabold text-brand-ink">
            Hizmetlerimiz
          </Link>
          <Link href="/hizmetler/ygm" className="border-b border-[#eef0f3] py-[13px] pl-[18px] text-[14.5px] font-bold text-[#3a3b42]">
            YGM Hizmetleri
          </Link>
          <Link href="/hizmetler/danismanlik" className="border-b border-[#eef0f3] py-[13px] pl-[18px] text-[14.5px] font-bold text-[#3a3b42]">
            Danışmanlık Hizmetleri
          </Link>
          <Link href="/hakkimizda" className="border-b border-[#eef0f3] py-[15px] text-[16px] font-extrabold text-brand-ink">
            Hakkımızda
          </Link>
          <Link href="/mevzuat" className="py-[15px] text-[16px] font-extrabold text-brand-ink">
            Mevzuat
          </Link>
        </div>
      ) : null}
    </header>
  );
}
