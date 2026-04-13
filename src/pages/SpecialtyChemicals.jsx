import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const PageWrapper = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
    {children}
  </motion.div>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

const INDEX_LETTERS = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

export default function SpecialtyChemicals() {
  const [query, setQuery] = useState('');

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-900 via-[#0a2d67] to-teal-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.26),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.20),transparent_35%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.span {...fadeUp()} className="text-cyan-200 font-semibold text-sm uppercase tracking-widest">
            Product Index
          </motion.span>
          <motion.h1 {...fadeUp(0.08)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">
            Specialty Chemicals
          </motion.h1>
          <motion.p {...fadeUp(0.16)} className="text-blue-100 text-lg mt-4 max-w-3xl mx-auto">
            A themed catalog page for specialty chemicals. Items can be added here later.
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-xl mb-8">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search specialty chemicals"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-slate-700"
            />
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-14 gap-2">
            {INDEX_LETTERS.map((letter) => (
              <button
                key={letter}
                type="button"
                disabled
                className="h-10 rounded-lg text-sm font-semibold border bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
            <h2 className="font-heading font-bold text-3xl text-primary-900 mb-3">No items listed yet</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              This page is ready for specialty chemical items, but the list is currently empty.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}