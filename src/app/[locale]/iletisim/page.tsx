import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm/ContactForm';
import JsonLd from '@/components/JsonLd';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/iletisim`,
      languages: { tr: '/tr/iletisim', en: '/en/iletisim' },
    },
  };
}

export default function ContactPage() {
  const t = useTranslations('Contact');
  const tNav = useTranslations('Nav');
  const tFooter = useTranslations('Footer');

  return (
    <>
      <JsonLd data={[
        generateWebPageSchema(t('metaTitle'), t('metaDescription'), '/iletisim'),
        generateBreadcrumbSchema([
          { name: tNav('home'), url: '/' },
          { name: tNav('contact'), url: '/iletisim' },
        ]),
      ]} />

      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.pageHeroInner}>
            <span className="eyebrow">{t('metaTitle')}</span>
            <h1>{t('heroTitle')}</h1>
            <p>{t('heroSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <ContactForm />

            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h3>{t('officeTitle')}</h3>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <p>{tFooter('address')}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <p>
                      <a href={`tel:${tFooter('phone')}`}>{tFooter('phone')}</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <p>
                      <a href={`mailto:${tFooter('email')}`}>{tFooter('email')}</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Clock size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <h4>09:00 &ndash; 17:00</h4>
                    <p>Pazartesi &ndash; Cuma</p>
                  </div>
                </div>
              </div>

              <div className={styles.mapPlaceholder}>
                {tFooter('address')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
