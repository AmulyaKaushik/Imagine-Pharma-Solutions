/**
 * Hero — full-page hero section with animated text overlay
 * Uses an Unsplash pharma-lab image via CSS background.
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import pharmaLabBg from '../assets/images/Pharmaceutical-Lab-Setup.png';

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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={pharmaLabBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15 brightness-[0.32] saturate-[0.62] contrast-[0.92]"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020a25]/96 via-[#071948]/94 to-[#061533]/95" />
      <div className="absolute inset-0 bg-[#04174f]/64" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_52%,rgba(56,189,248,0.04),transparent_46%)]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="grid grid-cols-1 gap-12 items-end">
            <div>

              {/* Main heading */}
              <motion.h1 variants={item} className="font-heading font-medium text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.96] mb-6 text-left">
                Innovating
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 italic">
                  Chemistry,
                </span>
                <br />
                Delivering Trust.
              </motion.h1>

              {/* Sub-heading */}
              <motion.p variants={item} className="text-lg md:text-2xl text-blue-100 max-w-2xl mb-10 leading-relaxed text-left">
                Pharmaceutical excellence. From molecule to patient certified, rigorously tested, consistently trusted.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#3bc0ff] to-[#5ed2ff] text-[#071736] font-semibold rounded-md shadow-[0_0_30px_rgba(56,189,248,0.2)] hover:brightness-105 transition-all duration-200"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0a1538]/35 border border-white/30 text-white font-medium rounded-md backdrop-blur-sm hover:bg-[#0f1d49]/50 transition-all duration-200"
                >
                  View Product Portfolio
                </Link>
              </motion.div>
            </div>

          </div>
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
