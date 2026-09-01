import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, CheckCircle, ChevronDown, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#070b19] relative overflow-hidden">
      {/* Background grids and glowing blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-cyan-950/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/15 bg-cyan-500/5 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-3"
          >
            <span>SYS // INNOVATIVE EXHIBITS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Featured Engineering Work
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-sm max-w-lg mt-2 font-normal leading-relaxed"
          >
            A curated showcase of modern web solutions. Click on any card to morph it into an interactive full-screen specification view.
          </motion.p>
        </div>

        {/* Project Grid */}
        <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {PROJECTS_DATA.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <TiltCard
                key={project.id}
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
                className="group cursor-pointer rounded-2xl border border-white/5 bg-[#0f172a] overflow-hidden flex flex-col h-full relative hover:border-cyan-500/20"
                disabled={isExpanded}
              >
                {/* Premium Shimmer effects */}
                <div className="shimmer-effect" />

                {/* Card Image Area with visual overlays */}
                <div className="relative aspect-video overflow-hidden bg-zinc-900 border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-80" />
                </div>

                {/* Card Information */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white tracking-wide font-sans group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1 shrink-0 bg-white/2 px-2 py-1 rounded border border-white/5 group-hover:text-cyan-400 transition-colors">
                        <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.span>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm font-normal leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Inline Expanded Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden border-t border-white/5 mt-4 pt-4 space-y-4"
                          onClick={(e) => e.stopPropagation()} // Prevent card closing when interacting with links/buttons
                        >
                          <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sans">Key Features & Highlights</h4>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                                  <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quick Interactive Actions */}
                          <div className="flex gap-2 pt-2">
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#16223f] border border-cyan-500/10 text-xs font-semibold text-cyan-400 hover:bg-cyan-950/40 hover:border-cyan-500/30 transition-all cursor-pointer"
                            >
                              <span>Specs Deep-Dive</span>
                            </button>
                            
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="group/btn flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-md shadow-red-500/10 transition-all cursor-pointer text-xs font-semibold"
                              title="Launch Live App"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                            
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="group/btn flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-white/10 hover:border-cyan-500/30 bg-white/2 hover:bg-cyan-950/10 text-zinc-300 hover:text-cyan-300 transition-all cursor-pointer text-xs font-semibold"
                              title="GitHub Repository"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Technology badges */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-white/5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md border border-white/5 bg-white/2 text-[10px] font-mono text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-cyan-950/30 text-[9px] font-mono text-cyan-400 font-semibold">
                        +{project.tags.length - 3} MORE
                      </span>
                    )}
                  </div>

                  {/* Direct Redirect Links */}
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Deep-Dive</span>
                    </button>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/5 bg-white/2 hover:bg-red-500/10 hover:border-red-500/30 text-zinc-400 hover:text-red-400 text-xs font-medium transition-all duration-300"
                        title="Launch Live App"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/5 bg-white/2 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-zinc-400 hover:text-cyan-400 text-xs font-medium transition-all duration-300"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </ScrollReveal>

        {/* Morphing Expanded Showcase Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              {/* Darkened blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-xl"
                onClick={() => setSelectedProject(null)}
              />

              {/* Expanded Card Sheet */}
              <motion.div
                layoutId={`card-container-${selectedProject.id}`}
                className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0f172a] overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] z-10 my-8"
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
              >
                {/* Hero image header */}
                <div className="relative w-full h-[240px] sm:h-[380px] bg-zinc-900 border-b border-white/5">
                  <motion.img
                    layoutId={`card-image-${selectedProject.id}`}
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />

                  {/* Absolute Top bar Close button and Title overlay */}
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2.5 rounded-full bg-[#070b19]/80 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-zinc-400 hover:text-white backdrop-blur-sm transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Specification specifications and tags */}
                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
                  
                  {/* Left panel details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <motion.h3
                        layoutId={`card-title-${selectedProject.id}`}
                        className="text-2xl sm:text-4xl font-bold text-white tracking-wide font-sans mb-4"
                      >
                        {selectedProject.name}
                      </motion.h3>

                      <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Highlights with Checkmarks */}
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <h4 className="text-sm font-semibold tracking-wider font-sans text-cyan-400 uppercase">Key Deliverables</h4>
                      <div className="space-y-2">
                        {selectedProject.highlights.map((highlight, idx) => (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + idx * 0.08 }}
                            key={idx}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-zinc-400">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right panel metadata actions and technology cells */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                    <div className="space-y-6">
                      <h4 className="text-sm font-semibold tracking-wider font-sans text-red-400 uppercase">Technical Specifications</h4>
                      
                      {/* Sequential Tech Badges */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, idx) => (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            key={tag}
                            className="px-3 py-1.5 rounded-xl border border-white/5 bg-white/2 text-xs font-mono text-zinc-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Links */}
                    <div className="flex gap-4 pt-6 border-t border-white/5">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/modal-btn flex-grow flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-sm font-semibold text-white shadow-lg shadow-red-500/25 hover:scale-[1.01] transition-all cursor-pointer"
                      >
                        <span>Launch Project</span>
                        <ExternalLink className="w-4 h-4" />
                        <ArrowUpRight className="w-4 h-4 opacity-75 group-hover/modal-btn:translate-x-0.5 group-hover/modal-btn:-translate-y-0.5 transition-transform" />
                      </a>
                      
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/modal-btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/2 hover:bg-cyan-950/20 text-zinc-300 hover:text-cyan-300 transition-all cursor-pointer"
                        title="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-semibold">GitHub</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover/modal-btn:opacity-100 group-hover/modal-btn:translate-x-0.5 group-hover/modal-btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
