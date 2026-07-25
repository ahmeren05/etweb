import type { MetadataRoute } from 'next';
import { disciplines } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://erenteknik.com.tr';
  const locales = ['tr', 'en'];
  const now = new Date();

  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/hakkimizda', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hizmetler', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/referanslar', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/iletisim', priority: 0.8, changeFrequency: 'yearly' as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr${page.path}`,
            en: `${baseUrl}/en${page.path}`,
          },
        },
      });
    }
  }

  for (const discipline of disciplines) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/hizmetler/${discipline.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr/hizmetler/${discipline.slug}`,
            en: `${baseUrl}/en/hizmetler/${discipline.slug}`,
          },
        },
      });
    }
  }

  return entries;
}
