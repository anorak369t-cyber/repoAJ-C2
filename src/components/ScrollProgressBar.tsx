import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none" 
      id="scroll-progress-wrapper"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[var(--cyan-500)] via-[var(--sky-400)] to-[var(--red-500)] origin-left"
        style={{ width: `${scrollProgress}%` }}
        animate={{ opacity: scrollProgress > 1 ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        id="scroll-progress-bar"
      />
    </div>
  );
}
