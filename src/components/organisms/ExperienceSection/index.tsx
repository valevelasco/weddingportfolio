import { Reveal } from '@/components/atoms/Reveal';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { ExperiencePhaseCard } from '@/components/molecules/ExperiencePhaseCard';
import { experiencePhases } from '@/data/content';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-section px-[6vw]">
      <Reveal className="text-center max-w-[640px] mx-auto mb-[72px]">
        <SectionTitle size="h2-xl" className="mb-[18px]">
          The Experience
        </SectionTitle>
        <p className="text-body-base text-muted m-0">
          A calm, thoughtful approach to photographing your wedding.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {experiencePhases.map((phase, i) => (
          <Reveal key={phase.name} delayMs={i * 120}>
            <ExperiencePhaseCard phase={phase} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
