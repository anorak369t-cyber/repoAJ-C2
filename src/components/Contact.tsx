import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, MessageSquare, Send, Check, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to record submission.');
      
      // Delay slightly for natural submission animation sequence
      setTimeout(() => {
        setSubmitted(true);
        setSubmitting(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setErrorMessage('Relay error. Please connect directly via email below!');
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#070b19] relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] rounded-full bg-sky-900/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/15 bg-cyan-500/5 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-3"
          >
            <span>SYS // TRANSMISSION PATHWAY</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Get In Touch
          </motion.h2>
        </div>

        {/* Form and info row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed mb-8">
              Whether you want to discuss a new software project, ask about our work with Vortex-labs, or discuss academic opportunities—our inbox is always open.
            </p>

            {/* Social channels grid */}
            <div className="space-y-4">
              
              {/* Email */}
              <a 
                href="mailto:anorak369t@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0f172a] hover:border-cyan-500/30 group transition-all"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Email Direct</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors">anorak369t@gmail.com</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/anorak369t-cyber"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0f172a] hover:border-cyan-500/30 group transition-all"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">GitHub Repo</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors">github.com/anorak369t-cyber</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/grok369"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0f172a] hover:border-cyan-500/30 group transition-all"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">LinkedIn Profile</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors">linkedin.com/in/grok369</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/256740434644"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0f172a] hover:border-cyan-500/30 group transition-all"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">WhatsApp Message</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors">+256 740 434 644</span>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Morphing Form Box */}
          <div className="lg:col-span-7">
            <motion.div 
              layout
              className="p-6 sm:p-10 rounded-2xl border border-white/5 bg-[#0f172a] relative overflow-hidden flex flex-col items-center justify-center min-h-[420px]"
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-500 to-cyan-500" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleFormSubmit}
                    className="w-full space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-[#131e35] text-xs font-semibold text-zinc-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-[#131e35] text-xs font-semibold text-zinc-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
                          placeholder="your.email@domain.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-[#131e35] text-xs font-semibold text-zinc-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
                        placeholder="Project blueprint details..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Message</label>
                      <textarea 
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-[#131e35] text-xs font-semibold text-zinc-300 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                        placeholder="Describe your design specifications or opportunities..."
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-red-400 text-xs font-mono">{errorMessage}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting || !formData.name || !formData.email || !formData.message}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 disabled:from-zinc-800 disabled:to-zinc-800 disabled:text-zinc-600 text-xs font-bold text-white shadow-lg shadow-red-500/20 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                          <span>Routing Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send a Message Securely</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="flex flex-col items-center justify-center text-center py-6"
                  >
                    {/* Glowing morph checkmark */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 12 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.45)] mb-6"
                    >
                      <Check className="w-8 h-8 text-white stroke-[3]" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white tracking-wide font-sans mb-2">Message Encoded!</h3>
                    <p className="text-zinc-400 text-sm font-normal max-w-sm mb-6 leading-relaxed">
                      Thank you for reaching out! Your submission has successfully parsed, and Vortex  lab's digital relays have cataloged your interest. Expect a response soon.
                    </p>

                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                      className="px-4 py-2 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
