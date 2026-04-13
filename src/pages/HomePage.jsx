/* ============================================
   HomePage — Main landing page
   Hero + Category Filter + News Grid + Sidebar
   ============================================ */

import { useState, useMemo } from 'react';
import NewsHero from '../components/News/NewsHero';
import NewsList from '../components/News/NewsList';
import CategoryPill from '../components/Common/CategoryPill';
import TrendingWidget from '../components/Widgets/TrendingWidget';
import DateTimeWidget from '../components/Widgets/DateTimeWidget';
import { getFeaturedNews, getNewsByCategory } from '../data/mockNews';
import { CATEGORIES } from '../utils/constants';
import './HomePage.css';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const featured = useMemo(() => getFeaturedNews(), []);
  const news = useMemo(() => {
    const all = getNewsByCategory(activeCategory);
    // Exclude featured from grid to avoid duplication if 'all'
    if (activeCategory === 'all') {
      const featuredIds = new Set(featured.map((n) => n.id));
      return all.filter((n) => !featuredIds.has(n.id));
    }
    return all;
  }, [activeCategory, featured]);

  return (
    <div className="home-page container" id="home-page">
      {/* Hero Section */}
      <NewsHero articles={featured} />

      {/* Category Filter */}
      <CategoryPill
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Main Content + Sidebar */}
      <div className="home-page__layout">
        <div className="home-page__main">
          <NewsList
            articles={news}
            title={activeCategory === 'all' ? 'Latest News' : CATEGORIES.find(c => c.slug === activeCategory)?.name}
            subtitle={activeCategory === 'all' ? 'From all sources around the world' : `Showing ${news.length} articles`}
          />
        </div>

        <aside className="home-page__sidebar">
          <DateTimeWidget />
          <TrendingWidget />
        </aside>
      </div>
    </div>
  );
}
