/* ============================================
   NewsDetailPage — daily.dev article view
   ============================================ */

import { useParams, Link } from 'react-router-dom';
import { getNewsById } from '../data/mockNews';
import { SOURCES, CATEGORIES } from '../utils/constants';
import { formatDateTime, timeAgo } from '../utils/formatDate';
import { calculateReadTime } from '../utils/readTime';
import './NewsDetailPage.css';

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = getNewsById(id);

  if (!article) {
    return (
      <div className="detail">
        <div className="detail__empty">
          <h2>Article not found</h2>
          <Link to="/" className="detail__back">← Back to Feed</Link>
        </div>
      </div>
    );
  }

  const source = SOURCES[article.source];
  const category = CATEGORIES.find((c) => c.slug === article.category);
  const readTime = article.readTime || calculateReadTime(article.excerpt + " " + article.title);

  return (
    <div className="detail" id="news-detail-page">
      <nav className="detail__breadcrumb">
        <Link to="/">Feed</Link>
        <span>›</span>
        {category && <><Link to={`/category/${category.slug}`}>{category.name}</Link><span>›</span></>}
        <span className="detail__breadcrumb-current">{article.title}</span>
      </nav>

      <article className="detail__card">
        <div className="detail__badges">
          {article.isBreaking && (
            <span className="detail__breaking"><span className="detail__breaking-dot"></span>BREAKING</span>
          )}
          {category && (
            <Link to={`/category/${category.slug}`} className="detail__cat-badge">{category.icon} {category.name}</Link>
          )}
        </div>

        <h1 className="detail__title">{article.title}</h1>

        <div className="detail__meta">
          <div className="detail__source">
            <span className="detail__source-icon">{source?.logo}</span>
            <div>
              <span className="detail__source-name">{source?.name}</span>
              {article.author && <span className="detail__author">by {article.author}</span>}
            </div>
          </div>
          <div className="detail__time">
            <span className="detail__time-read">{readTime}</span>
            <span className="detail__separator">·</span>
            <span className="detail__time-ago">{timeAgo(article.publishedAt)}</span>
            <span className="detail__time-full">{formatDateTime(article.publishedAt)}</span>
          </div>
        </div>

        <div className="detail__img">
          <img src={article.thumbnail} alt={article.title} />
        </div>

        <div className="detail__body">
          <p className="detail__lead">{article.excerpt}</p>
          <p className="detail__note">This is aggregated content. Visit the original source for the full article.</p>
        </div>

        <a href={article.originalUrl} target="_blank" rel="noopener noreferrer" className="detail__cta">
          Read on {source?.name} →
        </a>
      </article>
    </div>
  );
}
