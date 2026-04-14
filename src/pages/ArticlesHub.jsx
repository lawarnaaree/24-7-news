/* ============================================
   ArticlesHub — Knowledge section (daily.dev style)
   ============================================ */

import { useState, useMemo } from 'react';
import ArticleCard from '../components/Articles/ArticleCard';
import { ARTICLE_CATEGORIES } from '../utils/constants';
import { getArticlesByCategory, searchArticles } from '../data/mockArticles';
import './ArticlesHub.css';

export default function ArticlesHub() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = useMemo(() => {
    if (searchQuery.trim()) return searchArticles(searchQuery);
    return getArticlesByCategory(activeCategory);
  }, [activeCategory, searchQuery]);

  return (
    <div className="articles-hub" id="articles-hub">
      {/* Header */}
      <div className="articles-hub__header">
        <div className="articles-hub__header-left">
          <h1 className="articles-hub__title">📚 Knowledge Hub</h1>
          <p className="articles-hub__desc">In-depth articles on science, history, tech & more</p>
        </div>
        <div className="articles-hub__search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); if (e.target.value) setActiveCategory('all'); }}
            className="articles-hub__search-input"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="articles-hub__search-clear">✕</button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="articles-hub__tabs">
        <button
          className={`feed-tab ${activeCategory === 'all' ? 'feed-tab--active' : ''}`}
          onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
        >🌐 All</button>
        {ARTICLE_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            className={`feed-tab ${activeCategory === cat.slug ? 'feed-tab--active' : ''}`}
            onClick={() => { setActiveCategory(cat.slug); setSearchQuery(''); }}
          >{cat.icon} {cat.name}</button>
        ))}
      </div>

      {searchQuery && (
        <p className="articles-hub__results">{articles.length} result{articles.length !== 1 ? 's' : ''} for "{searchQuery}"</p>
      )}

      {articles.length > 0 ? (
        <div className="articles-hub__grid stagger-children">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="feed-empty">
          <span className="feed-empty__icon">🔎</span>
          <h3 className="feed-empty__title">No articles found</h3>
          <p className="feed-empty__text">Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
