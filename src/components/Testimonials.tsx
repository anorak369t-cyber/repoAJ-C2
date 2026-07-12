import { useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-24 bg-[#070b19] relative overflow-hidden">
      {/* Ambient glowing blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none -z-10" />

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
            <span>07 / COMMUNITY ENDORSEMENT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Peer Reviews
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-sm max-w-lg mt-2 font-normal leading-relaxed"
          >
            Testimonials from club patrons, technical mentors, and student collaborators. Swipe or drag horizontally to slide through.
          </motion.p>
        </div>

        {/* Drag Carousel container */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing py-4 select-none">
          {/* Subtle overlay shading for depth */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#070b19] to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#070b19] to-transparent z-10 pointer-events-none hidden sm:block" />

          <motion.div 
            ref={scrollRef}
            drag="x"
            dragConstraints={{ left: -450, right: 0 }}
            dragElastic={0.15}
            className="flex gap-6 w-max px-2"
            data-cursor-drag
          >
            {TESTIMONIALS_DATA.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="w-72 sm:w-[380px] p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0f172a] hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Quote outline badge */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />

                {/* Content */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal mb-8 italic">
                  "{t.content}"
                </p>

                {/* Profile card details */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border border-white/10 pointer-events-none"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide font-sans">{t.name}</h4>
                    <span className="text-[10px] font-mono text-zinc-500 block">{t.role} • {t.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
