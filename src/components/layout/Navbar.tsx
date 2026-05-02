import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleTheme } from '../../features/theme/themeSlice';
import { logout } from '../../features/auth/authSlice';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive ? 'text-forest-400' : 'text-sage-300 hover:text-white'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="navIndicator"
          className="absolute inset-0 bg-forest-500/10 border border-forest-500/20 rounded-lg"
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(s => s.theme);
  const { user, isAuthenticated } = useAppSelector(s => s.auth);
  const favCount = useAppSelector(s => s.plants.favorites.length);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/dashboard', label: '📊 Dashboard' },
    { to: '/plants', label: '🌿 Plants' },
    { to: '/scanner', label: '🔍 Scanner' },
    { to: '/favorites', label: `❤️ Favorites ${favCount > 0 ? `(${favCount})` : ''}` },
    { to: '/health', label: '🦠 Health' },
    { to: '/learn', label: '🎓 Learn' },
  ];

  return (
    <header className={`sticky top-0 z-50 ${isDark ? 'bg-sage-950/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDark ? 'border-sage-800/50' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-sage-900'}`}>
              PlantAI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-sage-400 hover:text-white hover:bg-sage-800' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
              title="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <img src={user?.avatar} alt={user?.name} className="w-8 h-8 rounded-full border-2 border-forest-500" />
                <button
                  onClick={() => dispatch(logout())}
                  className={`text-xs px-3 py-1.5 rounded-lg ${isDark ? 'text-sage-400 hover:text-white hover:bg-sage-800' : 'text-gray-500 hover:bg-gray-100'} transition-colors`}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-primary py-2 px-4 text-sm">
                Sign In
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${isDark ? 'text-sage-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden pb-4"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map(link => (
                  <NavLink key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
