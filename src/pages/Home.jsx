/**
 * Home page — assembles all sections for the landing experience
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import {
  FlaskConical, Briefcase, Atom, Leaf,
  GraduationCap, BookOpen, Users, ArrowRight,
} from 'lucide-react';
import Hero         from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

/* ── helpers ─────────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

/* ── data ─────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: FlaskConical,
    title: 'Pharma Research & Training',
    desc: 'Advanced hands-on training for pharmaceutical students and working professionals.',
    color: 'from-primary-600 to-primary-800',
    path: '/services',
  },
  {
    icon: Briefcase,
    title: 'Business Consulting',
    desc: 'Expert guidance for pharma companies in R&D, manufacturing, and regulatory compliance.',
    color: 'from-teal-500 to-teal-700',
    path: '/services',
  },
  {
    icon: Atom,
    title: 'APIs & Intermediates',
    desc: 'High-quality Active Pharmaceutical Ingredients and pharmaceutical intermediates.',
    color: 'from-blue-500 to-blue-700',
    path: '/products',
  },
  {
    icon: Leaf,
    title: 'Specialty Chemicals',
    desc: 'Reliable specialty chemical manufacturing and supply for diverse industrial needs.',
    color: 'from-emerald-500 to-emerald-700',
    path: '/products',
  },
];

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'Expert Faculty',        desc: 'PhD-qualified industry veterans' },
  { icon: BookOpen,      label: 'Practical Curriculum',  desc: 'Lab-first, industry-aligned content' },
  { icon: Users,         label: 'Placement Support',     desc: '100% career guidance & placement' },
  { icon: Atom,          label: 'Modern Infrastructure', desc: 'State-of-the-art lab facilities' },
];

const ABOUT_SECTION_CARDS = [
  {
    icon: FlaskConical,
    title: 'Pharmaceutical Manufacturing',
    desc: 'State-of-the-art certified facilities producing oral solids, injectables, and topicals at scale with zero-compromise quality.',
    stat: '99.8% BATCH PASS RATE',
    span: 'lg:col-span-8',
  },
  {
    icon: Briefcase,
    title: 'Research & Development',
    desc: 'Dedicated R&D labs accelerating drug discovery from preclinical through Phase III, with 40+ molecules in active pipeline.',
    stat: '40+ ACTIVE MOLECULES',
    span: 'lg:col-span-4',
  },
  {
    icon: Atom,
    title: 'Product Consultancy',
    desc: 'Temperature-controlled logistics ensuring product integrity from our warehouses to hospital pharmacies in 50+ countries.',
    stat: '50+ COUNTRIES, 48HR DELIVERY',
    span: 'lg:col-span-4',
  },
  {
    icon: Leaf,
    title: 'Pharma Research And Training',
    desc: 'End-to-end regulatory support: USFDA, EMA, WHO-GMP dossier preparation, submissions, and post-approval lifecycle management.',
    stat: 'USFDA · EMA · WHO-GMP',
    span: 'lg:col-span-8',
  },
];

/* ── component ─────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Key Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Services"
            subtitle="End-to-end solutions spanning training, consulting, manufacturing, and supply."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
            {SERVICES.map(({ icon: Icon, title, desc, color, path }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.1)}
                className="group bg-white rounded-2xl shadow hover:shadow-xl p-6 border border-slate-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                </div>
                <h3 className="font-heading font-semibold text-primary-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link to={path} className="text-teal-600 font-medium text-sm hover:text-teal-700 inline-flex items-center gap-1 group">
                  Read more <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Company snapshot */}
      <section className="py-20 bg-[#020a25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-8">
            <motion.div {...fadeUp()} className="lg:col-span-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300 text-xs uppercase tracking-wider mb-4">
                What We Do
              </div>
              <h2 className="font-heading text-5xl leading-[0.95] text-white max-w-xl">
                End-to-End <span className="text-cyan-300 italic">Pharmaceutical</span><br />Solutions
              </h2>
            </motion.div>
            <motion.p {...fadeUp(0.12)} className="lg:col-span-4 text-slate-400 text-lg leading-relaxed">
              From speciality chemical to API - we handle every stage of the pharmaceutical value chain with precision and accountability.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {ABOUT_SECTION_CARDS.map(({ icon: Icon, title, desc, stat, span }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.1)}
                className={`group rounded-2xl p-7 border border-cyan-400/20 bg-gradient-to-br from-[#091a49]/95 to-[#07133a]/95 hover:border-cyan-300/35 transition-all duration-300 ${span}`}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0f2a67] border border-cyan-400/20 mb-5">
                  <Icon className="w-5 h-5 text-cyan-300" strokeWidth={1.9} />
                </div>
                <h3 className="font-heading font-semibold text-white text-4xl mb-3">{title}</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-7 max-w-2xl">{desc}</p>
                <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">• {stat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Imagine Pharma?"
            subtitle="Our unique blend of academic rigor and industry experience sets every learner apart."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
            {HIGHLIGHTS.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                {...fadeUp(i * 0.1)}
                className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500/20 mb-4">
                  <Icon className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-1">{label}</h3>
                <p className="text-blue-200 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Training Programs teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Training Programs"
            subtitle="From drug discovery to regulatory affairs — our curriculum covers every dimension of modern pharma."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
            {[
              'Drug Discovery & Development',
              'Chemical Synthesis Foundations',
              'Process Development & Optimization',
              'Quality Control & Analytics',
              'Regulatory Affairs & Compliance',
              'Software Tools: Chemdraw, Reaxys, SciFinder',
            ].map((program, i) => (
              <motion.div
                key={program}
                {...fadeUp(i * 0.08)}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50 transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{program}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-primary-700 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-bold text-3xl text-white mb-3">
              Ready to Start Your Pharma Journey?
            </h2>
            <p className="text-teal-100 mb-7">
              Connect with our team to explore training programs, consulting services, or business partnerships.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-teal-700 font-semibold rounded-xl shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
