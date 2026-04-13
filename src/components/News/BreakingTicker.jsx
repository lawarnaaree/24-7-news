/* ============================================
   BreakingTicker — Animated breaking news bar
   ============================================ */

import { getBreakingNews } from '../../data/mockNews';
import { SOURCES } from '../../utils/constants';
import './BreakingTicker.css';

export default function BreakingTicker() {
  const breakingNews = getBreakingNews();

  if (breakingNews.length === 0) return null;

  // Duplicate for seamless infinite scroll
  const tickerItems = [...breakingNews, ...breakingNews, ...breakingNews];

  return (
    <div className="ticker" id="breaking-ticker">
      <div className="ticker__label">
        <span className="ticker__pulse"></span>
        <span className="ticker__label-text">BREAKING</span>
      </div>
      <div className="ticker__track">
        <div className="ticker__content">
          {tickerItems.map((news, index) => (
            <span key={`${news.id}-${index}`} className="ticker__item">
              <span className="ticker__source">{SOURCES[news.source]?.name}</span>
              <span className="ticker__text">{news.title}</span>
              <span className="ticker__separator">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
