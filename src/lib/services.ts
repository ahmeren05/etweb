export type ServiceKey = 'lowVoltage' | 'mediumVoltage' | 'lighting' | 'grounding' | 'energyEfficiency' |
  'plc' | 'scada' | 'bms' | 'industrial' | 'processControl' |
  'hvac' | 'fire' | 'plumbing' | 'gas' | 'compressedAir' |
  'concrete' | 'steel' | 'infrastructure' | 'management' |
  'cleanRoomDesign' | 'hvacValidation' | 'particleMonitoring' | 'gmpCompliance' | 'pressureDifferential';

export type DisciplineSlug = 'elektrik' | 'otomasyon' | 'mekanik' | 'insaat' | 'temizoda';

export interface Discipline {
  slug: DisciplineSlug;
  translationKey: string;
  icon: string;
  serviceKeys: string[];
}

export const disciplines: Discipline[] = [
  {
    slug: 'temizoda',
    translationKey: 'cleanroom',
    icon: 'Sparkles',
    serviceKeys: ['cleanRoomDesign', 'hvacValidation', 'particleMonitoring', 'gmpCompliance', 'pressureDifferential'],
  },
  {
    slug: 'mekanik',
    translationKey: 'mechanical',
    icon: 'Wrench',
    serviceKeys: ['hvac', 'fire', 'plumbing', 'gas', 'compressedAir'],
  },
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
      temizoda: 'cleanroom',
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
      cleanroom: 'temizoda',
    };
    return map[localizedSlug];
  }
  return localizedSlug as DisciplineSlug;
}
