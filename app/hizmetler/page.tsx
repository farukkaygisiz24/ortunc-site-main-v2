import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubPageHero from "@/components/SubPageHero";
import ViewUp from "@/components/ui/ViewUp";
import TriangleIcon from "@/components/ui/TriangleIcon";
import {
  buildServicesNavGroups,
  getServicesByCategory,
  getYgmFeaturedServices,
  serviceCategories,
} from "@/content/site-content";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | ORTUNÇ YGM",
  description:
    "ORTUNÇ Yetkilendirilmiş Gümrük Müşavirliği A.Ş. YGM ve danışmanlık hizmetleri: antrepo, geçici ithalat, dahilde işleme, onaylanmış kişi statüsü tespit işlemleri ve daha fazlası.",
};

export default function HizmetlerPage() {
  const navGroups = buildServicesNavGroups();
  const totalServices = navGroups.reduce((n, g) => n + g.links.length, 0);

  return (
    <>
      <SubPageHero
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz" },
        ]}
        title="Hizmetlerimiz"
        subtitle="YGM kapsamındaki tespit ve raporlama hizmetleri ile dış ticaret süreçlerinize yönelik danışmanlık çözümlerimiz."
      />
      <section className="bg-brand-mist py-16 pb-24">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-[22px] max-[900px]:grid-cols-1">
            {serviceCategories.map((category) => {
              const count =
                category.key === "gumruk"
                  ? getYgmFeaturedServices().length
                  : getServicesByCategory(category.key).length;
              return (
                <ViewUp key={category.slug} range="entry 0% cover 25%">
                  <Link
                    href={category.href}
                    className="group relative block overflow-hidden rounded-[18px] border border-brand-line bg-white px-[38px] py-9 transition-[transform,border-color,box-shadow] duration-250 hover:-translate-y-[5px] hover:border-[rgba(38,38,188,.35)] hover:shadow-[0_24px_48px_rgba(28,28,30,.1)]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                  >
                    <Image
                      src="/images/onlylogo-watermark.png"
                      alt=""
                      width={132}
                      height={132}
                      className="pointer-events-none absolute -right-6 -bottom-[34px] h-[132px] w-auto -rotate-[8deg] opacity-[.09]"
                    />
                    <div className="flex items-center gap-[9px]">
                      <TriangleIcon />
                      <h2 className="m-0 text-[22px] font-extrabold text-brand-ink">{category.title}</h2>
                    </div>
                    <p className="mt-2 text-[13px] font-extrabold text-brand-blue">{count} hizmet</p>
                    <p className="mt-3.5 text-[14.5px] leading-[1.7] text-brand-muted">{category.description}</p>
                    <span className="mt-[22px] inline-block text-[14px] font-extrabold text-brand-blue group-hover:underline">
                      Detayları incele →
                    </span>
                  </Link>
                </ViewUp>
              );
            })}
          </div>

          <ViewUp className="mt-7 rounded-[18px] border border-brand-line bg-white px-12 py-[46px] max-[900px]:px-[22px] max-[900px]:py-7" range="entry 0% cover 22%">
            <h2 className="m-0 text-[24px] font-extrabold text-brand-ink">Tüm hizmetlerimiz</h2>
            <p className="mt-2.5 text-[14.5px] leading-[1.7] text-brand-muted">
              YGM ve danışmanlık alanlarında sunduğumuz {totalServices} hizmete aşağıdan ulaşabilirsiniz.
            </p>
            <div className="mt-[34px] grid grid-cols-2 gap-11 max-[900px]:grid-cols-1">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <Link
                    href={group.href}
                    className="flex items-center gap-[7px] text-[12px] font-extrabold tracking-[.12em] text-brand-blue uppercase hover:underline"
                  >
                    <TriangleIcon size={9} />
                    {group.title}
                  </Link>
                  <div className="mt-3.5 flex flex-col gap-1">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="-mx-2.5 rounded-lg px-2.5 py-2 text-[14px] leading-[1.45] font-semibold text-brand-ink transition-all hover:bg-brand-mist hover:pl-4 hover:text-brand-blue"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ViewUp>
        </div>
      </section>
    </>
  );
}
