import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'pl',
  languages: ['pl', 'en'],
  hideLocale: 'default-locale',
  parser: 'dot',
  fallbackLanguage: 'pl',
});

export type Locale = (typeof i18n)['languages'][number];
