import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MessageSquare, ArrowUp } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-[#070b19] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">
            © 2026 JOEL ATAMBA • All rights reserved
          </p>
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
            Built with React + Express + Tailwind CSS
          </p>
        </div>

        {/* Center: Social handles */}
        <div className="flex gap-4 items-center">
          <a 
            href="mailto:hasty0joel@gmail.com" 
            className="p-2 rounded-lg border border-white/5 hover:border-cyan-500/30 text-zinc-500 hover:text-cyan-400 bg-[#0f172a] hover:bg-cyan-950/10 transition-all cursor-pointer"
            title="Email Direct"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href="https://github.com/joel-atamba" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-lg border border-white/5 hover:border-cyan-500/30 text-zinc-500 hover:text-cyan-400 bg-[#0f172a] hover:bg-cyan-950/10 transition-all cursor-pointer"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com/in/joel-atamba" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-lg border border-white/5 hover:border-cyan-500/30 text-zinc-500 hover:text-cyan-400 bg-[#0f172a] hover:bg-cyan-950/10 transition-all cursor-pointer"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/256708304123" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-lg border border-white/5 hover:border-cyan-500/30 text-zinc-500 hover:text-cyan-400 bg-[#0f172a] hover:bg-cyan-950/10 transition-all cursor-pointer"
            title="WhatsApp Link"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <div className="flex justify-center">
          <Magnetic>
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-950/20 text-zinc-400 hover:text-cyan-300 transition-colors flex items-center justify-center cursor-pointer shadow-lg"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </Magnetic>
        </div>

      </div>
    </footer>
  );
}
