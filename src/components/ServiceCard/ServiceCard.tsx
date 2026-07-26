import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Zap, Cpu, Wrench, Building2, Sparkles, ArrowRight } from 'lucide-react';
import type { Discipline } from '@/lib/services';
import styles from './ServiceCard.module.css';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Zap,
  Cpu,
  Wrench,
  Building2,
  Sparkles,
};

const imageMap: Record<string, string> = {
  elektrik: '/services/electric/electric1.jpeg',
  otomasyon: '/services/automation/automation1.jpeg',
  mekanik: '/services/mechanical/mechanical1.jpeg',
  insaat: '/services/building/building1.jpeg',
  temizoda: '/services/clean%20room/cleanroom1.jpeg',
};

interface ServiceCardProps {
  discipline: Discipline;
}

export default function ServiceCard({ discipline }: ServiceCardProps) {
  const t = useTranslations('Disciplines');
  const Icon = iconMap[discipline.icon] || Zap;
  const bgImage = imageMap[discipline.slug] || imageMap.elektrik;

  return (
    <Link
      href={{ pathname: '/hizmetler/[slug]', params: { slug: discipline.slug } }}
      className={styles.card}
    >
      <div className={styles.cardBgImage} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.cardBgOverlay} />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>
          <Icon size={24} />
        </div>
        <h3 className={styles.cardTitle}>
          {t(`${discipline.translationKey}.title`)}
        </h3>
        <p className={styles.cardDescription}>
          {t(`${discipline.translationKey}.description`)}
        </p>
        <ul className={styles.serviceList}>
          {discipline.serviceKeys.map((key) => (
            <li key={key} className={styles.serviceItem}>
              {t(`${discipline.translationKey}.services.${key}`)}
            </li>
          ))}
        </ul>
        <div className={styles.cardFooter}>
          <span className={styles.cardLink}>
            {t('learnMore')} <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
