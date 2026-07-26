import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Zap, Cpu, Wrench, Building2, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import JsonLd from '@/components/JsonLd';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import ServiceGallery from '@/components/ServiceGallery/ServiceGallery';
import { disciplines, getDisciplineBySlug, type DisciplineSlug } from '@/lib/services';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './page.module.css';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Zap, Cpu, Wrench, Building2, Sparkles,
};

export function generateStaticParams() {
  return disciplines.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const discipline = getDisciplineBySlug(slug);
  if (!discipline) return {};

  const t = await getTranslations({ locale, namespace: 'ServiceDetails' });
  return {
    title: t(`${discipline.translationKey}.metaTitle`),
    description: t(`${discipline.translationKey}.metaDescription`),
    alternates: {
      canonical: `/${locale}/hizmetler/${slug}`,
      languages: {
        tr: `/tr/hizmetler/${slug}`,
        en: `/en/hizmetler/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const discipline = getDisciplineBySlug(slug as DisciplineSlug);

  if (!discipline) {
    notFound();
  }

  return <ServiceDetailContent discipline={discipline} />;
}

function ServiceDetailContent({ discipline }: { discipline: NonNullable<ReturnType<typeof getDisciplineBySlug>> }) {
  const t = useTranslations('ServiceDetails');
  const tServices = useTranslations('Services');
  const tNav = useTranslations('Nav');
  const tDisciplines = useTranslations('Disciplines');
  const Icon = iconMap[discipline.icon] || Zap;

  const otherDisciplines = disciplines.filter((d) => d.slug !== discipline.slug);

  return (
    <>
      <JsonLd data={[
        generateServiceSchema(
          tDisciplines(`${discipline.translationKey}.title`),
          tDisciplines(`${discipline.translationKey}.description`),
          `/hizmetler/${discipline.slug}`
        ),
        generateBreadcrumbSchema([
          { name: tNav('home'), url: '/' },
          { name: tNav('services'), url: '/hizmetler' },
          { name: tDisciplines(`${discipline.translationKey}.title`), url: `/hizmetler/${discipline.slug}` },
        ]),
      ]} />

      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <Link href="/hizmetler" className={styles.backLink}>
            <ArrowLeft size={14} /> {tServices('backToServices')}
          </Link>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1>{t(`${discipline.translationKey}.heroTitle`)}</h1>
              <p>{t(`${discipline.translationKey}.heroSubtitle`)}</p>
            </div>
            <div className={styles.heroIcon}>
              <Icon size={36} />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesList}>
            {discipline.serviceKeys.map((key, index) => (
              <article key={key} className={styles.serviceDetailCard}>
                <div className={styles.serviceDetailIndex}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className={styles.serviceDetailContent}>
                  <h3>{t(`${discipline.translationKey}.services.${key}.title`)}</h3>
                  <p>{t(`${discipline.translationKey}.services.${key}.description`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ServiceGallery discipline={discipline} />

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.serviceCTA}>
            <h3>{tServices('contactForService')}</h3>
            <p>{tDisciplines(`${discipline.translationKey}.description`)}</p>
            <Link href="/iletisim" className="btn btn-primary">
              {tNav('contact')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Other Disciplines */}
      <section className="section section-alt">
        <div className="container container-wide">
          <div className="section-header">
            <h2>
              <span className="sectionTitleLink">
                <span className="sectionTitleText">{tServices('otherDisciplines')}</span>
              </span>
            </h2>
          </div>
          <div className={styles.otherDisciplines}>
            {otherDisciplines.map((d) => (
              <ServiceCard key={d.slug} discipline={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
