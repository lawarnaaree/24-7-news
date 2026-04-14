/* ============================================
   NotFoundPage — Text-only 404
   ============================================ */

import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Page Not Found</h2>
      <p className="not-found__text">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="not-found__link">
        Back to Home
      </Link>
    </div>
  );
}
