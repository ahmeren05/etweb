import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Zap, Cpu, Wrench, Building2, ArrowRight } from 'lucide-react';
import type { Discipline } from '@/lib/services';
import styles from './ServiceCard.module.css';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Zap,
  Cpu,
  Wrench,
  Building2,
};

const imageMap: Record<string, string> = {
  elektrik: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
  otomasyon: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  mekanik: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
  insaat: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
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
