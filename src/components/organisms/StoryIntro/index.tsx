import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';

interface StoryIntroProps {
  title: string;
  location: string;
  intro?: string;
}

export function StoryIntro({ title, location, intro }: StoryIntroProps) {
  return (
    <section className="pt-[min(10vw,110px)] pb-14 px-[6vw] max-w-[760px]">
      <Reveal>
        <Eyebrow className="mb-[18px]">{location}</Eyebrow>
        <SectionTitle as="h1" size="h1-story" className="mb-7">
          {title}
        </SectionTitle>
        {intro && <p className="text-body-base text-muted m-0">{intro}</p>}
      </Reveal>
    </section>
  );
}
