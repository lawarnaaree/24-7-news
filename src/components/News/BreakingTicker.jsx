/* ============================================
   BreakingTicker — Slim animated ticker (daily.dev style)
   ============================================ */

import { getBreakingNews } from '../../data/mockNews';
import { SOURCES } from '../../utils/constants';
import './BreakingTicker.css';

export default function BreakingTicker() {
  const breakingNews = getBreakingNews();

  if (breakingNews.length === 0) return null;

  const tickerItems = [...breakingNews, ...breakingNews, ...breakingNews];

  return (
    <div className="ticker" id="breaking-ticker">
      <div className="ticker__badge">
        <span className="ticker__dot"></span>
        LIVE
      </div>
      <div className="ticker__track">
        <div className="ticker__content">
          {tickerItems.map((news, index) => (
            <span key={`${news.id}-${index}`} className="ticker__item">
              <span className="ticker__source">{SOURCES[news.source]?.name}</span>
              <span className="ticker__text">{news.title}</span>
              <span className="ticker__sep">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
