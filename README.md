# Estetica Lilium — sito web

Restyling completo del sito di Estetica Lilium (Fabriano), costruito con **Astro** e pubblicabile come sito statico su qualsiasi hosting.

## Comandi

```bash
npm install        # installa le dipendenze
npm run dev        # sviluppo locale su http://localhost:4321
npm run build      # genera il sito statico nella cartella dist/
npm run preview    # prova locale della build di produzione
npm run check      # controllo TypeScript/Astro
```

Richiede Node.js 22.12 o superiore.

## Struttura

```
public/            favicon, robots.txt, font self-hosted (woff2), immagine Open Graph
src/assets/images/ fotografie (ritagli già pronti) e logo; l'originale è in originale/
src/components/    Header, Footer, Button, Icon, SectionHeading, ServiceCard, TreatmentCard
src/components/sections/  Hero, Intro, Services, Treatments, Experience, Promotions, Contact
src/data/site.ts   recapiti, testi di servizi e trattamenti, promozioni, link social/legali
src/layouts/       BaseLayout (SEO, Open Graph, dati strutturati)
src/styles/        tokens.css (palette, tipografia, forme) e global.css
docs/              copia del vecchio index.html, per riferimento
scripts/           prepare-photos.mjs (ritagli delle foto) e make-og.mjs (immagine social)
```

## Identità visiva

Direzione "Beauty Boutique": palette cosmetica (cipria, crema, malva, cacao, salvia), forme morbide
(foto ad arco, schede e pulsanti arrotondati, illustrazioni a linea), titoli in DM Serif Display e testi in DM Sans.
Tutti i colori e le misure sono variabili in `src/styles/tokens.css`.

## Aggiornare i contenuti

- **Recapiti, testi di servizi/trattamenti, social**: modificare `src/data/site.ts`.
- **Promozioni**: aggiungere elementi all'array `promotions` in `src/data/site.ts`
  (`{ title, text, validUntil? }`). Con l'array vuoto il sito mostra
  «Al momento non ci sono promozioni attive.»
- Dopo ogni modifica: `npm run build` e ricaricare il contenuto di `dist/`.

## Pubblicazione

1. `npm run build`
2. Caricare **il contenuto** della cartella `dist/` nella cartella pubblica dell'hosting (es. via FTP), sostituendo i vecchi file.
   Il sito è composto solo da file statici: nessun Node.js è richiesto sul server.
3. Il dominio canonico configurato è `https://www.esteticalilium.it` (modificabile in `astro.config.mjs`, chiave `site`).

### Redirect del vecchio URL

Il vecchio sito aveva una sola pagina, `index.html`. Il nuovo sito risponde su `/`.
Per evitare duplicati, su hosting Apache si può aggiungere al `.htaccess` esistente:

```apache
Redirect 301 /index.html /
```

Le vecchie ancore (`#servizi`, `#trattamenti`, `#promozioni`, `#contatti`) sono state mantenute.

## Note

- Il sito non carica risorse di terze parti (font self-hosted, nessuna mappa incorporata, nessun tracciamento),
  quindi non imposta cookie. Il vecchio script di consenso Iubenda non è stato riportato;
  restano i link a Privacy Policy e Cookie Policy Iubenda già in uso.
  Se in futuro si aggiungono analytics o mappe incorporate, va reintrodotto un banner di consenso.
- Font: DM Serif Display e DM Sans (licenza SIL OFL, file in `public/fonts/`).
- Fotografie: oggi è disponibile una sola fotografia reale (trattamento viso), usata solo nella hero
  (`scripts/prepare-photos.mjs`). Le altre sezioni usano illustrazioni a linea. Per aggiungere foto proprie del
  centro basta inserirle in `src/assets/images/` e usare il componente `Picture` di `astro:assets`, come nella hero.
