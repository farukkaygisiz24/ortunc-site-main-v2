import type { Metadata } from "next";
import SubPageHero from "@/components/SubPageHero";
import {
  mevzuatAmendmentCitation,
  mevzuatAmendmentUrl,
  mevzuatCitation,
  mevzuatParagraphs,
  mevzuatSourceUrl,
  mevzuatTitle,
} from "@/content/mevzuat";
import { classifyMevzuat } from "@/lib/classifyMevzuat";

export const metadata: Metadata = {
  title: "Mevzuat | ORTUNÇ YGM",
  description: "Yetkilendirilmiş Gümrük Müşavirliği Tebliği",
};

export default function MevzuatPage() {
  const items = classifyMevzuat(mevzuatParagraphs);

  return (
    <>
      <SubPageHero
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Mevzuat" },
        ]}
        title="Yetkilendirilmiş Gümrük Müşavirliği Tebliği"
        subtitle={`${mevzuatCitation} · ${mevzuatAmendmentCitation}`}
        titleClassName="!text-[38px] !leading-[1.25] max-w-[860px]"
      />
      <section className="bg-white py-16 pb-24">
        <div className="site-container mx-auto max-w-[780px]">
          {items.map((item, i) => {
            if (item.isChapter) {
              return (
                <h2
                  key={i}
                  className="mt-11 border-t-2 border-brand-blue pt-[18px] text-[13px] font-extrabold tracking-[.12em] text-brand-blue uppercase"
                >
                  {item.text}
                </h2>
              );
            }
            if (item.isChapterSubtitle) {
              return (
                <h3 key={i} className="mt-2 mb-5 text-[20px] leading-[1.4] font-extrabold text-brand-ink">
                  {item.text}
                </h3>
              );
            }
            if (item.isArticleTitle) {
              return (
                <h4 key={i} className="mt-7 text-[15.5px] font-extrabold text-brand-ink">
                  {item.text}
                </h4>
              );
            }
            if (item.isArticleNumber) {
              return (
                <p
                  key={i}
                  className="my-2.5 inline-block rounded-md bg-brand-blue px-2.5 py-[3px] text-[12.5px] font-extrabold tracking-[.04em] text-white"
                >
                  {item.text}
                </p>
              );
            }
            return (
              <p
                key={i}
                className={`mb-2.5 text-[15px] leading-[1.78] text-[#3a3b42] ${item.isListItem ? "pl-5" : ""}`}
              >
                {item.text}
              </p>
            );
          })}
          <p className="mt-[52px] border-t border-brand-line pt-[22px] text-[13px] leading-[1.7] text-brand-muted">
            Kaynaklar:{" "}
            <a href={mevzuatSourceUrl} target="_blank" rel="noopener noreferrer" className="text-brand-blue no-underline hover:underline">
              Ana tebliğ (31240)
            </a>
            {" · "}
            <a href={mevzuatAmendmentUrl} target="_blank" rel="noopener noreferrer" className="text-brand-blue no-underline hover:underline">
              Değişiklik tebliği (32426)
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
