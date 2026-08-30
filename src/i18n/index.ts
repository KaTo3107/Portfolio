import { de } from './de';
import { en } from './en';

export const messages = {
  de,
  en
} as const;

export type Locale = keyof typeof messages;
export type MessageKey = keyof (typeof messages)[Locale];

let currentLocale: Locale = 'de';

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function t(key: MessageKey) {
  return messages[currentLocale][key];
}