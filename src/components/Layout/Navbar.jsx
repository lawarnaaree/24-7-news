/* ============================================
   Navbar — Main navigation header
   Logo, search, category links, theme toggle
   ============================================ */

import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/category/nepal', label: 'Nepal' },
    { to: '/category/politics', label: 'Politics' },
    { to: '/category/world', label: 'World' },
    { to: '/category/sports', label: 'Sports' },
    { to: '/category/technology', label: 'Tech' },
    { to: '/category/business', label: 'Business' },
    { to: '/articles', label: 'Articles' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="navbar" id="main-navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" id="logo-link">
          <span className="navbar__logo-icon">⚡</span>
          <span className="navbar__logo-text">
            24<span className="navbar__logo-slash">/</span>7
          </span>
          <span className="navbar__logo-label">NEWS</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar__nav" id="main-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${isActive(link.to) ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          {/* Search */}
          <form
            className={`navbar__search ${searchOpen ? 'navbar__search--open' : ''}`}
            onSubmit={handleSearch}
            id="search-form"
          >
            <input
              ref={searchRef}
              type="text"
              placeholder="Search news & articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="navbar__search-input"
              id="search-input"
            />
            <button
              type="button"
              className="navbar__search-toggle"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle search"
              id="search-toggle"
            >
              {searchOpen ? '✕' : '🔍'}
            </button>
          </form>

          {/* Theme Toggle */}
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            <span className={`navbar__hamburger ${mobileMenuOpen ? 'navbar__hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__mobile-link ${isActive(link.to) ? 'navbar__mobile-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <form className="navbar__mobile-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search news & articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="navbar__mobile-search-input"
          />
          <button type="submit" className="navbar__mobile-search-btn">Search</button>
        </form>
      </div>
    </header>
  );
}
