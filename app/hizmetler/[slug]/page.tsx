import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { getServiceCategory, getServicesByCategory, getYgmFeaturedServices, serviceCategories } from "@/content/site-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) return {};

  return {
    title: `${category.title} | ORTUNÇ YGM`,
    description: category.description,
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) notFound();

  const isGumruk = category.key === "gumruk";
  const services = isGumruk ? getYgmFeaturedServices() : getServicesByCategory(category.key);

  return (
    <>
      <PageHeader title={category.title} subtitle={category.description} />
      <section className="bg-brand-mist px-6 py-14 sm:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {services.length > 0 ? (
            <div id={isGumruk ? "ygm-tespit" : undefined} className={isGumruk ? "scroll-mt-28" : undefined}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-brand-line bg-white p-10 text-center">
              <p className="text-[16px] leading-relaxed text-brand-muted">
                Bu kategoriye ait hizmet içerikleri hazırlanmaktadır. Güncellemeler için kısa süre içinde tekrar
                kontrol edebilirsiniz.
              </p>
              <Link href="/iletisim" className="mt-6 inline-block text-[15px] font-bold text-brand-blue hover:underline">
                Bilgi almak için iletişime geçin →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
