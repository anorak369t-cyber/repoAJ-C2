import { useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import { SKILLS_DATA } from '../data';

// Custom spring-physics Draggable Skill Chip
function DraggableSkillChip({ name }: { name: string; key?: string }) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="inline-block m-1 relative z-10">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.65}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.25)" }}
        whileDrag={{ scale: 1.12, cursor: "grabbing", zIndex: 30 }}
        className="px-4 py-2 rounded-xl border border-white/5 bg-[#131e35]/90 hover:border-cyan-500/30 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-cyan-300 transition-colors shadow-sm select-none"
        data-cursor-drag
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-500" />
          {name}
        </span>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'backend':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#070b19] relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-sky-900/5 blur-[100px] pointer-events-none -z-10" />

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
            <span>02 / COMPETENCIES</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Core Technical Stack
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-sm max-w-lg mt-2 font-normal leading-relaxed"
          >
            Interactive technology cells mapping developer expertise. Hover, grab, and toss any chip to experience real-time spring physics.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0f172a] relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300"
            >
              {/* Outer soft glowing boundaries on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide font-sans uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Chips Flex-Wrap Panel */}
              <div className="flex flex-wrap -m-1">
                {category.skills.map((skill) => (
                  <DraggableSkillChip key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tip Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="text-center mt-12 text-[10px] font-mono text-zinc-500 uppercase tracking-widest"
        >
          ★ Click and drag elements to experience layout physics ★
        </motion.div>
      </div>
    </section>
  );
}
