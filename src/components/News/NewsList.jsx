/* ============================================
   NewsList — Grid of NewsCards with section header
   ============================================ */

import NewsCard from './NewsCard';
import './NewsList.css';

export default function NewsList({ articles, title, subtitle, showAll = false, variant = 'default' }) {
  if (!articles || articles.length === 0) {
    return (
      <section className="news-list">
        {title && (
          <div className="news-list__header">
            <h2 className="news-list__title">{title}</h2>
          </div>
        )}
        <div className="news-list__empty">
          <span className="news-list__empty-icon">📭</span>
          <p>No news articles found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="news-list">
      {title && (
        <div className="news-list__header">
          <div>
            <h2 className="news-list__title">{title}</h2>
            {subtitle && <p className="news-list__subtitle">{subtitle}</p>}
          </div>
        </div>
      )}

      <div className={`news-list__grid news-list__grid--${variant} stagger-children`}>
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} variant={variant === 'compact' ? 'compact' : 'default'} />
        ))}
      </div>
    </section>
  );
}
