/* ============================================
   Navbar — daily.dev style header with search
   Synced with Navbar.css classes
   ============================================ */

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../Common/LoginModal';
import './Navbar.css';

export default function Navbar({ onMobileMenuToggle, mobileMenuOpen }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('header-search')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="header" id="main-header">
        <div className="header__inner">
          {/* Logo & Sidebar Toggle */}
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
            <Link to="/" className="header__logo">
              <span className="header__logo-icon">⚡</span>
              <span className="header__logo-text">
                24<span className="header__logo-sep">/</span>7
              </span>
              <span className="header__logo-badge">news</span>
            </Link>
          </div>

          {/* Center: Search */}
          <form className="header__search" onSubmit={handleSearch}>
            <svg className="header__search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input 
              id="header-search"
              type="text" 
              placeholder="Search..." 
              className="header__search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="header__search-shortcut">
              <kbd>Ctrl</kbd><kbd>K</kbd>
            </div>
          </form>

          {/* Right: Actions */}
          <div className="header__right">
            <button className="header__action-btn" title="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button className="header__action-btn" title="Theme Toggle (TBD)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M19.78 4.22l-1.42 1.42" />
              </svg>
            </button>
            <button 
              className="header__avatar" 
              onClick={() => setIsLoginModalOpen(true)}
              title="Profile"
            >
              L
            </button>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}
