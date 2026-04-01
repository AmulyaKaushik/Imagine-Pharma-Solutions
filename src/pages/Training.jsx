/**
 * Training page — Advanced Pharmaceutical Research Training
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import {
  FlaskConical, Microscope, ClipboardList, BookOpen,
  Monitor, Users, ArrowRight, CheckCircle2,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const PageWrapper = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
    {children}
  </motion.div>
);

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true },
  transition:  { duration: 0.5, delay },
});

const CURRICULUM = [
  {
    icon: FlaskConical,
    title: 'Drug Discovery & Development',
    topics: [
      'Target identification & validation',
      'Lead compound discovery',
      'ADMET profiling',
      'Preclinical & clinical phases overview',
    ],
  },
  {
    icon: BookOpen,
    title: 'Chemical Synthesis Foundations',
    topics: [
      'Organic reaction mechanisms',
      'Retrosynthetic analysis',
      'Protecting group chemistry',
      'Green chemistry principles',
    ],
  },
  {
    icon: Microscope,
    title: 'Process Development & Optimization',
    topics: [
      'Scale-up strategies',
      'Reaction optimisation',
      'Yield improvement techniques',
      'Cost-effective synthesis routes',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Quality Control & Analytics',
    topics: [
      'HPLC, GC, IR, NMR techniques',
      'Method development & validation',
      'Pharmacopeial standards',
      'Out-of-specification investigation',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Regulatory Affairs & Compliance',
    topics: [
      'ICH guidelines',
      'USFDA, EU regulatory frameworks',
      'CTD dossier preparation',
      'CDSCO / Indian regulatory landscape',
    ],
  },
  {
    icon: BookOpen,
    title: 'Documentation & Compliance',
    topics: [
      'GMP documentation systems',
      'SOP writing & review',
      'Deviation and CAPA management',
      'Audit readiness',
    ],
  },
  {
    icon: ClipboardList,
    title: 'QC, QA & Intellectual Property',
    topics: [
      'Quality systems management',
      'Risk-based approaches',
      'Patent filing basics',
      'IP protection strategies',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Environment, Safety & Guidelines',
    topics: [
      'Laboratory safety protocols',
      'EHS management systems',
      'Waste disposal regulations',
      'Chemical hazard assessment',
    ],
  },
];

const SOFTWARE_TOOLS = [
  {
    name: 'ChemDraw',
    desc: 'Industry-standard chemical structure drawing and modelling software.',
    icon: '🔬',
  },
  {
    name: 'Reaxys',
    desc: 'Comprehensive chemical and pharmaceutical reaction database for research.',
    icon: '📚',
  },
  {
    name: 'SciFinder',
    desc: 'CAS literature database for chemical research and patent searches.',
    icon: '🔍',
  },
];

const HIGHLIGHTS = [
  { icon: FlaskConical, label: 'Practical Lab Sessions' },
  { icon: Monitor,     label: 'Industry Case Studies'  },
  { icon: Users,       label: 'Interactive Classrooms' },
  { icon: Microscope,  label: 'Research Mentorship'    },
];

export default function Training() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.span {...fadeUp()} className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Education</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">
            Advanced Pharmaceutical Research Training
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-blue-200 text-lg mt-4">
            A comprehensive, industry-aligned curriculum designed for students and PharmD/MSc Chemistry graduates.
          </motion.p>
        </div>
      </div>

      {/* Highlights Row */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-primary-700" />
              </div>
              <p className="font-semibold text-primary-900 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Curriculum Overview"
            subtitle="Eight comprehensive modules covering every dimension of modern pharmaceutical science."
          />
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {CURRICULUM.map(({ icon: Icon, title, topics }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.07)}
                className="bg-white rounded-2xl p-5 shadow border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-700 to-teal-600 mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-primary-900 text-sm mb-3 leading-snug">{title}</h3>
                <ul className="space-y-1.5">
                  {topics.map(t => (
                    <li key={t} className="flex items-start gap-2 text-slate-600 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Software Training"
            subtitle="Gain proficiency in the tools used by pharmaceutical research professionals worldwide."
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {SOFTWARE_TOOLS.map(({ name, desc, icon }, i) => (
              <motion.div key={name} {...fadeUp(i * 0.12)}
                className="relative overflow-hidden rounded-2xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-heading font-bold text-xl text-primary-900 mb-2">{name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-primary-700 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-teal-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-bold text-3xl text-white mb-3">Enroll in Our Training Program</h2>
            <p className="text-blue-200 mb-6">
              Seats are limited. Reach out now to secure your place in our next cohort.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-900 font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
