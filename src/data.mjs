export const FORUM_SOURCE = 'https://eef.md/ro/forumul-ong-2024-societatea-civila-pentru-integrare-europeana/335';
export const COUNCIL_SOURCE = 'https://crdc.md/en/news/forumul-ong-2024-societatea-civila-pentru-integrare-europeana';

export const TIMELINE_DATA = [
  { year: '1997', title: 'Primul Forum al ONG-urilor', desc: 'Data primului Forum din schița inițială; documentul de constituire nu a fost regăsit.' },
  { year: '2002', title: 'Constituirea CN ONG', desc: 'Anul indicat în schiță; data, forma și actele constituirii sunt de verificat.' },
  { year: '2010', title: 'Consiliul Național de Participare', desc: 'Legătura instituțională și contribuția CN ONG sunt de documentat.' },
  { year: '2016', title: 'Mecanismul 2%', desc: 'Data reperului și contribuția CN ONG sunt de verificat în surse primare.' },
  { year: '2020', title: 'Legea 86/2020', desc: 'Reper indicat în schiță; contribuția CN ONG și istoricul advocacy-ului sunt de documentat.' },
];

export const ARCHIVE_DOCS = [
  { id: 7, title: 'Forumul ONG 2024: anunțul organizatorilor', category: 'Evenimente', year: '2024', url: FORUM_SOURCE },
  { id: 8, title: 'Forumul ONG 2024: relatarea CRDC și alegerea Consiliului', category: 'Evenimente', year: '2024', url: COUNCIL_SOURCE },
  { id: 1, title: 'Rezoluția Forumului ONG 2024', category: 'Rezoluții', year: '2024' },
  { id: 2, title: 'Strategia de Dezvoltare a Societății Civile 2018-2020', category: 'Strategii', year: '2018' },
  { id: 3, title: 'Apel comun privind Legea participării publice', category: 'Advocacy', year: '2026' },
  { id: 4, title: 'Legea 86/2020 cu privire la organizațiile necomerciale', category: 'Legislație', year: '2020' },
  { id: 5, title: 'Raport de Activitate CN ONG - Mandatul XI', category: 'Rapoarte', year: '2023' },
  { id: 6, title: 'Ghid de implementare a Mecanismului 2%', category: 'Ghiduri', year: '2017' },
];

const normalize = (value) => value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('ro').trim();
export function matchesDocument(doc, search) {
  return [doc.title, doc.category, doc.year].some(value => normalize(value).includes(normalize(search)));
}
