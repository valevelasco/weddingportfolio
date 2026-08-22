import { useEffect, useState } from 'react';
import { sanityClient, isSanityConfigured } from '@/lib/sanity';
import { storyProjection, type SanityStory } from '@/types/story';

interface UseStoriesResult {
  stories: SanityStory[];
  loading: boolean;
  error: boolean;
}

/** All wedding stories, newest first. Empty/error states are silent (no Sanity project configured yet is a valid state, not a crash). */
export function useStories(): UseStoriesResult {
  const [stories, setStories] = useState<SanityStory[]>([]);
  const [loading, setLoading] = useState(isSanityConfigured);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!sanityClient) return;
    let cancelled = false;

    sanityClient
      .fetch<SanityStory[]>(`*[_type == "story"] | order(_createdAt desc) ${storyProjection}`)
      .then((result) => {
        if (!cancelled) setStories(result);
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
  }, []);

  return { stories, loading, error };
}
