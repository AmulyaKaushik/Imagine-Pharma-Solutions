/**
 * Contact page — contact form, address, Google Maps embed
 */
import { useState } from 'react';
import { motion }   from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react';
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

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'imaginepharmasolutions@gmail.com',
    href: 'mailto:imaginepharmasolutions@gmail.com',
    color: 'from-primary-600 to-primary-800',
  },
  {
    icon: Phone,
    label: 'Dr. Ashish Gupta',
    value: '+91 8800619561',
    href: 'tel:+918800619561',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: Phone,
    label: 'Dr. Anuj Kumar Rathi',
    value: '+91 7042112854',
    href: 'tel:+917042112854',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Office 605, 6th Floor, Tower A, Solitairian City Centre, Knowledge Park 3, Greater Noida, Uttar Pradesh - 201308, India',
    href: 'https://maps.google.com/?q=Solitairian+City+Centre+Knowledge+Park+3+Greater+Noida+201308',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.imaginepharmasolutions.co.in',
    href: 'https://www.imaginepharmasolutions.co.in',
    color: 'from-violet-500 to-violet-700',
  },
];

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form,      setForm]      = useState(INITIAL_FORM);
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    /* Simulate async send — replace with real API/EmailJS/FormSpree call */
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(INITIAL_FORM);
    }, 1200);
  }

  return (
    <PageWrapper>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.span {...fadeUp()} className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Contact</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading font-bold text-4xl md:text-5xl text-white mt-2">Get in Touch</motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-blue-200 text-lg mt-4">
            We'd love to hear from you — training enquiries, consulting, partnerships, or general questions.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">

          {/* Contact Info (left column) */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <motion.div {...fadeUp()}>
              <h2 className="font-heading font-bold text-2xl text-primary-900 mb-1">Contact Information</h2>
              <p className="text-slate-500 text-sm">Reach us via email, phone, or visit our office.</p>
            </motion.div>

            {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                {...fadeUp(0.05 + i * 0.07)}
                className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-100 transition-all duration-200 group"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm text-primary-900 font-medium group-hover:text-teal-600 transition-colors duration-200 break-all">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form (right column) */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-xl hover:bg-teal-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-xl text-primary-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">

                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-teal-500
                            ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-teal-400 bg-white'}`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email"
                          value={form.email} onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-teal-500
                            ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-teal-400 bg-white'}`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm transition-colors duration-200 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500 bg-white"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us about your enquiry — training, consulting, partnerships, etc."
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-teal-500 resize-none
                          ${errors.message ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-teal-400 bg-white'}`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-primary-700 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 disabled:opacity-60 disabled:scale-100 transition-all duration-200"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <> <Send className="w-4 h-4" /> Send Message </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              title="Imagine Pharma Solutions Location"
              src="https://www.google.com/maps?q=Solitairian+City+Centre,+Knowledge+Park+3,+Greater+Noida,+Uttar+Pradesh+201308&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
