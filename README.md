# Klovy Chat — dokumentacja

Oficjalna dokumentacja komunikatora **Klovy Chat** oparta o [Fumadocs](https://www.fumadocs.dev/) (Next.js + MDX).

- Przewodnik użytkownika
- Dokumentacja deweloperska
- Referencja REST i WebSocket

## Wymagania

- **Node.js** 22+

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000). Treść leży w `content/docs`.

```bash
npm run build
npm run start
```

## Struktura treści

| Folder | Adres | Dla kogo |
| --- | --- | --- |
| `content/docs/przewodnik` | `/docs/przewodnik` | Użytkownicy |
| `content/docs/deweloperzy` | `/docs/deweloperzy` | Kontrybutorzy |
| `content/docs/api` | `/docs/api` | Integracja z oficjalnym API |

Kolekcje MDX: `lib/source.ts`. Nawigacja: `lib/layout.shared.tsx`.

## Ekosystem

| Repo | Rola |
| --- | --- |
| [backend](https://github.com/klovy-chat/backend) | API i WebSocket |
| [frontend](https://github.com/klovy-chat/frontend) | Aplikacja web |
| [website](https://github.com/klovy-chat/website) | Strona produktu |
| [application](https://github.com/klovy-chat/application) | Desktop (Tauri) |

## Licencja

Treść i kod tego serwisu docs podlegają **Klovy License** analogicznie do pozostałych repozytoriów Klovy Chat, o ile nie zaznaczono inaczej. Fumadocs pozostaje na swojej licencji upstream.

© 2026 [Jakub Maksymowicz](https://github.com/Klovy06)
