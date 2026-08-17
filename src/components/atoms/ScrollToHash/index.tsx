import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Cross-page hash navigation (e.g. a link to "/#contact" from another
 * route) lands React Router on "/" but doesn't scroll to the section on
 * its own — this fills that gap on every route change.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
