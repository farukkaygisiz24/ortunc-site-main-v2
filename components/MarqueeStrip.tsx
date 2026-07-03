import TriangleIcon from "@/components/ui/TriangleIcon";

const MARQUEE_ITEMS = [
  "Antrepo Tespit İşlemleri (AN1–AN8)",
  "Onaylanmış Kişi Statüsü (OKSB)",
  "YYS Danışmanlığı",
  "Dahilde İşleme Rejimi (DR1–DR2)",
  "Geçici İthalat (GC1–GC2)",
  "Menşe Kontrolü (SK1)",
  "Danışmanlık ve Denetim",
  "Sonradan Kontrol Danışmanlığı",
];

function MarqueeTrack() {
  return (
    <div className="flex items-center gap-[34px] pr-[34px]">
      {MARQUEE_ITEMS.map((label) => (
        <span key={label} className="flex items-center gap-[34px]">
          <span className="text-[14px] font-extrabold tracking-[.1em] text-white uppercase whitespace-nowrap">
            {label}
          </span>
          <TriangleIcon fill="rgba(255,255,255,.45)" size={11} />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <section className="group overflow-hidden bg-brand-blue py-[18px]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </section>
  );
}
