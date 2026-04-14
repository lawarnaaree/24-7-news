/* ============================================
   TrendingWidget — Sidebar-style trending
   ============================================ */

import { Link } from 'react-router-dom';
import { getTrendingNews } from '../../data/mockNews';
import { SOURCES } from '../../utils/constants';
import { timeAgo } from '../../utils/formatDate';
import './TrendingWidget.css';

export default function TrendingWidget() {
  const trending = getTrendingNews(5);

  return (
    <div className="trending" id="trending-widget">
      <h3 className="trending__title">🔥 Trending</h3>
      <div className="trending__list">
        {trending.map((news, i) => (
          <Link to={`/news/${news.id}`} key={news.id} className="trending__item">
            <span className="trending__rank">{i + 1}</span>
            <div className="trending__content">
              <h4 className="trending__headline">{news.title}</h4>
              <span className="trending__meta">
                {SOURCES[news.source]?.name} · {timeAgo(news.publishedAt)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
