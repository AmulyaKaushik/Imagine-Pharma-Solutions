/**
 * Hero — full-page hero section with animated text overlay
 * Uses an Unsplash pharma-lab image via CSS background.
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

/* Stagger animation helpers */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-teal-900/70" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10  w-96 h-96 rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Pharma Research &amp; Training Centre
          </motion.div>

          {/* Main heading */}
          <motion.h1 variants={item} className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Empowering Future{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
              Pharmaceutical Scientists
            </span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p variants={item} className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Advanced Pharma Research Training, Consultancy &amp; Chemical Solutions —
            bridging academia with industry excellence.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/training"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-200"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
            {[
              { value: '500+', label: 'Students Trained' },
              { value: '15+', label: 'Industry Experts' },
              { value: '100%', label: 'Placement Support' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-bold text-2xl sm:text-3xl text-teal-300">{stat.value}</p>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
