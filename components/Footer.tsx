import Image from "next/image";
import Link from "next/link";
import { contact, siteInfo } from "@/content/site-content";

const footerLink =
  "text-[14px] font-medium text-[#c9cad1] no-underline transition-all duration-150 hover:pl-1.5 hover:text-white";

export default function Footer() {
  const [merkez, sube] = contact.addresses;

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#141418] text-[#c9cad1]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(90,90,245,.85),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-[140px] left-1/2 h-[280px] w-[820px] -translate-x-1/2 rounded-full bg-[rgba(38,38,188,.24)] blur-[80px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute right-[3%] bottom-[8%] max-[600px]:right-[-8%] max-[600px]:bottom-[4%]" aria-hidden>
        <span className="-rotate-[6deg]">
          <Image
            src="/images/onlylogo-watermark.png"
            alt=""
            width={200}
            height={200}
            className="h-[200px] w-auto min-[901px]:h-[220px] min-[901px]:opacity-[.42] opacity-[.38]"
          />
        </span>
      </div>

      <div className="site-container relative z-[2] grid grid-cols-[1.3fr_.9fr_.8fr_.9fr_1.6fr] gap-10 py-[72px] pb-14 max-[900px]:grid-cols-2 max-[900px]:gap-9 max-[900px]:py-12 max-[600px]:grid-cols-1">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo-horizontal.png"
              alt={siteInfo.shortName}
              width={280}
              height={64}
              className="h-14 w-auto brightness-0 invert drop-shadow-[0_0_24px_rgba(255,255,255,0.18)] min-[901px]:h-16"
            />
          </Link>
          <p className="mt-5 max-w-[260px] text-[13.5px] leading-[1.7] text-[#9d9ea8]">{siteInfo.description}</p>
        </div>

        <div>
          <p className="mb-[18px] text-[11.5px] font-extrabold tracking-[.14em] text-white uppercase">Hızlı Erişim</p>
          <div className="flex flex-col gap-3">
            <Link href="/" className={footerLink}>Ana Sayfa</Link>
            <Link href="/hizmetler" className={footerLink}>Hizmetlerimiz</Link>
            <Link href="/hizmetler/ygm" className={footerLink}>YGM Hizmetleri</Link>
            <Link href="/hizmetler/danismanlik" className={footerLink}>Danışmanlık Hizmetleri</Link>
            <Link href="/iletisim" className={footerLink}>İletişim</Link>
          </div>
        </div>

        <div>
          <p className="mb-[18px] text-[11.5px] font-extrabold tracking-[.14em] text-white uppercase">Kurumsal</p>
          <div className="flex flex-col gap-3">
            <Link href="/hakkimizda" className={footerLink}>Hakkımızda</Link>
            <Link href="/mevzuat" className={footerLink}>Mevzuat</Link>
            <Link href="/yasal-bilgilendirme" className={footerLink}>Yasal Bilgilendirme</Link>
          </div>
        </div>

        <div>
          <p className="mb-[18px] text-[11.5px] font-extrabold tracking-[.14em] text-white uppercase">İletişim</p>
          <div className="flex flex-col gap-3 text-[14px] font-medium">
            <div>
              <span className="mb-1 block text-[11.5px] font-bold tracking-[.08em] text-[#b8b9c2] uppercase">
                İstanbul Merkez
              </span>
              <a
                href={merkez.phoneHref ?? contact.phoneHref}
                className="text-[#c9cad1] no-underline hover:text-white"
              >
                {merkez.phone ?? contact.phone}
              </a>
            </div>
            <div>
              <span className="mb-1 block text-[11.5px] font-bold tracking-[.08em] text-[#b8b9c2] uppercase">
                Bursa Şube
              </span>
              <a
                href={sube.phoneHref ?? contact.phoneHref}
                className="text-[#c9cad1] no-underline hover:text-white"
              >
                {sube.phone ?? contact.phone}
              </a>
            </div>
            <a href={`mailto:${contact.email}`} className="text-[#c9cad1] no-underline hover:text-white">
              {contact.email}
            </a>
          </div>
        </div>

        <div>
          <p className="mb-[18px] text-[11.5px] font-extrabold tracking-[.14em] text-white uppercase">Adres</p>
          <div className="grid grid-cols-2 gap-5 text-[13.5px] leading-[1.65] text-[#9d9ea8] max-[600px]:grid-cols-1">
            <div>
              <span className="mb-1.5 block text-[11.5px] font-bold tracking-[.08em] text-[#b8b9c2] uppercase">
                Merkez
              </span>
              {merkez.value}
            </div>
            <div>
              <span className="mb-1.5 block text-[11.5px] font-bold tracking-[.08em] text-[#b8b9c2] uppercase">
                Şube
              </span>
              {sube.value}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] border-t border-[rgba(48,49,54,.8)]">
        <div className="site-container py-5 text-[13px] text-[#8a8b95]">
          Copyright © {new Date().getFullYear()} {siteInfo.name} Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
