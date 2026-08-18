import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextLink } from '@/components/atoms/TextLink';
import { TextureBlock } from '@/components/atoms/TextureBlock';
import { useLanguage } from '@/i18n/LanguageContext';

export function PhilosophySection() {
  const { t } = useLanguage();
  const { philosophy } = t.home;

  return (
    <section className="py-section px-[6vw] bg-section grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 lg:items-center">
      <Reveal className="flex flex-col justify-center gap-5 max-w-[480px] order-2 lg:order-1">
        <Eyebrow>{philosophy.eyebrow}</Eyebrow>
        <SectionTitle size="h2-md">
          {philosophy.titleLine1}
          <br />
          {philosophy.titleLine2}
        </SectionTitle>
        <p className="text-body-base text-muted m-0">{philosophy.body}</p>
        <TextLink to="/approach">{philosophy.cta}</TextLink>
      </Reveal>

      <Reveal delayMs={120} className="order-1 lg:order-2">
        <TextureBlock label={philosophy.placeholderLabel} aspect="4/5" texture="a-fine" />
      </Reveal>
    </section>
  );
}
