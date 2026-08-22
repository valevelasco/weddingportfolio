import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';

interface StoryNoteSectionProps {
  title?: string;
  text?: string;
  maxWidthClass?: string;
  paddingTop?: boolean;
}

export function StoryNoteSection({
  title,
  text,
  maxWidthClass = 'max-w-[640px]',
  paddingTop = true,
}: StoryNoteSectionProps) {
  if (!title && !text) return null;

  const paddingClass = paddingTop ? 'py-[min(10vw,110px)]' : 'pb-[min(10vw,110px)]';

  return (
    <section className={`px-[6vw] ${paddingClass} ${maxWidthClass}`}>
      <Reveal>
        {title && <Eyebrow className="mb-4">{title}</Eyebrow>}
        {text && <p className="text-body-base text-muted m-0">{text}</p>}
      </Reveal>
    </section>
  );
}
