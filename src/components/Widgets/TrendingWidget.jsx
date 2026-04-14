/* ============================================
   TrendingWidget — Text-only sidebar widget
   ============================================ */

import { Link } from 'react-router-dom';
import { getNewsByCategory } from '../../data/mockNews';
import { timeAgo } from '../../utils/formatDate';
import './TrendingWidget.css';

export default function TrendingWidget() {
  const trendingItems = getNewsByCategory('all').slice(0, 5);

  return (
    <div className="trending-widget" id="trending-widget">
      <div className="trending-widget__header">
        <h3 className="trending-widget__title">Trending</h3>
      </div>

      <div className="trending-widget__list">
        {trendingItems.map((article, index) => (
          <Link 
            key={article.id} 
            to={`/news/${article.id}`} 
            className="trending-item"
          >
            <span className="trending-item__rank">{index + 1}</span>
            <div className="trending-item__content">
              <h4 className="trending-item__title">{article.title}</h4>
              <div className="trending-item__meta">
                <span>{article.source.replace('-', ' ')}</span>
                <span>·</span>
                <span>{timeAgo(article.publishedAt)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
