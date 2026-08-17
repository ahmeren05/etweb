'use client';

import { useTranslations } from 'next-intl';
import { UserRound } from 'lucide-react';
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

        <div className={styles.chartWrapper}>
          <div className={styles.watermark}>
            <Image 
              src="/etlogo.png" 
              alt="Eren Teknik Logo Watermark" 
              width={800} 
              height={163} 
              style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
            />
          </div>
          
          <div className={styles.scrollArea}>
            <div className={styles.orgChart}>
              <div className={styles.level1}>
              <div className={`${styles.node} ${styles.primaryNode}`}>
                <div className={styles.avatar}>
                  <UserRound size={32} />
                </div>
                <span>{t('chairman')}</span>
              </div>
            </div>
            
            <div className={styles.mainConnection}></div>
            
            <div className={styles.level2}>
              <div className={styles.branch}>
                <div className={styles.node}>
                  <div className={styles.avatar}>
                    <UserRound size={24} />
                  </div>
                  <span>{t('electrical').split(' ').slice(0, -1).join(' ')}<br/>{t('electrical').split(' ').slice(-1)}</span>
                </div>
                <div className={styles.subConnection}></div>
                <div className={styles.subNode}>
                  {t('personnel', { count: 5 })}
                </div>
              </div>

              <div className={styles.branch}>
                <div className={styles.node}>
                  <div className={styles.avatar}>
                    <UserRound size={24} />
                  </div>
                  <span>{t('mechanical').split(' ').slice(0, -1).join(' ')}<br/>{t('mechanical').split(' ').slice(-1)}</span>
                </div>
                <div className={styles.subConnection}></div>
                <div className={styles.subNode}>
                  {t('personnel', { count: 15 })}
                </div>
              </div>

              <div className={styles.branch}>
                <div className={styles.node}>
                  <div className={styles.avatar}>
                    <UserRound size={24} />
                  </div>
                  <span>{t('project').split(' ').slice(0, -1).join(' ')}<br/>{t('project').split(' ').slice(-1)}</span>
                </div>
                <div className={styles.subConnection}></div>
                <div className={styles.subNode}>
                  {t('personnel', { count: 4 })}
                </div>
              </div>

              <div className={styles.branch}>
                <div className={styles.node}>
                  <div className={styles.avatar}>
                    <UserRound size={24} />
                  </div>
                  <span>{t('construction').split(' ').slice(0, -1).join(' ')}<br/>{t('construction').split(' ').slice(-1)}</span>
                </div>
                <div className={styles.subConnection}></div>
                <div className={styles.subNode}>
                  {t('personnel', { count: 15 })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
