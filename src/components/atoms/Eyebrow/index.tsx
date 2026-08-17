import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return <p className={`text-eyebrow text-muted m-0 ${className}`}>{children}</p>;
}
