export interface ReferenceItem {
  name: string;
  imgUrl: string;
  sectorTr: string;
  sectorEn: string;
  color: string;
  tags: string[];
}

export const allReferences: ReferenceItem[] = [
  { name: 'DEVA Holding', imgUrl: '/references/1-deva.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#E53935', tags: ['deva', 'ilaç', 'holding', 'pharmaceuticals'] },
  { name: 'Aroma Meyve Suları', imgUrl: '/references/2-aroma.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#00ACC1', tags: ['aroma', 'meyve', 'suyu', 'gıda', 'içecek', 'food', 'beverage'] },
  { name: 'Alba Farma', imgUrl: '/references/3-albafarma.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#1565C0', tags: ['alba', 'farma', 'albafarma', 'ilaç'] },
  { name: 'Atabay Kimya', imgUrl: '/references/4-atabay.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#E64A19', tags: ['atabay', 'kimya', 'ilaç'] },
  { name: 'Farmatek İlaç', imgUrl: '/references/5-farmatek.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#FB8C00', tags: ['farmatek', 'ilaç', 'sağlık'] },
  { name: 'Biem İlaç', imgUrl: '/references/6-biem.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#43A047', tags: ['biem', 'ilaç', 'sanayi'] },
  { name: 'VSY Biotechnology', imgUrl: '/references/7-vsy.png', sectorTr: 'Biyoteknoloji', sectorEn: 'Biotechnology', color: '#E11D48', tags: ['vsy', 'biotechnology', 'biyoteknoloji'] },
  { name: 'Türkiye Jokey Kulübü', imgUrl: '/references/8-jtk.png', sectorTr: 'Kamu / Kurum', sectorEn: 'Public Institution', color: '#3B82F6', tags: ['tjk', 'jtk', 'türkiye', 'jokey', 'kulübü', 'kamu'] },
  { name: 'Siemens', imgUrl: '/references/9-siemens.png', sectorTr: 'Elektrik & Otomasyon', sectorEn: 'Power & Automation', color: '#06B6D4', tags: ['siemens', 'elektrik', 'otomasyon', 'teknoloji'] },
  { name: 'Mado', imgUrl: '/references/10-mado.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#6366F1', tags: ['mado', 'dondurma', 'cafe', 'gıda'] },
  { name: 'Gaziantep Üniv. - Proton Hızlandırma', imgUrl: '/references/11- gaziantep üniversitesi proton hızlandırma.png', sectorTr: 'Kamu / Eğitim', sectorEn: 'Public / Education', color: '#10B981', tags: ['gaziantep', 'üniversitesi', 'proton', 'hızlandırma', 'kamu', 'eğitim'] },
  { name: 'Tuzla Belediyesi', imgUrl: '/references/12-tuzla belediyesi.png', sectorTr: 'Kamu / Belediye', sectorEn: 'Public / Municipality', color: '#0288D1', tags: ['tuzla', 'belediye', 'kamu', 'municipality'] },
  { name: 'Askapak', imgUrl: '/references/13-askapak.png', sectorTr: 'Ambalaj Sanayi', sectorEn: 'Packaging', color: '#C0CA33', tags: ['askapak', 'as', 'kapak', 'ambalaj'] },
  { name: 'Töpektaş Et Entegre', imgUrl: '/references/14-topek.png', sectorTr: 'Et Entegre', sectorEn: 'Meat Integrated', color: '#546E7A', tags: ['topek', 'töpektaş', 'et', 'entegre', 'gıda'] },
  { name: 'Tazedirekt', imgUrl: '/references/15-tazedirekt.png', sectorTr: 'Gıda & Dağıtım', sectorEn: 'Food & Distribution', color: '#E53935', tags: ['taze', 'direkt', 'tazedirekt', 'gıda'] },
  { name: 'Aslanoba Gıda', imgUrl: '/references/16-aslonoba.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#00897B', tags: ['aslonoba', 'aslanoba', 'gıda', 'capital'] },
  { name: 'Embil İlaç', imgUrl: '/references/17-embil.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#D32F2F', tags: ['embil', 'ilaç', 'sağlık'] },
  { name: 'MS Pharma', imgUrl: '/references/18-mspharma.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#3949AB', tags: ['ms', 'pharma', 'mspharma', 'ilaç'] },
  { name: 'Biyoteknik Kimya', imgUrl: '/references/19-biyoteknik.png', sectorTr: 'Biyoteknoloji', sectorEn: 'Biotechnology', color: '#43A047', tags: ['biyoteknik', 'kimya', 'biyoteknoloji'] },
  { name: 'Polifarma İlaç', imgUrl: '/references/20-polifarma.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#009688', tags: ['polifarma', 'ilaç', 'sağlık'] },
  { name: 'Sandoz', imgUrl: '/references/21-sandoz.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#1E88E5', tags: ['sandoz', 'ilaç', 'pharmaceuticals'] },
  { name: 'Mustafa Nevzat İlaç', imgUrl: '/references/22-mustafa nevzat.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#0EA5E9', tags: ['mustafa', 'nevzat', 'mn', 'ilaç', 'amgen'] },
  { name: 'Tümekip İlaç', imgUrl: '/references/23-tümekip.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#F59E0B', tags: ['tümekip', 'tumekip', 'ilaç', 'sağlık'] },
  { name: 'Recordati İlaç', imgUrl: '/references/24-recordati.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#14B8A6', tags: ['recordati', 'ilaç'] },
  { name: 'Sanofi', imgUrl: '/references/25-sanofi.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#64748B', tags: ['sanofi', 'ilaç', 'sağlık'] },
  { name: 'StemBio', imgUrl: '/references/26-stembio.png', sectorTr: 'Biyoteknoloji', sectorEn: 'Biotechnology', color: '#4CAF50', tags: ['stembio', 'kök', 'hücre', 'biyoteknoloji'] },
  { name: 'Fareva', imgUrl: '/references/27-fareva.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#673AB7', tags: ['fareva', 'ilaç', 'üretim'] },
  { name: 'Moltek', imgUrl: '/references/28-moltek.png', sectorTr: 'Sağlık Sanayi', sectorEn: 'Healthcare', color: '#00BCD4', tags: ['moltek', 'sağlık', 'ilaç'] },
  { name: 'Novartis', imgUrl: '/references/29-novartis.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#F44336', tags: ['novartis', 'ilaç', 'pharmaceuticals'] },
  { name: 'Danone', imgUrl: '/references/30-danone.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#0277BD', tags: ['danone', 'gıda', 'içecek', 'süt'] },
  { name: 'Godiva', imgUrl: '/references/31-godiva.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#D4AF37', tags: ['godiva', 'çikolata', 'gıda'] }
];
