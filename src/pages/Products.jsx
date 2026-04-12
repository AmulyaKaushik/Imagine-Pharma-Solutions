/**
 * Products page — APIs, Intermediates, and Specialty Chemicals
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Beaker, Leaf, Zap, Shield, TrendingUp, Award, ArrowRight, CheckCircle2,
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

const PRODUCT_CATEGORIES = [
  {
    icon: Beaker,
    title: 'Active Pharmaceutical Ingredients (APIs)',
    description: 'High-quality, GMP-compliant APIs manufactured with rigorous quality control and regulatory adherence.',
    features: [
      'Therapeutic API synthesis',
      'Custom API development',
      'Batch and bulk manufacturing',
      'Full regulatory documentation',
      'Stability and shelf-life data',
    ],
  },
  {
    icon: Leaf,
    title: 'Intermediates',
    description: 'Specialized chemical intermediates for pharmaceutical and specialty chemical applications.',
    features: [
      'Complex heterocyclic compounds',
      'Chiral intermediates',
      'Carbohydrate and sugar derivatives',
      'Macrocycle and peptide intermediates',
      'Fine chemical synthesis',
    ],
  },
  {
    icon: Zap,
    title: 'Specialty Chemicals',
    description: 'Tailored chemical solutions for niche pharmaceutical and industrial applications.',
    features: [
      'Custom synthesis services',
      'Scale-up capabilities',
      'Process optimization',
      'Quality assurance and testing',
      'Technical support and consultation',
    ],
  },
];

const PRODUCT_HIGHLIGHTS = [
  {
    icon: Shield,
    label: 'Certified Manufacturing',
    description: 'All products manufactured under Certified Manufacturing Standards.',
  },
  {
    icon: TrendingUp,
    label: 'Scalable Production',
    description: 'From laboratory to commercial-scale manufacturing.',
  },
  {
    icon: Award,
    label: 'Quality Assured',
    description: 'Rigorous testing and regulatory compliance for every batch.',
  },
];

const MANUFACTURING_CAPABILITIES = [
  'Small batch synthesis for R&D and pilot projects',
  'Mid-scale production for early commercialization',
  'Large-scale manufacturing for established products',
  'Route optimization and cost reduction',
  'Process scale-up from gram to kilogram scale',
  'Documentation and regulatory support (DMF/IND)',
];

export default function Products() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.span {...fadeUp()} className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Our Portfolio</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">
            APIs, Intermediates & Specialty Chemicals
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-blue-200 text-lg mt-4">
            High-quality pharmaceutical products and chemical solutions, manufactured with precision and regulatory compliance.
          </motion.p>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6">
          {PRODUCT_HIGHLIGHTS.map(({ icon: Icon, label, description }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.08)}
              className="flex flex-col text-center p-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3 mx-auto">
                <Icon className="w-6 h-6 text-primary-700" />
              </div>
              <p className="font-semibold text-primary-900 text-sm mb-1">{label}</p>
              <p className="text-slate-600 text-xs">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Product Range"
            subtitle="Comprehensive portfolio of pharmaceutical and chemical products tailored to industry needs."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map(({ icon: Icon, title, description, features }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-8 shadow border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-700 to-teal-600 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">{description}</p>
                <ul className="space-y-2">
                  {features.map(feature => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Manufacturing Capabilities"
            subtitle="From concept to commercial production—we handle every stage of your project."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {MANUFACTURING_CAPABILITIES.map((capability, i) => (
              <motion.div key={capability} {...fadeUp(i * 0.08)}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp()}>
              <h2 className="font-heading font-bold text-3xl text-primary-900 mb-5">Why Partner With Us?</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Award className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900 text-sm mb-1">Experienced Leadership</h4>
                    <p className="text-slate-600 text-sm">Led by renowned pharmaceutical scientists with 20+ years of industry expertise.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900 text-sm mb-1">Regulatory Compliance</h4>
                    <p className="text-slate-600 text-sm">Full GMP compliance, DMF filing support, and regulatory documentation.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900 text-sm mb-1">Scalability</h4>
                    <p className="text-slate-600 text-sm">Seamless scale-up from laboratory to commercial quantities.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
                alt="Manufacturing facility"
                className="rounded-2xl shadow-2xl w-full object-cover h-80 lg:h-[420px]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-teal-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-bold text-3xl text-white mb-3">Request a Quote or Sample</h2>
            <p className="text-blue-200 mb-6">
              Connect with our team to discuss your product requirements and manufacturing needs.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-900 font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
