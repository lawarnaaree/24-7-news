/* ============================================
   App — Root component with React Router
   ============================================ */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ArticlesHub from './pages/ArticlesHub';
import ArticleDetailPage from './pages/ArticleDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import BookmarksPage from './pages/BookmarksPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="news/:id" element={<NewsDetailPage />} />
          <Route path="articles" element={<ArticlesHub />} />
          <Route path="articles/:id" element={<ArticleDetailPage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="bookmarks" element={<BookmarksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
