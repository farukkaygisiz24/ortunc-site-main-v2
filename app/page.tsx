import HomeHero from "@/components/HomeHero";
import MarqueeStrip from "@/components/MarqueeStrip";
import StatsStrip from "@/components/StatsStrip";
import ServiceTabList from "@/components/ServiceTabList";
import HomeCorporateBand from "@/components/HomeCorporateBand";
import FaqAccordion from "@/components/FaqAccordion";
import Kicker from "@/components/ui/Kicker";
import ViewUp from "@/components/ui/ViewUp";

export default function Home() {
  return (
    <>
      <HomeHero />
      <MarqueeStrip />
      <section className="border-b border-[#eef0f3] bg-white py-16">
        <div className="site-container">
          <StatsStrip variant="home" />
        </div>
      </section>
      <ServiceTabList />
      <HomeCorporateBand />
      <section className="bg-white py-[104px]">
        <div className="site-container grid grid-cols-[.8fr_1.2fr] items-start gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-11">
          <ViewUp className="max-[900px]:static sticky top-[120px]" range="entry 0% cover 30%">
            <Kicker className="mb-3.5">SSS</Kicker>
            <h2 className="m-0 text-[36px] font-extrabold tracking-[-.015em] text-brand-ink max-[900px]:text-[29px]">
              Sık Sorulan Sorular
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-brand-muted">
              Yetkilendirilmiş Gümrük Müşavirliği (YGM) uygulamaları, yasal sorumluluklar ve denetim süreçleri
              hakkında en çok merak edilen konuları ve mevzuatsal detayları sizler için derledik.
            </p>
          </ViewUp>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
