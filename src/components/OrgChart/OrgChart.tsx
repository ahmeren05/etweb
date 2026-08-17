'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './OrgChart.module.css';

export default function OrgChart() {
  const t = useTranslations('OrgChart');

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="sectionTitleLink">
              <span className="sectionTitleText">{t('title')}</span>
            </span>
          </h2>
        </div>

        <div className={styles.chartWrapper} style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0', background: 'transparent', boxShadow: 'none' }}>
          <Image 
            src="/org-chart.png" 
            alt="Eren Teknik Organization Chart" 
            width={1200} 
            height={850} 
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          />
        </div>
      </div>
    </section>
  );
}
