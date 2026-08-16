import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  PenTool, 
  Layout, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  SlidersHorizontal,
  Compass,
  MonitorCheck
} from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const designSystemStages = [
  {
    phase: "01. TOKENS",
    title: "RESOLVING DESIGN SYSTEM TOKENS",
    detail: "colors: cyan-400, slate-900 | font: sans, mono | radius: 16px"
  },
  {
    phase: "02. VECTORS",
    title: "COMPUTING BEZIER PATHS & WIREFRAMES",
    detail: "interpolating svg paths | 8pt baseline grid alignment"
  },
  {
    phase: "03. AUTO-LAYOUT",
    title: "CALCULATING FLEX HIERARCHY & CONSTRAINTS",
    detail: "viewport: 1440x900 responsive | z-index layers verified"
  },
  {
    phase: "04. COMPONENT DOM",
    title: "HYDRATING REACT FIBER & MOTION GRAPH",
    detail: "mounting interaction hooks | 60fps gpu acceleration"
  },
  {
    phase: "05. READY",
    title: "CANVAS MOUNTED // READY TO EXPLORE",
    detail: "welcome to atamba joel's digital portfolio"
  }
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stageIndex, setStageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2100; // 2.1s smooth, non-blocking sequence

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / duration, 1);
      const currentProgress = Math.floor(pct * 100);

      setProgress(currentProgress);

      const nextStage = Math.min(
        Math.floor(pct * designSystemStages.length),
        designSystemStages.length - 1
      );
      setStageIndex(nextStage);

      if (pct >= 1) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 600); // Fluid canvas dissolve
        }, 300);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  const currentStage = designSystemStages[stageIndex];

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 overflow-hidden pointer-events-auto select-none bg-[#090d16] font-sans text-zinc-200 flex flex-col justify-between"
        >
          {/* Subtle Designer Dot Matrix Blueprint Canvas Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

          {/* Precision Alignment Crosshairs (Top-Left, Top-Right, Bottom-Left, Bottom-Right) */}
          <div className="absolute top-6 left-6 text-zinc-700 font-mono text-[9px] pointer-events-none hidden sm:block">
            + [x: 0, y: 0]
          </div>
          <div className="absolute top-6 right-6 text-zinc-700 font-mono text-[9px] pointer-events-none hidden sm:block">
            + [x: 1440, y: 0]
          </div>
          <div className="absolute bottom-6 left-6 text-zinc-700 font-mono text-[9px] pointer-events-none hidden sm:block">
            + [x: 0, y: 900]
          </div>
          <div className="absolute bottom-6 right-6 text-zinc-700 font-mono text-[9px] pointer-events-none hidden sm:block">
            + [x: 1440, y: 900]
          </div>

          {/* Ambient Design Studio Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />

          {/* TOP UI/UX WORKSPACE TOOLBAR */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-7 flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold text-[11px]">
                <Layout className="w-3.5 h-3.5" />
                <span>CANVAS // ATAMBA JOEL</span>
              </div>
              <span className="hidden md:inline text-zinc-600">|</span>
              <span className="hidden md:flex items-center gap-1.5 text-zinc-400 text-[11px]">
                <Layers className="w-3 h-3 text-cyan-400" /> UI/UX ARCHITECT
              </span>
            </div>

            {/* Design System Status Badges */}
            <div className="flex items-center gap-2 sm:gap-3 text-[10px]">
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800/80 border border-white/5 text-zinc-300">
                <SlidersHorizontal className="w-2.5 h-2.5 text-cyan-400" /> 8PT GRID
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {progress < 100 ? "COMPILING" : "RENDERED"}
              </span>
            </div>
          </div>

          {/* CENTER ARTBOARD STAGE - Figma/Creative Vector Bounding Box */}
          <div className="relative z-20 w-full max-w-lg mx-auto px-6 flex flex-col items-center justify-center my-auto">
            
            {/* The Precision Artboard Frame with Corner Anchor Nodes */}
            <div className="relative w-72 sm:w-80 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* Figma-Style Bounding Box Handles */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-cyan-400 border border-black rounded-sm shadow-sm" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-cyan-400 border border-black rounded-sm shadow-sm" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-cyan-400 border border-black rounded-sm shadow-sm" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-cyan-400 border border-black rounded-sm shadow-sm" />

              {/* Floating Layer Tag */}
              <div className="absolute -top-3.5 left-6 px-2.5 py-0.5 rounded bg-cyan-500 text-black font-mono text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                <Compass className="w-2.5 h-2.5" />
                <span>Frame: #atamba-portfolio</span>
              </div>

              {/* Central Vector Geometric Monogram with Pen Tool Path */}
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                {/* Rotating Vector Node Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30"
                />

                {/* Outer Dimension Ring with Anchor Nodes */}
                <div className="absolute inset-2 rounded-2xl border border-white/10 flex items-center justify-center">
                  <div className="absolute -top-1 w-2 h-2 bg-cyan-400 rounded-full" />
                  <div className="absolute -bottom-1 w-2 h-2 bg-cyan-400 rounded-full" />
                  <div className="absolute -left-1 w-2 h-2 bg-cyan-400 rounded-full" />
                  <div className="absolute -right-1 w-2 h-2 bg-cyan-400 rounded-full" />
                </div>

                {/* Central Brand Badge */}
                <div className="relative z-10 w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-950/80 to-slate-900/90 border border-cyan-400/40 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-cyan-400 font-sans">
                    AJ
                  </span>
                  <div className="flex items-center gap-1 text-[8px] font-mono text-cyan-400/80 mt-0.5">
                    <PenTool className="w-2.5 h-2.5" />
                    <span>UI / UX</span>
                  </div>
                </div>

                {/* Animated Pen Tool Cursor Floating on Path */}
                <motion.div
                  animate={{
                    x: [18, 38, 22, -18, -32, 18],
                    y: [-28, 12, 36, 28, -16, -28],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute z-20 pointer-events-none text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                >
                  <PenTool className="w-4 h-4 fill-cyan-400/30" />
                </motion.div>
              </div>

              {/* Design System Token Swatches */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.7)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                </div>
                <span className="text-zinc-500">AutoLayout: flex-col</span>
              </div>
            </div>

            {/* Design Workflow Pipeline Progress */}
            <div className="mt-8 w-full max-w-sm flex flex-col items-center">
              {/* Progress Bar with Design Metric Display */}
              <div className="w-full">
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-cyan-400 font-semibold">{currentStage.phase}</span>
                  <span className="text-zinc-400">{progress}%</span>
                </div>
                
                <div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden border border-white/5 p-[1px]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Dynamic Design Phase Details */}
              <div className="mt-4 text-center">
                <h3 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider flex items-center justify-center gap-1.5">
                  {progress === 100 ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                  ) : (
                    <Code2 className="w-3.5 h-3.5 text-cyan-400 inline" />
                  )}
                  <span>{currentStage.title}</span>
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 mt-1 max-w-xs truncate">
                  {currentStage.detail}
                </p>
              </div>
            </div>

          </div>

          {/* BOTTOM DESIGNER FOOTER METRICS */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-10 pb-7 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-4 gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>FIGMA PROTOTYPE &amp; REACT FULL-STACK ARCHITECTURE</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <span className="flex items-center gap-1">
                <MonitorCheck className="w-3 h-3 text-emerald-400" /> DPI: RETINA 2X
              </span>
              <span>•</span>
              <span>FPS: 60.0</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
