import { HtmlLang } from '@/components/html-lang';
import { LangProvider } from '@/components/lang-provider';
import { i18n } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <LangProvider lang={lang}>
      <HtmlLang lang={lang} />
      {children}
    </LangProvider>
  );
}
