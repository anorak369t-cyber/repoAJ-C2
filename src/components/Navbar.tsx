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

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#070b19]/80 backdrop-blur-md border-b border-white/5' 
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
            <div className="relative w-8 h-10 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(255,204,0,0.35)] group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 100 120" className="w-full h-full">
                {/* Ferrari Shield Outline */}
                <path d="M 12 10 L 88 10 L 88 62 C 88 88 50 114 50 114 C 50 114 12 88 12 62 Z" 
                      fill="#FFCC00" 
                      stroke="#111111" 
                      strokeWidth="3.5" 
                      strokeLinejoin="round" />
                {/* Italian Tricolor */}
                <rect x="14" y="10.5" width="24" height="8" fill="#008C45" />
                <rect x="38" y="10.5" width="24" height="8" fill="#FFFFFF" />
                <rect x="62" y="10.5" width="24" height="8" fill="#CD212A" />
                <line x1="14" y1="18.5" x2="86" y2="18.5" stroke="#111111" strokeWidth="1.5" />
                {/* Stallion Silhouette */}
                <path d="M 52 26 C 54 24 57 23 59 25 C 61 27 60 30 57 32 C 55 33 53 31 52 30 C 51 28 50 27 52 26 Z M 56 26 C 53 28 51 32 49 37 C 47 42 46 45 44 48 C 42 46 42 43 45 38 C 47 34 51 28 56 26 Z M 55 33 C 58 35 62 38 66 36 C 68 35 70 33 68 31 C 66 32 63 33 60 31 C 57 30 55 32 55 33 Z M 53 38 C 58 41 64 45 68 46 C 70 46 72 44 71 42 C 68 42 64 39 60 37 C 56 36 53 37 53 38 Z M 48 41 C 51 43 54 48 55 54 C 55 60 53 66 49 71 C 47 67 47 60 48 53 C 48 47 47 43 48 41 Z M 49 68 C 52 72 55 78 54 84 C 53 87 51 89 49 89 C 48 89 48 86 50 82 C 51 77 49 72 47 70 Z M 47 69 C 43 74 38 81 38 87 C 38 89 40 89 41 87 C 43 83 45 78 48 72 Z M 46 56 C 41 59 36 65 35 73 C 34 77 36 78 37 75 C 39 70 43 64 47 60 Z" fill="#111111" />
                {/* VL text */}
                <text x="52" y="99" fill="#111111" fontFamily="sans-serif" fontWeight="900" fontSize="12" letterSpacing="3" textAnchor="middle">VL</text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold font-sans tracking-wider text-sm group-hover:text-amber-400 transition-colors leading-none">
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
              className="relative overflow-hidden group px-4 py-1.5 rounded-lg border border-red-500/30 bg-red-950/15 hover:bg-red-900/25 text-xs font-semibold text-red-300 flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">Hire Grok</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/5 bg-[#070b19]/95 backdrop-blur-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
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
                        onClick={() => onThemeChange(t.id)}
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
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-sky-500 via-cyan-500 to-red-500 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  Hire Grok369
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
