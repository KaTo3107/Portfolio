// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.kato3107.de',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});