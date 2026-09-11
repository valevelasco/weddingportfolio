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
      <figcaption className="flex items-center gap-3">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt=""
            className="w-11 h-11 rounded-full object-cover border border-border"
          />
        )}
        <span className="text-nav tracking-tightish text-muted">{testimonial.names}</span>
      </figcaption>
    </figure>
  );
}
