import { Logo } from '@/components/atoms/Logo';
import { TextLink } from '@/components/atoms/TextLink';

export function StoryHeader() {
  return (
    <header className="flex items-center justify-between px-[6vw] py-[26px] border-b border-border">
      <Logo tone="dark" to="/" />
      <TextLink to="/stories">&larr; ALL STORIES</TextLink>
    </header>
  );
}
