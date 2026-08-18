import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { useLanguage } from '@/i18n/LanguageContext';

export function AboutStory() {
  const { t } = useLanguage();
  const { story } = t.aboutPage;

  return (
    <section className="py-section px-[6vw] max-w-[720px]">
      <Reveal>
        <Eyebrow className="mb-5">{story.eyebrow}</Eyebrow>
        <p className="font-serif text-[18px] text-ink m-0 mb-6 leading-[1.85]">
          {story.leadParagraph}
        </p>
        <p className="text-body-base text-muted m-0">{story.body}</p>
      </Reveal>
    </section>
  );
}
