/**
 * Career page — Career Guidance for Pharma Professionals
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import {
  FileText, MessageSquare, Compass, GraduationCap,
  Award, TrendingUp, ArrowRight,
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
    icon: Compass,
    title: 'Career Pathways & Specialization',
    desc: 'Expert guidance on career options in the pharmaceutical industry: academic research, industrial jobs, regulatory affairs, IPR, QA/QC, analytical chemistry, and specialized pharmaceutical domains.',
    color: 'from-primary-600 to-primary-800',
  },
  {
    icon: FileText,
    title: 'Resume Building & Optimization',
    desc: 'Craft a compelling, industry-standard resume that highlights your pharmaceutical skills, certifications, and research experience to stand out to top recruiters.',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: MessageSquare,
    title: 'Interview Preparation & Training',
    desc: 'Comprehensive mock interviews, feedback sessions, and coaching on technical questions, case studies, and HR rounds tailored to pharma industry roles.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: GraduationCap,
    title: 'Higher Studies & Certifications',
    desc: 'Guidance on postgraduate programs, advanced certifications (certified, RAC), scholarships, research fellowships, and lifelong learning opportunities in India and abroad.',
    color: 'from-violet-500 to-violet-700',
  },
  {
    icon: Award,
    title: 'Industry Connection & Networking',
    desc: 'Direct connections with pharmaceutical companies, CROs, CDMOs, and research organizations to explore job opportunities and career advancement.',
    color: 'from-amber-500 to-amber-700',
  },
  {
    icon: TrendingUp,
    title: 'Career Roadmap Development',
    desc: 'Personalized career planning from entry-level (Research Associate, Analyst) to senior positions (Senior Scientist, Manager) aligned with your long-term ambitions.',
    color: 'from-emerald-500 to-emerald-700',
  },
];

const CAREER_PATHS = [
  { role: 'Research Scientist',      level: 'Entry to Mid',    domain: 'R&D / Discovery'     },
  { role: 'Regulatory Affairs Officer', level: 'Entry to Senior', domain: 'Compliance'        },
  { role: 'Quality Control Analyst', level: 'Entry to Mid',    domain: 'QC / QA'              },
  { role: 'Process Development Chemist', level: 'Mid to Senior', domain: 'API Manufacturing' },
  { role: 'Pharmacovigilance Officer', level: 'Entry to Mid',  domain: 'Drug Safety'          },
  { role: 'Business Development Manager', level: 'Mid to Senior', domain: 'Sales & BD'       },
];

export default function Career() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.span {...fadeUp()} className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Career Counselling</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">
            Career Counselling & Professional Guidance
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-blue-200 text-lg mt-4">
            Expert guidance on pharma career pathways, specializations, interview prep, and resume building to launch your pharmaceutical career.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Career Services"
            subtitle="End-to-end support from resume crafting to reaching your first leadership role."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.08)}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
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

      {/* Career Paths */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Pharma Career Pathways"
            subtitle="Explore the diverse roles available across the pharmaceutical value chain."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow">
            <table className="w-full text-sm">
              <thead className="bg-primary-900 text-white">
                <tr>
                  <th className="px-5 py-3.5 text-left font-semibold">Role</th>
                  <th className="px-5 py-3.5 text-left font-semibold">Level</th>
                  <th className="px-5 py-3.5 text-left font-semibold">Domain</th>
                </tr>
              </thead>
              <tbody>
                {CAREER_PATHS.map(({ role, level, domain }, i) => (
                  <motion.tr
                    key={role}
                    {...fadeUp(i * 0.06)}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-teal-50 transition-colors duration-150`}
                  >
                    <td className="px-5 py-3.5 font-medium text-primary-900">{role}</td>
                    <td className="px-5 py-3.5 text-slate-600">{level}</td>
                    <td className="px-5 py-3.5">
                      <span className="px-2.5 py-0.5 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">{domain}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-bold text-3xl text-white mb-3">Take the Next Step in Your Career</h2>
            <p className="text-teal-100 mb-6">Schedule a free career counselling session with our expert advisors.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
              Book a Session <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
