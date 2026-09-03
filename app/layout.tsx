import './global.css';
import { Inter } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
