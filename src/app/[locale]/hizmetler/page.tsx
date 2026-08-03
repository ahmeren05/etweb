import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import JsonLd from '@/components/JsonLd';
import { disciplines } from '@/lib/services';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Services' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/hizmetler`,
      languages: { tr: '/tr/hizmetler', en: '/en/hizmetler' },
    },
  };
}

export default function ServicesPage() {
  const t = useTranslations('Services');
  const tNav = useTranslations('Nav');

  return (
    <>
      <JsonLd data={[
        generateWebPageSchema(t('metaTitle'), t('metaDescription'), '/hizmetler'),
        generateBreadcrumbSchema([
          { name: tNav('home'), url: '/' },
          { name: tNav('services'), url: '/hizmetler' },
        ]),
      ]} />

      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.pageHeroInner}>
            <h1 className="eyebrow" style={{ fontSize: 'var(--text-4xl)', textTransform: 'none', marginBottom: 'var(--space-4)' }}>
              {t('metaTitle')}
            </h1>
            {t('heroSubtitle') && <p>{t('heroSubtitle')}</p>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {disciplines.map((discipline) => (
              <ServiceCard key={discipline.slug} discipline={discipline} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
