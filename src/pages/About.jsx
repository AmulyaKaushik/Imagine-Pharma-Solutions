/**
 * About page — company story, mission, and directors
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import { Phone, Mail, Award, Target, Lightbulb, Globe, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

/* Page transition wrapper */
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
  >
    {children}
  </motion.div>
);

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true },
  transition:  { duration: 0.5, delay },
});

const DIRECTORS = [
  {
    name:  'Dr. Ashish Gupta',
    role:  'Co-Founder & Director',
    phone: '+91 8800619561',
    img:   'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bio:   'Renowned pharmaceutical scientist with deep expertise in drug discovery, process chemistry, and regulatory affairs.',
    specialties: ['Drug Discovery', 'Process Chemistry', 'Regulatory Affairs'],
  },
  {
    name:  'Dr. Anuj Rathi',
    role:  'Co-Founder & Director',
    phone: '+91 9999285915',
    img:   'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    bio:   'Pharmaceutical business strategist with extensive experience in API manufacturing and specialty chemical supply chains.',
    specialties: ['API Manufacturing', 'Business Strategy', 'Specialty Chemicals'],
  },
];

const PILLARS = [
  { icon: Target,    title: 'Our Mission',  desc: 'Bridge the gap between academic education and industry skills to create globally competent pharmaceutical professionals.' },
  { icon: Lightbulb, title: 'Our Vision',   desc: 'To become India\'s most trusted pharma research training and consulting organisation.' },
  { icon: Award,     title: 'Our Values',   desc: 'Excellence, integrity, innovation, and commitment to advancing pharmaceutical science and human health.' },
  { icon: Globe,     title: 'Our Reach',    desc: 'Serving students, pharma startups, and established companies across India and internationally.' },
];

export default function About() {
  return (
    <PageWrapper>
      {/* Page header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.span {...fadeUp()} className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Who We Are</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">
            About Imagine Pharma Solutions
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-blue-200 text-lg mt-4 max-w-2xl mx-auto">
            A professional organisation dedicated to pharmaceutical research training, consulting, and chemical solutions.
          </motion.p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp()}>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="font-heading font-bold text-3xl text-primary-900 mt-2 mb-5">
              Redefining Pharmaceutical Education & Industry Services
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Imagine Pharma Solutions was founded with a clear purpose: to close the widening
              gap between what universities teach and what the pharmaceutical industry needs.
              Our founders — both accomplished scientists and educators — identified a critical
              shortage of industry-ready talent in the pharma sector.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Today, we operate as a multifaceted organisation providing pharmaceutical research
              training, professional career counselling, business consulting, and the manufacturing
              and trading of APIs, intermediates, and specialty chemicals.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Headquartered in Ghaziabad, Uttar Pradesh, we serve students, early-career
              professionals, and established pharmaceutical companies across India.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.15)}>
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
              alt="Pharma research lab"
              className="rounded-2xl shadow-2xl w-full object-cover h-80 lg:h-[420px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Pillars" subtitle="The values and purpose that drive everything we do." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-md border border-slate-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-700 to-teal-600 mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-primary-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Meet Our Directors" subtitle="Visionary leaders who bring decades of pharmaceutical expertise." />
          <div className="grid md:grid-cols-2 gap-8">
            {DIRECTORS.map(({ name, role, phone, img, bio, specialties }, i) => (
              <motion.div key={name} {...fadeUp(i * 0.15)}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <img
                    src={img}
                    alt={name}
                    className="w-full sm:w-40 h-52 sm:h-auto object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-primary-900">{name}</h3>
                    <p className="text-teal-600 font-medium text-sm mb-3">{role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{bio}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {specialties.map(s => (
                        <span key={s} className="px-2.5 py-0.5 bg-teal-50 text-teal-700 text-xs font-medium rounded-full border border-teal-100">
                          {s}
                        </span>
                      ))}
                    </div>
                    <a href={`tel:${phone.replace(/\s/g,'')}`}
                      className="inline-flex items-center gap-1.5 text-primary-700 font-semibold text-sm hover:text-teal-600 transition-colors">
                      <Phone className="w-4 h-4" /> {phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-bold text-3xl text-white mb-3">Partner With Us</h2>
            <p className="text-teal-100 mb-6">Explore collaboration opportunities for training, consulting, or chemical supply.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
