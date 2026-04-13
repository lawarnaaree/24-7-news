/* ============================================
   CategoryPill — Clickable filter pills
   ============================================ */

import './CategoryPill.css';

export default function CategoryPill({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-pills" id="category-pills" role="tablist">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          className={`category-pill ${activeCategory === cat.slug ? 'category-pill--active' : ''}`}
          onClick={() => onCategoryChange(cat.slug)}
          role="tab"
          aria-selected={activeCategory === cat.slug}
          id={`pill-${cat.slug}`}
        >
          <span className="category-pill__icon">{cat.icon}</span>
          <span className="category-pill__label">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
