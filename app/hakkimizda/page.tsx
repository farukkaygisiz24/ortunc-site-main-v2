import type { Metadata } from "next";
import { aboutPage } from "@/content/site-content";
import PageHeader from "@/components/PageHeader";
import StatsStrip from "@/components/StatsStrip";

export const metadata: Metadata = {
  title: "Hakkımızda | ORTUNÇ YGM",
  description: "ORTUNÇ Yetkilendirilmiş Gümrük Müşavirliği A.Ş. hakkında bilgi edinin.",
};

function SectionDivider({ title }: { title: string }) {
  return (
    <h2 className="mt-12 border-t-2 border-brand-blue pt-5 text-[13px] font-extrabold uppercase tracking-[.12em] text-brand-blue">
      {title}
    </h2>
  );
}

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader title="Hakkımızda" />
      <section className="bg-white px-6 py-14 sm:px-10 lg:py-20">
        <div className="mx-auto mb-12 max-w-6xl border-b border-brand-line pb-12 sm:mb-14 lg:mb-16">
          <StatsStrip />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col">
          {aboutPage.intro.map((paragraph, i) => (
            <p
              key={`intro-${i}`}
              className={
                i === 0
                  ? "text-[19px] font-semibold leading-relaxed text-brand-ink"
                  : "text-base leading-loose text-[#3a3b42]"
              }
            >
              {paragraph}
            </p>
          ))}

          {aboutPage.subsections.map((section) => (
            <div key={section.title} className="mt-10">
              <h3 className="text-xl font-extrabold text-brand-ink">{section.title}</h3>
              <div className="mt-4 flex flex-col gap-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-[#3a3b42]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <SectionDivider title={aboutPage.mission.title} />
          <p className="mt-5 text-[15px] leading-relaxed text-[#3a3b42]">{aboutPage.mission.text}</p>

          <SectionDivider title={aboutPage.vision.title} />
          <p className="mt-5 text-[15px] leading-relaxed text-[#3a3b42]">{aboutPage.vision.text}</p>

          <SectionDivider title={aboutPage.values.title} />
          <div className="mt-6 flex flex-col gap-6">
            {aboutPage.values.items.map((value) => (
              <div key={value.title}>
                <h4 className="text-base font-bold text-brand-ink">{value.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[#3a3b42]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
