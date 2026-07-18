import { useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, Terminal, Palette, Settings } from 'lucide-react';
import { SKILLS_DATA } from '../data';
import ScrollReveal from './ScrollReveal';

// Custom skill proficiency dictionary
const SKILL_PROFICIENCY: Record<string, number> = {
  // UI/UX Design
  "Figma": 95,
  "User Research": 85,
  "Wireframing": 90,
  "High-Fidelity Prototyping": 92,
  "Design Systems": 88,
  "Interaction Design": 90,
  "Typography & Color Theory": 85,

  // Frontend
  "HTML": 95,
  "CSS": 90,
  "JavaScript": 92,
  "TypeScript": 90,
  "React": 92,
  "Next.js": 85,
  "Tailwind CSS": 95,

  // Backend
  "Node.js": 88,
  "Express": 90,
  "PostgreSQL": 82,
  "Supabase": 88,
  "REST APIs": 92,

  // Tools & Deployment
  "Git": 90,
  "GitHub": 92,
  "VS Code": 95,
  "Vercel": 90,
  "Netlify": 85
};

interface SkillTheme {
  dot: string;
  text: string;
  bar: string;
  shadow: string;
  hoverBorder: string;
  hoverText: string;
}

const getThemeColors = (categoryTitle: string): SkillTheme => {
  switch (categoryTitle.toLowerCase()) {
    case 'ui/ux design':
      return {
        dot: 'bg-amber-400',
        text: 'text-amber-400/80 group-hover:text-amber-300',
        bar: 'from-amber-500 to-orange-500',
        shadow: 'rgba(245, 158, 11, 0.4)',
        hoverBorder: 'hover:border-amber-500/30',
        hoverText: 'hover:text-amber-300'
      };
    case 'frontend':
      return {
        dot: 'bg-cyan-400',
        text: 'text-cyan-400/80 group-hover:text-cyan-300',
        bar: 'from-cyan-500 to-blue-500',
        shadow: 'rgba(6, 182, 212, 0.4)',
        hoverBorder: 'hover:border-cyan-500/30',
        hoverText: 'hover:text-cyan-300'
      };
    case 'backend':
      return {
        dot: 'bg-sky-400',
        text: 'text-sky-400/80 group-hover:text-sky-300',
        bar: 'from-sky-500 to-indigo-500',
        shadow: 'rgba(14, 165, 233, 0.4)',
        hoverBorder: 'hover:border-sky-500/30',
        hoverText: 'hover:text-sky-300'
      };
    default:
      return {
        dot: 'bg-emerald-400',
        text: 'text-emerald-400/80 group-hover:text-emerald-300',
        bar: 'from-emerald-500 to-teal-500',
        shadow: 'rgba(16, 185, 129, 0.4)',
        hoverBorder: 'hover:border-emerald-500/30',
        hoverText: 'hover:text-emerald-300'
      };
  }
};

// Custom spring-physics Draggable Skill Chip
function DraggableSkillChip({ name, proficiency, theme }: { name: string; proficiency: number; theme: SkillTheme; key?: string | number }) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="inline-block m-1 relative z-10">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.65}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
        whileHover={{ scale: 1.04, boxShadow: `0 0 15px ${theme.shadow}` }}
        whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 30 }}
        className={`px-3.5 py-2.5 rounded-xl border border-white/5 bg-[#131e35]/90 ${theme.hoverBorder} text-xs sm:text-sm font-semibold text-zinc-300 ${theme.hoverText} transition-all shadow-sm select-none min-w-[130px] sm:min-w-[145px]`}
        data-cursor-drag
      >
        <span className="flex flex-col gap-1.5 w-full">
          <span className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 truncate">
              <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
              <span className="truncate">{name}</span>
            </span>
            <span className={`text-[10px] font-mono ${theme.text}`}>
              {proficiency}%
            </span>
          </span>
          
          {/* Custom micro-progress bar */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`}
              style={{ boxShadow: `0 0 4px ${theme.shadow}` }}
            />
          </div>
        </span>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'ui/ux design':
        return <Palette className="w-5 h-5 text-amber-400" />;
      case 'frontend':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'backend':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      default:
        return <Settings className="w-5 h-5 text-emerald-400" />;
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
            Interactive technology cells mapping developer & UI/UX design expertise. Hover, grab, and toss any chip to experience real-time spring physics.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0f172a] relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 h-full"
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
                {category.skills.map((skill) => {
                  const proficiency = SKILL_PROFICIENCY[skill] || 85;
                  const theme = getThemeColors(category.title);
                  return (
                    <DraggableSkillChip 
                      key={skill} 
                      name={skill} 
                      proficiency={proficiency} 
                      theme={theme} 
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* Tip Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="text-center mt-12 text-[10px] font-mono text-zinc-500 uppercase tracking-widest"
        >
          Click and drag elements to experience layout physics
        </motion.div>
      </div>
    </section>
  );
}
