/* ============================================
   Sidebar — Minimalist text-only navigation
   ============================================ */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const mainNav = [
  { to: '/', label: 'My Feed' },
  { to: '/category/nepal', label: 'Nepal' },
  { to: '/category/world', label: 'World' },
  { to: '/articles', label: 'Knowledge Hub' },
];

const discoverNav = [
  { to: '/category/politics', label: 'Politics' },
  { to: '/category/geopolitics', label: 'Geopolitics' },
  { to: '/category/sports', label: 'Sports' },
  { to: '/category/technology', label: 'Technology' },
  { to: '/category/business', label: 'Business' },
  { to: '/category/science', label: 'Science' },
  { to: '/category/health', label: 'Health' },
  { to: '/category/entertainment', label: 'Entertainment' },
];

export default function Sidebar() {
  const location = useLocation();
  const [discoverOpen, setDiscoverOpen] = useState(true);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="sidebar" id="main-sidebar">
      <div className="sidebar__inner">
        <nav className="sidebar__nav" aria-label="Main navigation">
          <div className="sidebar__section-label">Menu</div>
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`sidebar__link ${isActive(item.to) ? 'sidebar__link--active' : ''}`}
            >
              <span className="sidebar__link-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar__divider"></div>

        <nav className="sidebar__nav" aria-label="Categories">
          <button
            className="sidebar__section-toggle"
            onClick={() => setDiscoverOpen(!discoverOpen)}
          >
            <span className="sidebar__section-label">Discover</span>
          </button>

          {discoverOpen && (
            <div className="sidebar__section-content">
              {discoverNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`sidebar__link ${isActive(item.to) ? 'sidebar__link--active' : ''}`}
                >
                  <span className="sidebar__link-label">{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </nav>

        <div className="sidebar__divider"></div>

        <nav className="sidebar__nav">
          <div className="sidebar__section-label">Saved</div>
          <Link
            to="/bookmarks"
            className={`sidebar__link ${isActive('/bookmarks') ? 'sidebar__link--active' : ''}`}
          >
            <span className="sidebar__link-label">Bookmarks</span>
          </Link>
          <Link
            to="/search?q=trending"
            className="sidebar__link"
          >
            <span className="sidebar__link-label">Trending</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
