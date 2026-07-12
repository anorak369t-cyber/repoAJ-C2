import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 via-cyan-500 to-red-500 text-white font-mono font-bold text-lg shadow-lg group-hover:shadow-cyan-500/25 transition-all">
              A
              <div className="absolute inset-0 rounded-lg border border-white/20 scale-90 group-hover:scale-100 transition-all duration-300" />
            </div>
            <span className="text-white font-semibold font-sans tracking-wide text-sm hidden sm:inline group-hover:text-cyan-400 transition-colors">
              ATAMBA JOEL
            </span>
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

          {/* Action button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="relative overflow-hidden group px-4 py-1.5 rounded-lg border border-red-500/30 bg-red-950/15 hover:bg-red-900/25 text-xs font-semibold text-red-300 flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">Hire Joel</span>
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
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-sky-500 via-cyan-500 to-red-500 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  Hire Joel
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
