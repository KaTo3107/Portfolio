import { de } from './de';
import { en } from './en';

export const messages = {
  de,
  en
} as const;

export type Locale = keyof typeof messages;

export const defaultLocale: Locale = 'de';
export const locales = Object.keys(messages) as Locale[];

export function getLocale(currentLocale: string | undefined): Locale {
  return currentLocale === 'en' ? 'en' : defaultLocale;
}

export function localizePath(path: string, locale: Locale) {
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

// Removes the trailing slash and locale prefix, e.g. /en/projects/ becomes /projects
export function stripLocale(pathname: string) {
  const path = pathname.replace(/\/$/, '');
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}
