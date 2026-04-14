/* ============================================
   SearchResultsPage — Minimalist search view
   ============================================ */

import { useSearchParams } from 'react-router-dom';
import NewsList from '../components/News/NewsList';
import { getNewsByCategory } from '../data/mockNews';
import './SearchResultsPage.css';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Mock search logic
  const results = getNewsByCategory('all').filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="search-page__header">
        <h1 className="search-page__title">
          Search Results for: <span className="search-query">"{query}"</span>
        </h1>
        <p className="search-page__count">{results.length} articles found</p>
      </div>

      <div className="search-page__results">
        {results.length > 0 ? (
          <NewsList articles={results} />
        ) : (
          <div className="feed-empty">
            <h3 className="feed-empty__title">No results found</h3>
            <p className="feed-empty__text">Try different keywords or check your spelling.</p>
          </div>
        )}
      </div>
    </div>
  );
}
