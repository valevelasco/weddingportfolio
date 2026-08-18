import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
}

/**
 * Sets document.title and the meta description on route change. This is a
 * client-side-only SPA (no SSR/prerendering), so it only affects the tab
 * title and same-session navigation — it does not give crawlers/social
 * scrapers per-route <meta> or OG tags, since those are read from the
 * initial HTML response before any JS runs.
 */
export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);
}
