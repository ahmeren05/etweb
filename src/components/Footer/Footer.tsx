import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
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
              <Image 
                src="/etlogo.png" 
                alt="Eren Teknik Logo" 
                width={220} 
                height={45} 
                style={{ objectFit: 'contain' }}
              />
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
              <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'temizoda' }}} className={styles.footerLink}>
                {t('Disciplines.cleanroom.title')}
              </Link>
              <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'mekanik' }}} className={styles.footerLink}>
                {t('Disciplines.mechanical.title')}
              </Link>
              <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'elektrik' }}} className={styles.footerLink}>
                {t('Disciplines.electrical.title')}
              </Link>
              <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'otomasyon' }}} className={styles.footerLink}>
                {t('Disciplines.automation.title')}
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
          <div className={styles.socialIcons}>
            <a href="https://wa.me/902164917671" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="WhatsApp" style={{'--hover-color': '#25D366'} as any} onMouseEnter={(e) => e.currentTarget.style.color = '#25D366'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn" style={{'--hover-color': '#0A66C2'} as any} onMouseEnter={(e) => e.currentTarget.style.color = '#0A66C2'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Instagram" style={{'--hover-color': '#E1306C'} as any} onMouseEnter={(e) => e.currentTarget.style.color = '#E1306C'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Facebook" style={{'--hover-color': '#1877F2'} as any} onMouseEnter={(e) => e.currentTarget.style.color = '#1877F2'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.801.005 1.602.031 2.403.079v3.314h-1.64c-1.205 0-1.62.66-1.62 1.636v2.529h3.262l-.417 3.667h-2.845v7.98z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="X" style={{'--hover-color': '#FFFFFF'} as any} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
