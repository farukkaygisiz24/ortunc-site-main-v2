"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ServiceCategoryKey } from "@/content/site-content";
import {
  getServiceHref,
  getServicesByCategory,
  getYgmFeaturedServices,
  serviceCategories,
} from "@/content/site-content";
import Kicker from "@/components/ui/Kicker";
import ViewUp from "@/components/ui/ViewUp";
import { servicesSlogan } from "@/content/site-content";

export default function ServiceTabList() {
  const [tab, setTab] = useState<ServiceCategoryKey>("gumruk");
  const [swapKey, setSwapKey] = useState(0);
  const [listHeight, setListHeight] = useState<number | "auto">("auto");
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const gumrukHref = serviceCategories.find((c) => c.key === "gumruk")!.href;
  const danismanlikHref = serviceCategories.find((c) => c.key === "danismanlik")!.href;

  const activeServices =
    tab === "gumruk" ? getYgmFeaturedServices() : getServicesByCategory("danismanlik");
  const categoryHref = tab === "gumruk" ? gumrukHref : danismanlikHref;

  const switchTab = (next: ServiceCategoryKey) => {
    if (next === tab) return;
    const container = containerRef.current;
    if (container) {
      setListHeight(container.offsetHeight);
    }
    setTab(next);
    setSwapKey((k) => k + 1);
  };

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const ro = new ResizeObserver(() => {
      if (inner.offsetHeight) {
        setListHeight(inner.offsetHeight);
      }
    });
    ro.observe(inner);
    return () => ro.disconnect();
  }, [tab, swapKey]);

  useEffect(() => {
    const t = window.setTimeout(() => setListHeight("auto"), 560);
    return () => window.clearTimeout(t);
  }, [swapKey]);

  return (
    <section className="bg-white py-24 pb-[104px] max-[900px]:py-16">
      <div className="site-container">
        <ViewUp className="mb-7 grid grid-cols-[1fr_auto] items-end gap-10 max-[900px]:grid-cols-1">
          <div>
            <Kicker className="mb-3.5">Hizmetlerimiz</Kicker>
            <h2 className="m-0 text-[40px] leading-tight font-extrabold tracking-[-.015em] text-brand-ink max-[900px]:text-[29px]">
              Yasal Süreçlerinizde
              <br />
              Mevzuat Güvencesi
            </h2>
          </div>
          <div className="flex flex-col items-end gap-[18px] max-[900px]:items-start">
            <p className="m-0 max-w-[400px] text-right text-[14.5px] leading-[1.7] text-brand-muted max-[900px]:text-left">
              {servicesSlogan}
            </p>
            <div className="inline-flex rounded-xl border border-brand-line bg-brand-mist p-1">
              <button
                type="button"
                onClick={() => switchTab("gumruk")}
                className={`cursor-pointer rounded-[9px] border-none px-5 py-[9px] font-[inherit] text-[13.5px] font-extrabold whitespace-nowrap transition-all duration-200 ${
                  tab === "gumruk"
                    ? "bg-white text-brand-ink shadow-[0_2px_8px_rgba(28,28,30,.08)]"
                    : "bg-transparent text-brand-muted"
                }`}
              >
                YGM Hizmetleri
              </button>
              <button
                type="button"
                onClick={() => switchTab("danismanlik")}
                className={`cursor-pointer rounded-[9px] border-none px-5 py-[9px] font-[inherit] text-[13.5px] font-extrabold whitespace-nowrap transition-all duration-200 ${
                  tab === "danismanlik"
                    ? "bg-white text-brand-ink shadow-[0_2px_8px_rgba(28,28,30,.08)]"
                    : "bg-transparent text-brand-muted"
                }`}
              >
                Danışmanlık
              </button>
            </div>
          </div>
        </ViewUp>

        <div
          ref={containerRef}
          className="relative border-t border-brand-line transition-[height] duration-[550ms]"
          style={{
            height: listHeight === "auto" ? "auto" : listHeight,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div key={swapKey} ref={innerRef} className="animate-tab-swap">
            {activeServices.map((service, i) => (
              <Link
                key={service.slug}
                href={getServiceHref(categoryHref, service.slug)}
                className="group grid cursor-pointer grid-cols-[64px_1fr_auto] items-center gap-7 border-b border-brand-line px-[18px] py-[26px] transition-[background,padding-left] duration-300 hover:bg-[#f7f8fd] hover:pl-[34px] max-[900px]:grid-cols-[1fr_auto] max-[900px]:gap-[18px]"
              >
                <span className="text-[14px] font-extrabold tracking-[.06em] text-[#c3c4cf] max-[900px]:hidden">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="m-0 text-[22px] leading-[1.3] font-extrabold tracking-[-.01em] text-brand-ink max-[900px]:text-[17px]">
                    {service.carouselTitle ?? service.title}
                  </h3>
                  <p className="mt-[7px] line-clamp-2 max-w-[640px] text-[13.8px] leading-[1.6] text-brand-muted">
                    {service.description}
                  </p>
                </div>
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-[1.5px] border-brand-line text-[18px] font-extrabold text-brand-blue transition-all duration-250 group-hover:rotate-[-45deg] group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link href="/hizmetler" className="text-[14.5px] font-extrabold text-brand-blue hover:underline">
            Tüm hizmetlerimiz →
          </Link>
        </div>
      </div>
    </section>
  );
}
