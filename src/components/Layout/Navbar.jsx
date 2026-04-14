/* ============================================
   Navbar — Top header bar (daily.dev style)
   Slim header: logo | search | actions
   ============================================ */

import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

export default function Navbar({ onMobileMenuToggle, mobileMenuOpen }) {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape') {
        searchRef.current?.blur();
        setSearchFocused(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      searchRef.current?.blur();
    }
  };

  return (
    <header className="header" id="main-header">
      <div className="header__inner">
        {/* Left: Logo + Mobile Toggle */}
        <div className="header__left">
          <button
            className="header__mobile-toggle"
            onClick={onMobileMenuToggle}
            aria-label="Toggle menu"
          >
            <span className={`header__hamburger ${mobileMenuOpen ? 'header__hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <Link to="/" className="header__logo" id="logo-link">
            <span className="header__logo-icon">⚡</span>
            <span className="header__logo-text">
              24<span className="header__logo-sep">/</span>7
            </span>
            <span className="header__logo-badge">news</span>
          </Link>
        </div>

        {/* Center: Search */}
        <form
          className={`header__search ${searchFocused ? 'header__search--focused' : ''}`}
          onSubmit={handleSearch}
          id="search-form"
        >
          <svg className="header__search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="header__search-input"
            id="search-input"
          />
          <span className="header__search-shortcut">
            <kbd>Ctrl</kbd><kbd>K</kbd>
          </span>
        </form>

        {/* Right: Actions */}
        <div className="header__right">
          <button
            className="header__action-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button className="header__action-btn" aria-label="Notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          <div className="header__avatar" title="User">
            <span>U</span>
          </div>
        </div>
      </div>
    </header>
  );
}
