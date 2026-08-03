'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { CheckCheck, Handshake } from 'lucide-react';
import styles from './Stats.module.css';

interface StatConfig {
  value: number;
  suffix?: string;
  prefix?: string;
  labelKey: string;
}

const statsData: StatConfig[] = [
  { value: 30, suffix: '+', labelKey: 'years' },
  { value: 100, suffix: '+', labelKey: 'projects' },
  { value: 0, labelKey: 'turnkey' },
  { value: 0, labelKey: 'validation' },
];

function useCountUp(target: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    let rafId: number;

    const animate = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, isVisible]);

  return count;
}

function StatItem({ stat, isVisible }: { stat: StatConfig; isVisible: boolean }) {
  const t = useTranslations('Stats');
  const count = useCountUp(stat.value, stat.value > 100 ? 2000 : 1200, isVisible);

  return (
    <div className={styles.statItem}>
      <div 
        className={styles.statNumber}
        style={(stat.labelKey === 'validation' || stat.labelKey === 'turnkey') ? { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1em' } : {}}
      >
        {stat.labelKey === 'validation' ? (
          <CheckCheck size={56} strokeWidth={2} className={styles.statIcon} style={{ transform: 'translateY(-2px)' }} />
        ) : stat.labelKey === 'turnkey' ? (
          <Handshake size={56} strokeWidth={1} className={styles.statIcon} style={{ transform: 'translateY(-2px)' }} />
        ) : (
          <>
            {stat.prefix && <span className={styles.statSuffix}>{stat.prefix}</span>}
            {count}
            {stat.suffix && <span className={styles.statSuffix}>{stat.suffix}</span>}
          </>
        )}
      </div>
      <p className={styles.statLabel}>{t(stat.labelKey)}</p>
      
      {stat.labelKey === 'certifications' && (
        <div className={styles.certTooltip}>
          <ul>
            <li>ISO 9001</li>
            <li>ISO 14001</li>
            <li>ISO 45001</li>
            <li>TSE</li>
            <li>CE</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} ref={ref} aria-label="Company Statistics">
      <div className="container">
        <div className={styles.statsGrid}>
          {statsData.map((stat) => (
            <StatItem key={stat.labelKey} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
