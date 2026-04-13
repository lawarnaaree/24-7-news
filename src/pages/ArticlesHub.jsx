/* ============================================
   ArticlesHub — Wikipedia-style knowledge section
   ============================================ */

import { useState, useMemo } from 'react';
import ArticleCard from '../components/Articles/ArticleCard';
import { ARTICLE_CATEGORIES } from '../utils/constants';
import mockArticles, { getArticlesByCategory, searchArticles } from '../data/mockArticles';
import './ArticlesHub.css';

export default function ArticlesHub() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = useMemo(() => {
    if (searchQuery.trim()) {
      return searchArticles(searchQuery);
    }
    return getArticlesByCategory(activeCategory);
  }, [activeCategory, searchQuery]);

  return (
    <div className="articles-hub container" id="articles-hub">
      {/* Header */}
      <div className="articles-hub__header animate-fade-in-up">
        <div className="articles-hub__header-text">
          <h1 className="articles-hub__title">
            <span className="articles-hub__title-icon">📚</span>
            Knowledge Hub
          </h1>
          <p className="articles-hub__subtitle">
            Explore in-depth articles on science, history, technology, culture, and more — powered by curated knowledge.
          </p>
        </div>

        {/* Search */}
        <div className="articles-hub__search-wrap">
          <span className="articles-hub__search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) setActiveCategory('all');
            }}
            className="articles-hub__search-input"
            id="articles-search"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="articles-hub__search-clear"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="articles-hub__categories">
        <button
          className={`articles-hub__cat-btn ${activeCategory === 'all' ? 'articles-hub__cat-btn--active' : ''}`}
          onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
        >
          🌐 All
        </button>
        {ARTICLE_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            className={`articles-hub__cat-btn ${activeCategory === cat.slug ? 'articles-hub__cat-btn--active' : ''}`}
            onClick={() => { setActiveCategory(cat.slug); setSearchQuery(''); }}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Results */}
      {searchQuery && (
        <p className="articles-hub__results-count">
          {articles.length} result{articles.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
        </p>
      )}

      {/* Articles Grid */}
      {articles.length > 0 ? (
        <div className="articles-hub__grid stagger-children">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="articles-hub__empty">
          <span className="articles-hub__empty-icon">🔎</span>
          <h3>No articles found</h3>
          <p>Try a different search term or browse another category.</p>
        </div>
      )}
    </div>
  );
}
