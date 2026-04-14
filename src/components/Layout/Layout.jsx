/* ============================================
   Layout — Sidebar + Header + Content shell
   ============================================ */

import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import BreakingTicker from '../News/BreakingTicker';
import './Layout.css';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-layout">
      {/* Fixed elements: Ticker → Header → Sidebar */}
      <BreakingTicker />
      <Navbar
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        mobileMenuOpen={mobileMenuOpen}
      />
      <Sidebar />

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <aside
            className="mobile-sidebar"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Scrollable content area */}
      <div className="app-content">
        <main className="main-feed">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
