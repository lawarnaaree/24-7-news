/* ============================================
   ArticleCard — daily.dev card style
   ============================================ */

import { Link } from 'react-router-dom';
import { ARTICLE_CATEGORIES } from '../../utils/constants';
import './ArticleCard.css';

export default function ArticleCard({ article }) {
  const category = ARTICLE_CATEGORIES.find((c) => c.slug === article.category);

  return (
    <article className="article-card" id={`article-card-${article.id}`}>
      <div className="article-card__header">
        <span className="article-card__cat-icon">{category?.icon || '📄'}</span>
        <span className="article-card__cat-name">{category?.name}</span>
        <span className="article-card__read-time">{article.readTime}</span>
      </div>

      <Link to={`/articles/${article.id}`} className="article-card__link">
        <h3 className="article-card__title">{article.title}</h3>
      </Link>

      <p className="article-card__summary">{article.summary}</p>

      <Link to={`/articles/${article.id}`} className="article-card__thumb-wrap">
        <img src={article.thumbnail} alt="" className="article-card__thumb" loading="lazy" />
      </Link>

      <div className="article-card__tags">
        {article.relatedTopics.slice(0, 3).map((topic) => (
          <span key={topic} className="feed-card__tag">#{topic.toLowerCase().replace(/\s+/g, '-')}</span>
        ))}
      </div>
    </article>
  );
}
