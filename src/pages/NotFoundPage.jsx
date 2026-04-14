/* ============================================
   NotFoundPage — 404
   ============================================ */

import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found" id="not-found-page">
      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__message">The page you're looking for doesn't exist.</p>
        <div className="not-found__actions">
          <Link to="/" className="not-found__btn">← Back to Feed</Link>
          <Link to="/articles" className="not-found__btn not-found__btn--ghost">Knowledge Hub</Link>
        </div>
      </div>
    </div>
  );
}
