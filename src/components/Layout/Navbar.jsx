/* ============================================
   Navbar — minimalist text-only header
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
              <span className="header__logo-text">
                24<span className="header__logo-sep">/</span>7 news
              </span>
            </Link>
          </div>

          <form className="header__search" onSubmit={handleSearch}>
            <input 
              id="header-search"
              type="text" 
              placeholder="Search news..." 
              className="header__search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="header__search-shortcut">
              <kbd>Ctrl K</kbd>
            </div>
          </form>

          <div className="header__right">
            <button className="header__action-btn" onClick={() => setIsLoginModalOpen(true)}>
              Login
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
