import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  pathnames: {
    '/': '/',
    '/hakkimizda': {
      tr: '/hakkimizda',
      en: '/about'
    },
    '/hizmetler': {
      tr: '/hizmetler',
      en: '/services'
    },
    '/hizmetler/[slug]': {
      tr: '/hizmetler/[slug]',
      en: '/services/[slug]'
    },
    '/referanslar': {
      tr: '/referanslar',
      en: '/references'
    },
    '/iletisim': {
      tr: '/iletisim',
      en: '/contact'
    }
  }
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
