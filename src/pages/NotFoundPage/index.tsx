import { PageHeader } from '@/components/organisms/PageHeader';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { Button } from '@/components/atoms/Button';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function NotFoundPage() {
  useDocumentMeta({
    title: 'Page Not Found | Valeria Velasco Photography',
    description: 'The page you were looking for could not be found.',
  });

  return (
    <div className="bg-cream text-ink font-sans">
      <PageHeader />
      <main className="py-section px-[6vw] text-center flex flex-col items-center gap-6">
        <SectionTitle as="h1" size="h2-md">
          Page not found
        </SectionTitle>
        <p className="text-body-base text-muted m-0">
          The page you were looking for doesn&apos;t exist or has moved.
        </p>
        <Button as="link" to="/" variant="solid-dark">
          BACK TO HOME
        </Button>
      </main>
      <SimpleFooter />
    </div>
  );
}
