/**
 * Placement page — Placement Centre
 */
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import {
  Building2, FlaskConical, Microscope, Presentation,
  CheckCircle2, ArrowRight, GraduationCap,
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

const FEATURES = [
  {
    icon: Building2,
    title: 'Campus Interviews',
    desc: 'We invite leading pharmaceutical companies to our campus for direct recruitment drives, giving students a headstart in their job search.',
    color: 'from-primary-600 to-primary-800',
  },
  {
    icon: FlaskConical,
    title: 'Internship Opportunities',
    desc: 'Structured internship placements with our partner pharma companies, allowing students to build real-world industry experience.',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: Microscope,
    title: 'Research Opportunities',
    desc: 'Access to research associate and junior scientist roles in pharmaceutical R&D labs, academia, and contract research organisations.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Presentation,
    title: 'Interview Skills Training',
    desc: 'Structured workshops covering technical interviews, case studies, group discussions, and HR rounds for pharma job roles.',
    color: 'from-violet-500 to-violet-700',
  },
];

const WHO_CAN_JOIN = [
  {
    title: 'B.Pharm / M.Pharm Students',
    desc: 'Final-year or recently graduated pharmacy students looking to launch careers in research, manufacturing, regulatory affairs, QA/QC, or related pharmaceutical domains.',
    icon: GraduationCap,
  },
  {
    title: 'BSc / MSc Chemistry & Chemical Sciences',
    desc: 'Undergraduate and postgraduate chemistry graduates seeking careers in pharma R&D, API synthesis, process development, analytical chemistry, quality control, and chemical manufacturing.',
    icon: FlaskConical,
  },
  {
    title: 'Fresh Pharma Research Professionals',
    desc: 'Students and early-career professionals with genuine passion for pharmaceutical research who want structured training, mentorship, and placement support to build industry-ready skills.',
    icon: Microscope,
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Enroll',           desc: 'Join our training program and registration process.' },
  { step: '02', title: 'Train',            desc: 'Complete your hands-on curriculum and assessments.'  },
  { step: '03', title: 'Resume & Prep',    desc: 'Get your resume polished and interview-ready.'       },
  { step: '04', title: 'Campus Drives',    desc: 'Participate in campus placement events.'             },
  { step: '05', title: 'Placement',        desc: 'Secure your role in a top pharma organisation.'      },
];

export default function Placement() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.span {...fadeUp()} className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Placement Centre</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">Your Career Launch Pad</motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-blue-200 text-lg mt-4">
            100% placement support with campus drives, internships, and interview training.
          </motion.p>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Placement Services"
            subtitle="Comprehensive placement infrastructure to connect trained professionals with top pharma employers."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.08)}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

      {/* Placement Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Placement Process"
            subtitle="A structured 5-step journey from enrollment to employment."
          />
          <div className="relative">
            {/* Connector line */}
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

      {/* Who Can Join */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Who Can Join?"
            subtitle="Our placement program is open to all pharmaceutical and chemistry graduates."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {WHO_CAN_JOIN.map(({ title, desc, icon: Icon }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.1)}
                className="relative overflow-hidden rounded-2xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 mb-4">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-heading font-semibold text-primary-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-500 to-primary-700 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Students Placed'    },
              { value: '50+',  label: 'Hiring Partners'    },
              { value: '95%',  label: 'Placement Rate'     },
              { value: '3 mo', label: 'Average Time to Job'},
            ].map(({ value, label }, i) => (
              <motion.div key={label} {...fadeUp(i * 0.1)}>
                <p className="font-heading font-bold text-3xl text-teal-300 mb-1">{value}</p>
                <p className="text-blue-200 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading font-bold text-3xl text-white mb-3">Ready for Placement?</h2>
            <p className="text-teal-100 mb-6">Register today and take advantage of our full placement support ecosystem.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
              Register Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
