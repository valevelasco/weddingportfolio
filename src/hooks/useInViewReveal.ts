import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseInViewRevealResult<T> {
  ref: RefObject<T>;
  inView: boolean;
}

/**
 * Reports once whether an element has entered the viewport, for
 * fade-in + translateY reveals. Reduced-motion users get inView=true
 * immediately so nothing depends on the observer to become visible.
 */
export function useInViewReveal<T extends HTMLElement>(
  threshold = 0.15,
): UseInViewRevealResult<T> {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
