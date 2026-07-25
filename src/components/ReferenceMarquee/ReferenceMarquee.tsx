'use client';

import React from 'react';
import { Link } from '@/i18n/navigation';
import {
  Flame,
  Radio,
  Cpu,
  Zap,
  ShieldCheck,
  Rocket,
  Plane,
  Gem,
  Truck,
  FlaskConical,
  Building2,
  Activity,
  Layers,
  Monitor,
  Compass,
  LucideIcon
} from 'lucide-react';
import styles from './ReferenceMarquee.module.css';

interface ReferenceItem {
  name: string;
  sectorTr: string;
  sectorEn: string;
  color: string;
  Icon: LucideIcon;
}

const col1Items: ReferenceItem[] = [
  { name: 'TÜPRAŞ', sectorTr: 'Enerji & Rafineri', sectorEn: 'Energy & Refining', color: '#E53935', Icon: Flame },
  { name: 'ASELSAN', sectorTr: 'Savunma & Elektronik', sectorEn: 'Defense Electronics', color: '#1E88E5', Icon: Radio },
  { name: 'ARÇELİK', sectorTr: 'Endüstriyel Üretim', sectorEn: 'Industrial Mfg.', color: '#E64A19', Icon: Cpu },
  { name: 'SIEMENS', sectorTr: 'Elektrik & Otomasyon', sectorEn: 'Power & Automation', color: '#009688', Icon: Zap },
  { name: 'SCHNEIDER', sectorTr: 'Enerji Yönetimi', sectorEn: 'Energy Management', color: '#43A047', Icon: ShieldCheck },
];

const col2Items: ReferenceItem[] = [
  { name: 'ROKETSAN', sectorTr: 'Savunma Sanayi', sectorEn: 'Defense & Aerospace', color: '#3949AB', Icon: Rocket },
  { name: 'THY TEKNİK', sectorTr: 'Havacılık & Bakım', sectorEn: 'Aviation & Maintenance', color: '#D32F2F', Icon: Plane },
  { name: 'ŞİŞECAM', sectorTr: 'Endüstriyel Cam', sectorEn: 'Industrial Glass', color: '#00ACC1', Icon: Gem },
  { name: 'FORD OTOSAN', sectorTr: 'Otomotiv Üretim', sectorEn: 'Automotive Mfg.', color: '#1565C0', Icon: Truck },
  { name: 'PETKİM', sectorTr: 'Petrokimya Tesisleri', sectorEn: 'Petrochemicals', color: '#FB8C00', Icon: FlaskConical },
];

const col3Items: ReferenceItem[] = [
  { name: 'ASO 1. OSB', sectorTr: 'Sanayi Altyapısı', sectorEn: 'Industrial Zone', color: '#00897B', Icon: Building2 },
  { name: 'ABB', sectorTr: 'Güç & Robotik', sectorEn: 'Power & Robotics', color: '#E53935', Icon: Activity },
  { name: 'ERDEMİR', sectorTr: 'Demir & Çelik', sectorEn: 'Iron & Steel', color: '#546E7A', Icon: Layers },
  { name: 'VESTEL', sectorTr: 'Elektronik & Teknoloji', sectorEn: 'Electronics Tech', color: '#C0CA33', Icon: Monitor },
  { name: 'TUSAŞ / TAI', sectorTr: 'Havacılık & Uzay', sectorEn: 'Aerospace & Defense', color: '#0288D1', Icon: Compass },
];

export default function ReferenceMarquee() {
  const renderColumn = (items: ReferenceItem[], animationClass: string) => {
    // Duplicate array for seamless infinite looping
    const loopedItems = [...items, ...items];

    return (
      <div className={styles.column}>
        <div className={`${styles.track} ${animationClass}`}>
          {loopedItems.map((item, idx) => {
            const IconComponent = item.Icon;
            return (
              <Link
                key={`${item.name}-${idx}`}
                href="/referanslar"
                className={styles.logoCard}
                style={{ '--brand-color': item.color } as React.CSSProperties}
                aria-label={item.name}
              >
                <div className={styles.iconContainer}>
                  <IconComponent size={32} />
                </div>
                <div className={styles.nameContainer}>
                  <span className={styles.brandName}>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.marqueeContainer}>
      {renderColumn(col1Items, styles.scrollDown)}
      {renderColumn(col2Items, styles.scrollUp)}
      {renderColumn(col3Items, styles.scrollDownSlow)}
    </div>
  );
}
