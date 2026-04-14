/* ============================================
   CategoryPage — daily.dev filtered feed
   ============================================ */

import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import NewsList from '../components/News/NewsList';
import { getNewsByCategory } from '../data/mockNews';
import { CATEGORIES } from '../utils/constants';
import './CategoryPage.css';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === slug);
  const news = useMemo(() => getNewsByCategory(slug), [slug]);

  if (!category) {
    return (
      <div className="cat-page">
        <div className="cat-page__empty">
          <h2>Category not found</h2>
          <Link to="/" className="cat-page__back">← Back to Feed</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cat-page" id="category-page">
      <div className="cat-page__header">
        <span className="cat-page__icon">{category.icon}</span>
        <div>
          <h1 className="cat-page__title">{category.name}</h1>
          <p className="cat-page__count">{news.length} posts</p>
        </div>
      </div>

      <div className="cat-page__related">
        {CATEGORIES.filter((c) => c.slug !== 'all' && c.slug !== slug)
          .slice(0, 6)
          .map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="cat-page__pill">
              {c.icon} {c.name}
            </Link>
          ))}
      </div>

      <NewsList articles={news} />
    </div>
  );
}
