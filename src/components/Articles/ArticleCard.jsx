/* ============================================
   ArticleCard — Knowledge article preview card
   ============================================ */

import { Link } from 'react-router-dom';
import { ARTICLE_CATEGORIES } from '../../utils/constants';
import './ArticleCard.css';

export default function ArticleCard({ article }) {
  const category = ARTICLE_CATEGORIES.find((c) => c.slug === article.category);

  return (
    <Link to={`/articles/${article.id}`} className="article-card" id={`article-card-${article.id}`}>
      <div className="article-card__img-wrap">
        <img src={article.thumbnail} alt={article.title} className="article-card__img" loading="lazy" />
        <div className="article-card__img-overlay"></div>
      </div>

      <div className="article-card__body">
        <div className="article-card__meta">
          {category && (
            <span className="article-card__category">
              {category.icon} {category.name}
            </span>
          )}
          <span className="article-card__read-time">{article.readTime}</span>
        </div>

        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__summary">{article.summary}</p>

        <div className="article-card__tags">
          {article.relatedTopics.slice(0, 3).map((topic) => (
            <span key={topic} className="article-card__tag">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
