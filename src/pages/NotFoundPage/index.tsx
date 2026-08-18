import { PageHeader } from '@/components/organisms/PageHeader';
import { SimpleFooter } from '@/components/organisms/SimpleFooter';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { Button } from '@/components/atoms/Button';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/i18n/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();

  useDocumentMeta({
    title: t.notFoundPage.seoTitle,
    description: t.notFoundPage.seoDescription,
  });

  return (
    <div className="bg-cream text-ink font-sans">
      <PageHeader />
      <main className="py-section px-[6vw] text-center flex flex-col items-center gap-6">
        <SectionTitle as="h1" size="h2-md">
          {t.notFoundPage.title}
        </SectionTitle>
        <p className="text-body-base text-muted m-0">{t.notFoundPage.body}</p>
        <Button as="link" to="/" variant="solid-dark">
          {t.notFoundPage.backHome}
        </Button>
      </main>
      <SimpleFooter />
    </div>
  );
}
