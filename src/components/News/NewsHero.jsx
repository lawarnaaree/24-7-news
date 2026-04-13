/* ============================================
   NewsHero — Featured stories section
   Large hero card + side cards layout
   ============================================ */

import { Link } from 'react-router-dom';
import { SOURCES, CATEGORIES } from '../../utils/constants';
import { timeAgo } from '../../utils/formatDate';
import './NewsHero.css';

export default function NewsHero({ articles }) {
  if (!articles || articles.length === 0) return null;

  const [main, ...side] = articles.slice(0, 4);
  const sideArticles = side.slice(0, 3);

  const getCategoryObj = (slug) => CATEGORIES.find((c) => c.slug === slug) || {};

  return (
    <section className="news-hero" id="news-hero-section">
      <div className="news-hero__grid">
        {/* Main Featured Card */}
        <Link to={`/news/${main.id}`} className="news-hero__main" id="hero-main-card">
          <div className="news-hero__main-img-wrap">
            <img src={main.thumbnail} alt={main.title} className="news-hero__main-img" loading="eager" />
            <div className="news-hero__main-overlay">
              <div className="news-hero__main-meta">
                {main.isBreaking && (
                  <span className="news-hero__breaking-badge">
                    <span className="news-hero__breaking-dot"></span>
                    BREAKING
                  </span>
                )}
                <span className="news-hero__category-badge" style={{ background: getCategoryObj(main.category).color }}>
                  {getCategoryObj(main.category).icon} {getCategoryObj(main.category).name}
                </span>
              </div>
              <h2 className="news-hero__main-title">{main.title}</h2>
              <p className="news-hero__main-excerpt">{main.excerpt}</p>
              <div className="news-hero__main-info">
                <span className="news-hero__source">
                  {SOURCES[main.source]?.logo} {SOURCES[main.source]?.name}
                </span>
                <span className="news-hero__time">{timeAgo(main.publishedAt)}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Side Cards */}
        <div className="news-hero__side">
          {sideArticles.map((article) => (
            <Link to={`/news/${article.id}`} key={article.id} className="news-hero__side-card">
              <div className="news-hero__side-img-wrap">
                <img src={article.thumbnail} alt={article.title} className="news-hero__side-img" loading="lazy" />
              </div>
              <div className="news-hero__side-content">
                <span className="news-hero__side-category" style={{ color: getCategoryObj(article.category).color }}>
                  {getCategoryObj(article.category).icon} {getCategoryObj(article.category).name}
                </span>
                <h3 className="news-hero__side-title">{article.title}</h3>
                <div className="news-hero__side-info">
                  <span className="news-hero__source-sm">{SOURCES[article.source]?.name}</span>
                  <span className="news-hero__dot">·</span>
                  <span className="news-hero__time-sm">{timeAgo(article.publishedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
