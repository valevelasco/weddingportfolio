import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextureBlock } from '@/components/atoms/TextureBlock';

export function AboutHero() {
  return (
    <section className="pt-section px-[6vw] grid grid-cols-1 min-[760px]:grid-cols-2 gap-14 min-[760px]:gap-20 min-[760px]:items-center">
      <Reveal className="flex flex-col justify-center gap-5 max-w-[520px]">
        <Eyebrow>HELLO, I&apos;M VALERIA</Eyebrow>
        <SectionTitle as="h1" size="h1-about">
          A Colombian heart,
          <br />a Swiss home.
        </SectionTitle>
        <p className="text-body-base text-muted m-0">
          I grew up in Bogotá, surrounded by big family gatherings, long lunches and a lot of
          noise — the good kind. I moved to Switzerland almost a decade ago, and somewhere
          between the mountains and the quiet, I found the way I wanted to photograph weddings:
          unposed, patient, close to the people in front of me.
        </p>
      </Reveal>

      <Reveal delayMs={120}>
        <TextureBlock label="PORTRAIT — VALERIA ON LOCATION" aspect="3/4" texture="b" />
      </Reveal>
    </section>
  );
}
