/* ============================================
   SearchResultsPage — Unified search results
   ============================================ */

import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import NewsCard from '../components/News/NewsCard';
import ArticleCard from '../components/Articles/ArticleCard';
import { searchNews } from '../data/mockNews';
import { searchArticles } from '../data/mockArticles';
import './SearchResultsPage.css';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const newsResults = useMemo(() => searchNews(query), [query]);
  const articleResults = useMemo(() => searchArticles(query), [query]);

  const totalResults = newsResults.length + articleResults.length;

  return (
    <div className="search-results container" id="search-results-page">
      <div className="search-results__header animate-fade-in-up">
        <h1 className="search-results__title">
          Search Results
        </h1>
        <p className="search-results__query">
          {totalResults} result{totalResults !== 1 ? 's' : ''} for &quot;<strong>{query}</strong>&quot;
        </p>
      </div>

      {totalResults === 0 ? (
        <div className="search-results__empty">
          <span className="search-results__empty-icon">🔎</span>
          <h3>No results found</h3>
          <p>Try different keywords or browse categories.</p>
          <Link to="/" className="search-results__home-btn">← Back to Home</Link>
        </div>
      ) : (
        <div className="search-results__sections">
          {/* News Results */}
          {newsResults.length > 0 && (
            <section className="search-results__section">
              <h2 className="search-results__section-title">
                📰 News <span className="search-results__section-count">({newsResults.length})</span>
              </h2>
              <div className="search-results__news-grid stagger-children">
                {newsResults.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          )}

          {/* Article Results */}
          {articleResults.length > 0 && (
            <section className="search-results__section">
              <h2 className="search-results__section-title">
                📚 Articles <span className="search-results__section-count">({articleResults.length})</span>
              </h2>
              <div className="search-results__articles-grid stagger-children">
                {articleResults.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
