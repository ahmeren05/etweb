'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Search, X } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { generateWebPageSchema } from '@/lib/structured-data';
import styles from './page.module.css';

import Image from 'next/image';
import { allReferences as clients } from '@/lib/references';

const getSectorColor = (sectorTr: string) => {
  switch (sectorTr) {
    case 'Ambalaj Sanayi':
    case 'Elektrik & Otomasyon':
    case 'İklimlendirme & Filtre':
      return '#e00010'; // Red (Industry)
    case 'İlaç Sanayi':
    case 'Biyoteknoloji':
    case 'Sağlık Sanayi':
      return '#20c0c0'; // Teal (Health/Pharma)
    case 'Gıda & İçecek':
    case 'Et Entegre':
    case 'Gıda & Dağıtım':
      return '#80c000'; // Green (Food)
    case 'Kamu / Kurum':
    case 'Kamu / Eğitim':
    case 'Kamu / Belediye':
    default:
      return '#00a0f0'; // Blue (Public/Other)
  }
};

export default function ReferencesPage() {
  const t = useTranslations('References');
  const locale = useLocale();
  const isEn = locale === 'en';
  const [searchQuery, setSearchQuery] = useState('');

  const [shuffledClients, setShuffledClients] = useState(clients);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const shuffled = [...clients].sort(() => Math.random() - 0.5);
    setShuffledClients(shuffled);
    setIsMounted(true);
  }, []);

  const isSearching = searchQuery.trim() !== '';
  const filteredClients = shuffledClients.filter((client) => {
    const query = searchQuery.toLocaleLowerCase('tr-TR').trim();
    return (
      client.name.toLocaleLowerCase('tr-TR').includes(query) ||
      client.sectorTr.toLocaleLowerCase('tr-TR').includes(query) ||
      client.sectorEn.toLocaleLowerCase('tr-TR').includes(query) ||
      (client.tags && client.tags.some(tag => tag.toLocaleLowerCase('tr-TR').includes(query)))
    );
  });

  // Render all clients in the grid so Row 2 starts right below Row 1 just below the fold
  const displayedClients = isSearching ? filteredClients : shuffledClients;

  return (
    <>
      <JsonLd data={generateWebPageSchema(
        t('metaTitle'),
        t('metaDescription'),
        '/referanslar'
      )} />

      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.pageHeroInner}>
            <span className="eyebrow">{t('metaTitle')}</span>
            <h1>{t('heroTitle')}</h1>
            {t('heroSubtitle') && <p>{t('heroSubtitle')}</p>}
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder={
                isEn
                  ? 'Search company name...'
                  : 'Firma adı ara...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {isSearching && (
              <button
                className={styles.clearBtn}
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className={styles.referencesGrid}>
            {displayedClients.length > 0 ? (
              displayedClients.map((client) => (
                <div 
                  key={client.name} 
                  className={styles.referenceCard}
                  style={{ '--hover-color': getSectorColor(client.sectorTr) } as React.CSSProperties}
                >
                  <div className={styles.logoBadgeContainer}>
                    <Image 
                      src={client.imgUrl} 
                      alt={client.name} 
                      fill 
                      style={{ objectFit: 'contain', padding: '8px' }} 
                    />
                  </div>
                  <div className={styles.referenceName}>{client.name}</div>
                  <div className={styles.referenceSector}>
                    {isEn ? client.sectorEn : client.sectorTr}
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                {isEn
                  ? `No references found matching "${searchQuery}"`
                  : `"${searchQuery}" ile eşleşen referans bulunamadı.`}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
