import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  Zap,
  Lock,
  Download,
  GraduationCap,
  Award,
  FileText,
  Briefcase,
  User,
  Send,
  Home,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { openRecruiterView } = usePortfolio();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll to add shadow/border effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: User },
    { label: 'Academic Vault', path: '/education', icon: GraduationCap },
    { label: 'Hall of Fame', path: '/achievements', icon: Award },
    { label: 'Certificates', path: '/certificates', icon: FileText },
    { label: 'Projects', path: '/projects', icon: Briefcase },
    { label: 'Resume', path: '/resume', icon: Download },
    { label: 'Contact', path: '/contact', icon: Send },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-[#301934]/90 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? 'border-[#F4B942]/20 shadow-lg shadow-black/30'
          : 'border-[#E8EDF2]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#301934] to-[#1E0F21] border border-[#F4B942]/60 flex items-center justify-center text-[#F4B942] font-black text-sm shadow-md group-hover:border-[#F4B942] transition-all"
          >
            SN
          </motion.div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-[#E8EDF2] group-hover:text-[#F4B942] transition-colors duration-200">
              Santu Nandi
            </span>
            <span className="block text-[10px] text-[#A592AD] font-mono tracking-wider -mt-1">
              Java Full Stack • CU
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold">
          {navLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors duration-200 ${
                  active
                    ? 'text-[#F4B942]'
                    : 'text-[#E8EDF2]/70 hover:text-[#E8EDF2]'
                }`}
              >
                {/* Animated sliding background pill */}
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-lg bg-[#E8EDF2]/10 border border-[#F4B942]/30"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & Controls */}
        <div className="flex items-center gap-2">
          {/* Recruiter Quick View CTA Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={openRecruiterView}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-colors shadow marigold-glow-subtle"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Recruiter View</span>
          </motion.button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg bg-[#1E0F21] border border-[#E8EDF2]/15 text-[#E8EDF2]/80 hover:text-[#F4B942] hover:border-[#F4B942]/30 transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Admin Link */}
          <Link
            to="/admin"
            title="Protected Admin Command Center"
            className="p-2 rounded-lg bg-[#1E0F21] border border-[#E8EDF2]/15 text-[#E8EDF2]/80 hover:text-[#F4B942] hover:border-[#F4B942]/30 transition-all duration-200"
          >
            <Lock className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#1E0F21] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:border-[#F4B942]/30 transition-all duration-200"
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
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
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-[#1E0F21] border-b border-[#E8EDF2]/15 px-4 pt-3 pb-6 space-y-2">
              <div className="grid grid-cols-2 gap-2 pb-2">
                {navLinks.map((item, i) => {
                  const active = isActive(item.path);
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`p-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                          active
                            ? 'bg-[#301934] text-[#F4B942] border border-[#F4B942]/40'
                            : 'bg-[#28132B] text-[#E8EDF2]/90 hover:bg-[#301934] hover:text-[#F4B942]'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${active ? 'text-[#F4B942]' : 'text-[#A592AD]'}`} />
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E8EDF2]/10 flex flex-col gap-2">
                <motion.button
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.04, duration: 0.2 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openRecruiterView();
                  }}
                  className="w-full py-2.5 rounded-lg text-xs font-bold bg-[#F4B942] text-[#301934] flex items-center justify-center gap-2 shadow hover:bg-[#ffc957] transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  <span>Launch Recruiter Quick View</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
