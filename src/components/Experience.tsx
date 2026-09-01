import { motion } from 'motion/react';
import { Calendar, Award, CheckCircle } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#070b19] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/15 bg-cyan-500/5 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-3"
          >
            <span>SYS // DEVELOPER CHRONICLE</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Roles & Involvement
          </motion.h2>
        </div>

        {/* Timeline representation */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-10 border-l border-white/5">
          
          {/* Animated vertical track progression */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-sky-500 via-cyan-500 to-red-500 origin-top pointer-events-none" />

          <ScrollReveal direction="left" staggerChildren={0.2} className="space-y-12">
            {EXPERIENCE_DATA.map((item) => (
              <div
                key={item.id}
                className="relative group"
              >
                {/* Timeline active node circles */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070b19] border-2 border-cyan-500 flex items-center justify-center group-hover:border-red-400 transition-colors z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:bg-red-400 scale-100 group-hover:scale-125 transition-transform" />
                </div>

                {/* Main Content card */}
                <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0f172a] group-hover:border-cyan-500/15 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-sky-500 to-cyan-500 opacity-50" />
                  
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide font-sans group-hover:text-cyan-400 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-zinc-400 text-sm font-medium">
                        <Award className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/2 font-mono text-[10px] text-zinc-400 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-3 mb-6">
                    {item.description.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills used */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md border border-white/5 bg-[#070b19] text-[10px] font-mono text-zinc-400 hover:border-cyan-500/20 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
}
