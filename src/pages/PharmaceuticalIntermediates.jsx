import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import {
  PHARMA_INTERMEDIATE_LETTERS,
  PHARMA_INTERMEDIATE_TOTAL,
  PHARMA_INTERMEDIATES,
} from '../data/pharmaceuticalIntermediates';

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

const slugifyIntermediateName = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function PharmaceuticalIntermediates() {
  const [query, setQuery] = useState('');

  const groupedItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = {};

    for (const letter of PHARMA_INTERMEDIATE_LETTERS) {
      const source = PHARMA_INTERMEDIATES[letter] || [];
      const filtered = normalizedQuery
        ? source.filter(({ name }) => name.toLowerCase().includes(normalizedQuery))
        : source;

      if (filtered.length) {
        result[letter] = filtered;
      }
    }

    return result;
  }, [query]);

  const visibleLetters = Object.keys(groupedItems);
  const visibleCount = visibleLetters.reduce((sum, letter) => sum + groupedItems[letter].length, 0);

  const handleJump = (letter) => {
    const target = document.getElementById(`letter-${letter}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-900 via-[#0a2d67] to-teal-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.26),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.20),transparent_35%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.span {...fadeUp()} className="text-cyan-200 font-semibold text-sm uppercase tracking-widest">
            Product Index
          </motion.span>
          <motion.h1 {...fadeUp(0.08)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">
            Pharmaceutical Intermediates
          </motion.h1>
          <motion.p {...fadeUp(0.16)} className="text-blue-100 text-lg mt-4 max-w-3xl mx-auto">
            A comprehensive A-Z catalog of pharmaceutical intermediates in our portfolio.
          </motion.p>
          <motion.p {...fadeUp(0.22)} className="text-cyan-200 text-sm mt-4 font-semibold tracking-wide">
            {visibleCount} items shown / {PHARMA_INTERMEDIATE_TOTAL} total
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
              placeholder="Search by intermediate name"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-slate-700"
            />
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-14 gap-2">
            {INDEX_LETTERS.map((letter) => {
              const hasItems = (groupedItems[letter] || []).length > 0;
              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => handleJump(letter)}
                  disabled={!hasItems}
                  className={`h-10 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                    hasItems
                      ? 'bg-white text-primary-800 border-slate-300 hover:border-cyan-500 hover:text-cyan-700'
                      : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          {visibleLetters.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
              No intermediates found for the current search.
            </div>
          )}

          {visibleLetters.map((letter, i) => (
            <motion.div key={letter} id={`letter-${letter}`} {...fadeUp(i * 0.03)} className="scroll-mt-28">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-heading font-bold text-4xl text-primary-900">{letter}</h2>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full">
                  {groupedItems[letter].length} items
                </span>
              </div>
              <div className="h-px bg-gradient-to-r from-primary-900/30 via-cyan-400/30 to-transparent mb-4" />

              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {groupedItems[letter].map(({ name }) => (
                  <li key={name}>
                    <Link
                      to={`/pharmaceutical-intermediates/${slugifyIntermediateName(name)}`}
                      className="inline-flex items-center gap-1.5 text-slate-700 hover:text-cyan-700 transition-colors duration-200"
                    >
                      <span>{name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}