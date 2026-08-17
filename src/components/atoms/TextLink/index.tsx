import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  tone?: 'ink' | 'cream';
}

export function TextLink({ children, tone = 'ink', className = '', ...rest }: TextLinkProps) {
  const toneClasses = tone === 'ink' ? 'text-ink border-ink' : 'text-cream border-cream';

  return (
    <a
      className={`w-fit text-cta border-b pb-[3px] transition-colors duration-300 hover:opacity-70 ${toneClasses} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
