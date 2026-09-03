'use client';

import { I18nProvider } from 'fumadocs-ui/contexts/i18n';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';

export function LangProvider({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <I18nProvider {...i18nProvider(translations, lang)}>
      {children}
    </I18nProvider>
  );
}
