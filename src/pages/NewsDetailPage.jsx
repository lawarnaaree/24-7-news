/* ============================================
   NewsDetailPage — Single news article view
   ============================================ */

import { useParams, Link } from 'react-router-dom';
import { getNewsById } from '../data/mockNews';
import { SOURCES, CATEGORIES } from '../utils/constants';
import { formatDateTime, timeAgo } from '../utils/formatDate';
import TrendingWidget from '../components/Widgets/TrendingWidget';
import './NewsDetailPage.css';

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = getNewsById(id);

  if (!article) {
    return (
      <div className="news-detail container">
        <div className="news-detail__not-found">
          <h2>Article not found</h2>
          <p>The news article you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/" className="news-detail__back-btn">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const source = SOURCES[article.source];
  const category = CATEGORIES.find((c) => c.slug === article.category);

  return (
    <div className="news-detail container" id="news-detail-page">
      {/* Breadcrumb */}
      <nav className="news-detail__breadcrumb animate-fade-in">
        <Link to="/">Home</Link>
        <span>/</span>
        {category && (
          <>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
            <span>/</span>
          </>
        )}
        <span className="news-detail__breadcrumb-current">{article.title}</span>
      </nav>

      <div className="news-detail__layout">
        <article className="news-detail__content animate-fade-in-up">
          {/* Meta badges */}
          <div className="news-detail__badges">
            {article.isBreaking && (
              <span className="news-detail__breaking-badge">
                <span className="news-detail__breaking-dot"></span>
                BREAKING
              </span>
            )}
            {category && (
              <Link
                to={`/category/${category.slug}`}
                className="news-detail__category-badge"
                style={{ background: category.color }}
              >
                {category.icon} {category.name}
              </Link>
            )}
          </div>

          {/* Title */}
          <h1 className="news-detail__title">{article.title}</h1>

          {/* Author and time */}
          <div className="news-detail__meta">
            <div className="news-detail__source-info">
              <span className="news-detail__source-logo">{source?.logo}</span>
              <div>
                <span className="news-detail__source-name">{source?.name}</span>
                {article.author && (
                  <span className="news-detail__author">by {article.author}</span>
                )}
              </div>
            </div>
            <div className="news-detail__time-info">
              <span className="news-detail__time-ago">{timeAgo(article.publishedAt)}</span>
              <span className="news-detail__time-full">{formatDateTime(article.publishedAt)}</span>
            </div>
          </div>

          {/* Image */}
          <div className="news-detail__hero-img">
            <img src={article.thumbnail} alt={article.title} />
          </div>

          {/* Body (excerpt as full article for mock) */}
          <div className="news-detail__body">
            <p className="news-detail__lead">{article.excerpt}</p>
            <p className="news-detail__paragraph">
              This is aggregated content. To read the full article, please visit the original source.
            </p>
          </div>

          {/* CTA to original */}
          <a
            href={article.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="news-detail__read-original"
          >
            Read Full Article on {source?.name} →
          </a>
        </article>

        {/* Sidebar */}
        <aside className="news-detail__sidebar">
          <TrendingWidget />
        </aside>
      </div>
    </div>
  );
}
