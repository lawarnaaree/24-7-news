/* ============================================
   NotFoundPage — 404 page
   ============================================ */

import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found container" id="not-found-page">
      <div className="not-found__content animate-fade-in-up">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__message">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="not-found__btn not-found__btn--primary">
            ← Back to Home
          </Link>
          <Link to="/articles" className="not-found__btn not-found__btn--secondary">
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
