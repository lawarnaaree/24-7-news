/* ============================================
   HomePage — Flat card-feed (daily.dev style)
   Feed settings bar + category tabs + card grid
   ============================================ */

import { useState, useMemo } from 'react';
import NewsList from '../components/News/NewsList';
import CategoryPill from '../components/Common/CategoryPill';
import TrendingWidget from '../components/Widgets/TrendingWidget';
import { getNewsByCategory } from '../data/mockNews';
import { CATEGORIES } from '../utils/constants';
import './HomePage.css';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const news = useMemo(() => getNewsByCategory(activeCategory), [activeCategory]);

  return (
    <div className="home" id="home-page">
      {/* Feed Settings Bar */}
      <div className="home__toolbar">
        <button className="home__toolbar-btn home__toolbar-btn--active">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          My Feed
        </button>
        <button className="home__toolbar-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Popular
        </button>
        <button className="home__toolbar-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Best Discussions
        </button>
        <div className="home__toolbar-spacer"></div>
        <span className="home__toolbar-count">
          {news.length} posts
        </span>
      </div>

      {/* Category Tabs */}
      <CategoryPill
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Content */}
      <div className="home__content">
        <div className="home__feed">
          <NewsList articles={news} />
        </div>
        <aside className="home__sidebar">
          <TrendingWidget />
        </aside>
      </div>
    </div>
  );
}
