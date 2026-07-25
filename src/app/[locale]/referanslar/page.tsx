'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Search, X } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { generateWebPageSchema } from '@/lib/structured-data';
import styles from './page.module.css';

interface ClientItem {
  name: string;
  badge: string;
  color: string;
  sectorTr: string;
  sectorEn: string;
}

const clients: ClientItem[] = [
  { name: 'Aselsan', badge: 'AS', color: '#2563EB', sectorTr: 'Savunma Sanayi', sectorEn: 'Defense Electronics' },
  { name: 'TÜPRAŞ', badge: 'TP', color: '#F97316', sectorTr: 'Enerji & Rafineri', sectorEn: 'Energy & Refining' },
  { name: 'Arçelik', badge: 'AR', color: '#10B981', sectorTr: 'Endüstriyel Üretim', sectorEn: 'Industrial Manufacturing' },
  { name: 'THY Teknik', badge: 'TT', color: '#EF4444', sectorTr: 'Havacılık & Bakım', sectorEn: 'Aviation & Maintenance' },
  { name: 'Roketsan', badge: 'RO', color: '#6366F1', sectorTr: 'Savunma Sanayi', sectorEn: 'Defense & Aerospace' },
  { name: 'Siemens', badge: 'SI', color: '#0EA5E9', sectorTr: 'Elektrik & Otomasyon', sectorEn: 'Power & Automation' },
  { name: 'Schneider Electric', badge: 'SE', color: '#22C55E', sectorTr: 'Enerji Yönetimi', sectorEn: 'Energy Management' },
  { name: 'Şişecam', badge: 'ŞC', color: '#06B6D4', sectorTr: 'Endüstriyel Cam', sectorEn: 'Industrial Glass' },
  { name: 'Ford Otosan', badge: 'FO', color: '#3B82F6', sectorTr: 'Otomotiv Üretim', sectorEn: 'Automotive Mfg.' },
  { name: 'Petkim', badge: 'PK', color: '#F59E0B', sectorTr: 'Petrokimya Tesisleri', sectorEn: 'Petrochemicals' },
  { name: 'ABB Turkey', badge: 'AB', color: '#E11D48', sectorTr: 'Güç & Robotik', sectorEn: 'Power & Robotics' },
  { name: 'ASO 1. OSB', badge: 'AO', color: '#14B8A6', sectorTr: 'Sanayi Altyapısı', sectorEn: 'Industrial Zone' },
  { name: 'Erdemir', badge: 'ER', color: '#64748B', sectorTr: 'Demir & Çelik', sectorEn: 'Iron & Steel' },
  { name: 'Vestel', badge: 'VE', color: '#84CC16', sectorTr: 'Elektronik & Teknoloji', sectorEn: 'Electronics Tech' },
  { name: 'TUSAŞ / TAI', badge: 'TS', color: '#0284C7', sectorTr: 'Havacılık & Uzay', sectorEn: 'Aerospace & Defense' },
  { name: 'MTA Genel Müd.', badge: 'MT', color: '#D97706', sectorTr: 'Enerji Altyapısı', sectorEn: 'Energy Infrastructure' },
];

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
      client.sectorEn.toLowerCase().includes(query)
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
                  <div
                    className={styles.logoBadge}
                    style={{ backgroundColor: client.color }}
                  >
                    {client.badge}
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
