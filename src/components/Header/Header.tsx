'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X, Send } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 10);

    // Only hide/show nav based on scroll direction when NOT hovering the header
    if (!headerHovered) {
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down & past threshold → hide nav links
        setNavHidden(true);
      } else {
        // Scrolling up → show nav links
        setNavHidden(false);
      }
    }

    lastScrollY.current = currentScrollY;
  }, [headerHovered]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // When hovering the header, always show nav
  const handleMouseEnter = () => {
    setHeaderHovered(true);
    setNavHidden(false);
  };

  const handleMouseLeave = () => {
    setHeaderHovered(false);
    // If we're scrolled down, hide nav again when mouse leaves
    if (window.scrollY > 80 && window.scrollY > lastScrollY.current - 5) {
      setNavHidden(true);
    }
  };

  const navItems = [
    { href: '/' as const, label: t('home') },
    { href: '/hakkimizda' as const, label: t('about') },
    { href: '/hizmetler' as const, label: t('services') },
    { href: '/referanslar' as const, label: t('references') },
    { href: '/iletisim' as const, label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/etlogo.png" 
            alt="Eren Teknik Logo" 
            width={200} 
            height={40} 
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <nav
          className={`${styles.nav} ${navHidden ? styles.navHidden : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.headerRight}>
          <div className={styles.headerLangSwitcher}>
            <LanguageSwitcher />
          </div>
          <Link href="/iletisim" className={styles.ctaButton}>
            {t('getInTouch')}
          </Link>
          <Link href="/iletisim" className={styles.ctaButtonMobile} aria-label={t('getInTouch')}>
            <Send size={18} />
          </Link>
          <button
            className={`${styles.mobileToggle} ${mobileOpen ? styles.mobileToggleOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className={styles.iconContainer}>
              <Menu size={22} className={styles.iconMenu} />
              <X size={22} className={styles.iconX} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div 
          className={styles.mobileOverlay} 
          onClick={() => setMobileOpen(false)} 
          aria-hidden="true" 
        />
      )}

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className={styles.mobileCta}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
