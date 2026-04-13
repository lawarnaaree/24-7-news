/* ============================================
   NewsCard — Individual news article card
   ============================================ */

import { Link } from 'react-router-dom';
import { SOURCES, CATEGORIES } from '../../utils/constants';
import { timeAgo } from '../../utils/formatDate';
import './NewsCard.css';

export default function NewsCard({ article, variant = 'default' }) {
  const source = SOURCES[article.source];
  const category = CATEGORIES.find((c) => c.slug === article.category);

  return (
    <Link
      to={`/news/${article.id}`}
      className={`news-card news-card--${variant}`}
      id={`news-card-${article.id}`}
    >
      <div className="news-card__img-wrap">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="news-card__img"
          loading="lazy"
        />
        {article.isBreaking && (
          <span className="news-card__breaking">BREAKING</span>
        )}
        {category && (
          <span
            className="news-card__category"
            style={{ background: category.color }}
          >
            {category.icon} {category.name}
          </span>
        )}
      </div>

      <div className="news-card__body">
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__excerpt">{article.excerpt}</p>

        <div className="news-card__footer">
          <div className="news-card__source">
            <span className="news-card__source-logo">{source?.logo}</span>
            <span className="news-card__source-name">{source?.name}</span>
          </div>
          <span className="news-card__time">{timeAgo(article.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
