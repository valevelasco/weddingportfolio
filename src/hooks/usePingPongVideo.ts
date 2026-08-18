import { useEffect, useRef, useState, type RefObject } from 'react';

interface UsePingPongVideoResult {
  videoRef: RefObject<HTMLVideoElement>;
  hasError: boolean;
  reducedMotion: boolean;
}

/**
 * Plays a video forward, then on end reverses playback by manually stepping
 * currentTime backward via requestAnimationFrame (never a negative
 * playbackRate, which browsers don't reliably support), producing a
 * seamless ping-pong loop. Falls back to a static poster image on error or
 * when the user prefers reduced motion.
 */
export function usePingPongVideo(): UsePingPongVideoResult {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [reducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    if (video.error) {
      setHasError(true);
      return;
    }

    let rafId = 0;
    const frameStep = 1 / 30;

    const stepReverse = () => {
      const next = video.currentTime - frameStep;
      if (next <= 0) {
        video.currentTime = 0;
        void video.play();
        return;
      }
      video.currentTime = next;
      rafId = requestAnimationFrame(stepReverse);
    };

    const handleEnded = () => {
      video.pause();
      rafId = requestAnimationFrame(stepReverse);
    };

    const handleError = () => setHasError(true);
    const handlePlayable = () => window.clearTimeout(loadTimeout);

    // A missing/unsupported source doesn't always dispatch a bubbling
    // `error` event on the video element in time (or at all), so this
    // timeout is the reliable backstop that guarantees a fallback.
    const loadTimeout = window.setTimeout(() => {
      if (video.readyState < 2) setHasError(true);
    }, 4000);

    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handlePlayable);
    video.play().catch(() => setHasError(true));

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handlePlayable);
      window.clearTimeout(loadTimeout);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return { videoRef, hasError, reducedMotion };
}
