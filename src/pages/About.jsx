/**
 * About page — company story, mission, and directors
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import { Phone, Award, Target, Lightbulb, Globe, ArrowRight } from 'lucide-react';
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
    credentials: '(Ph.D. N.E.T. CSIR)',
    role:  'Co-Founder & Director',
    phone: '+91 8800619561',
    profile: [
      'With over 20 years of extensive experience in Active Pharmaceutical Ingredient (API) synthesis, Dr. Ashish brings deep expertise in process development, route scouting, technology transfer, scale-up, and commercial manufacturing in the pharmaceutical industry.',
      'He collaborates with pharmaceutical companies, CROs, CDMOs, and chemical manufacturers to develop robust, scalable, and cost-effective synthetic processes for APIs and complex intermediates.',
      'He supports organizations in translating molecules from laboratory research to pilot and commercial-scale manufacturing while maintaining the highest standards of quality, safety, and regulatory compliance.',
    ],
    expertise: [
      'Developed and optimized synthetic routes for a wide range of APIs and advanced intermediates.',
      'Ensured process efficiency, regulatory compliance, and cost-effective production.',
      'Guided projects from early-stage development to commercial-scale manufacturing.',
      'Extensive experience in nitrosamine, genotoxic, and process risk assessment.',
      'Expert in impurities identification, synthesis, isolation, and characterization in final APIs.',
      'Developed novel synthetic routes for 25+ APIs.',
      'Filed and was granted 35+ process patents, demonstrating technical leadership and innovation.',
    ],
  },
  {
    name:  'Dr. Anuj Kumar Rathi',
    credentials: '(Ph.D. PDF, MBA, Legal Consultant)',
    role:  'Co-Founder & Director',
    phone: '+91 7042112854',
    profile: [
      'A seasoned research professional with 19 years of industrial experience in synthetic organic chemistry, specializing in API R&D, process development, and scale-up.',
      'He has proven expertise in designing and optimizing synthetic routes, driving projects from laboratory to commercialization, and leading cross-functional teams.',
      'He holds a Ph.D. in Organic Chemistry and an MBA in Operations and Marketing, combining technical depth with strategic business acumen. He also completed postdoctoral research in Europe focused on synthetic organic chemistry, flow chemistry, and catalysis.',
      'His legal consulting background strengthens regulatory affairs support, streamlines approvals, and aligns documentation with pharmaceutical and chemical industry standards.',
      'He is committed to delivering practical, cost-effective, science-driven, and regulatory-compliant solutions that improve product quality, shorten development timelines, and enhance manufacturing performance.',
    ],
    expertise: [
      'Synthetic chemistry: R&D, process development, and scale-up.',
      'Medicinal chemistry and natural product chemistry.',
      'Nanocatalysis and flow chemistry.',
      'Drug discovery and development.',
      'Extensive work on complex heterocyclic compounds, carbohydrates, metabolites, macrocycles, peptides, lipids, and chiral compounds.',
      'Highly skilled in RFP evaluation (FTE, FFS), proposal development, route scouting, and end-to-end project execution.',
      'Authored 37+ high-impact publications and served as a Visiting Scientist at the Polish Academy of Sciences, Warsaw.',
      'Supports pharmaceutical companies in accelerating API development, key intermediate synthesis, and transition to commercial-scale production.',
    ],
  },
];

const PILLARS = [
  { icon: Target,    title: 'Our Mission',  desc: 'Bridge the gap between academic education and industry skills to create globally competent pharmaceutical professionals.' },
  { icon: Lightbulb, title: 'Our Vision',   desc: 'To become India\'s most trusted pharma research training, consulting and contract manufacturing organisation.' },
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
              Imagine Pharma Research Training, Career Counselling & Placement Centre
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Imagine Pharma Solutions was founded with a clear mission: to help students and professionals in the pharmaceutical field build sustainable careers. We identified a critical gap between academic education and industry requirements — and created a comprehensive ecosystem to bridge it.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Our Three Core Pillars:</strong>
            </p>
            <ul className="text-slate-600 leading-relaxed mb-4 space-y-1.5 ml-4">
              <li className="flex gap-2"><span className="text-teal-600">•</span> <strong>Pharma Research Training:</strong> Advanced programs in drug discovery, chemical synthesis, regulatory affairs, QA/QC, and IP management with hands-on labs and industry case studies.</li>
              <li className="flex gap-2"><span className="text-teal-600">•</span> <strong>Career Counselling:</strong> Expert guidance on pharma career options, interview preparation, resume building, and specialization selection.</li>
              <li className="flex gap-2"><span className="text-teal-600">•</span> <strong>Placement Centre:</strong> Campus interviews, internship placements, and direct connections with leading pharma companies for job placement.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Headquartered in Greater Noida, Uttar Pradesh, we serve B.Pharm, M.Pharm, and Chemistry (BSc/MSc) students, as well as established pharmaceutical companies across India and globally.
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
            {DIRECTORS.map(({ name, credentials, role, phone, profile, expertise }, i) => (
              <motion.div key={name} {...fadeUp(i * 0.15)}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary-900">{name}</h3>
                  <p className="text-slate-500 text-xs font-medium mt-0.5">{credentials}</p>
                  <p className="text-teal-600 font-medium text-sm mb-3">{role}</p>
                  <div className="space-y-3 mb-4">
                    {profile.map((text) => (
                      <p key={text} className="text-slate-600 text-sm leading-relaxed">{text}</p>
                    ))}
                  </div>
                  <div className="mb-4">
                    <p className="text-primary-900 text-sm font-semibold mb-2">Core Expertise</p>
                    <ul className="space-y-1.5">
                      {expertise.map((item) => (
                        <li key={item} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                          <span className="text-teal-600 mt-0.5">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href={`tel:${phone.replace(/\s/g,'')}`}
                    className="inline-flex items-center gap-1.5 text-primary-700 font-semibold text-sm hover:text-teal-600 transition-colors">
                    <Phone className="w-4 h-4" /> {phone}
                  </a>
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
