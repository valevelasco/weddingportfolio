import { Reveal } from '@/components/atoms/Reveal';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { ExperiencePhaseCard } from '@/components/molecules/ExperiencePhaseCard';
import { useLanguage } from '@/i18n/LanguageContext';

export function ExperienceSection() {
  const { t } = useLanguage();
  const { experience } = t.home;

  return (
    <section id="experience" className="py-section px-[6vw]">
      <Reveal className="text-center max-w-[640px] mx-auto mb-[72px]">
        <SectionTitle size="h2-xl" className="mb-[18px]">
          {experience.title}
        </SectionTitle>
        <p className="text-body-base text-muted m-0">{experience.subtitle}</p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {experience.phases.map((phase, i) => (
          <Reveal key={phase.name} delayMs={i * 120}>
            <ExperiencePhaseCard phase={phase} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
