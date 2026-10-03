import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// In produzione sul dominio del centro non serve configurare nulla.
// Per una demo su un altro indirizzo (es. GitHub Pages) si impostano SITE e BASE.
export default defineConfig({
  site: process.env.SITE ?? 'https://www.esteticalilium.it',
  base: process.env.BASE ?? '/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
