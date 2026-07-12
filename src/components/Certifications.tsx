import { motion } from 'motion/react';
import { Sparkles, Terminal, Layout, Brain, Code, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data';

// Map icon name to Lucide icon component
const iconMap: { [key: string]: any } = {
  Terminal: Terminal,
  Layout: Layout,
  Brain: Brain,
  Code: Code
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#070b19] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[25rem] h-[25rem] rounded-full bg-sky-950/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/15 bg-cyan-500/5 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / EDUCATION & CREDENTIALS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Verified Certificates
          </motion.h2>
        </div>

        {/* Bento/Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => {
            const IconComponent = iconMap[cert.iconName] || Code;
            // Alternate icons between cyan and red for premium rhythmic detail
            const isEven = idx % 2 === 0;
            return (
              <motion.a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl border border-white/5 bg-[#0f172a] flex flex-col justify-between h-full group hover:border-cyan-500/20 transition-all cursor-pointer"
              >
                {/* Top card elements */}
                <div className="space-y-4">
                  {/* Icon and status badge */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${isEven ? 'group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20' : 'group-hover:bg-red-500/10 group-hover:border-red-500/20'} transition-colors`}>
                      <IconComponent className={`w-5 h-5 ${isEven ? 'text-cyan-400' : 'text-red-400'}`} />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-wide uppercase">
                      {cert.date}
                    </span>
                  </div>

                  {/* Cert text details */}
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide font-sans leading-snug group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-zinc-500 text-xs font-semibold mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Bottom detail card */}
                <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 group-hover:text-cyan-400 pt-6 mt-6 border-t border-white/5 transition-colors">
                  <span>View Credential</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
