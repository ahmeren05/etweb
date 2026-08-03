export interface ReferenceItem {
  name: string;
  imgUrl: string;
  sectorTr: string;
  sectorEn: string;
  color: string;
  tags: string[];
}

export const allReferences: ReferenceItem[] = [
  // Priority list
  { name: 'DEVA Holding', imgUrl: '/references/1-deva.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#003050', tags: ['deva', 'ilaç', 'holding', 'pharmaceuticals'] },
  { name: 'Novartis', imgUrl: '/references/29-novartis.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#006090', tags: ['novartis', 'ilaç', 'pharmaceuticals'] },
  { name: 'Sanofi', imgUrl: '/references/25-sanofi.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#8030b0', tags: ['sanofi', 'ilaç', 'sağlık'] },
  { name: 'Sandoz', imgUrl: '/references/21-sandoz.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#003070', tags: ['sandoz', 'ilaç', 'pharmaceuticals'] },
  { name: 'Siemens', imgUrl: '/references/9-siemens.png', sectorTr: 'Elektrik & Otomasyon', sectorEn: 'Power & Automation', color: '#009090', tags: ['siemens', 'elektrik', 'otomasyon', 'teknoloji'] },
  { name: 'Danone', imgUrl: '/references/30-danone.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#2040a0', tags: ['danone', 'gıda', 'içecek', 'süt'] },
  { name: 'Godiva', imgUrl: '/references/31-godiva.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#501000', tags: ['godiva', 'çikolata', 'gıda'] },
  { name: 'Fareva', imgUrl: '/references/27-fareva.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#600020', tags: ['fareva', 'ilaç', 'üretim'] },
  { name: 'Recordati İlaç', imgUrl: '/references/24-recordati.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#d01010', tags: ['recordati', 'ilaç'] },
  { name: 'MS Pharma', imgUrl: '/references/18-mspharma.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#507070', tags: ['ms', 'pharma', 'mspharma', 'ilaç'] },
  { name: 'VSY Biotechnology', imgUrl: '/references/7-vsy.png', sectorTr: 'Biyoteknoloji', sectorEn: 'Biotechnology', color: '#001040', tags: ['vsy', 'biotechnology', 'biyoteknoloji'] },
  { name: 'Mustafa Nevzat İlaç', imgUrl: '/references/22-mustafa nevzat.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#100080', tags: ['mustafa', 'nevzat', 'mn', 'ilaç', 'amgen'] },
  { name: 'Atabay Kimya', imgUrl: '/references/4-atabay.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#0050a0', tags: ['atabay', 'kimya', 'ilaç'] },
  { name: 'Mado', imgUrl: '/references/10-mado.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#002060', tags: ['mado', 'dondurma', 'cafe', 'gıda'] },
  { name: 'Polifarma İlaç', imgUrl: '/references/20-polifarma.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#001060', tags: ['polifarma', 'ilaç', 'sağlık'] },
  { name: 'Farmatek İlaç', imgUrl: '/references/5-farmatek.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#20b070', tags: ['farmatek', 'ilaç', 'sağlık'] },
  // Fixed randomized rest
  { name: 'Embil İlaç', imgUrl: '/references/17-embil.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#0090d0', tags: ['embil', 'ilaç', 'sağlık'] },
  { name: 'Töpektaş Et Entegre', imgUrl: '/references/14-topek.png', sectorTr: 'Et Entegre', sectorEn: 'Meat Integrated', color: '#4080c0', tags: ['topek', 'töpektaş', 'et', 'entegre', 'gıda'] },
  { name: 'StemBio', imgUrl: '/references/26-stembio.png', sectorTr: 'Biyoteknoloji', sectorEn: 'Biotechnology', color: '#602080', tags: ['stembio', 'kök', 'hücre', 'biyoteknoloji'] },
  { name: 'Biem İlaç', imgUrl: '/references/6-biem.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#004090', tags: ['biem', 'ilaç', 'sanayi'] },
  { name: 'Tuzla Belediyesi', imgUrl: '/references/12-tuzla belediyesi.png', sectorTr: 'Kamu / Belediye', sectorEn: 'Public / Municipality', color: '#50c0f0', tags: ['tuzla', 'belediye', 'kamu', 'municipality'] },
  { name: 'Aslanoba Gıda', imgUrl: '/references/16-aslonoba.png', sectorTr: 'Gıda & İçecek', sectorEn: 'Food & Beverage', color: '#0090b0', tags: ['aslonoba', 'aslanoba', 'gıda', 'capital'] },
  { name: 'Aroma İlaç Sanayi', imgUrl: '/references/2-aroma.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#404040', tags: ['aroma', 'ilaç', 'sanayi', 'pharmaceuticals'] },
  { name: 'Tazedirekt', imgUrl: '/references/15-tazedirekt.png', sectorTr: 'Gıda & Dağıtım', sectorEn: 'Food & Distribution', color: '#107030', tags: ['taze', 'direkt', 'tazedirekt', 'gıda'] },
  { name: 'Moltek', imgUrl: '/references/28-moltek.png', sectorTr: 'Sağlık Sanayi', sectorEn: 'Healthcare', color: '#c01010', tags: ['moltek', 'sağlık', 'ilaç'] },
  { name: 'Tümekip İlaç', imgUrl: '/references/23-tümekip.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#0070c0', tags: ['tümekip', 'tumekip', 'ilaç', 'sağlık'] },
  { name: 'MGT Filtre', imgUrl: '/references/32-mgt.png', sectorTr: 'İklimlendirme & Filtre', sectorEn: 'HVAC & Filtration', color: '#707060', tags: ['mgt', 'filtre', 'hvac', 'iklimlendirme'] },
  { name: 'Askapak', imgUrl: '/references/13-askapak.png', sectorTr: 'Ambalaj Sanayi', sectorEn: 'Packaging', color: '#4070f0', tags: ['askapak', 'as', 'kapak', 'ambalaj'] },
  { name: 'Alba Farma', imgUrl: '/references/3-albafarma.png', sectorTr: 'İlaç Sanayi', sectorEn: 'Pharmaceuticals', color: '#103080', tags: ['alba', 'farma', 'albafarma', 'ilaç'] },
  { name: 'Gaziantep Üniv.\nProton Hızlandırma', imgUrl: '/references/11- gaziantep üniversitesi proton hızlandırma.png', sectorTr: 'Kamu / Eğitim', sectorEn: 'Public / Education', color: '#103060', tags: ['gaziantep', 'üniversitesi', 'proton', 'hızlandırma', 'kamu', 'eğitim'] },
  { name: 'Türkiye Jokey Kulübü', imgUrl: '/references/8-jtk.png', sectorTr: 'Kamu / Kurum', sectorEn: 'Public Institution', color: '#e01020', tags: ['tjk', 'jtk', 'türkiye', 'jokey', 'kulübü', 'kamu'] },
  { name: 'Biyoteknik Kimya', imgUrl: '/references/19-biyoteknik.png', sectorTr: 'Biyoteknoloji', sectorEn: 'Biotechnology', color: '#1070a0', tags: ['biyoteknik', 'kimya', 'biyoteknoloji'] }
];
