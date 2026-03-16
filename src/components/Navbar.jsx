/**
 * Navbar — sticky responsive navigation bar
 * Turns opaque with shadow when the user scrolls down.
 */
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

const NAV_LINKS = [
  { label: 'Home',      path: '/'          },
  { label: 'About',     path: '/about'     },
  { label: 'Services',  path: '/services'  },
  { label: 'Training',  path: '/training'  },
  { label: 'Career',    path: '/career'    },
  { label: 'Placement', path: '/placement' },
  { label: 'Contact',   path: '/contact'   },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  /* Change navbar style on scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close menu on resize to desktop */
  useEffect(() => {
    const close = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300
        ${scrolled ? 'shadow-md py-1.5' : 'shadow-sm py-3'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo — always on white, always natural colours */}
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="Imagine Pharma Solutions"
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                 ${isActive
                   ? 'text-teal-600 bg-teal-50'
                   : 'text-slate-700 hover:text-primary-900 hover:bg-primary-50'}`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* CTA button */}
          <Link
            to="/contact"
            className="ml-3 px-4 py-2 bg-gradient-to-r from-primary-900 to-teal-500 text-white text-sm font-semibold rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                     ${isActive
                       ? 'bg-teal-50 text-teal-700'
                       : 'text-slate-700 hover:bg-slate-50 hover:text-primary-900'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-2.5 bg-gradient-to-r from-primary-900 to-teal-500 text-white text-sm font-semibold rounded-lg text-center"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
