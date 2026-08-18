import { Reveal } from '@/components/atoms/Reveal';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { Button } from '@/components/atoms/Button';
import { useLanguage } from '@/i18n/LanguageContext';

interface ClosingCTAProps {
  title?: string;
}

export function ClosingCTA({ title }: ClosingCTAProps) {
  const { t } = useLanguage();

  return (
    <section className="py-section px-[6vw] text-center">
      <Reveal className="flex flex-col items-center gap-6">
        {title && (
          <SectionTitle as="h2" size="h2-sm" className="max-w-[640px]">
            {title}
          </SectionTitle>
        )}
        <Button as="link" to="/#contact" variant="solid-dark">
          {t.common.getInTouch}
        </Button>
      </Reveal>
    </section>
  );
}
