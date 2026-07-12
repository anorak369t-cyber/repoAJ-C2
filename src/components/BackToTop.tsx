import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled past 500px (typically past the Hero section)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-40"
          id="back-to-top-container"
        >
          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-[var(--theme-border-color-hover)] bg-[#0f172a]/80 backdrop-blur-md text-zinc-400 hover:text-white shadow-lg hover:shadow-[0_0_15px_var(--theme-box-shadow-hover)] hover:scale-110 transition-all duration-300 cursor-pointer"
            title="Back to Top"
            id="back-to-top-button"
          >
            {/* The ArrowUp icon translates upwards slightly on hover to give tactile feedback */}
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
            
            {/* Radial background pulse ring */}
            <span className="absolute inset-0 rounded-full bg-cyan-400/5 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
