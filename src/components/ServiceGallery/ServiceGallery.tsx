'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Discipline } from '@/lib/services';
import styles from './ServiceGallery.module.css';

const galleryMap: Record<string, string[]> = {
  elektrik: [
    '/services/electric/electric2.jpeg',
    '/services/electric/electric3.jpeg',
    '/services/electric/electric4.jpeg',
    '/services/electric/electric5.jpeg',
    '/services/electric/electric6.jpeg',
    '/services/electric/electric7.jpeg',
    '/services/electric/electric8.jpeg',
    '/services/electric/electric9.jpeg',
    '/services/electric/electric1.jpeg',
  ],
  otomasyon: [
    '/services/automation/automation2.jpeg',
    '/services/automation/automation3.jpeg',
    '/services/automation/automation4.jpeg',
    '/services/automation/automation5.jpeg',
    '/services/automation/automation6.jpeg',
    '/services/automation/automation7.jpeg',
    '/services/automation/automation8.jpeg',
    '/services/automation/automation9.jpeg',
    '/services/automation/automation1.jpeg',
  ],
  mekanik: [
    '/services/mechanical/mechanical2.jpeg',
    '/services/mechanical/mechanical3.jpeg',
    '/services/mechanical/mechanical4.jpeg',
    '/services/mechanical/mechanical5.jpeg',
    '/services/mechanical/mechanical6.jpeg',
    '/services/mechanical/mechanical7.jpeg',
    '/services/mechanical/mechanical8.jpeg',
    '/services/mechanical/mechanical9.jpeg',
    '/services/mechanical/mechanical1.jpeg',
  ],
  insaat: [
    '/services/building/building2.jpeg',
    '/services/building/building3.jpeg',
    '/services/building/building4.jpeg',
    '/services/building/building5.jpeg',
    '/services/building/building6.jpeg',
    '/services/building/building7.jpeg',
    '/services/building/building8.jpeg',
    '/services/building/building9.jpeg',
    '/services/building/building1.jpeg',
  ],
  temizoda: [
    '/services/clean%20room/cleanroom2.jpeg',
    '/services/clean%20room/cleanroom3.jpeg',
    '/services/clean%20room/cleanroom4.jpeg',
    '/services/clean%20room/cleanroom5.jpeg',
    '/services/clean%20room/cleanroom6.jpeg',
    '/services/clean%20room/cleanroom7.jpeg',
    '/services/clean%20room/cleanroom8.jpeg',
    '/services/clean%20room/cleanroom9.jpeg',
    '/services/clean%20room/cleanroom1.jpeg',
  ],
};

interface ServiceGalleryProps {
  discipline: Discipline;
}

export default function ServiceGallery({ discipline }: ServiceGalleryProps) {
  const tDisciplines = useTranslations('Disciplines');
  const photos = galleryMap[discipline.slug] || galleryMap.elektrik;
  const disciplineTitle = tDisciplines(`${discipline.translationKey}.title`);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, prevImage, nextImage]);

  // Duplicate photos array for seamless infinite marquee scroll
  const marqueePhotos = [...photos, ...photos];

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <div className={styles.galleryBox}>
          {/* Background Marquee Track */}
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {marqueePhotos.map((url, idx) => {
                const originalIndex = idx % photos.length;
                return (
                  <div
                    key={idx}
                    className={styles.slideWrapper}
                    onClick={() => openLightbox(originalIndex)}
                  >
                    <img
                      src={url}
                      alt={`${disciplineTitle} - ${originalIndex + 1}`}
                      className={styles.slideImage}
                    />
                  </div>
                );
              })}
            </div>
            {/* White Mist Layer over Photos */}
            <div className={styles.galleryMist} />
          </div>

          {/* Center Overlay Box (Title, Desc, Button) */}
          <div
            className={styles.galleryOverlay}
            onClick={() => openLightbox(0)}
          >
            <h3 className={styles.overlayTitle}>Saha ve Proje Uygulamalarımız</h3>
            <p className={styles.overlayDesc}>
              {disciplineTitle} alanındaki teknik çözümlerimizden, saha çalışmalarımızdan ve projelendirme aşamalarımızdan görseller.
            </p>
            <button
              type="button"
              className={styles.galleryBtn}
              onClick={(e) => {
                e.stopPropagation();
                openLightbox(0);
              }}
            >
              <ImageIcon size={18} />
              <span>Galeriyi Görüntüle</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className={styles.lightboxModal} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close">
              <X size={28} />
            </button>
            <button className={styles.prevBtn} onClick={prevImage} aria-label="Previous">
              <ChevronLeft size={36} />
            </button>
            <img
              src={photos[currentIndex]}
              alt={`${disciplineTitle} - ${currentIndex + 1}`}
              className={styles.lightboxImg}
            />
            <button className={styles.nextBtn} onClick={nextImage} aria-label="Next">
              <ChevronRight size={36} />
            </button>
            <div className={styles.counter}>
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
