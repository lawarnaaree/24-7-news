/* ============================================
   CategoryPill — Feed filter tabs (daily.dev style)
   ============================================ */

import './CategoryPill.css';

export default function CategoryPill({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="feed-tabs" id="category-pills" role="tablist">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          className={`feed-tab ${activeCategory === cat.slug ? 'feed-tab--active' : ''}`}
          onClick={() => onCategoryChange(cat.slug)}
          role="tab"
          aria-selected={activeCategory === cat.slug}
        >
          <span className="feed-tab__icon">{cat.icon}</span>
          <span className="feed-tab__label">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
