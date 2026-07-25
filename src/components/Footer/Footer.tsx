import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <div className={styles.footerLogoText}>
                Eren <span>Teknik</span>
              </div>
            </Link>
            <p className={styles.footerDescription}>
              {t('Footer.description')}
            </p>
            <Link href="/hakkimizda" className={styles.learnMoreLink}>
              {t('Footer.learnMore')} <ArrowRight size={14} />
            </Link>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h4>{t('Footer.quickLinks')}</h4>
            <div className={styles.footerLinks}>
              <Link href="/hakkimizda" className={styles.footerLink}>
                {t('Nav.about')}
              </Link>
              <Link href="/referanslar" className={styles.footerLink}>
                {t('Nav.references')}
              </Link>
              <Link href="/iletisim" className={styles.footerLink}>
                {t('Nav.contact')}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h4>
              <Link href="/hizmetler">
                {t('Footer.services')}
              </Link>
            </h4>
            <div className={styles.footerLinks}>
              <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'elektrik' }}} className={styles.footerLink}>
                {t('Disciplines.electrical.title')}
              </Link>
              <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'otomasyon' }}} className={styles.footerLink}>
                {t('Disciplines.automation.title')}
              </Link>
              <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'mekanik' }}} className={styles.footerLink}>
                {t('Disciplines.mechanical.title')}
              </Link>
              <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'insaat' }}} className={styles.footerLink}>
                {t('Disciplines.construction.title')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h4>
              <Link href="/iletisim">
                {t('Footer.contactInfo')}
              </Link>
            </h4>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <p className={styles.contactText}>{t('Footer.address')}</p>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <p className={styles.contactText}>
                <a href={`tel:${t('Footer.phone')}`}>{t('Footer.phone')}</a>
              </p>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <p className={styles.contactText}>
                <a href={`mailto:${t('Footer.email')}`}>{t('Footer.email')}</a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Eren Teknik Mühendislik A.Ş. {t('Footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
