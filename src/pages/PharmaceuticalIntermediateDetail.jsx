import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, FlaskConical, Shield, Sparkles } from 'lucide-react';
import {
  PHARMA_INTERMEDIATE_LETTERS,
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

const slugifyIntermediateName = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const flatItems = PHARMA_INTERMEDIATE_LETTERS.flatMap((letter) =>
  (PHARMA_INTERMEDIATES[letter] || []).map((item) => ({
    ...item,
    letter,
    slug: slugifyIntermediateName(item.name),
  })),
);

export default function PharmaceuticalIntermediateDetail() {
  const { slug } = useParams();

  const item = useMemo(
    () => flatItems.find((entry) => entry.slug === slug),
    [slug],
  );

  if (!item) {
    return (
      <PageWrapper>
        <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-teal-600 font-semibold uppercase tracking-widest text-sm">Product Not Found</p>
            <h1 className="font-heading font-bold text-4xl text-primary-900 mt-3">Intermediate not available</h1>
            <p className="text-slate-600 mt-4">The requested pharmaceutical intermediate could not be found in our catalog.</p>
            <Link to="/pharmaceutical-intermediates" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-primary-900 text-white font-semibold hover:bg-primary-800 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Catalog
            </Link>
          </div>
        </section>
      </PageWrapper>
    );
  }

  const title = item.name;
  const initials = title.slice(0, 1).toUpperCase();

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-18 bg-gradient-to-br from-primary-900 via-[#0a2d67] to-teal-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.26),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.20),transparent_35%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <Link to="/pharmaceutical-intermediates" className="inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Back to Pharmaceutical Intermediates
          </Link>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center mt-6">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-300/25 bg-white/5 text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-4">
                Letter {item.letter}
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">{title}</h1>
              <p className="text-blue-100 text-lg leading-relaxed mt-5 max-w-2xl">
                {title} is listed in our pharmaceutical intermediates catalog. Use this page to review the product and connect with our team for more details.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-900 font-semibold hover:scale-105 transition-transform">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/pharmaceutical-intermediates" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors">
                  Browse More
                </Link>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.12)} className="bg-white/10 border border-white/15 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-300 to-teal-400 text-primary-900 flex items-center justify-center text-3xl font-heading font-bold mb-5">
                {initials}
              </div>
              <h2 className="font-heading font-bold text-2xl text-white mb-3">Product Overview</h2>
              <p className="text-blue-100 leading-relaxed">
                We can add specifications, CAS number, purity, availability, technical notes, and inquiry details for this product as needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: FlaskConical, title: 'Process Support', desc: 'Suitable for process development and scale-up discussions.' },
            { icon: Shield, title: 'Quality Focus', desc: 'Presented with a clear focus on quality and compliance.' },
            { icon: Sparkles, title: 'Product Details', desc: 'Space is available for specifications, documents, and inquiry notes.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.08)} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-700 to-teal-600 mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-primary-900 mb-2">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp()}>
            <p className="text-teal-600 font-semibold uppercase tracking-widest text-xs mb-3">Need assistance?</p>
            <h2 className="font-heading font-bold text-3xl text-primary-900 mb-3">Discuss {title} with our team</h2>
            <p className="text-slate-600 mb-6">Reach out if you want more product information or would like to discuss a specific requirement.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-primary-900 text-white font-semibold rounded-xl hover:bg-primary-800 transition-colors duration-200">
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}