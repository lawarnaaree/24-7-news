/* ============================================
   BookmarksPage — Minimalist "Saved" articles
   ============================================ */

import { useMemo } from 'react';
import NewsList from '../components/News/NewsList';
import { getNewsByCategory } from '../data/mockNews';
import './BookmarksPage.css';

export default function BookmarksPage() {
  const savedNews = useMemo(() => {
    const all = getNewsByCategory('all');
    return all.slice(0, 4); 
  }, []);

  return (
    <div className="bookmarks-page" id="bookmarks-page">
      <div className="bookmarks-page__header">
        <h1 className="bookmarks-page__title">Bookmarks</h1>
        <p className="bookmarks-page__info">You have {savedNews.length} saved posts</p>
      </div>

      <div className="bookmarks-page__content">
        {savedNews.length > 0 ? (
          <NewsList articles={savedNews} title="Saved for later" />
        ) : (
          <div className="feed-empty">
            <h3 className="feed-empty__title">No bookmarks yet</h3>
            <p className="feed-empty__text">Click "Save" on any card to store articles here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
