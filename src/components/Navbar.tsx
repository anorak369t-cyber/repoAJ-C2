import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Palette, Check } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' }
];

const themes = [
  { id: 'blue', label: 'Sapphire', color: 'bg-blue-500 border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]' },
  { id: 'gold', label: 'Gold', color: 'bg-amber-500 border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]' },
  { id: 'green', label: 'Emerald', color: 'bg-emerald-500 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]' },
  { id: 'red', label: 'Ruby', color: 'bg-rose-500 border-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.5)]' },
  { id: 'pink', label: 'Rose', color: 'bg-pink-500 border-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.5)]' },
  { id: 'white', label: 'Platinum', color: 'bg-stone-200 border-stone-400 shadow-[0_0_8px_rgba(120,113,108,0.3)]' },
  { id: 'mixed', label: 'Nebula Mix', color: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 border-pink-300 shadow-[0_0_8px_rgba(168,85,247,0.6)]' }
];

interface NavbarProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          const id = visibleSection.target.id;
          setActiveSection(id);
          if (window.location.hash !== `#${id}`) {
            window.history.replaceState(null, '', `#${id}`);
          }
        }
      },
      {
        root: null,
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-20% 0px -35% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Navigation: Section with id "${id}" not found`);
      return;
    }

    const navHeight = 96;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const targetScrollPosition = elementPosition - navHeight;

    window.history.pushState(null, '', `#${id}`);
    window.scrollTo({
      top: targetScrollPosition,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });

    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#070b19]/70 backdrop-blur-md border-b border-white/5 shadow-[0_12px_30px_rgba(2,6,23,0.35)]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-8 h-10 flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(0,245,255,0.4)] group-hover:scale-105 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full">
                <defs>
                  <radialGradient id="bg" cx="50%" cy="48%" r="75%">
                    <stop offset="0%" stopColor="#10183b"/>
                    <stop offset="55%" stopColor="#060a1b"/>
                    <stop offset="100%" stopColor="#010207"/>
                  </radialGradient>
                  <linearGradient id="vMain" x1="120" y1="100" x2="390" y2="400">
                    <stop offset="0%" stopColor="#ffffff"/>
                    <stop offset="18%" stopColor="#9defff"/>
                    <stop offset="45%" stopColor="#2578ff"/>
                    <stop offset="72%" stopColor="#763cff"/>
                    <stop offset="100%" stopColor="#ff3ed8"/>
                  </linearGradient>
                  <linearGradient id="vLeft" x1="130" y1="120" x2="260" y2="380">
                    <stop offset="0%" stopColor="#eaffff"/>
                    <stop offset="25%" stopColor="#49dfff"/>
                    <stop offset="70%" stopColor="#1450ce"/>
                    <stop offset="100%" stopColor="#42208f"/>
                  </linearGradient>
                  <linearGradient id="vRight" x1="390" y1="110" x2="250" y2="390">
                    <stop offset="0%" stopColor="#ffffff"/>
                    <stop offset="25%" stopColor="#a8c9ff"/>
                    <stop offset="65%" stopColor="#703cff"/>
                    <stop offset="100%" stopColor="#e52eff"/>
                  </linearGradient>
                  <linearGradient id="cyan" x1="80" y1="100" x2="430" y2="420">
                    <stop stopColor="#00f0ff"/>
                    <stop offset="45%" stopColor="#147cff"/>
                    <stop offset="100%" stopColor="#6b2cff"/>
                  </linearGradient>
                  <linearGradient id="magenta" x1="400" y1="100" x2="120" y2="420">
                    <stop stopColor="#ff35e8"/>
                    <stop offset="50%" stopColor="#842cff"/>
                    <stop offset="100%" stopColor="#00e5ff"/>
                  </linearGradient>
                  <filter id="blueGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="6" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="12" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000000" floodOpacity="0.85"/>
                  </filter>
                </defs>
                <rect width="512" height="512" rx="96" fill="url(#bg)"/>
                <circle cx="256" cy="256" r="220" fill="none" stroke="#0c3b9b" strokeWidth="1" opacity=".55"/>
                <circle cx="256" cy="256" r="202" fill="none" stroke="#176cff" strokeWidth="1.5" opacity=".5"/>
                <circle cx="256" cy="256" r="184" fill="none" stroke="#246eff" strokeWidth="2" strokeDasharray="4 11" opacity=".35"/>
                <path d="M54 270 C75 125 235 47 374 105 C465 143 480 252 405 332" fill="none" stroke="url(#cyan)" strokeWidth="3" strokeLinecap="round" filter="url(#blueGlow)"/>
                <path d="M70 340 C125 438 337 465 435 339 C480 280 458 191 394 144" fill="none" stroke="url(#magenta)" strokeWidth="3" strokeLinecap="round" filter="url(#blueGlow)"/>
                <g fill="none" strokeLinecap="round">
                  <path d="M100 285 C86 180 165 96 270 98 C385 101 441 200 405 301 C373 389 252 434 151 379" stroke="url(#cyan)" strokeWidth="20" opacity=".20" filter="url(#strongGlow)"/>
                  <path d="M100 285 C86 180 165 96 270 98 C385 101 441 200 405 301 C373 389 252 434 151 379" stroke="url(#cyan)" strokeWidth="9" filter="url(#blueGlow)"/>
                  <path d="M130 340 C195 425 353 402 402 301 C429 245 397 177 342 148" stroke="url(#magenta)" strokeWidth="17" opacity=".20" filter="url(#strongGlow)"/>
                  <path d="M130 340 C195 425 353 402 402 301 C429 245 397 177 342 148" stroke="url(#magenta)" strokeWidth="8" filter="url(#blueGlow)"/>
                  <path d="M165 312 C130 244 179 172 250 165 C322 158 374 217 353 282 C332 345 248 368 197 320 C164 289 177 236 220 218 C264 199 306 226 302 262" stroke="url(#cyan)" strokeWidth="15" opacity=".22" filter="url(#strongGlow)"/>
                  <path d="M165 312 C130 244 179 172 250 165 C322 158 374 217 353 282 C332 345 248 368 197 320 C164 289 177 236 220 218 C264 199 306 226 302 262" stroke="url(#cyan)" strokeWidth="7" filter="url(#blueGlow)"/>
                  <path d="M205 300 C177 262 197 217 239 204 C280 191 315 220 310 255 C306 286 267 304 239 284 C221 271 224 245 244 237" stroke="url(#magenta)" strokeWidth="7" filter="url(#blueGlow)"/>
                </g>
                <path d="M55 278 C135 82 374 58 461 184 C494 233 455 302 361 348" fill="none" stroke="url(#magenta)" strokeWidth="3" filter="url(#blueGlow)"/>
                <g filter="url(#blueGlow)">
                  <circle cx="92" cy="187" r="7" fill="#00e5ff"/>
                  <circle cx="424" cy="152" r="9" fill="#a83cff"/>
                  <circle cx="445" cy="284" r="6" fill="#00e5ff"/>
                  <circle cx="382" cy="395" r="7" fill="#7d42ff"/>
                  <circle cx="111" cy="370" r="5" fill="#ff3eea"/>
                  <circle cx="155" cy="119" r="4" fill="#00e5ff"/>
                </g>
                <path d="M115 125 L196 125 L256 278 L316 125 L397 125 L291 388 L221 388 Z" fill="#000000" opacity=".55" transform="translate(0 10)" filter="url(#shadow)"/>
                <path d="M115 125 L196 125 L256 278 L256 370 L221 388 Z" fill="url(#vLeft)"/>
                <path d="M316 125 L397 125 L291 388 L256 370 L256 278 Z" fill="url(#vRight)"/>
                <path d="M196 125 L256 278 L316 125 L276 370 L256 388 L236 370 Z" fill="url(#vMain)" opacity=".35"/>
                <path d="M115 125 L196 125 L256 278 L316 125 L397 125 L291 388 L221 388 Z" fill="none" stroke="#d8f8ff" strokeWidth="5" strokeLinejoin="round" opacity=".9"/>
                <path d="M115 125 L221 388 L291 388 L397 125" fill="none" stroke="url(#cyan)" strokeWidth="5" strokeLinejoin="round" filter="url(#blueGlow)"/>
                <path d="M316 125 L291 388" fill="none" stroke="#ff3fe5" strokeWidth="4" filter="url(#blueGlow)"/>
                <path d="M125 133 L188 133 L244 278" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity=".65"/>
                <circle cx="256" cy="280" r="18" fill="#6838ff" opacity=".25" filter="url(#strongGlow)"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold font-sans tracking-wider text-sm group-hover:text-cyan-400 transition-colors leading-none">
                Grok 369
              </span>
              <span className="text-[9px] font-mono text-cyan-400/80 tracking-widest uppercase mt-0.5">
                UI/UX DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 px-1.5 py-1.5 rounded-full border border-white/5 bg-slate-900/40 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-cyan-500/20 to-red-500/20 border border-cyan-500/30 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Theme Selector Dropdown */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Trigger Selector */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 bg-slate-900/40 hover:bg-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer"
                title="Select Theme Color"
              >
                <Palette className="w-3.5 h-3.5" />
                <span className="capitalize">{theme === 'mixed' ? 'Nebula' : theme}</span>
                <span className={`w-2.5 h-2.5 rounded-full border border-white/15 ${
                  themes.find(t => t.id === theme)?.color || 'bg-amber-400'
                }`} />
              </button>

              <AnimatePresence>
                {themeMenuOpen && (
                  <>
                    {/* Invisible Click-away Backdrop */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setThemeMenuOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute right-0 mt-2 w-48 rounded-xl border border-white/5 bg-[#0f172a]/95 backdrop-blur-xl shadow-2xl p-1.5 z-50 space-y-1"
                    >
                      <div className="px-2.5 py-1 text-[10px] font-mono tracking-wider text-zinc-500 uppercase border-b border-white/5 mb-1">
                        Select Theme
                      </div>
                      {themes.map((t) => {
                        const isActive = theme === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              onThemeChange(t.id);
                              setThemeMenuOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isActive 
                                ? 'bg-white/5 text-white' 
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={`w-3.5 h-3.5 rounded-full border border-white/10 ${t.color}`} />
                              <span>{t.label}</span>
                            </div>
                            {isActive && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="relative overflow-hidden group px-4 py-1.5 rounded-lg border border-red-500/30 bg-red-950/15 hover:bg-red-900/25 text-xs font-semibold text-red-300 flex items-center gap-1.5"
            >
              <span className="relative z-10">Hire Grok</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all cursor-pointer active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="md:hidden fixed inset-0 z-30 bg-[#020817]/40 backdrop-blur-[1px]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden relative z-40 border-b border-white/5 bg-[#070b19]/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(2,6,23,0.35)]"
            >
              <div className="px-4 pt-3 pb-6 space-y-2 sm:px-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      handleNavClick(e, item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      isActive 
                        ? 'text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-500' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* Interactive Mobile Theme Picker */}
              <div className="pt-4 pb-2 border-t border-white/5 px-3">
                <div className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase mb-2.5 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Choose Visual Palette</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {themes.map((t) => {
                    const isActive = theme === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          onThemeChange(t.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg border transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-white/5 border-cyan-500/50 text-white' 
                            : 'bg-slate-900/40 border-white/5 text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full border border-white/10 ${t.color}`} />
                        <span className="text-[10px] font-medium tracking-wide">{t.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleNavClick(e, 'contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-red-500 text-xs font-semibold text-white shadow-[0_14px_28px_rgba(34,211,238,0.18)] border border-white/10 transition-all cursor-pointer active:scale-[0.98]"
                >
                  Hire Grok369
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
