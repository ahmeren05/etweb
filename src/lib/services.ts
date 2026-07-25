export type ServiceKey = 'lowVoltage' | 'mediumVoltage' | 'lighting' | 'grounding' | 'energyEfficiency' |
  'plc' | 'scada' | 'bms' | 'industrial' | 'processControl' |
  'hvac' | 'fire' | 'plumbing' | 'gas' | 'compressedAir' |
  'concrete' | 'steel' | 'infrastructure' | 'management';

export type DisciplineSlug = 'elektrik' | 'otomasyon' | 'mekanik' | 'insaat';

export interface Discipline {
  slug: DisciplineSlug;
  translationKey: string;
  icon: string;
  serviceKeys: string[];
}

export const disciplines: Discipline[] = [
  {
    slug: 'elektrik',
    translationKey: 'electrical',
    icon: 'Zap',
    serviceKeys: ['lowVoltage', 'mediumVoltage', 'lighting', 'grounding', 'energyEfficiency'],
  },
  {
    slug: 'otomasyon',
    translationKey: 'automation',
    icon: 'Cpu',
    serviceKeys: ['plc', 'scada', 'bms', 'industrial', 'processControl'],
  },
  {
    slug: 'mekanik',
    translationKey: 'mechanical',
    icon: 'Wrench',
    serviceKeys: ['hvac', 'fire', 'plumbing', 'gas', 'compressedAir'],
  },
  {
    slug: 'insaat',
    translationKey: 'construction',
    icon: 'Building2',
    serviceKeys: ['concrete', 'steel', 'infrastructure', 'industrial', 'management'],
  },
];

export const disciplineSlugs = disciplines.map(d => d.slug);

export function getDisciplineBySlug(slug: string): Discipline | undefined {
  return disciplines.find(d => d.slug === slug);
}

export function getSlugForLocale(slug: DisciplineSlug, locale: string): string {
  if (locale === 'en') {
    const map: Record<DisciplineSlug, string> = {
      elektrik: 'electrical',
      otomasyon: 'automation',
      mekanik: 'mechanical',
      insaat: 'construction',
    };
    return map[slug];
  }
  return slug;
}

export function getSlugFromLocalized(localizedSlug: string, locale: string): DisciplineSlug | undefined {
  if (locale === 'en') {
    const map: Record<string, DisciplineSlug> = {
      electrical: 'elektrik',
      automation: 'otomasyon',
      mechanical: 'mekanik',
      construction: 'insaat',
    };
    return map[localizedSlug];
  }
  return localizedSlug as DisciplineSlug;
}
