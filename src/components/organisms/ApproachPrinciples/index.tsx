import { Reveal } from '@/components/atoms/Reveal';
import { approachPrinciples } from '@/data/content';

export function ApproachPrinciples() {
  return (
    <section className="px-[6vw] pb-section grid grid-cols-1 min-[760px]:grid-cols-3 gap-6 min-[760px]:gap-8">
      {approachPrinciples.map((principle, i) => (
        <Reveal key={principle.step} delayMs={i * 100}>
          <p className="text-nav tracking-wide2 text-muted m-0 mb-2.5">
            {principle.step} &mdash; {principle.title}
          </p>
          <p className="text-[15px] leading-[1.7] text-ink m-0">{principle.text}</p>
        </Reveal>
      ))}
    </section>
  );
}
