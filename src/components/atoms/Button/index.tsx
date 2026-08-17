import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type CommonProps = {
  children: ReactNode;
  variant?: 'solid-dark' | 'solid-light' | 'outline-dark' | 'outline-light';
  className?: string;
};

type AnchorButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: 'a';
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button';
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const base = 'inline-flex items-center justify-center text-cta px-[30px] py-[15px] transition-all duration-300';

const variants: Record<NonNullable<CommonProps['variant']>, string> = {
  'solid-dark': 'bg-ink text-cream hover:bg-ink-soft',
  'solid-light': 'bg-cream text-ink hover:bg-texture-b',
  'outline-dark': 'border border-ink text-ink hover:bg-ink hover:text-cream',
  'outline-light': 'border border-cream text-cream hover:bg-cream/15',
};

export function Button({ children, variant = 'solid-dark', className = '', ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (rest.as === 'button') {
    const { as: _as, ...buttonRest } = rest;
    return (
      <button className={classes} {...buttonRest}>
        {children}
      </button>
    );
  }

  const { as: _as, ...anchorRest } = rest as AnchorButtonProps;
  return (
    <a className={classes} {...anchorRest}>
      {children}
    </a>
  );
}
