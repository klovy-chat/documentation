import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { SiteFooter } from '@/components/site-footer';

export default async function Layout({
  params,
  children,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <HomeLayout {...baseOptions(lang)} className="flex min-h-screen flex-col">
      {children}
      <SiteFooter />
    </HomeLayout>
  );
}
