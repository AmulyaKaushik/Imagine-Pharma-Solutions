/**
 * Navbar — sticky responsive navigation bar
 * Turns opaque with shadow when the user scrolls down.
 */
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.jpeg';

const NAV_LINKS = [
  { label: 'Home',      path: '/'          },
  { label: 'About',     path: '/about'     },
  { label: 'Services',  path: '/services'  },
  { label: 'Products',  path: '/products'  },
  { label: 'Career',    path: '/career'    },
  { label: 'Contact',   path: '/contact'   },
];

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);

  /* Close menu on resize to desktop */
  useEffect(() => {
    const close = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 !bg-white border-b border-[#e2e8f0] shadow-[0_4px_16px_rgba(15,23,42,0.04)] py-3"
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-[1fr_auto] md:grid-cols-[260px_1fr_260px] items-center gap-3">

        {/* Logo — always on white, always natural colours */}
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="Imagine Pharma Solutions"
            className="h-12 w-auto object-contain bg-white rounded-md"
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center justify-center gap-3">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-[15px] font-semibold transition-all duration-200
                 ${isActive
                   ? 'text-[#0284c7] bg-[#e0f2fe]'
                   : 'text-[#334155] hover:text-[#0f172a] hover:bg-[#f8fafc]'}`
              }
            >
              {label}
            </NavLink>
          ))}

        </nav>

        <div className="hidden md:flex justify-end">
          {/* CTA button */}
          <Link
            to="/contact"
            className="ml-3 px-8 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#06b6d4] text-white text-[15px] font-semibold rounded-2xl shadow-[0_8px_20px_rgba(14,116,144,0.25)] hover:shadow-[0_12px_26px_rgba(14,116,144,0.34)] transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden justify-self-end p-2 rounded-lg text-[#334155] hover:bg-[#f8fafc] transition-colors duration-200"
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
            className="md:hidden overflow-hidden !bg-white border-t border-[#e2e8f0] shadow-lg"
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
                       ? 'bg-[#e0f2fe] text-[#0284c7]'
                       : 'text-[#334155] hover:bg-[#f8fafc] hover:text-[#0f172a]'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-2.5 bg-gradient-to-r from-[#1e3a8a] to-[#06b6d4] text-white text-sm font-semibold rounded-xl text-center"
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
