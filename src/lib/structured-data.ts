export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://erenteknik.com.tr/#organization',
    name: 'Eren Teknik Mühendislik A.Ş.',
    alternateName: 'Eren Teknik Engineering Inc.',
    url: 'https://erenteknik.com.tr',
    logo: 'https://erenteknik.com.tr/images/logo.png',
    description: 'Elektrik, otomasyon, mekanik ve inşaat mühendisliğinde entegre çözümler sunan mühendislik firması.',
    foundingDate: '2000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aydınlı Mah. Gürpınar Cad. No: 32/5-6',
      addressLocality: 'Tuzla',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-216-491-7671',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: [],
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
    knowsAbout: [
      'Electrical Engineering',
      'Automation Engineering',
      'Mechanical Engineering',
      'Construction Engineering',
      'Industrial Projects',
      'HVAC Systems',
      'PLC Programming',
      'SCADA Systems',
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://erenteknik.com.tr/#localbusiness',
    name: 'Eren Teknik Mühendislik A.Ş.',
    image: 'https://erenteknik.com.tr/images/og-image.jpg',
    url: 'https://erenteknik.com.tr',
    telephone: '+90-216-491-7671',
    email: 'erenteknik@erenteknik.com.tr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aydınlı Mah. Gürpınar Cad. No: 32/5-6',
      addressLocality: 'Tuzla',
      addressRegion: 'İstanbul',
      postalCode: '34953',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.8643,
      longitude: 29.3514,
    },
    priceRange: '$$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '18:00',
    },
  };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://erenteknik.com.tr${serviceUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@id': 'https://erenteknik.com.tr/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
    url: `https://erenteknik.com.tr${serviceUrl}`,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://erenteknik.com.tr${item.url}`,
    })),
  };
}

export function generateWebPageSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://erenteknik.com.tr${url}#webpage`,
    name,
    description,
    url: `https://erenteknik.com.tr${url}`,
    isPartOf: {
      '@id': 'https://erenteknik.com.tr/#website',
    },
    about: {
      '@id': 'https://erenteknik.com.tr/#organization',
    },
    inLanguage: ['tr', 'en'],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://erenteknik.com.tr/#website',
    name: 'Eren Teknik Mühendislik',
    alternateName: 'Eren Teknik Engineering',
    url: 'https://erenteknik.com.tr',
    publisher: {
      '@id': 'https://erenteknik.com.tr/#organization',
    },
    inLanguage: ['tr', 'en'],
  };
}
