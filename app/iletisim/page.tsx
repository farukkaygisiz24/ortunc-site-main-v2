import type { Metadata } from "next";
import SubPageHero from "@/components/SubPageHero";
import ViewUp from "@/components/ui/ViewUp";
import { contact } from "@/content/site-content";

export const metadata: Metadata = {
  title: "İletişim | ORTUNÇ YGM",
  description: "ORTUNÇ Yetkilendirilmiş Gümrük Müşavirliği A.Ş. iletişim bilgileri.",
};

function ContactInfoCard({
  label,
  children,
  icon,
}: {
  label: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-brand-line bg-white px-[26px] py-6 transition-[transform,border-color] duration-250 hover:-translate-y-[3px] hover:border-[rgba(38,38,188,.3)]">
      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-brand-blue-tint text-brand-blue">
        {icon}
      </div>
      <div>
        <div className="mb-[5px] text-[13px] font-extrabold text-brand-ink">{label}</div>
        <div className="text-[15px] font-semibold text-brand-muted">{children}</div>
      </div>
    </div>
  );
}

export default function IletisimPage() {
  const [merkez, sube] = contact.addresses;

  return (
    <>
      <SubPageHero
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
        title="İletişim"
        subtitle="Merkez ofisimiz İstanbul'da, Bursa Şube Müdürlüğümüz ile hizmetinizdeyiz."
      />
      <section className="bg-white py-16 pb-24">
        <div className="site-container">
          <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
            <ContactInfoCard
              label="Telefon"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            >
              <a href={contact.phoneHref} className="text-brand-muted no-underline hover:text-brand-blue">
                {contact.phone}
              </a>
            </ContactInfoCard>
            <ContactInfoCard
              label="Faks"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9V2h12v7" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
              }
            >
              <a href={contact.faxHref} className="text-brand-muted no-underline hover:text-brand-blue">
                {contact.fax}
              </a>
            </ContactInfoCard>
            <ContactInfoCard
              label="E-Posta"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
            >
              <a href={`mailto:${contact.email}`} className="text-brand-muted no-underline hover:text-brand-blue">
                {contact.email}
              </a>
            </ContactInfoCard>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-[22px] max-[900px]:grid-cols-1">
            {[merkez, sube].map((address) => (
              <ViewUp
                key={address.label}
                className="flex flex-col gap-[18px] rounded-[18px] border border-brand-line bg-[#fafbfc] p-[26px]"
                range="entry 0% cover 22%"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-brand-blue-tint text-brand-blue">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-[5px] text-[13px] font-extrabold text-brand-ink">{address.label}</div>
                    <div className="text-[14.5px] leading-[1.65] font-medium text-brand-muted">{address.value}</div>
                  </div>
                </div>
                <iframe
                  src={address.mapEmbedUrl}
                  className="h-[280px] w-full rounded-xl border border-brand-line bg-white"
                  style={{ border: 0 }}
                  loading="lazy"
                  title={`${address.label} — ORTUNÇ YGM`}
                />
              </ViewUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
