import { Button } from '@/components/atoms/Button';
import { useLanguage } from '@/i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[560px] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0 texture-a" aria-hidden="true" />

      <picture>
        <source media="(max-width: 767px)" srcSet="/images/home/hero/cover-mobile.jpg" />
        <img
          src="/images/home/hero/cover-desktop.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          // @ts-expect-error React 18's DOM typings don't include fetchpriority yet; lowercase is the correct HTML attribute name.
          fetchpriority="high"
        />
      </picture>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,39,37,0.55)_10%,rgba(41,39,37,0)_20%,rgba(41,39,37,0.55)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-[2] w-full px-[6vw] pb-[8vw] flex flex-col gap-6 text-cream">
        <p className="text-sm tracking-eyebrow m-0">{t.hero.eyebrow}</p>
        <h1 className="font-serif font-medium text-hero m-0 max-w-hero">
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
        </h1>
        <div className="flex gap-[18px] flex-wrap mt-3">
          <Button as="a" href="#portfolio" variant="solid-light">
            {t.hero.viewPortfolio}
          </Button>
          <Button as="a" href="#contact" variant="outline-light">
            {t.hero.getInTouch}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 z-[2] w-px h-9 bg-cream/60" />
    </section>
  );
}
