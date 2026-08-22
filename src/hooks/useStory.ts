import { useEffect, useState } from 'react';
import { sanityClient, isSanityConfigured } from '@/lib/sanity';
import { storyProjection, type SanityStory } from '@/types/story';

interface UseStoryResult {
  story: SanityStory | null;
  loading: boolean;
  error: boolean;
}

/** A single wedding story by slug. */
export function useStory(slug: string | undefined): UseStoryResult {
  const [story, setStory] = useState<SanityStory | null>(null);
  const [loading, setLoading] = useState(isSanityConfigured);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!sanityClient || !slug) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch<SanityStory | null>(
        `*[_type == "story" && slug.current == $slug][0] ${storyProjection}`,
        { slug },
      )
      .then((result) => {
        if (!cancelled) setStory(result);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { story, loading, error };
}
