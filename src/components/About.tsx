import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, GraduationCap, MapPin, Camera, Users, Palette, Code } from 'lucide-react';
import { ABOUT_DATA } from '../data';
import ScrollReveal from './ScrollReveal';
import joelDesigning from '../assets/images/joel_designing_1783859912965.jpg';
import stahizaClub from '../assets/images/stahiza_club_1783859927733.jpg';
import joelCoding from '../assets/images/joel_coding_1783859943588.jpg';

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
            <span>SYS // ABOUT ME</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
          >
            A developer with a Vision
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
                    <span>Vortex-labs PRESIDENT</span>
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
                    <span className="text-cyan-400">Vortex@labs:~$</span> node init.js <br />
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
                  <span>Vortex dynamics labs (VD) Grok369-cyber</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-white/2 text-zinc-400 text-xs font-semibold">
                  <Code className="w-3.5 h-3.5 text-sky-400" />
                  <span>AI Developer & Designer</span>
                </div>
              </div>
            </motion.div>

            {/* Statistics Counters Grid */}
            <ScrollReveal staggerChildren={0.12} className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
              {ABOUT_DATA.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl border border-white/5 bg-[#131e35] relative overflow-hidden group hover:border-cyan-500/25 transition-colors h-full"
                >
                  {/* Subtle inner linear shimmer glow */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
                  
                  <div className="flex flex-col gap-1.5">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <span className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

        </div>

        {/* Visual Collage Section */}
        <div className="mt-24 pt-16 border-t border-white/5 relative">
          <div className="mb-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/15 bg-amber-500/5 text-amber-400 text-[10px] font-mono tracking-widest uppercase mb-3"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>INNOVATION & CREATIVITY IN FOCUS</span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase font-sans"
            >
              Developer & Designer Lifestyle
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-sm max-w-xl mt-2 font-normal leading-relaxed"
            >
              An authentic behind-the-scenes look at our creative processes—from wireframe layout sprints to full-stack code deployments and Vortex ICT labs mentorship.
            </motion.p>
          </div>

          {/* Interactive Bento Gallery */}
          <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6" id="developer-collage">
            {/* 1. The UI/UX Designer (Wide Span) */}
            <div
              className="col-span-1 md:col-span-1 lg:col-span-7 group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] h-[280px] sm:h-[340px] md:h-[380px] cursor-pointer"
              id="collage-designer-card"
            >
              <img
                src={joelDesigning}
                alt="grok designing UI/UX on tablet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono">
                    Figma Workspace
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono">
                    UI/UX Design
                  </span>
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-400 animate-pulse" />
                  Visual Interface Crafting
                </h4>
                <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm mt-1 max-w-md leading-relaxed">
                  Wireframing, typography scales, accessibility token systems, and interactive design prototypes crafted to establish fluid user journeys.
                </p>
              </div>
            </div>

            {/* 2. The STAHIZA Club President */}
            <div
              className="col-span-1 md:col-span-1 lg:col-span-5 group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] h-[280px] sm:h-[340px] md:h-[380px] cursor-pointer"
              id="collage-president-card"
            >
              <img
                src={stahizaClub}
                alt="grok leading high school student developers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono">
                    Leadership
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono">
                    Education
                  </span>
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  ICT Empowerment
                </h4>
                <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm mt-1 leading-relaxed">
                  Leading coding bootcamps, hosting custom design workshops, and guiding peers through web layout wireframing in Kampala and across the globe.
                </p>
              </div>
            </div>

            {/* 3. The Full-Stack Engineer */}
            <div
              className="col-span-1 md:col-span-1 lg:col-span-5 group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] h-[280px] sm:h-[340px] md:h-[380px] cursor-pointer"
              id="collage-developer-card"
            >
              <img
                src={joelCoding}
                alt="grok coding typescript behind monitor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono">
                    TypeScript
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono">
                    Full Stack
                  </span>
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Code className="w-4 h-4 text-emerald-400" />
                  Deep-Focus Architecture
                </h4>
                <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm mt-1 leading-relaxed">
                  Implementing robust Node backends, custom responsive database integrations, and high-performance interactive interfaces.
                </p>
              </div>
            </div>

            {/* 4. The Visual Spec Canvas */}
            <div
              className="col-span-1 md:col-span-1 lg:col-span-7 group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] h-[280px] sm:h-[340px] md:h-[380px] cursor-pointer"
              id="collage-spec-card"
            >
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80"
                alt="Modern UIUX style guide and responsive prototype elements"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 brightness-90 group-hover:brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-mono">
                    Design Token Spec
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    Aesthetics
                  </span>
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Palette className="w-4 h-4 text-pink-400" />
                  Design-to-Code Alignment
                </h4>
                <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm mt-1 max-w-md leading-relaxed">
                  Form follows function. Merging creative layouts with engineering precision, adhering to accessible WCAG AAA guidelines, and elegant typographic scales.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
