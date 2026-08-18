import { Link } from 'react-router-dom';

interface LogoProps {
  tone: 'dark' | 'light';
  /** In-page anchor (homepage) vs SPA route (subpages). */
  href?: string;
  to?: string;
  ariaLabel: string;
}

const toneClasses: Record<LogoProps['tone'], { main: string; sub: string }> = {
  dark: { main: 'text-ink', sub: 'text-muted' },
  light: { main: 'text-cream', sub: 'text-cream/75' },
};

export function Logo({ tone, href = '#home', to, ariaLabel }: LogoProps) {
  const { main, sub } = toneClasses[tone];
  const className = 'flex flex-shrink-0 flex-col leading-none mr-6';
  const label = ariaLabel;

  const content = (
    <>
      <span className={`font-serif text-logo transition-colors duration-400 ${main}`}>
        VALERIA VELASCO
      </span>
      <span className={`font-sans text-micro mt-1 transition-colors duration-400 ${sub}`}>
        PHOTOGRAPHY
      </span>
    </>
  );

  if (to !== undefined) {
    return (
      <Link to={to} aria-label={label} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} aria-label={label} className={className}>
      {content}
    </a>
  );
}
