/* ============================================
   SearchResultsPage — daily.dev style
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
  const total = newsResults.length + articleResults.length;

  return (
    <div className="search-page" id="search-results-page">
      <div className="search-page__header">
        <h1 className="search-page__title">Search Results</h1>
        <p className="search-page__info">{total} result{total !== 1 ? 's' : ''} for "<strong>{query}</strong>"</p>
      </div>

      {total === 0 ? (
        <div className="feed-empty">
          <span className="feed-empty__icon">🔎</span>
          <h3 className="feed-empty__title">No results found</h3>
          <p className="feed-empty__text">Try different keywords.</p>
          <Link to="/" className="detail__back" style={{ marginTop: '12px', display: 'inline-block' }}>← Back to Feed</Link>
        </div>
      ) : (
        <div className="search-page__sections">
          {newsResults.length > 0 && (
            <section>
              <h2 className="search-page__section-title">📰 News ({newsResults.length})</h2>
              <div className="feed-grid stagger-children">
                {newsResults.map((a) => <NewsCard key={a.id} article={a} />)}
              </div>
            </section>
          )}
          {articleResults.length > 0 && (
            <section>
              <h2 className="search-page__section-title">📚 Articles ({articleResults.length})</h2>
              <div className="feed-grid stagger-children">
                {articleResults.map((a) => <ArticleCard key={a.id} article={a} />)}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
