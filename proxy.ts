import { NextRequest, NextResponse, type NextFetchEvent } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { docsContentRoute, docsRoute } from '@/lib/shared';
import { i18n } from '@/lib/i18n';

const handleI18n = createI18nMiddleware(i18n);

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.md`,
  `${docsContentRoute}{/*path}/content.md`,
);

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  const suffixResult = rewriteSuffix(request.nextUrl.pathname);
  if (suffixResult) {
    return NextResponse.rewrite(new URL(suffixResult, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const docsResult = rewriteDocs(request.nextUrl.pathname);

    if (docsResult) {
      return NextResponse.rewrite(new URL(docsResult, request.nextUrl), {
        headers: { Vary: 'Accept' },
      });
    }
  }

  return handleI18n(request, event);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|brand|og).*)'],
};
