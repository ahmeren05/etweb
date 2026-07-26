'use client';

import { UserRound } from 'lucide-react';
import Image from 'next/image';
import styles from './OrgChart.module.css';

export default function OrgChart() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="sectionTitleLink">
              <span className="sectionTitleText">Ekip Organizasyonumuz</span>
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
                <span>Yönetim Kurulu Başkanı</span>
              </div>
            </div>
            
            <div className={styles.mainConnection}></div>
            
            <div className={styles.level2}>
              <div className={styles.branch}>
                <div className={styles.node}>
                  <div className={styles.avatar}>
                    <UserRound size={24} />
                  </div>
                  <span>Elektrik ve Otomasyon<br/>Sorumlusu</span>
                </div>
                <div className={styles.subConnection}></div>
                <div className={styles.subNode}>
                  +5 Personel
                </div>
              </div>

              <div className={styles.branch}>
                <div className={styles.node}>
                  <div className={styles.avatar}>
                    <UserRound size={24} />
                  </div>
                  <span>Mekanik<br/>Sorumlusu</span>
                </div>
                <div className={styles.subConnection}></div>
                <div className={styles.subNode}>
                  +15 Personel
                </div>
              </div>

              <div className={styles.branch}>
                <div className={styles.node}>
                  <div className={styles.avatar}>
                    <UserRound size={24} />
                  </div>
                  <span>Proje<br/>Sorumlusu</span>
                </div>
                <div className={styles.subConnection}></div>
                <div className={styles.subNode}>
                  +4 Personel
                </div>
              </div>

              <div className={styles.branch}>
                <div className={styles.node}>
                  <div className={styles.avatar}>
                    <UserRound size={24} />
                  </div>
                  <span>İnşaat<br/>Sorumlusu</span>
                </div>
                <div className={styles.subConnection}></div>
                <div className={styles.subNode}>
                  +15 Personel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
