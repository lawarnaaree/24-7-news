/* ============================================
   Footer — Site-wide footer
   ============================================ */

import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">⚡</span>
              <span className="footer__logo-text">
                24<span className="footer__logo-slash">/</span>7 NEWS
              </span>
            </Link>
            <p className="footer__tagline">
              Always on, always informed. Your trusted source for curated news from around the world.
            </p>
          </div>

          {/* Categories */}
          <div className="footer__section">
            <h4 className="footer__heading">Categories</h4>
            <nav className="footer__links">
              <Link to="/category/nepal">Nepal</Link>
              <Link to="/category/politics">Politics</Link>
              <Link to="/category/world">World</Link>
              <Link to="/category/geopolitics">Geopolitics</Link>
              <Link to="/category/sports">Sports</Link>
              <Link to="/category/technology">Technology</Link>
            </nav>
          </div>

          {/* Explore */}
          <div className="footer__section">
            <h4 className="footer__heading">Explore</h4>
            <nav className="footer__links">
              <Link to="/articles">Articles</Link>
              <Link to="/category/science">Science</Link>
              <Link to="/category/health">Health</Link>
              <Link to="/category/business">Business</Link>
              <Link to="/category/entertainment">Entertainment</Link>
            </nav>
          </div>

          {/* Sources */}
          <div className="footer__section">
            <h4 className="footer__heading">Sources</h4>
            <nav className="footer__links">
              <span>BBC News</span>
              <span>CNN</span>
              <span>Ekantipur</span>
              <span>Reuters</span>
              <span>Al Jazeera</span>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} 24/7 News. All rights reserved. News content belongs to respective publishers.
          </p>
          <p className="footer__disclaimer">
            Aggregated news — all articles link to their original sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
