import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Lock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { openRecruiterView } = usePortfolio();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#180A1A]/95 backdrop-blur-md border-b border-[#E8EDF2]/10 shadow-sm'
          : 'bg-[#120914]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-lg bg-[#301934] border border-[#F4B942]/40 flex items-center justify-center text-[#F4B942] font-semibold text-xs tracking-wider transition-colors group-hover:border-[#F4B942]">
            SN
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#E8EDF2] group-hover:text-[#F4B942] transition-colors">
              Santu Nandi
            </span>
            <span className="text-[11px] text-[#A592AD] leading-none">
              Java Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  active
                    ? 'text-[#F4B942] bg-[#301934]/60'
                    : 'text-[#E8EDF2]/75 hover:text-[#E8EDF2] hover:bg-[#E8EDF2]/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={openRecruiterView}
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-[#301934] text-[#F4B942] border border-[#F4B942]/30 hover:border-[#F4B942] hover:bg-[#3D1E42] transition-colors"
          >
            Quick Summary
          </button>

          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-1.5 rounded-md text-[#A592AD] hover:text-[#E8EDF2] hover:bg-[#E8EDF2]/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            to="/admin"
            title="Admin Login"
            className="p-1.5 rounded-md text-[#A592AD] hover:text-[#E8EDF2] hover:bg-[#E8EDF2]/5 transition-colors"
            aria-label="Admin Portal"
          >
            <Lock className="w-4 h-4" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-[#E8EDF2] hover:bg-[#E8EDF2]/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-[#E8EDF2]/10 bg-[#180A1A]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                      active
                        ? 'text-[#F4B942] bg-[#301934]'
                        : 'text-[#E8EDF2]/80 hover:text-[#E8EDF2] hover:bg-[#E8EDF2]/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-[#E8EDF2]/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openRecruiterView();
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-[#F4B942] hover:bg-[#E8EDF2]/5 rounded-md"
                >
                  Recruiter Quick Summary
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
