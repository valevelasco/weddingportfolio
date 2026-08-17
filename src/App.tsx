import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ApproachPage } from '@/pages/ApproachPage';
import { StoriesPage } from '@/pages/StoriesPage';
import { StoryPage } from '@/pages/StoryPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ScrollToHash } from '@/components/atoms/ScrollToHash';

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:slug" element={<StoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
