/**
 * Footer — site-wide footer with company info, quick links, and contact.
 */
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import logo from '../assets/images/logo.jpeg';

const QUICK_LINKS = [
  { label: 'Home',           path: '/'          },
  { label: 'About Us',       path: '/about'     },
  { label: 'Services',       path: '/services'  },
  { label: 'Products',       path: '/products'  },
  { label: 'Career',         path: '/career'    },
  { label: 'Placement',      path: '/placement' },
  { label: 'Contact',        path: '/contact'   },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#060d26] to-[#04091e] text-white border-t border-cyan-400/15">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="Imagine Pharma Solutions"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Bridging academia and industry through world-class pharmaceutical
            research training, consulting, and chemical solutions.
          </p>
          {/* Social icons placeholder */}
          <div className="flex gap-3 mt-5">
            {['LinkedIn', 'Twitter', 'YouTube'].map(s => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-teal-600 transition-colors duration-200 flex items-center justify-center text-xs font-bold text-white"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {QUICK_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-slate-300 hover:text-teal-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 group-hover:bg-teal-300 transition-colors" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            {[
              'Pharma Research Training',
              'Business Consulting',
              'API & Intermediates',
              'Specialty Chemicals',
              'Career Counselling',
              'Placement Support',
            ].map(s => (
              <li key={s} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="mailto:imaginepharmasolutions@gmail.com" className="flex items-start gap-2 text-slate-300 hover:text-teal-400 text-sm transition-colors duration-200">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-500" />
                imaginepharmasolutions@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+918800619561" className="flex items-center gap-2 text-slate-300 hover:text-teal-400 text-sm transition-colors duration-200">
                <Phone className="w-4 h-4 flex-shrink-0 text-teal-500" />
                +91 88006 19561 — Dr. Ashish Gupta
              </a>
            </li>
            <li>
              <a href="tel:+917042112854" className="flex items-center gap-2 text-slate-300 hover:text-teal-400 text-sm transition-colors duration-200">
                <Phone className="w-4 h-4 flex-shrink-0 text-teal-500" />
                +91 70421 12854 — Dr. Anuj Kumar Rathi
              </a>
            </li>
            <li className="flex items-start gap-2 text-slate-300 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-500" />
              <span>Office 605, 6th Floor, Tower A,<br />Solitairian City Centre, Knowledge Park 3,<br />Greater Noida, Uttar Pradesh — 201308</span>
            </li>
            <li>
              <a href="https://www.imaginepharmasolutions.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-teal-400 text-sm transition-colors duration-200">
                <Globe className="w-4 h-4 flex-shrink-0 text-teal-500" />
                www.imaginepharmasolutions.co.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Imagine Pharma Solutions. All rights reserved.</p>
          <p>Designed &amp; built with care for pharmaceutical excellence.</p>
        </div>
      </div>
    </footer>
  );
}
