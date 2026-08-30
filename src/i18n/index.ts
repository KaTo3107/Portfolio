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

export function updateTexts(locale: Locale) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && key in messages[locale]) {
      el.textContent = messages[locale][key as keyof typeof messages.de];
    }
  });
}