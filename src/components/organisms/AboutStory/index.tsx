import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';

export function AboutStory() {
  return (
    <section className="py-section px-[6vw] max-w-[720px]">
      <Reveal>
        <Eyebrow className="mb-5">HOW I WORK</Eyebrow>
        <p className="font-serif text-[18px] text-ink m-0 mb-6 leading-[1.85]">
          I don&apos;t direct much. I&apos;d rather you forget I&apos;m there for most of the
          day — talking to your grandmother, laughing with your best friend, standing quietly
          with your partner before the ceremony starts.
        </p>
        <p className="text-body-base text-muted m-0">
          A handful of portraits, yes — but the rest is documentation. I shoot in natural light
          wherever possible, keep my presence small, and edit with a light hand so the
          photographs still feel like the day looked, not like a filter. Most of my couples are
          based in Switzerland or arriving here for a destination wedding; I travel across
          Europe for both.
        </p>
      </Reveal>
    </section>
  );
}
