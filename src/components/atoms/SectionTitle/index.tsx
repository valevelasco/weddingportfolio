import type { ElementType, ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  as?: ElementType;
  size?: 'hero' | 'h2-xl' | 'h2-lg' | 'h2-md' | 'h2-sm' | 'h1-about' | 'h1-approach' | 'h1-story';
  className?: string;
}

const sizeClass: Record<NonNullable<SectionTitleProps['size']>, string> = {
  hero: 'text-hero',
  'h2-xl': 'text-h2-xl',
  'h2-lg': 'text-h2-lg',
  'h2-md': 'text-h2-md',
  'h2-sm': 'text-h2-sm',
  'h1-about': 'text-h1-about',
  'h1-approach': 'text-h1-approach',
  'h1-story': 'text-h1-story',
};

export function SectionTitle({
  children,
  as: Tag = 'h2',
  size = 'h2-xl',
  className = '',
}: SectionTitleProps) {
  return (
    <Tag className={`font-serif font-medium text-ink m-0 ${sizeClass[size]} ${className}`}>
      {children}
    </Tag>
  );
}
