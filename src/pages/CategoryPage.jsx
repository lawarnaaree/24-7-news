/* ============================================
   CategoryPage — News filtered by category
   ============================================ */

import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import NewsList from '../components/News/NewsList';
import TrendingWidget from '../components/Widgets/TrendingWidget';
import { getNewsByCategory } from '../data/mockNews';
import { CATEGORIES } from '../utils/constants';
import './CategoryPage.css';

export default function CategoryPage() {
  const { slug } = useParams();

  const category = CATEGORIES.find((c) => c.slug === slug);
  const news = useMemo(() => getNewsByCategory(slug), [slug]);

  if (!category) {
    return (
      <div className="category-page container">
        <div className="category-page__not-found">
          <h2>Category not found</h2>
          <p>The category &quot;{slug}&quot; doesn&apos;t exist.</p>
          <Link to="/" className="category-page__back-btn">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page container" id="category-page">
      {/* Category Header */}
      <div className="category-page__header animate-fade-in-up">
        <div className="category-page__header-content">
          <span className="category-page__icon">{category.icon}</span>
          <div>
            <h1 className="category-page__title">{category.name}</h1>
            <p className="category-page__count">{news.length} articles</p>
          </div>
        </div>

        {/* Related categories */}
        <div className="category-page__related">
          {CATEGORIES.filter((c) => c.slug !== 'all' && c.slug !== slug)
            .slice(0, 5)
            .map((c) => (
              <Link key={c.slug} to={`/category/${c.slug}`} className="category-page__related-pill">
                {c.icon} {c.name}
              </Link>
            ))}
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="category-page__layout">
        <div className="category-page__main">
          <NewsList articles={news} />
        </div>
        <aside className="category-page__sidebar">
          <TrendingWidget />
        </aside>
      </div>
    </div>
  );
}
