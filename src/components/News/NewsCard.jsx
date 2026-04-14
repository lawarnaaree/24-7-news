/* ============================================
   NewsCard — Text-only active card
   ============================================ */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SOURCES, CATEGORIES } from '../../utils/constants';
import { timeAgo } from '../../utils/formatDate';
import { calculateReadTime } from '../../utils/readTime';
import './NewsCard.css';

export default function NewsCard({ article, variant = 'default' }) {
  const [upvoted, setUpvoted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const source = SOURCES[article.source];
  const category = CATEGORIES.find((c) => c.slug === article.category);

  const readTime = article.readTime || calculateReadTime(article.excerpt + " " + article.title);

  const tags = [
    category?.slug && `#${category.slug}`,
    source?.country && `#${source.country}`,
  ].filter(Boolean).slice(0, 2);

  const initialUpvotes = article.viewCount ? Math.floor(article.viewCount / 100) : 0;

  return (
    <article className={`feed-card ${variant === 'compact' ? 'feed-card--compact' : ''}`}>
      <div className="feed-card__header">
        <div className="feed-card__source">
          <span className="feed-card__source-name">{source?.name}</span>
        </div>
        {article.isBreaking && (
          <span className="feed-card__live-badge">BREAKING</span>
        )}
      </div>

      <Link to={`/news/${article.id}`} className="feed-card__link">
        <h3 className="feed-card__title">{article.title}</h3>
      </Link>

      {variant !== 'compact' && article.thumbnail && (
        <Link to={`/news/${article.id}`} className="feed-card__thumb-wrap">
          <img src={article.thumbnail} alt="" className="feed-card__thumb" loading="lazy" />
        </Link>
      )}

      <div className="feed-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="feed-card__tag">{tag}</span>
        ))}
      </div>

      <div className="feed-card__footer">
        <div className="feed-card__meta">
          <span>{timeAgo(article.publishedAt)}</span>
          {readTime && <span>· {readTime}</span>}
        </div>
        
        <div className="feed-card__actions">
          <button 
            className={`feed-card__action ${upvoted ? 'feed-card__action--active-up' : ''}`} 
            onClick={() => setUpvoted(!upvoted)}
          >
            <span>{upvoted ? 'Upvoted' : 'Upvote'}</span>
            <small>{initialUpvotes + (upvoted ? 1 : 0)}</small>
          </button>
          <button className="feed-card__action">
            Comment
          </button>
          <button 
            className={`feed-card__action ${bookmarked ? 'feed-card__action--active-bookmark' : ''}`} 
            onClick={() => setBookmarked(!bookmarked)}
          >
            {bookmarked ? 'Saved' : 'Save'}
          </button>
          <button className="feed-card__action">
            Share
          </button>
        </div>
      </div>
    </article>
  );
}
