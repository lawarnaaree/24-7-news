/* ============================================
   TrendingWidget — Sidebar trending news
   ============================================ */

import { Link } from 'react-router-dom';
import { getTrendingNews } from '../../data/mockNews';
import { SOURCES } from '../../utils/constants';
import { timeAgo } from '../../utils/formatDate';
import './TrendingWidget.css';

export default function TrendingWidget() {
  const trending = getTrendingNews(5);

  return (
    <aside className="trending-widget" id="trending-widget">
      <h3 className="trending-widget__title">
        <span className="trending-widget__fire">🔥</span> Trending Now
      </h3>

      <div className="trending-widget__list">
        {trending.map((news, index) => (
          <Link to={`/news/${news.id}`} key={news.id} className="trending-widget__item">
            <span className="trending-widget__rank">{String(index + 1).padStart(2, '0')}</span>
            <div className="trending-widget__content">
              <h4 className="trending-widget__headline">{news.title}</h4>
              <div className="trending-widget__meta">
                <span className="trending-widget__source">{SOURCES[news.source]?.name}</span>
                <span className="trending-widget__dot">·</span>
                <span className="trending-widget__time">{timeAgo(news.publishedAt)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
