import type { ExperiencePhase } from '@/i18n/types';

interface ExperiencePhaseCardProps {
  phase: ExperiencePhase;
}

export function ExperiencePhaseCard({ phase }: ExperiencePhaseCardProps) {
  return (
    <div className="pt-6 border-t border-border">
      <p className="text-eyebrow text-muted m-0 mb-4">{phase.name}</p>
      <h3 className="font-serif font-medium text-h3 text-ink m-0 mb-3">{phase.tagline}</h3>
      <p className="text-body-base text-muted m-0 mb-6">{phase.body}</p>
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
