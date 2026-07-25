'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: 'tr' | 'en') => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.replace(segments.join('/'));
  };

  return (
    <div className={styles.switcher} role="radiogroup" aria-label="Language">
      <button
        className={`${styles.option} ${locale === 'tr' ? styles.optionActive : ''}`}
        onClick={() => switchLocale('tr')}
        role="radio"
        aria-checked={locale === 'tr'}
      >
        TR
      </button>
      <button
        className={`${styles.option} ${locale === 'en' ? styles.optionActive : ''}`}
        onClick={() => switchLocale('en')}
        role="radio"
        aria-checked={locale === 'en'}
      >
        EN
      </button>
    </div>
  );
}
