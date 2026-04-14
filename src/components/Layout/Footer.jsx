/* ============================================
   Footer — Minimal footer (daily.dev style)
   ============================================ */

import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer__inner">
        <p className="footer__text">
          © {new Date().getFullYear()} 24/7 News — Aggregated news.
          All articles link to their original sources.
        </p>
        <div className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/articles">Knowledge Hub</Link>
          <a href="https://github.com/lawarnaaree/24-7-news" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
