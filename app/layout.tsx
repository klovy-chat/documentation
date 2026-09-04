import './global.css';
import { Funnel_Display } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';

const funnelDisplay = Funnel_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-funnel-display',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`${funnelDisplay.variable} ${funnelDisplay.className}`}
      lang="en"
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
