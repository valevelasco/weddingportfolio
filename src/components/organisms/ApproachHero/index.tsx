import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextureBlock } from '@/components/atoms/TextureBlock';

export function ApproachHero() {
  return (
    <section className="pt-section px-[6vw] grid grid-cols-1 min-[760px]:grid-cols-2 gap-14 min-[760px]:gap-20 min-[760px]:items-center">
      <Reveal className="order-2 min-[760px]:order-1 flex flex-col justify-center gap-5 max-w-[480px]">
        <Eyebrow>THE WAY I SEE IT</Eyebrow>
        <SectionTitle as="h1" size="h1-approach">
          It&apos;s not just about the photos.
        </SectionTitle>
        <p className="text-body-base text-muted m-0">
          It&apos;s about how you felt, who you were with, and the moments you&apos;ll want to
          relive for the rest of your life.
        </p>
      </Reveal>

      <Reveal delayMs={120} className="order-1 min-[760px]:order-2">
        <TextureBlock
          label="CANDID DETAIL — HANDS, VEIL, OR QUIET WALK TOGETHER"
          aspect="4/5"
          texture="a-fine"
        />
      </Reveal>
    </section>
  );
}
