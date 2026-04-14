/* ============================================
   NewsCard — daily.dev-style card
   Source icon, title, tags, action bar
   ============================================ */

import { Link } from 'react-router-dom';
import { SOURCES, CATEGORIES } from '../../utils/constants';
import { timeAgo } from '../../utils/formatDate';
import './NewsCard.css';

export default function NewsCard({ article, variant = 'default' }) {
  const source = SOURCES[article.source];
  const category = CATEGORIES.find((c) => c.slug === article.category);

  // Generate tags from category + source
  const tags = [
    category?.slug && `#${category.slug}`,
    source?.country && `#${source.country}`,
    article.author && `#${article.author.split(' ')[0].toLowerCase()}`,
  ].filter(Boolean).slice(0, 3);

  return (
    <article className={`feed-card ${variant === 'compact' ? 'feed-card--compact' : ''}`} id={`card-${article.id}`}>
      {/* Card Header: Source */}
      <div className="feed-card__header">
        <div className="feed-card__source">
          <span className="feed-card__source-icon">{source?.logo}</span>
          <span className="feed-card__source-name">{source?.name}</span>
        </div>
        {article.isBreaking && (
          <span className="feed-card__live-badge">
            <span className="feed-card__live-dot"></span>
            BREAKING
          </span>
        )}
      </div>

      {/* Card Body: Title + optional image */}
      <Link to={`/news/${article.id}`} className="feed-card__link">
        <h3 className="feed-card__title">{article.title}</h3>
      </Link>

      {/* Thumbnail (shown for default variant) */}
      {variant !== 'compact' && article.thumbnail && (
        <Link to={`/news/${article.id}`} className="feed-card__thumb-wrap">
          <img src={article.thumbnail} alt="" className="feed-card__thumb" loading="lazy" />
        </Link>
      )}

      {/* Tags */}
      <div className="feed-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="feed-card__tag">{tag}</span>
        ))}
      </div>

      {/* Footer: meta + actions */}
      <div className="feed-card__footer">
        <div className="feed-card__meta">
          <span>{timeAgo(article.publishedAt)}</span>
          {article.readTime && <span>· {article.readTime}</span>}
        </div>
        <div className="feed-card__actions">
          <button className="feed-card__action" title="Upvote" aria-label="Upvote">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <span>{article.viewCount ? Math.floor(article.viewCount / 100) : 0}</span>
          </button>
          <button className="feed-card__action" title="Comment" aria-label="Comment">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>{Math.floor(Math.random() * 30)}</span>
          </button>
          <button className="feed-card__action" title="Bookmark" aria-label="Bookmark">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
          <button className="feed-card__action" title="Share" aria-label="Share">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
