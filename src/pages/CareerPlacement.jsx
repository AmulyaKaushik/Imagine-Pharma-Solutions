import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText, MessageSquare, Compass, GraduationCap,
  Award, TrendingUp, ArrowRight,
  Building2, FlaskConical, Microscope, Presentation,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const PageWrapper = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
    {children}
  </motion.div>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const CAREER_SERVICES = [
  {
    icon: Compass,
    title: 'Career Pathways & Specialization',
    desc: 'Guidance on career options in R&D, regulatory affairs, QA/QC, analytical chemistry, and specialized pharma domains.',
    color: 'from-primary-600 to-primary-800',
  },
  {
    icon: FileText,
    title: 'Resume Building & Optimization',
    desc: 'Build industry-ready resumes that showcase pharmaceutical skills, certifications, and research projects.',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: MessageSquare,
    title: 'Interview Preparation',
    desc: 'Mock interviews and focused coaching for technical rounds, case studies, and HR interviews.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: GraduationCap,
    title: 'Higher Studies Guidance',
    desc: 'Support for postgraduate pathways, certifications, fellowships, and international opportunities.',
    color: 'from-violet-500 to-violet-700',
  },
  {
    icon: Award,
    title: 'Industry Networking',
    desc: 'Connections with pharma companies, CROs, CDMOs, and research organizations.',
    color: 'from-amber-500 to-amber-700',
  },
  {
    icon: TrendingUp,
    title: 'Career Roadmap Development',
    desc: 'Personalized progression plans from entry-level analyst roles to senior scientist and leadership positions.',
    color: 'from-emerald-500 to-emerald-700',
  },
];

const PLACEMENT_FEATURES = [
  {
    icon: Building2,
    title: 'Campus Interviews',
    desc: 'Direct recruitment drives with leading pharmaceutical companies.',
    color: 'from-primary-600 to-primary-800',
  },
  {
    icon: FlaskConical,
    title: 'Internship Opportunities',
    desc: 'Structured internship pathways with partner pharma organizations.',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: Microscope,
    title: 'Research Opportunities',
    desc: 'Openings in research labs, academia, and contract research organizations.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Presentation,
    title: 'Interview Skills Training',
    desc: 'Guided preparation for technical and behavioral rounds.',
    color: 'from-violet-500 to-violet-700',
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Enroll', desc: 'Join our training and registration process.' },
  { step: '02', title: 'Train', desc: 'Complete practical curriculum and assessments.' },
  { step: '03', title: 'Resume & Prep', desc: 'Polish profile and interview readiness.' },
  { step: '04', title: 'Campus Drives', desc: 'Attend placement events and interviews.' },
  { step: '05', title: 'Placement', desc: 'Secure your role in top pharma organizations.' },
];

export default function CareerPlacement() {
  return (
    <PageWrapper>
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 to-teal-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.span {...fadeUp()} className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Career & Placement</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">
            Career Counselling & Placement Centre
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-blue-200 text-lg mt-4">
            One integrated page for professional guidance, internships, and pharma placement support.
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Career Services" subtitle="End-to-end support from profile building to role readiness." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_SERVICES.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.08)} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                </div>
                <h3 className="font-heading font-semibold text-primary-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Placement Services" subtitle="Comprehensive placement infrastructure to connect learners with top employers." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLACEMENT_FEATURES.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.08)} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                </div>
                <h3 className="font-heading font-semibold text-primary-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Placement Process" subtitle="A structured 5-step journey from enrollment to employment." />
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-200 via-teal-300 to-primary-200" />
            <div className="grid lg:grid-cols-5 gap-6">
              {PROCESS_STEPS.map(({ step, title, desc }, i) => (
                <motion.div key={step} {...fadeUp(i * 0.1)} className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-700 to-teal-600 flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg mb-3 z-10">
                    {step}
                  </div>
                  <h4 className="font-heading font-semibold text-primary-900 mb-1">{title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '50+', label: 'Hiring Partners' },
              { value: '95%', label: 'Placement Rate' },
              { value: '3-6 mo', label: 'Average Time to Job' },
            ].map(({ value, label }, i) => (
              <motion.div key={label} {...fadeUp(i * 0.1)}>
                <p className="font-heading font-bold text-3xl text-teal-300 mb-1">{value}</p>
                <p className="text-blue-200 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-bold text-3xl text-white mb-3">Ready for Your Next Step?</h2>
            <p className="text-teal-100 mb-6">Connect with our advisors for counselling and placement support.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
              Contact Team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
