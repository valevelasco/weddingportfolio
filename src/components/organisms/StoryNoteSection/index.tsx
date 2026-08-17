import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import type { StoryNote } from '@/data/content';

interface StoryNoteSectionProps {
  note: StoryNote;
  maxWidthClass?: string;
  paddingTop?: boolean;
}

export function StoryNoteSection({
  note,
  maxWidthClass = 'max-w-[640px]',
  paddingTop = true,
}: StoryNoteSectionProps) {
  const paddingClass = paddingTop ? 'py-[min(10vw,110px)]' : 'pb-[min(10vw,110px)]';

  return (
    <section className={`px-[6vw] ${paddingClass} ${maxWidthClass}`}>
      <Reveal>
        <Eyebrow className="mb-4">{note.eyebrow}</Eyebrow>
        <p className="text-body-base text-muted m-0">{note.text}</p>
      </Reveal>
    </section>
  );
}
