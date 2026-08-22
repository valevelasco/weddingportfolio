import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ApproachPage } from '@/pages/ApproachPage';
import { StoriesPage } from '@/pages/StoriesPage';
import { StoryPage } from '@/pages/StoryPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ScrollToHash } from '@/components/atoms/ScrollToHash';
import { ErrorBoundary } from '@/components/atoms/ErrorBoundary';
import { LanguageProvider } from '@/i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ScrollToHash />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:slug" element={<StoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export default App;
