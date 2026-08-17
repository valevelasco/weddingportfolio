import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextLink } from '@/components/atoms/TextLink';
import { TextureBlock } from '@/components/atoms/TextureBlock';

export function PhilosophySection() {
  return (
    <section className="py-section px-[6vw] bg-section grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 lg:items-center">
      <Reveal className="flex flex-col justify-center gap-5 max-w-[480px] order-2 lg:order-1">
        <Eyebrow>THE WAY I SEE IT</Eyebrow>
        <SectionTitle size="h2-md">
          It&apos;s not just
          <br />
          about the photos.
        </SectionTitle>
        <p className="text-body-base text-muted m-0">
          It&apos;s about how you felt, who you were with, and the moments you&apos;ll want to
          relive for the rest of your life.
        </p>
        <TextLink href="/approach">MY APPROACH</TextLink>
      </Reveal>

      <Reveal delayMs={120} className="order-1 lg:order-2">
        <TextureBlock
          label="CANDID DETAIL — HANDS, VEIL, OR QUIET WALK TOGETHER"
          aspect="4/5"
          texture="a-fine"
        />
      </Reveal>
    </section>
  );
}
