import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        cream: '#F8F6F1',
        ink: '#292725',
        'ink-soft': '#403c37',
        muted: '#6F6962',
        border: '#D8D1C7',
        section: '#EFEAE1',
        texture: {
          a: '#E4DDD0',
          b: '#EFEAE1',
          c: '#F3EFE7',
        },
        error: '#8a5a45',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        micro: ['9px', { letterSpacing: '3px', lineHeight: '1' }],
        label: ['10px', { letterSpacing: '1px', lineHeight: '1' }],
        nav: ['11px', { letterSpacing: '1px', lineHeight: '1' }],
        eyebrow: ['11px', { letterSpacing: '2.5px', lineHeight: '1' }],
        cta: ['12px', { letterSpacing: '1.5px', lineHeight: '1' }],
        'body-base': ['16px', { lineHeight: '1.75' }],
        field: ['15px', { lineHeight: '1.4' }],
        quote: ['22px', { lineHeight: '1.5' }],
        h3: ['26px', { lineHeight: '1.25' }],
        logo: ['20px', { letterSpacing: '1px', lineHeight: '1' }],
        'logo-lg': ['22px', { letterSpacing: '2px', lineHeight: '1' }],
        hero: ['clamp(40px,7vw,88px)', { lineHeight: '1.05' }],
        'h2-xl': ['clamp(32px,4.5vw,54px)', { lineHeight: '1.1' }],
        'h2-lg': ['clamp(32px,4vw,52px)', { lineHeight: '1.15' }],
        'h2-md': ['clamp(30px,4vw,48px)', { lineHeight: '1.2' }],
        'h2-sm': ['clamp(30px,4vw,44px)', { lineHeight: '1.15' }],
        'h1-about': ['clamp(36px,4.5vw,58px)', { lineHeight: '1.15' }],
        'h1-approach': ['clamp(32px,4.5vw,54px)', { lineHeight: '1.2' }],
        'h1-story': ['clamp(38px,6vw,66px)', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        tightish: '1px',
        label: '1.5px',
        wide2: '2px',
        eyebrow: '2.5px',
        logo: '3px',
      },
      spacing: {
        section: 'min(14vw, 140px)',
      },
      maxWidth: {
        hero: '900px',
      },
      transitionTimingFunction: {
        'ease-out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out-soft both',
      },
    },
  },
  plugins: [],
} satisfies Config;
