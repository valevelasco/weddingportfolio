import { LandingTemplate } from '@/components/templates/LandingTemplate';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function HomePage() {
  useDocumentMeta({
    title: 'Valeria Velasco Photography | Wedding Photographer in Switzerland',
    description:
      'Elegant and timeless wedding photography in Switzerland and across Europe. Capturing authentic moments, intimate details and beautiful celebrations.',
  });

  return <LandingTemplate />;
}
