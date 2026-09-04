import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { getHomeCopy } from '@/lib/home-copy';

export async function generateMetadata({
  params,
}: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params;
  const copy = getHomeCopy(lang);

  return {
    title: copy.title,
    description: copy.description,
  };
}

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const copy = getHomeCopy(lang);
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-fd-border px-4 py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#7a5af52e,transparent_55%)]"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-fd-muted-foreground">
            {copy.lead}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`${prefix}/docs/developers/local-setup`}
              className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              {copy.ctaLocal}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`${prefix}/docs/api`}
              className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-background px-5 py-2.5 text-sm font-medium hover:bg-fd-accent"
            >
              API
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-16 sm:grid-cols-3">
        {copy.sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={`${prefix}${section.href}`}
              className="group rounded-2xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/40 hover:bg-fd-accent"
            >
              <Icon className="mb-4 size-8 text-fd-primary" />
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="mt-2 text-sm text-fd-muted-foreground">
                {section.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fd-primary">
                {copy.open}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
