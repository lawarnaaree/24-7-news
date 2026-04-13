/* ============================================
   ArticleDetailPage — Full article reader
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
      <div className="article-detail container">
        <div className="article-detail__not-found">
          <h2>Article not found</h2>
          <p>The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/articles" className="article-detail__back-btn">← Back to Articles</Link>
        </div>
      </div>
    );
  }

  const category = ARTICLE_CATEGORIES.find((c) => c.slug === article.category);
  const related = getRelatedArticles(article.id, 3);

  // Convert markdown-like headings and paragraphs to HTML
  const renderContent = (content) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="article-detail__h2">{block.replace('## ', '')}</h2>;
      }
      if (block.startsWith('### ')) {
        return <h3 key={i} className="article-detail__h3">{block.replace('### ', '')}</h3>;
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter((l) => l.startsWith('- '));
        return (
          <ul key={i} className="article-detail__list">
            {items.map((item, j) => {
              const text = item.replace('- ', '');
              // Handle **bold** markers
              const parts = text.split(/\*\*(.*?)\*\*/g);
              return (
                <li key={j}>
                  {parts.map((part, k) =>
                    k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                  )}
                </li>
              );
            })}
          </ul>
        );
      }
      // Regular paragraph
      const parts = block.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="article-detail__paragraph">
          {parts.map((part, k) =>
            k % 2 === 1 ? <strong key={k}>{part}</strong> : part
          )}
        </p>
      );
    });
  };

  return (
    <div className="article-detail container" id="article-detail-page">
      {/* Breadcrumb */}
      <nav className="article-detail__breadcrumb animate-fade-in">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/articles">Articles</Link>
        <span>/</span>
        <span className="article-detail__breadcrumb-current">{article.title}</span>
      </nav>

      <article className="article-detail__content animate-fade-in-up">
        {/* Header */}
        <header className="article-detail__header">
          {category && (
            <span className="article-detail__category">
              {category.icon} {category.name}
            </span>
          )}
          <h1 className="article-detail__title">{article.title}</h1>
          <p className="article-detail__summary">{article.summary}</p>

          <div className="article-detail__meta">
            <span className="article-detail__read-time">📖 {article.readTime}</span>
            <span className="article-detail__updated">Updated {formatDate(article.lastUpdated)}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="article-detail__hero-img">
          <img src={article.thumbnail} alt={article.title} />
        </div>

        {/* Body */}
        <div className="article-detail__body">
          {renderContent(article.content)}
        </div>

        {/* Tags */}
        <div className="article-detail__tags">
          <h4 className="article-detail__tags-title">Related Topics</h4>
          <div className="article-detail__tags-list">
            {article.relatedTopics.map((topic) => (
              <Link
                key={topic}
                to={`/search?q=${encodeURIComponent(topic)}`}
                className="article-detail__tag"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="article-detail__related">
          <h3 className="article-detail__related-title">Related Articles</h3>
          <div className="article-detail__related-grid">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
