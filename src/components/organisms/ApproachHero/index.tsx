import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextureBlock } from '@/components/atoms/TextureBlock';
import { useLanguage } from '@/i18n/LanguageContext';

export function ApproachHero() {
  const { t } = useLanguage();
  const { hero } = t.approachPage;

  return (
    <section className="pt-section px-[6vw] grid grid-cols-1 min-[760px]:grid-cols-2 gap-14 min-[760px]:gap-20 min-[760px]:items-center">
      <Reveal className="order-2 min-[760px]:order-1 flex flex-col justify-center gap-5 max-w-[480px]">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <SectionTitle as="h1" size="h1-approach">
          {hero.title}
        </SectionTitle>
        <p className="text-body-base text-muted m-0">{hero.body}</p>
      </Reveal>

      <Reveal delayMs={120} className="order-1 min-[760px]:order-2">
        <TextureBlock label={hero.placeholderLabel} aspect="4/5" texture="a-fine" />
      </Reveal>
    </section>
  );
}
