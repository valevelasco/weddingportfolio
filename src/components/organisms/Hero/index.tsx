import { Button } from '@/components/atoms/Button';
import { usePingPongVideo } from '@/hooks/usePingPongVideo';

export function Hero() {
  const { videoRef, hasError, reducedMotion } = usePingPongVideo();
  const showVideo = !hasError && !reducedMotion;

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[560px] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0 texture-a" aria-hidden="true" />

      {showVideo && (
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="/image-1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/transition.mp4" type="video/mp4" />
        </video>
      )}

      {(hasError || reducedMotion) && (
        <img
          src="/image-1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          // @ts-expect-error React 18's DOM typings don't include fetchpriority yet; lowercase is the correct HTML attribute name.
          fetchpriority="high"
        />
      )}

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,39,37,0)_40%,rgba(41,39,37,0.55)_100%)]"
        aria-hidden="true"
      />

      <div className="absolute top-24 left-[22px] z-[1] text-label text-ink bg-cream/75 px-3 py-1.5">
        HERO PHOTOGRAPH &mdash; FULL BLEED, HORIZONTAL, EDITORIAL COUPLE MOMENT
      </div>

      <div className="relative z-[2] w-full px-[6vw] pb-[8vw] flex flex-col gap-6 text-cream">
        <p className="text-sm tracking-eyebrow m-0">WEDDING PHOTOGRAPHER BASED IN SWITZERLAND</p>
        <h1 className="font-serif font-medium text-hero m-0 max-w-hero">
          Timeless photographs
          <br />
          for modern love stories.
        </h1>
        <div className="flex gap-[18px] flex-wrap mt-3">
          <Button as="a" href="#portfolio" variant="solid-light">
            VIEW PORTFOLIO
          </Button>
          <Button as="a" href="#contact" variant="outline-light">
            GET IN TOUCH
          </Button>
        </div>
      </div>

      <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 z-[2] w-px h-9 bg-cream/60" />
    </section>
  );
}
