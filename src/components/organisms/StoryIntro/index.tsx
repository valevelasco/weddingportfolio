import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import type { StoryDetail } from '@/i18n/types';

interface StoryIntroProps {
  detail: StoryDetail;
}

export function StoryIntro({ detail }: StoryIntroProps) {
  return (
    <section className="pt-[min(10vw,110px)] pb-14 px-[6vw] max-w-[760px]">
      <Reveal>
        <Eyebrow className="mb-[18px]">{detail.location}</Eyebrow>
        <SectionTitle as="h1" size="h1-story" className="mb-7">
          {detail.title}
        </SectionTitle>
        <p className="text-body-base text-muted m-0">{detail.intro}</p>
      </Reveal>
    </section>
  );
}
