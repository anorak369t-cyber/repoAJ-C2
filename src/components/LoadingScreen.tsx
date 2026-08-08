import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Terminal, ShieldCheck, Activity, Zap, CheckCircle2, Radio, Server, Code, Wifi } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const systemLogs = [
  "INITIALIZING NEURAL CORE BUS...",
  "ESTABLISHING GITHUB PULSE TELEMETRY...",
  "CALIBRATING FULL-STACK ROUTING ENGINES...",
  "COMPILING PORTFOLIO EXHIBIT MODULES...",
  "VERIFYING SECURITY TOKENS & INTERACTIVE SUITE...",
  "SYSTEM ONLINE // ACCESS GRANTED"
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [logIndex, setLogIndex] = useState(0);
  const [activeBlocks, setActiveBlocks] = useState(1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress progression without raw numbers
    const interval = setInterval(() => {
      setActiveBlocks((prev) => {
        if (prev >= 16) {
          clearInterval(interval);
          setLogIndex(systemLogs.length - 1);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 700); // Shutter animation completion
          }, 500);
          return 16;
        }

        const next = prev + 1;
        const nextLogIdx = Math.min(
          Math.floor((next / 16) * systemLogs.length),
          systemLogs.length - 1
        );
        setLogIndex(nextLogIdx);
        return next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <div id="loading-screen" className="fixed inset-0 z-50 overflow-hidden pointer-events-auto select-none bg-[#030712] font-mono text-zinc-300">
          {/* Top Shutter Door */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#030712] border-b border-cyan-500/20 z-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.15),transparent_75%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_90%,rgba(6,182,212,0.15)_100%)]" />
          </motion.div>

          {/* Bottom Shutter Door */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#030712] border-t border-cyan-500/20 z-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_75%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,transparent_90%,rgba(6,182,212,0.15)_100%)]" />
          </motion.div>

          {/* Main Cyber Holographic Viewport */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="relative z-20 w-full h-full flex flex-col items-center justify-between p-6 sm:p-10"
          >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#082f49_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

            {/* Scanning Laser Beam Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent border-b border-cyan-400"
              />
            </div>

            {/* TOP HUD TELEMETRY BAR */}
            <div className="w-full max-w-6xl flex items-center justify-between text-[10px] tracking-widest text-cyan-400/80 border-b border-cyan-500/15 pb-3 z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-bold text-cyan-300 uppercase tracking-widest">[ SYSTEM // ATAMBA JOEL ]</span>
              </div>
              
              <div className="hidden md:flex items-center gap-6 text-zinc-400">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-cyan-400" /> STAHIZA_OS</span>
                <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-cyan-400" /> CORE_LOAD</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ENCRYPTED</span>
              </div>

              <div className="flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>KAMPALA_NODE</span>
              </div>
            </div>

            {/* CENTER HOLOGRAPHIC REACTOR & SOUND/DATA OSCILLOSCOPE */}
            <div className="my-auto relative flex flex-col items-center justify-center z-10">
              {/* Sci-Fi Corner Frame Alignment Brackets */}
              <div className="absolute -inset-10 sm:-inset-16 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/70" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/70" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/70" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/70" />
              </div>

              {/* Rotating Holographic Reactor Rings */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
                {/* Outer Dashed Orbiting Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40"
                />

                {/* Counter Rotating Inner Ring with tick marks */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-3 rounded-full border-2 border-dotted border-cyan-500/30"
                />

                {/* Pulsing Outer Glow Ring */}
                <motion.div
                  animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-6 rounded-full bg-cyan-500/10 border border-cyan-400/30 blur-sm"
                />

                {/* Central Cyber Monogram Badge */}
                <div className="relative z-10 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#050b18]/90 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                  <motion.span
                    animate={{ scale: [0.97, 1.03, 0.97] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="text-3xl sm:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 font-sans"
                  >
                    AJ
                  </motion.span>

                  <div className="flex items-center gap-1 mt-1 text-[9px] text-cyan-400/90 font-mono tracking-widest">
                    <Radio className="w-2.5 h-2.5 animate-pulse" />
                    <span>{activeBlocks === 16 ? "ACTIVE" : "LOADING"}</span>
                  </div>
                </div>
              </div>

              {/* Geeky Oscilloscope / Frequency Data Waveform */}
              <div className="mt-8 flex items-center gap-1.5 h-10 px-6 py-2 rounded-xl bg-cyan-950/20 border border-cyan-500/20 backdrop-blur-md">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: activeBlocks === 16 ? ['8px', '28px', '12px', '32px', '8px'] : ['4px', '18px', '6px', '24px', '4px'],
                      backgroundColor: i < activeBlocks + 4 ? '#22d3ee' : '#1e293b'
                    }}
                    transition={{
                      duration: 0.6 + (i % 5) * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-1 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                  />
                ))}
              </div>

              {/* High-Tech Telemetry Module Blocks (No numbers!) */}
              <div className="mt-6 flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 16 }).map((_, idx) => {
                    const isActive = idx < activeBlocks;
                    const isLast = idx === 15;
                    return (
                      <motion.div
                        key={idx}
                        className={`h-3 w-2.5 sm:w-3.5 rounded-sm transition-all duration-300 ${
                          isActive
                            ? isLast
                              ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]'
                              : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                            : 'bg-zinc-800/60 border border-white/5'
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="mt-2 flex items-center gap-2 text-[10px] text-cyan-400/70 font-mono tracking-widest uppercase">
                  <span>[</span>
                  <span className="text-cyan-300 font-bold">MODULE_SYNC</span>
                  <span>::</span>
                  <span className="text-emerald-400">{activeBlocks === 16 ? "COMPLETE" : "IN_PROGRESS"}</span>
                  <span>]</span>
                </div>
              </div>

              {/* Console Diagnostic Log Terminal Output */}
              <div className="mt-6 h-9 flex items-center justify-between px-4 py-2 rounded-lg bg-[#070e20] border border-cyan-500/25 backdrop-blur-md max-w-xs sm:max-w-md w-full shadow-lg">
                <div className="flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
                  {activeBlocks === 16 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
                  ) : (
                    <Activity className="w-4 h-4 text-cyan-400 shrink-0 animate-spin" />
                  )}
                  <span className="text-[11px] font-mono text-cyan-200 tracking-wider uppercase truncate">
                    {systemLogs[logIndex]}
                  </span>
                </div>
                <span className="w-2 h-3 bg-cyan-400 animate-pulse ml-2 shrink-0" />
              </div>
            </div>

            {/* BOTTOM HUD FOOTER */}
            <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between text-[10px] text-zinc-500 border-t border-cyan-500/15 pt-3 gap-2 z-10">
              <div className="flex items-center gap-2">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">ATAMBA JOEL</span>
                <span>//</span>
                <span>PRESIDENT OF STAHIZA ICT CLUB</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-400/80">
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-cyan-400" /> FULL-STACK & AI ARCHITECTURE</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
