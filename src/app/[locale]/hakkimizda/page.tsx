import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Crosshair, Layers, ShieldCheck, Lightbulb } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import Stats from '@/components/Stats/Stats';
import OrgChart from '@/components/OrgChart/OrgChart';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/hakkimizda`,
      languages: { tr: '/tr/hakkimizda', en: '/en/hakkimizda' },
    },
  };
}

export default function AboutPage() {
  const t = useTranslations('About');
  const tNav = useTranslations('Nav');

  const values = [
    { key: 'precision', Icon: Crosshair },
    { key: 'integration', Icon: Layers },
    { key: 'reliability', Icon: ShieldCheck },
    { key: 'innovation', Icon: Lightbulb },
  ];

  return (
    <>
      <JsonLd data={[
        generateWebPageSchema(t('metaTitle'), t('metaDescription'), '/hakkimizda'),
        generateBreadcrumbSchema([
          { name: tNav('home'), url: '/' },
          { name: tNav('about'), url: '/hakkimizda' },
        ]),
      ]} />

      {/* Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.pageHeroInner}>
            <h1 className="eyebrow" style={{ fontSize: 'var(--text-4xl)', textTransform: 'none', marginBottom: 'var(--space-4)' }}>
              {t('metaTitle')}
            </h1>
            <p>{t('heroSubtitle')}</p>
          </div>
        </div>
      </section>

      {/* Story + Mission/Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyContent}>
              <h2>
                <span className="sectionTitleLink">
                  <span className="sectionTitleText">{t('storyTitle')}</span>
                </span>
              </h2>
              <p>{t('storyP1')}</p>
              <p>{t('storyP2')}</p>
              <p>{t('storyP3')}</p>
              <p>{t('storyP4')}</p>
            </div>
            <div className={styles.missionVision}>
              <div className={styles.mvCard}>
                <h3>{t('missionTitle')}</h3>
                <p>{t('missionText')}</p>
              </div>
              <div className={styles.mvCard}>
                <h3>{t('visionTitle')}</h3>
                <p>{t('visionText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Org Chart */}
      <OrgChart />

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>
              <span className="sectionTitleLink">
                <span className="sectionTitleText">{t('valuesTitle')}</span>
              </span>
            </h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(({ key, Icon }) => (
              <div key={key} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Icon size={24} />
                </div>
                <h4>{t(`values.${key}.title`)}</h4>
                <p>{t(`values.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
