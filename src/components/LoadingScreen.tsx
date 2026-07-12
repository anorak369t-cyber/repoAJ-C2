import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["STAHIZA PRESIDENT", "FULL-STACK DEVELOPER", "AI ENTHUSIAST", "JOEL ATAMBA"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Word cycler
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        }
        clearInterval(wordInterval);
        return prev;
      });
    }, 700);

    // Progress bar speed
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500); // Allow time for exit animation
          }, 300);
          return 100;
        }
        const rand = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + rand, 100);
      });
    }, 150);

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#070b19] z-50 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Futuristic ambient backing glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative w-full max-w-sm px-6 flex flex-col items-center">
            {/* Morphing Logo Graphic */}
            <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
              <motion.div
                animate={{
                  borderRadius: currentWordIndex === 0 ? "50%" : currentWordIndex === 1 ? "16px" : currentWordIndex === 2 ? "35% 65% 70% 30% / 50% 45% 55% 50%" : "24px",
                  rotate: [0, 90, 180, 270][currentWordIndex] || 0,
                  scale: [1, 1.1, 0.95, 1][currentWordIndex] || 1
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="w-16 h-16 bg-gradient-to-tr from-sky-500 via-cyan-500 to-red-500 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.35)]"
              >
                <motion.span 
                  key={currentWordIndex}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="text-white font-mono font-bold text-xl"
                >
                  {["I", "D", "A", "JA"][currentWordIndex] || "J"}
                </motion.span>
              </motion.div>

              {/* Orbital ring path */}
              <svg className="absolute inset-0 w-24 h-24 -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  className="stroke-zinc-900 fill-none stroke-2"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="44"
                  className="stroke-cyan-500 fill-none stroke-2"
                  strokeDasharray={2 * Math.PI * 44}
                  animate={{ strokeDashoffset: 2 * Math.PI * 44 * (1 - progress / 100) }}
                  transition={{ ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Word Cycling text */}
            <div className="h-10 flex items-center justify-center overflow-hidden mb-2">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentWordIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-white font-sans font-medium tracking-[0.2em] text-xs sm:text-sm text-center uppercase"
                >
                  {words[currentWordIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Digital percentage display */}
            <motion.span 
              className="text-[10px] font-mono text-cyan-400 tracking-widest mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
            >
              {progress}% READY
            </motion.span>

            {/* Micro progress line wrapper */}
            <div className="w-48 h-[1px] bg-zinc-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-sky-500 to-cyan-500 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
