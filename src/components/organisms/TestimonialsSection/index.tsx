import { Reveal } from '@/components/atoms/Reveal';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TestimonialCard } from '@/components/molecules/TestimonialCard';
import { useLanguage } from '@/i18n/LanguageContext';

interface TestimonialsSectionProps {
  show?: boolean;
}

export function TestimonialsSection({ show = true }: TestimonialsSectionProps) {
  const { t } = useLanguage();
  if (!show) return null;

  const { testimonials } = t.home;

  return (
    <section className="py-section px-[6vw] bg-section">
      <Reveal className="text-center mb-16">
        <Eyebrow className="mb-3.5">{testimonials.eyebrow}</Eyebrow>
        <SectionTitle size="h2-md">{testimonials.title}</SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1100px] mx-auto">
        {testimonials.items.map((testimonial, i) => (
          <Reveal key={testimonial.names} delayMs={i * 120}>
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
