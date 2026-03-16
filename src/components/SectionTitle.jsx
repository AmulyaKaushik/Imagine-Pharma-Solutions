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
      <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-4 ${light ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-blue-100' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 mx-auto w-16 h-1 rounded-full ${light ? 'bg-teal-400' : 'bg-teal-600'}`} />
    </motion.div>
  );
}
