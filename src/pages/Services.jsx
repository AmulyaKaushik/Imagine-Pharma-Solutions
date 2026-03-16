/**
 * Services page — detailed service cards
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import {
  FlaskConical, Briefcase, Atom, Leaf,
  CheckCircle2, ArrowRight,
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

const SERVICES = [
  {
    icon: FlaskConical,
    title: 'Pharma Research & Professional Development Center',
    subtitle: 'Training | Education | Research',
    color: 'from-primary-700 to-primary-900',
    img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
    desc: 'Our flagship training centre provides advanced pharmaceutical research education for students and working professionals. We offer structured programs that combine theoretical foundations with practical laboratory experience.',
    features: [
      'Hands-on laboratory training',
      'Industry-validated curriculum',
      'Expert faculty with PhD qualifications',
      'Career-focused learning pathways',
      'Drug discovery to QC/QA coverage',
    ],
    link: '/training',
  },
  {
    icon: Briefcase,
    title: 'Pharmaceutical Business Consulting',
    subtitle: 'Strategy | Compliance | Growth',
    color: 'from-teal-600 to-teal-800',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    desc: 'We deliver strategic consulting services for pharma startups, SMEs, and large corporations. Our expertise covers R&D strategy, manufacturing process optimisation, regulatory roadmaps, and market-entry planning.',
    features: [
      'R&D strategy and roadmap planning',
      'Regulatory affairs & compliance',
      'Manufacturing process optimisation',
      'Product lifecycle management',
      'Market entry & business development',
    ],
    link: '/contact',
  },
  {
    icon: Atom,
    title: 'APIs & Intermediates Expertise',
    subtitle: 'Manufacturing | Trading | Supply',
    color: 'from-blue-600 to-blue-800',
    img: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=800&q=80',
    desc: 'We are experienced manufacturers and traders of Active Pharmaceutical Ingredients (APIs) and pharmaceutical intermediates. Our products meet stringent quality standards and are supplied to domestic and international markets.',
    features: [
      'GMP-compliant manufacturing',
      'Wide range of APIs and intermediates',
      'Domestic and international supply',
      'Rigorous quality testing',
      'Reliable and timely delivery',
    ],
    link: '/contact',
  },
  {
    icon: Leaf,
    title: 'Specialty Chemicals',
    subtitle: 'Manufacturing | Supply | Custom Synthesis',
    color: 'from-emerald-600 to-emerald-800',
    img: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80',
    desc: 'Our specialty chemicals division supplies high-purity chemicals used in pharmaceutical, agrochemical, and fine chemical industries. We offer contract synthesis and custom chemical solutions tailored to client specifications.',
    features: [
      'High-purity specialty chemicals',
      'Custom synthesis capabilities',
      'Agrochemical & fine chemical supply',
      'Technical data sheet provision',
      'Competitive pricing & bulk supply',
    ],
    link: '/contact',
  },
];

export default function Services() {
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
          <motion.span {...fadeUp()} className="text-teal-300 font-semibold text-sm uppercase tracking-widest">What We Offer</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">Our Services</motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-blue-200 text-lg mt-4">
            Comprehensive pharmaceutical solutions — from training and consulting to chemical manufacturing.
          </motion.p>
        </div>
      </div>

      {/* Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map(({ icon: Icon, title, subtitle, color, img, desc, features, link }, i) => (
            <motion.div
              key={title}
              {...fadeUp(0.05)}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image — alternating sides */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img src={img} alt={title} className="w-full h-72 object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${color} text-white text-xs font-semibold mb-3`}>
                  <Icon className="w-4 h-4" /> {subtitle}
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary-900 mb-3">{title}</h2>
                <p className="text-slate-600 leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={link}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-900 text-white font-semibold rounded-xl hover:bg-primary-800 transition-colors duration-200 text-sm">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-teal-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-bold text-3xl text-white mb-3">Interested in Our Services?</h2>
            <p className="text-blue-200 mb-6">Reach out to discuss your requirements and how we can help.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-900 font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
              Get a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
