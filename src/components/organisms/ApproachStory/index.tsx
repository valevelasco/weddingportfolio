import { Reveal } from '@/components/atoms/Reveal';
import { useLanguage } from '@/i18n/LanguageContext';

export function ApproachStory() {
  const { t } = useLanguage();
  const { story } = t.approachPage;

  return (
    <section className="py-section px-[6vw] max-w-[720px]">
      <Reveal>
        <p className="font-serif text-[18px] text-ink m-0 mb-6 leading-[1.85]">
          {story.leadParagraph}
        </p>
        <p className="text-body-base text-muted m-0 mb-5">{story.body1}</p>
        <p className="text-body-base text-muted m-0">{story.body2}</p>
      </Reveal>
    </section>
  );
}
