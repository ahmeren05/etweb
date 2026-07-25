'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Discipline } from '@/lib/services';
import styles from './ServiceGallery.module.css';

const galleryMap: Record<string, string[]> = {
  elektrik: [
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
  ],
  otomasyon: [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
  ],
  mekanik: [
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
  ],
  insaat: [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
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
