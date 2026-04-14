/* ============================================
   ArticleDetailPage — Knowledge article reader
   ============================================ */

import { useParams, Link } from 'react-router-dom';
import { getArticleById, getRelatedArticles } from '../data/mockArticles';
import { ARTICLE_CATEGORIES } from '../utils/constants';
import { formatDate } from '../utils/formatDate';
import ArticleCard from '../components/Articles/ArticleCard';
import './ArticleDetailPage.css';

export default function ArticleDetailPage() {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) {
    return (
      <div className="article-detail">
        <div className="detail__empty">
          <h2>Article not found</h2>
          <Link to="/articles" className="detail__back">← Back to Articles</Link>
        </div>
      </div>
    );
  }

  const category = ARTICLE_CATEGORIES.find((c) => c.slug === article.category);
  const related = getRelatedArticles(article.id, 3);

  const renderContent = (content) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) return <h2 key={i} className="article-detail__h2">{block.replace('## ', '')}</h2>;
      if (block.startsWith('### ')) return <h3 key={i} className="article-detail__h3">{block.replace('### ', '')}</h3>;
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter((l) => l.startsWith('- '));
        return (
          <ul key={i} className="article-detail__list">
            {items.map((item, j) => {
              const text = item.replace('- ', '');
              const parts = text.split(/\*\*(.*?)\*\*/g);
              return <li key={j}>{parts.map((p, k) => k % 2 === 1 ? <strong key={k}>{p}</strong> : p)}</li>;
            })}
          </ul>
        );
      }
      const parts = block.split(/\*\*(.*?)\*\*/g);
      return <p key={i} className="article-detail__p">{parts.map((p, k) => k % 2 === 1 ? <strong key={k}>{p}</strong> : p)}</p>;
    });
  };

  return (
    <div className="article-detail" id="article-detail-page">
      <nav className="detail__breadcrumb">
        <Link to="/">Feed</Link><span>›</span>
        <Link to="/articles">Articles</Link><span>›</span>
        <span className="detail__breadcrumb-current">{article.title}</span>
      </nav>

      <article className="article-detail__card">
        <div className="article-detail__head">
          {category && <span className="article-detail__cat">{category.name}</span>}
          <h1 className="article-detail__title">{article.title}</h1>
          <p className="article-detail__summary">{article.summary}</p>
          <div className="article-detail__meta">
            <span>{article.readTime}</span>
            <span>Updated {formatDate(article.lastUpdated)}</span>
          </div>
        </div>

        <div className="article-detail__img">
          <img src={article.thumbnail} alt={article.title} />
        </div>

        <div className="article-detail__body">{renderContent(article.content)}</div>

        <div className="article-detail__topics">
          <h4 className="article-detail__topics-title">Related Topics</h4>
          <div className="article-detail__topics-list">
            {article.relatedTopics.map((topic) => (
              <Link key={topic} to={`/search?q=${encodeURIComponent(topic)}`} className="feed-card__tag">#{topic.toLowerCase().replace(/\s+/g, '-')}</Link>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="article-detail__related">
          <h3 className="article-detail__related-title">Related Articles</h3>
          <div className="article-detail__related-grid">
            {related.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </section>
      )}
    </div>
  );
}
