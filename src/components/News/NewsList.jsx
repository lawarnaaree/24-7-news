/* ============================================
   NewsList — Card feed grid (daily.dev style)
   No section headers — clean grid
   ============================================ */

import NewsCard from './NewsCard';
import './NewsList.css';

export default function NewsList({ articles, title, subtitle, variant = 'default' }) {
  if (!articles || articles.length === 0) {
    return (
      <div className="feed-empty">
        <span className="feed-empty__icon">📭</span>
        <h3 className="feed-empty__title">No posts found</h3>
        <p className="feed-empty__text">Try a different filter or check back later.</p>
      </div>
    );
  }

  return (
    <section className="feed-list">
      {title && (
        <div className="feed-list__header">
          <h2 className="feed-list__title">{title}</h2>
          {subtitle && <p className="feed-list__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className={`feed-grid ${variant === 'compact' ? 'feed-grid--compact' : ''} stagger-children`}>
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} variant={variant} />
        ))}
      </div>
    </section>
  );
}
