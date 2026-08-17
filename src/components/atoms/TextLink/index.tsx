import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

interface CommonProps {
  children: ReactNode;
  tone?: 'ink' | 'cream';
  className?: string;
}

type AnchorTextLinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to?: undefined;
  };

/** Internal SPA navigation via react-router's Link. */
type RouterTextLinkProps = CommonProps &
  Omit<LinkProps, 'className'> & {
    to: LinkProps['to'];
  };

export type TextLinkProps = AnchorTextLinkProps | RouterTextLinkProps;

export function TextLink({ children, tone = 'ink', className = '', ...rest }: TextLinkProps) {
  const toneClasses = tone === 'ink' ? 'text-ink border-ink' : 'text-cream border-cream';
  const classes = `w-fit text-cta border-b pb-[3px] transition-colors duration-300 hover:opacity-70 ${toneClasses} ${className}`;

  if (rest.to !== undefined) {
    const { to, ...linkRest } = rest as RouterTextLinkProps;
    return (
      <Link className={classes} to={to} {...linkRest}>
        {children}
      </Link>
    );
  }

  const { to: _to, ...anchorRest } = rest as AnchorTextLinkProps;
  return (
    <a className={classes} {...anchorRest}>
      {children}
    </a>
  );
}
