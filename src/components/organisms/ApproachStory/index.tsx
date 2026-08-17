import { Reveal } from '@/components/atoms/Reveal';

export function ApproachStory() {
  return (
    <section className="py-section px-[6vw] max-w-[720px]">
      <Reveal>
        <p className="font-serif text-[18px] text-ink m-0 mb-6 leading-[1.85]">
          I photograph documentary-first. That means fewer instructions, more watching — waiting
          for the moment rather than manufacturing it.
        </p>
        <p className="text-body-base text-muted m-0 mb-5">
          We&apos;ll spend a short amount of time on portraits — enough for a handful of
          photographs you&apos;ll want to print — and the rest of the day I stay close but out of
          the way. Getting ready, the ceremony, the in-between hours, the toasts, the dancing: all
          of it is part of the story, not just the highlights.
        </p>
        <p className="text-body-base text-muted m-0">
          Before the wedding, we talk through your day in detail so I know where to be and when.
          On the day, you won&apos;t be managing me — I&apos;ll be managing myself.
        </p>
      </Reveal>
    </section>
  );
}
