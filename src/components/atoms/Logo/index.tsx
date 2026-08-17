interface LogoProps {
  tone: 'dark' | 'light';
}

const toneClasses: Record<LogoProps['tone'], { main: string; sub: string }> = {
  dark: { main: 'text-ink', sub: 'text-muted' },
  light: { main: 'text-cream', sub: 'text-cream/75' },
};

export function Logo({ tone }: LogoProps) {
  const { main, sub } = toneClasses[tone];

  return (
    <a
      href="#home"
      aria-label="Valeria Velasco Photography — home"
      className="flex flex-shrink-0 flex-col leading-none mr-6"
    >
      <span className={`font-serif text-logo transition-colors duration-400 ${main}`}>
        VALERIA VELASCO
      </span>
      <span className={`font-sans text-micro mt-1 transition-colors duration-400 ${sub}`}>
        PHOTOGRAPHY
      </span>
    </a>
  );
}
