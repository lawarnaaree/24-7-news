/* ============================================
   HomePage — Flat card-feed (daily.dev style)
   Feed settings bar + category tabs + card grid
   ============================================ */

import { useState, useMemo } from 'react';
import NewsList from '../components/News/NewsList';
import NewsCard from '../components/News/NewsCard';
import CategoryPill from '../components/Common/CategoryPill';
import TrendingWidget from '../components/Widgets/TrendingWidget';
import { getNewsByCategory } from '../data/mockNews';
import { CATEGORIES } from '../utils/constants';
import './HomePage.css';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const allNews = useMemo(() => getNewsByCategory(activeCategory), [activeCategory]);
  
  // Daily.dev style: top posts of the day featured prominently
  const featured = useMemo(() => allNews.slice(0, 2), [allNews]);
  const feed = useMemo(() => allNews.slice(2), [allNews]);

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
        <div className="home__toolbar-spacer"></div>
        <span className="home__toolbar-count">
          {allNews.length} posts
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
          {/* Featured Row */}
          {activeCategory === 'all' && featured.length > 0 && (
            <div className="home__featured">
              <h2 className="home__section-title">✨ Featured for you</h2>
              <div className="home__featured-grid">
                {featured.map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
              <div className="home__divider"></div>
            </div>
          )}

          <NewsList 
            articles={activeCategory === 'all' ? feed : allNews} 
            title={activeCategory !== 'all' ? CATEGORIES.find(c => c.slug === activeCategory)?.name : "Latest Feed"}
          />
        </div>
        <aside className="home__sidebar">
          <TrendingWidget />
        </aside>
      </div>
    </div>
  );
}
