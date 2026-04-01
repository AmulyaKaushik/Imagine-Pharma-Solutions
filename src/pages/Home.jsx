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
import pharmaLabImg from '../assets/images/Pharmaceutical-Lab-Setup.png';

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
    path: '/products',
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
    path: '/services',
  },
  {
    icon: Leaf,
    title: 'Specialty Chemicals',
    desc: 'Reliable specialty chemical manufacturing and supply for diverse industrial needs.',
    color: 'from-emerald-500 to-emerald-700',
    path: '/services',
  },
];

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'Expert Faculty',        desc: 'PhD-qualified industry veterans' },
  { icon: BookOpen,      label: 'Practical Curriculum',  desc: 'Lab-first, industry-aligned content' },
  { icon: Users,         label: 'Placement Support',     desc: '100% career guidance & placement' },
  { icon: Atom,          label: 'Modern Infrastructure', desc: 'State-of-the-art lab facilities' },
];

/* ── component ─────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Company snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <motion.div {...fadeUp()}>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mt-2 mb-5 leading-tight">
                Helping Pharma Students Build<br />
                <span className="text-teal-600">Successful Careers</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Imagine Pharma Solutions is a comprehensive training, counselling, and placement centre dedicated to helping students and professionals build successful careers in pharmaceutical research.
              </p>
              <p className="text-slate-600 leading-relaxed mb-3 font-medium text-primary-900">Our Three Core Services:</p>
              <ul className="text-slate-600 leading-relaxed mb-6 space-y-2 ml-4">
                <li className="flex gap-2"><span className="text-teal-600 font-bold">•</span> <strong>Pharma Research Training</strong> — Advanced programs in drug discovery, synthesis, QA/QC, and regulatory affairs.</li>
                <li className="flex gap-2"><span className="text-teal-600 font-bold">•</span> <strong>Career Counselling</strong> — Expert guidance on specialization, interviews, and career pathways.</li>
                <li className="flex gap-2"><span className="text-teal-600 font-bold">•</span> <strong>Placement Support</strong> — Campus drives, internships, and direct job placements.</li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-white font-semibold rounded-xl hover:bg-primary-800 transition-colors duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div {...fadeUp(0.15)} className="relative">
              <img
                  src={pharmaLabImg}
                alt="Pharmaceutical laboratory"
                className="rounded-2xl shadow-2xl w-full object-cover h-80 lg:h-96"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                <p className="font-heading font-bold text-2xl text-primary-900">10+</p>
                <p className="text-slate-500 text-xs">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Key Services */}
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
              to="/products"
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
