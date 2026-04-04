/**
 * SectionTitle — reusable section heading block
 * Props: title, subtitle, light (bool) — for use on dark backgrounds
 */
import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`inline-flex items-center px-3 py-1 mb-4 rounded-full border text-xs tracking-[0.14em] uppercase ${light ? 'border-cyan-300/35 text-cyan-200 bg-cyan-400/10' : 'border-cyan-300/30 text-cyan-200 bg-cyan-400/10'}`}>
        What We Do
      </div>
      <h2 className={`text-3xl md:text-5xl font-medium font-heading mb-4 ${light ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-blue-100' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 mx-auto w-20 h-px ${light ? 'bg-cyan-300/60' : 'bg-cyan-300/60'}`} />
    </motion.div>
  );
}
