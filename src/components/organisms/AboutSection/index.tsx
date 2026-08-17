import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextLink } from '@/components/atoms/TextLink';
import { TextureBlock } from '@/components/atoms/TextureBlock';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-section px-[6vw] grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 lg:items-center"
    >
      <Reveal>
        <TextureBlock label="VERTICAL PORTRAIT — PHOTOGRAPHER, NATURAL LIGHT" aspect="3/4" texture="b" />
      </Reveal>

      <Reveal delayMs={120} className="flex flex-col justify-center gap-5 max-w-[520px]">
        <Eyebrow>HELLO, I&apos;M VALERIA</Eyebrow>
        <SectionTitle size="h2-lg">
          A Colombian heart,
          <br />a Swiss home.
        </SectionTitle>
        <p className="text-body-base text-muted m-0">
          I&apos;m a wedding photographer with a love for quiet moments, real emotions and
          beautiful places. Colombian by birth, Swiss by home, I work with couples from
          Switzerland and around the world, creating photographs that feel authentic, elegant and
          timeless.
        </p>
        <TextLink href="/about">MORE ABOUT ME</TextLink>
      </Reveal>
    </section>
  );
}
