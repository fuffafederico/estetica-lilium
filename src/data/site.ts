/**
 * Contenuti e recapiti del sito, centralizzati.
 * Per aggiornare telefono, email, promozioni o testi basta modificare questo file.
 */

const phoneDisplay = '327 3155827';
const addressStreet = 'Viale XIII Luglio, 97F';
// Spazio non separabile: "Fabriano (AN)" non va mai a capo a metà
const addressCity = 'Fabriano\u00a0(AN)';

export const site = {
  name: 'Estetica Lilium',
  url: 'https://www.esteticalilium.it',
  description:
    'Estetica Lilium a Fabriano: centro estetico con trattamenti viso e corpo, massaggi, percorsi SPA, manicure e pedicure, epilazione, ciglia e sopracciglia.',
  phone: { display: phoneDisplay, href: 'tel:+393273155827', e164: '+393273155827' },
  email: 'esteticalilium@libero.it',
  address: {
    street: addressStreet,
    city: addressCity,
    full: `${addressStreet}\u00a0– ${addressCity}`,
    locality: 'Fabriano',
    region: 'AN',
    postalCode: '60044',
    country: 'IT',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(`Estetica Lilium, ${addressStreet}, Fabriano AN`),
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/estetica_lilium/' },
    { label: 'Facebook', href: 'https://www.facebook.com/p/Estetica-Lilium-100063652774457/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: 'https://www.iubenda.com/privacy-policy/96261708' },
    { label: 'Cookie Policy', href: 'https://www.iubenda.com/privacy-policy/96261708/cookie-policy' },
  ],
} as const;

export const nav = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Trattamenti', href: '#trattamenti' },
  { label: 'Promozioni', href: '#promozioni' },
  { label: 'Contatti', href: '#contatti' },
] as const;

export const services = [
  {
    slug: 'manicure-pedicure',
    title: 'Manicure e Pedicure',
    text: 'Trattamenti per la cura e la bellezza di mani e piedi, con applicazione di smalto semipermanente.',
    icon: 'nail',
    tone: 'blush',
  },
  {
    slug: 'epilazione',
    title: 'Epilazione',
    text: 'Rimozione dei peli superflui sia con la cera sia con il laser.',
    icon: 'drop',
    tone: 'sage',
  },
  {
    slug: 'ciglia-sopracciglia',
    title: 'Ciglia e Sopracciglia',
    text: 'Laminazione ciglia e sopracciglia.',
    icon: 'lash',
    tone: 'nude',
  },
] as const;

export const treatments = [
  {
    slug: 'viso-corpo',
    title: 'Viso e Corpo',
    text: 'Trattamenti personalizzati e mirati alla cura di ogni inestetismo, nel pieno rispetto della pelle, con l’utilizzo di cosmetici, oli essenziali e macchinari.',
    tags: ['Cosmetici', 'Oli essenziali', 'Macchinari'],
    icon: 'jar',
  },
  {
    slug: 'massaggi',
    title: 'Massaggi',
    text: 'Massaggi rilassanti, linfodrenanti e decontratturanti, sia manuali sia con il supporto dei macchinari.',
    tags: ['Rilassanti', 'Linfodrenanti', 'Decontratturanti'],
    icon: 'stones',
  },
  {
    slug: 'benessere-relax',
    title: 'Benessere e relax',
    text: 'Lettino Acqua SPA: una pausa rilassante per spezzare la routine quotidiana e donare al corpo e alla mente una meravigliosa sensazione di benessere, avvolti da una nuvola di vapore.',
    tags: ['Lettino Acqua SPA'],
    icon: 'steam',
  },
  {
    slug: 'trattamenti-spa',
    title: 'Trattamenti SPA',
    text: 'Per regalare emozioni al corpo e ai sensi, avvolti dai colori della cromoterapia e dagli oli essenziali dell’aromaterapia. Sarà un percorso sensoriale che ridonerà equilibrio psicofisico, grazie al mix di colori, aromi, suoni e piacevoli tocchi caldi che avvolgono il corpo durante tutto il trattamento, regalando emozioni positive.',
    tags: ['Cromoterapia', 'Aromaterapia'],
    icon: 'lily',
  },
] as const;

export type Promotion = { title: string; text: string; validUntil?: string };

/** Aggiungere qui le promozioni attive. Se l'elenco è vuoto, il sito mostra il messaggio predefinito. */
export const promotions: Promotion[] = [];
