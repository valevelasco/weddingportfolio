import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextLink } from '@/components/atoms/TextLink';
import { TextureBlock } from '@/components/atoms/TextureBlock';
import { useLanguage } from '@/i18n/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  const { about } = t.home;

  return (
    <section
      id="about"
      className="py-section px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 lg:items-center"
    >
      <Reveal>
        <TextureBlock label={about.placeholderLabel} aspect="3/4" texture="b" />
      </Reveal>

      <Reveal delayMs={120} className="flex flex-col justify-center gap-5 max-w-[520px]">
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <SectionTitle size="h2-lg">
          {about.titleLine1}
          <br />
          {about.titleLine2}
        </SectionTitle>
        <p className="text-body-base text-muted m-0">{about.body}</p>
        <TextLink to="/about">{about.cta}</TextLink>
      </Reveal>
    </section>
  );
}
