// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.kato3107.de',
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false
    }
  }
});
