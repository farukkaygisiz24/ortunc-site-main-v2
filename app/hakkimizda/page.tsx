import type { Metadata } from "next";
import SubPageHero from "@/components/SubPageHero";
import StatsStrip from "@/components/StatsStrip";
import ViewUp from "@/components/ui/ViewUp";
import TriangleIcon from "@/components/ui/TriangleIcon";
import { aboutPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Hakkımızda | ORTUNÇ YGM",
  description: "ORTUNÇ Yetkilendirilmiş Gümrük Müşavirliği A.Ş. hakkında bilgi edinin.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <SubPageHero
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
        title="Hakkımızda"
        subtitle="Bağımsızlık, tarafsızlık ve güvenilirlik ilkeleri çerçevesinde, 2008'den bu yana."
      />
      <section className="bg-white py-[72px] pb-[104px]">
        <div className="site-container">
          <ViewUp range="entry 0% cover 25%">
            <StatsStrip variant="about" />
          </ViewUp>

          <div className="mx-auto max-w-[780px]">
            <ViewUp range="entry 0% cover 30%">
              <p className="m-0 text-[20px] leading-[1.75] font-semibold text-brand-ink">{aboutPage.intro[0]}</p>
            </ViewUp>

            {aboutPage.subsections.map((section) => (
              <ViewUp key={section.title} className="mt-12" range="entry 0% cover 25%">
                <div className="flex items-center gap-[9px]">
                  <TriangleIcon />
                  <h3 className="m-0 text-[21px] font-extrabold text-brand-ink">{section.title}</h3>
                </div>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-4 text-[15px] leading-[1.8] text-[#3a3b42]">
                    {paragraph}
                  </p>
                ))}
              </ViewUp>
            ))}

            <div className="mt-[60px] grid grid-cols-2 gap-[22px] max-[900px]:grid-cols-1">
              <ViewUp
                className="rounded-[18px] bg-brand-blue-tint px-9 py-[34px] transition-transform duration-250 hover:-translate-y-1"
                range="entry 0% cover 28%"
              >
                <div className="mb-3.5 flex items-center gap-2">
                  <TriangleIcon size={10} />
                  <span className="text-[12.5px] font-extrabold tracking-[.14em] text-brand-blue uppercase">
                    {aboutPage.mission.title}
                  </span>
                </div>
                <p className="m-0 text-[14.5px] leading-[1.75] text-[#3a3b42]">{aboutPage.mission.text}</p>
              </ViewUp>
              <ViewUp
                className="rounded-[18px] bg-brand-blue-tint px-9 py-[34px] transition-transform duration-250 hover:-translate-y-1"
                range="entry 0% cover 28%"
              >
                <div className="mb-3.5 flex items-center gap-2">
                  <TriangleIcon size={10} />
                  <span className="text-[12.5px] font-extrabold tracking-[.14em] text-brand-blue uppercase">
                    {aboutPage.vision.title}
                  </span>
                </div>
                <p className="m-0 text-[14.5px] leading-[1.75] text-[#3a3b42]">{aboutPage.vision.text}</p>
              </ViewUp>
            </div>
          </div>

          <div className="mt-[84px]">
            <ViewUp className="mb-10 text-center" range="entry 0% cover 30%">
              <div className="mb-3 flex items-center justify-center gap-[9px]">
                <TriangleIcon />
                <span className="text-[13px] font-extrabold tracking-[.16em] text-brand-blue uppercase">
                  {aboutPage.values.title}
                </span>
              </div>
              <h2 className="m-0 text-[32px] font-extrabold tracking-[-.01em] text-brand-ink max-[900px]:text-[25px]">
                Hizmet anlayışımızı belirleyen ilkeler
              </h2>
            </ViewUp>
            <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
              {aboutPage.values.items.map((value) => (
                <ViewUp
                  key={value.title}
                  className="rounded-2xl border border-brand-line bg-white px-[26px] py-[26px] pb-7 transition-[transform,border-color,box-shadow] duration-250 hover:-translate-y-[5px] hover:border-[rgba(38,38,188,.3)] hover:shadow-[0_16px_36px_rgba(28,28,30,.08)]"
                  range="entry 0% cover 22%"
                >
                  <TriangleIcon size={13} />
                  <h4 className="mt-3 mb-0 text-[15.5px] font-extrabold text-brand-ink">{value.title}</h4>
                  <p className="mt-2 mb-0 text-[13.5px] leading-[1.65] text-brand-muted">{value.description}</p>
                </ViewUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
