import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { useLanguage } from '@/i18n/LanguageContext';

export function AboutHero() {
  const { t } = useLanguage();
  const { hero } = t.aboutPage;

  return (
    <section className="pt-section px-[6vw] grid grid-cols-1 min-[760px]:grid-cols-2 gap-14 min-[760px]:gap-20 min-[760px]:items-center">
      <Reveal className="flex flex-col justify-center gap-5 max-w-[520px]">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <SectionTitle as="h1" size="h1-about">
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
        </SectionTitle>
        <p className="text-body-base text-muted m-0">{hero.body}</p>
      </Reveal>

      <Reveal delayMs={120}>
        <div className="relative aspect-[3/4] border border-border overflow-hidden">
          <img
            src="/images/about-page/hero/portrait.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
