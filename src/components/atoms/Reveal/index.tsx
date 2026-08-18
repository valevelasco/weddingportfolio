import type { ReactNode } from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}

export function Reveal({ children, delayMs = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInViewReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[18px]'} transition-[opacity,transform] duration-700 ease-out-soft ${className}`}
      style={{ transitionDelay: inView ? `${delayMs}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
