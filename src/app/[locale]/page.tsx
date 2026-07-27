import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero/Hero';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import Stats from '@/components/Stats/Stats';
import ReferenceMarquee from '@/components/ReferenceMarquee/ReferenceMarquee';
import JsonLd from '@/components/JsonLd';
import { disciplines } from '@/lib/services';
import { generateWebPageSchema } from '@/lib/structured-data';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <JsonLd data={generateWebPageSchema(
        'Eren Teknik Mühendislik A.Ş.',
        'Elektrik, otomasyon, mekanik ve inşaat mühendisliğinde entegre çözümler.',
        '/'
      )} />

      {/* Hero Section */}
      <Hero />

      {/* Disciplines Section */}
      <section className="section" id="disciplines">
        <div className="container container-wide">
          <div className="section-header">
            <h2>
              <Link href="/hizmetler" className="sectionTitleLink">
                <span className="sectionTitleText">
                  {t('Disciplines.sectionTitle')}
                </span>
              </Link>
            </h2>
            <p>{t('Disciplines.sectionSubtitle')}</p>
          </div>
          <div className={styles.disciplinesGrid}>
            {disciplines.map((discipline) => (
              <ServiceCard key={discipline.slug} discipline={discipline} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* About Preview */}
      <section className="section" id="about-preview">
        <div className="container">
          <div className={styles.aboutPreview}>
            <div className={styles.aboutContent}>
              <h2>
                <Link href="/hakkimizda" className="sectionTitleLink">
                  <span className="sectionTitleText">
                    {t('AboutPreview.title')}
                  </span>
                </Link>
              </h2>
              <h3 
                className={styles.aboutSubtitle} 
                style={{ 
                  fontStyle: 'italic', 
                  fontWeight: 'normal', 
                  marginTop: '-10px', 
                  marginBottom: '20px', 
                  color: 'var(--color-slate)' 
                }}
              >
                {t('AboutPreview.subtitle')}
              </h3>
              <p className={styles.aboutText}>{t('AboutPreview.description')}</p>
              <Link href="/hakkimizda" className="btn btn-outline">
                {t('AboutPreview.cta')} <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.aboutVisual}>
              <ReferenceMarquee />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.contactCTA} id="contact-cta">
        <div className="container">
          <div className={styles.staggeredContainer}>
            <div className={styles.staggeredLine1}>
              <span className={styles.staggeredText}>{t('ContactCTA.line1')}</span>
            </div>
            <div className={styles.staggeredLine2}>
              <span className={styles.staggeredText}>{t('ContactCTA.line2')}</span>
            </div>
            <div className={styles.staggeredLine3Wrapper}>
              <span className={styles.staggeredText}>{t('ContactCTA.line3')}</span>
            </div>
            <Link href="/iletisim" className={styles.staggeredArrowLink} aria-label={t('ContactCTA.cta')}>
              <ArrowRight size={44} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
