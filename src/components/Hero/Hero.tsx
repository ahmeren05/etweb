import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import SchematicSVG from './SchematicSVG';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className={styles.heroWrapper}>
      {/* Siemens Custom Partner Structure */}
      <div className={styles.siemensEmblem}>
        {/* Sol taraftaki gri amblem kutusu */}
        <div className={styles.emblemTextSquare}>
          <div className={styles.emblemCategory}>
            Solution<br />Partner
          </div>
          <div className={styles.emblemDescriptor}>
            Building<br />Technologies
          </div>
        </div>
        
        {/* Sağ taraftaki Siemens logosu ve altındaki ince yazı */}
        <div className={styles.siemensLogoColumn}>
          <div className={styles.siemensLogoWrapper}>
            <Image 
              src="/references/logo_siemens.png" 
              alt="Siemens" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.siemensCustomTagline}>
            Solution Partner - Building Technologies
          </div>
        </div>
      </div>

      <section className={styles.hero} id="hero">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowDot} />
              Eren Teknik Mühendislik A.Ş.
            </div>
            <h1 className={styles.heroTitle}>{t('headline')}</h1>
            <p className={styles.heroSubtitle}>{t('subheadline')}</p>
            <div className={styles.heroCTAs}>
              <Link href="/hizmetler" className="btn btn-primary btn-lg">
                {t('cta')}
              </Link>
              <Link href="/iletisim" className="btn btn-outline btn-lg">
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <SchematicSVG />
          </div>
        </div>
      </section>

      {/* Bottom-right notch */}
      <div className={styles.notch}>
        {/* Inverted corner: left side (hero bottom → notch left) */}
        <div className={styles.cornerLeft}>
          <div className={styles.cornerLeftInner} />
        </div>
        {/* Inverted corner: top side (hero right → notch top) */}
        <div className={styles.cornerTop}>
          <div className={styles.cornerTopInner} />
        </div>
        {/* Cert content */}
        <div className={styles.notchContent}>
          <div className={styles.certBadge}>
            <div className={styles.certIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M12 2L3 7v6c0 5.25 3.82 10.04 9 11 5.18-.96 9-5.75 9-11V7l-9-5z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className={styles.certText}>
              <span className={styles.certName}>ISO</span>
            </div>
          </div>
          <div className={styles.certDivider} />
          <div className={styles.certBadge}>
            <div className={styles.certIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M12 2L3 7v6c0 5.25 3.82 10.04 9 11 5.18-.96 9-5.75 9-11V7l-9-5z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className={styles.certText}>
              <span className={styles.certName}>GMP</span>
            </div>
          </div>
          <div className={styles.certDivider} />
          <div className={styles.certBadge}>
            <div className={styles.certIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M12 2L3 7v6c0 5.25 3.82 10.04 9 11 5.18-.96 9-5.75 9-11V7l-9-5z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className={styles.certText}>
              <span className={styles.certName}>FDA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
