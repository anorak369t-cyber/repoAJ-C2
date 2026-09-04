import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Send, X, FileText, Lock } from 'lucide-react';
import Magnetic from './Magnetic';
import { HERO_DATA } from '../data';
import { downloadProfessionalCV } from '../utils/pdfGenerator';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Mouse-following glow coordinate tracking, throttled with requestAnimationFrame
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      if (animationFrameRef.current !== null) return;

      animationFrameRef.current = requestAnimationFrame(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        animationFrameRef.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    downloadProfessionalCV();
  };

  const openConfirmModal = () => {
    setPassword('');
    setPasswordError('');
    setShowConfirmModal(true);
  };

  const handleConfirmDownload = () => {
    if (password.trim() === '31415') {
      handleDownloadCV();
      setShowConfirmModal(false);
      setPassword('');
      setPasswordError('');
    } else {
      setPasswordError('Access Denied: Invalid Personnel Passcode');
    }
  };

  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.6,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      }
    }
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "ease-in-out"
      }
    }
  };

  const words = useMemo(() => HERO_DATA.headline.split(' '), []);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#070b19] bg-grid-pattern"
    >
      {/* Floating abstract glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-cyan-900/15 blur-[130px] animate-blob-1 -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-sky-900/15 blur-[120px] animate-blob-2 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[25rem] h-[25rem] rounded-full bg-red-900/10 blur-[100px] animate-blob-3 -z-10 pointer-events-none" />

      {/* Mouse-following glowing orb spotlight */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none -z-10 hidden sm:block"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transition: 'left 0.1s ease-out, top 0.1s ease-out'
        }}
      />

      {/* Geometric Ambient Frame Accents */}
      <div className="absolute top-10 left-10 w-24 h-24 border-l border-t border-sky-500/10 rounded-tl-3xl pointer-events-none hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-r border-b border-sky-500/10 rounded-br-3xl pointer-events-none hidden lg:block" />

      {/* Decorative vertical rails (Vercel-esque) */}
      <div className="absolute left-[5%] top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none hidden xl:block" />
      <div className="absolute right-[5%] top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none hidden xl:block" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:border-red-500/40 transition-all duration-300"
          >
            <span>Available for Collaborations</span>
          </motion.div>

          {/* Core Logo Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white font-sans uppercase mb-4 selection:bg-cyan-600"
          >
            {HERO_DATA.name}
          </motion.h1>

          {/* Subtitle / Headline with Typewriter reveal and flashing cursor */}
          <motion.p 
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.15em] bg-gradient-to-r from-sky-400 via-cyan-300 to-red-400 bg-clip-text text-transparent font-sans uppercase mb-6 flex flex-wrap justify-center items-center"
          >
            {words.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.35em] py-1">
                {Array.from(word).map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
            <motion.span
              variants={cursorVariants}
              animate="blinking"
              className="inline-block w-[2px] h-[1em] bg-red-400 shrink-0 self-center"
              style={{ verticalAlign: 'middle', marginLeft: '1px' }}
            />
          </motion.p>

          {/* Detailed summary */}
          <motion.p 
            variants={itemVariants}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-10"
          >
            {HERO_DATA.intro}
          </motion.p>

          {/* Magnetic Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full"
          >
            <Magnetic>
              <button 
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 hover:scale-[1.03] transition-all cursor-pointer group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>

            <Magnetic>
              <button 
                onClick={openConfirmModal}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 hover:border-red-500/50 bg-white/2 hover:bg-red-950/10 text-sm font-semibold text-zinc-300 hover:text-red-300 flex items-center justify-center gap-2 hover:scale-[1.03] transition-all cursor-pointer group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Get CV</span>
              </button>
            </Magnetic>

            <Magnetic>
              <button 
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-transparent hover:bg-white/5 text-sm font-semibold text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 hover:scale-[1.03] transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Polite Download CV Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-amber-500/20 bg-[#020410] p-6 shadow-2xl shadow-amber-500/5 text-left z-10"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500 via-amber-500 to-red-500" />
              
              {/* Close Button */}
              <button
                onClick={() => setShowConfirmModal(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4 mt-2">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white tracking-wide font-sans flex items-center gap-2">
                    <span>Authorized Download Only</span>
                  </h3>
                  <p className="mt-2 text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                    Access to Grok369-cyber's professional CV is restricted to authorized personnel. Please enter the required security passcode to proceed with the download.
                  </p>
                </div>
              </div>

              {/* Password Input Field */}
              <div className="mt-5 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-2.5">
                <label className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                  Security Passcode
                </label>
                <div className="relative">
                  <input
                    type="password"
                    maxLength={10}
                    placeholder="•• place ••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (passwordError) setPasswordError('');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Grok') {
                        handleConfirmDownload();
                      }
                    }}
                    className="w-full px-3 py-2 text-sm text-white placeholder-zinc-700 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all font-mono text-center tracking-[0.25em]"
                    autoFocus
                  />
                </div>
                <AnimatePresence mode="wait">
                  {passwordError ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-400 text-xs font-medium flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      {passwordError}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-end gap-3 border-t border-white/5 pt-4">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-zinc-400 hover:text-white bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDownload}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-xs font-bold text-black hover:scale-[1.02] transition-all cursor-pointer shadow-lg shadow-amber-500/10"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unlock & Download</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-3 bg-zinc-700 rounded-full"
        />
      </div>
    </section>
  );
}
