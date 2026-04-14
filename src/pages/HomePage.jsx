/* ============================================
   HomePage — text-only feed controls
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
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' or 'popular'

  const filteredNews = useMemo(() => {
    return getNewsByCategory(activeCategory);
  }, [activeCategory]);

  const featuredNews = useMemo(() => {
    return filteredNews.slice(0, 2);
  }, [filteredNews]);

  const remainingNews = useMemo(() => {
    return filteredNews.slice(2);
  }, [filteredNews]);

  return (
    <div className="home-page">
      {/* Feed Tabs Bar */}
      <div className="feed-header">
        <div className="feed-header__tabs">
          <button 
            className={`feed-header__tab ${activeTab === 'feed' ? 'feed-header__tab--active' : ''}`}
            onClick={() => setActiveTab('feed')}
          >
            My Feed
          </button>
          <button 
            className={`feed-header__tab ${activeTab === 'popular' ? 'feed-header__tab--active' : ''}`}
            onClick={() => setActiveTab('popular')}
          >
            Popular
          </button>
        </div>
        <div className="feed-header__msg">
          {filteredNews.length} articles
        </div>
      </div>

      {/* Category Filter Pills */}
      <CategoryPill 
        categories={CATEGORIES} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className="feed-grid">
        <div className="feed-grid__main">
          {/* Featured Row */}
          <section className="featured-section">
            <h2 className="section-label">Featured</h2>
            <div className="featured-row">
              {featuredNews.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          {/* Regular Feed */}
          <section className="feed-section">
            <h2 className="section-label">Latest Feed</h2>
            <NewsList articles={remainingNews} />
          </section>
        </div>

        {/* Sidebar Widgets */}
        <aside className="feed-grid__sidebar">
          <TrendingWidget />
        </aside>
      </div>
    </div>
  );
}
