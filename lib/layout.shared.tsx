import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/logo';
import { appName, gitConfig } from './shared';
import { i18n } from './i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    pl: {
      displayName: 'Polski',
    },
    en: {
      displayName: 'English',
    },
  });

export function baseOptions(_locale?: string): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Logo />
          <span>{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}`,
  };
}
