import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { ABOUT_DATA } from '../data';

// Smooth animating counter component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1800; // ms
    const increment = end / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight bg-gradient-to-r from-sky-400 via-cyan-400 to-red-400 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b19]">
      {/* Radial blurred ambient blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none -z-10" />
      
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
            <span>01 / ABOUT ME</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
          >
            A Student with a Vision
          </motion.h2>
        </div>

        {/* Split Layout */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Cyber-Portrait Box */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="relative w-72 sm:w-80 h-[380px] sm:h-[420px] group cursor-pointer"
            >
              {/* Outer double glowing boundaries */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/20 via-cyan-500/20 to-red-500/20 blur-xl opacity-40 group-hover:opacity-75 transition-all duration-500 -z-10" />
              <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 scale-102 pointer-events-none -z-10 group-hover:scale-105 transition-transform duration-500" />

              {/* Main portrait body representing cybernetic developer avatar */}
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] flex flex-col justify-between p-6 relative">
                {/* Tech dotted backing matrix */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                {/* Top status rail */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>STAHIZA PRESIDENT</span>
                  </div>
                  <span>UGANDA</span>
                </div>

                {/* Styled Center Avatar visual */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-sky-500 via-cyan-500 to-red-500 mx-auto flex items-center justify-center p-1.5 relative shadow-[0_0_50px_rgba(6,182,212,0.25)] group-hover:scale-105 transition-transform duration-500">
                  {/* Subtle inner dark ring */}
                  <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.1)_0%,transparent_100%)]" />
                    
                    {/* Stylized vector representation of face outline / initials */}
                    <div className="text-4xl font-black font-sans tracking-tighter bg-gradient-to-r from-sky-400 via-cyan-200 to-red-400 bg-clip-text text-transparent animate-pulse select-none">
                      AJ
                    </div>
                  </div>
                  
                  {/* Outer active orbit rings */}
                  <div className="absolute -inset-1 border border-dashed border-cyan-400/20 rounded-full animate-[spin_40s_linear_infinite]" />
                </div>

                {/* Bottom bio card */}
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-zinc-300 font-medium">Kampala, Uganda</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-zinc-300 font-medium">Standard High School Zzana (STAHIZA)</span>
                  </div>

                  <div className="h-[1px] bg-white/5 my-2" />

                  {/* Tiny mock console output */}
                  <div className="font-mono text-[9px] text-zinc-600">
                    <span className="text-cyan-400">atamba@joel:~$</span> node init.js <br />
                    <span className="text-emerald-500">✔ Portfolios online</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Details and Counter Stats */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed">
                {ABOUT_DATA.bio}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/2 text-zinc-400 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-red-400" />
                  <span>Standard High School Zzana (STAHIZA) Leader</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/2 text-zinc-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>AI Developer & Designer</span>
                </div>
              </div>
            </motion.div>

            {/* Statistics Counters Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
              {ABOUT_DATA.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="p-5 rounded-2xl border border-white/5 bg-[#131e35] relative overflow-hidden group hover:border-cyan-500/25 transition-colors"
                >
                  {/* Subtle inner linear shimmer glow */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
                  
                  <div className="flex flex-col gap-1.5">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <span className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
