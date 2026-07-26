'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Search, X } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { generateWebPageSchema } from '@/lib/structured-data';
import styles from './page.module.css';

import Image from 'next/image';
import { allReferences as clients } from '@/lib/references';

export default function ReferencesPage() {
  const t = useTranslations('References');
  const locale = useLocale();
  const isEn = locale === 'en';
  const [searchQuery, setSearchQuery] = useState('');

  const isSearching = searchQuery.trim() !== '';
  const filteredClients = clients.filter((client) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      client.name.toLowerCase().includes(query) ||
      client.sectorTr.toLowerCase().includes(query) ||
      client.sectorEn.toLowerCase().includes(query) ||
      (client.tags && client.tags.some(tag => tag.toLowerCase().includes(query)))
    );
  });

  // Render all clients in the grid so Row 2 starts right below Row 1 just below the fold
  const displayedClients = isSearching ? filteredClients : clients;

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
            <p>{t('heroSubtitle')}</p>
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
                  ? 'Search by company name or sector... (e.g. Aselsan, Energy)'
                  : 'Firma adı veya sektör ara... (Örn: Aselsan, Enerji, Savunma)'
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
                <div key={client.name} className={styles.referenceCard}>
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
