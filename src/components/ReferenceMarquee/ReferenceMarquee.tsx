'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { allReferences, ReferenceItem } from '@/lib/references';
import styles from './ReferenceMarquee.module.css';

// Divide the 26 references into 3 columns/rows of 9, 9, 8
const col1Items = allReferences.slice(0, 9);
const col2Items = allReferences.slice(9, 18);
const col3Items = allReferences.slice(18, 26);

export default function ReferenceMarquee() {
  const renderColumn = (items: ReferenceItem[], animationClass: string) => {
    // Duplicate array for seamless infinite looping
    const loopedItems = [...items, ...items];

    return (
      <div className={styles.column}>
        <div className={`${styles.track} ${animationClass}`}>
          {loopedItems.map((item, idx) => {
            return (
              <Link
                key={`${item.name}-${idx}`}
                href="/referanslar"
                className={styles.logoCard}
                style={{ '--brand-color': item.color } as React.CSSProperties}
                aria-label={item.name}
              >
                <div className={styles.iconContainer}>
                  <Image 
                    src={item.imgUrl} 
                    alt={item.name} 
                    width={100} 
                    height={40} 
                    className={styles.refImage} 
                  />
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
