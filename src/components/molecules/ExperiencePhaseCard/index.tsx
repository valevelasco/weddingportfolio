import type { ExperiencePhase } from '@/i18n/types';

interface ExperiencePhaseCardProps {
  phase: ExperiencePhase;
}

export function ExperiencePhaseCard({ phase }: ExperiencePhaseCardProps) {
  return (
    <div className="pt-6 border-t border-border">
      <p className="text-eyebrow text-muted m-0 mb-4">{phase.name}</p>
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
        {phase.items.map((item) => (
          <li key={item} className="text-body-base text-ink">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
