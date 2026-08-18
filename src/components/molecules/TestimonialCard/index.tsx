import type { Testimonial } from '@/i18n/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="m-0">
      <blockquote className="font-serif italic text-quote text-ink m-0 mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="text-nav tracking-tightish text-muted">{testimonial.names}</figcaption>
    </figure>
  );
}
