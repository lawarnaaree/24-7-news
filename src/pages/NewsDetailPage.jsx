/* ============================================
   NewsDetailPage — Text-only article view
   ============================================ */

import { useParams, Link } from 'react-router-dom';
import { getNewsById } from '../../data/mockNews';
import { timeAgo } from '../../utils/formatDate';
import './NewsDetailPage.css';

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = getNewsById(id);

  if (!article) return <div className="page-error">Article not found</div>;

  return (
    <div className="article-detail">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <span>{article.category}</span>
      </nav>

      <header className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          <div className="article-author">
             By {article.author}
          </div>
          <span>·</span>
          <span>{timeAgo(article.publishedAt)}</span>
          <span>·</span>
          <span>{article.readTime || '3 min read'}</span>
        </div>
      </header>

      {article.thumbnail && (
        <div className="article-hero">
          <img src={article.thumbnail} alt="" />
        </div>
      )}

      <div className="article-body">
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-content">
          {/* Mock full content */}
          <p>The situation continues to evolve as officials monitor the developments. Local authorities have advised residents to stay informed through official channels while teams work to address the immediate challenges.</p>
          <p>Experts suggest that this trend could have far-reaching implications for the region. "We are seeing a shift in how these events are handled," said one analyst familiar with the situation. "The long-term impact will depend on the actions taken in the coming weeks."</p>
          <p>For more updates, follow our live coverage and stay tuned for our upcoming special reports.</p>
        </div>
      </div>

      <footer className="article-footer">
        <div className="article-actions">
          <button className="article-action">Upvote</button>
          <button className="article-action">Save</button>
          <button className="article-action">Share</button>
        </div>
      </footer>
    </div>
  );
}
