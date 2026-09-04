import { Boxes, Code2, Webhook } from 'lucide-react';
import type { Locale } from './i18n';

const copy = {
  pl: {
    title: 'Klovy Chat Docs',
    description:
      'Jak złożyć Klovy Chat lokalnie, jakie endpointy woła klient i jak działa czat w kodzie.',
    heading: 'Docs Klovy Chat',
    lead: 'Frontend, backend i desktop siedzą w osobnych repo. Tu jest jak to poskładać, jakie requesty puszcza klient i na czym stoi czat — bez zgadywania z Discorda.',
    ctaLocal: 'Uruchom lokalnie',
    open: 'Otwórz',
    sections: [
      {
        href: '/docs/developers',
        title: 'Stack',
        description: 'Trzy repo, mapa katalogów, env i jak to odpalić u siebie.',
        icon: Code2,
      },
      {
        href: '/docs/api',
        title: 'API',
        description: 'REST i WebSocket — te same ścieżki co w src/api na frontendzie.',
        icon: Webhook,
      },
      {
        href: '/docs/product',
        title: 'Produkt',
        description:
          'Konto na username, kanał to nie serwer Discord, DM dopiero po znajomych.',
        icon: Boxes,
      },
    ],
  },
  en: {
    title: 'Klovy Chat Docs',
    description:
      'How to run Klovy Chat locally, which endpoints the client calls, and how chat works in code.',
    heading: 'Klovy Chat Docs',
    lead: 'Frontend, backend, and desktop live in separate repos. Here is how to wire them up, which requests the client sends, and how chat is built — without guessing from Discord.',
    ctaLocal: 'Run locally',
    open: 'Open',
    sections: [
      {
        href: '/docs/developers',
        title: 'Stack',
        description: 'Three repos, directory map, env vars, and local setup.',
        icon: Code2,
      },
      {
        href: '/docs/api',
        title: 'API',
        description: 'REST and WebSocket — same paths as src/api on the frontend.',
        icon: Webhook,
      },
      {
        href: '/docs/product',
        title: 'Product',
        description: 'Username accounts, channels are not Discord servers, DMs need friends first.',
        icon: Boxes,
      },
    ],
  },
} as const;

export function getHomeCopy(lang: string) {
  return copy[lang as Locale] ?? copy.en;
}
