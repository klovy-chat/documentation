import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'pl'],
  hideLocale: 'default-locale',
  parser: 'dot',
  fallbackLanguage: 'en',
});

export type Locale = (typeof i18n)['languages'][number];
