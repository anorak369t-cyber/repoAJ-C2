import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GitHubTracker from './components/GitHubTracker';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import BackToTop from './components/BackToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved && ['blue', 'gold', 'green', 'red', 'pink', 'white', 'mixed'].includes(saved)) {
        return saved;
      }
    }
    return 'gold';
  });

  useEffect(() => {
    const classes = ['theme-blue', 'theme-gold', 'theme-green', 'theme-red', 'theme-pink', 'theme-white', 'theme-mixed'];
    document.documentElement.classList.remove(...classes);
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <>
      {/* Dynamic Cinematic Loading Intro */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`min-h-screen bg-[#070b19] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-300 theme-${theme}`}
          >
            {/* Slim dynamic scroll progress bar */}
            <ScrollProgressBar />

            {/* Frosted Floating Header with Theme Selector */}
            <Navbar theme={theme} onThemeChange={setTheme} />

            {/* Main Content Sections */}
            <main>
              {/* Hero Showcase Section (handles its own entrance on mount) */}
              <Hero />

              {/* Split Bio & Counters Section */}
              <ScrollReveal>
                <About />
              </ScrollReveal>

              {/* Competencies Chip Deck Section */}
              <ScrollReveal>
                <Skills />
              </ScrollReveal>

              {/* Shared Layout Projects Showcase */}
              <ScrollReveal>
                <Projects />
              </ScrollReveal>

              {/* Leadership timeline Section */}
              <ScrollReveal>
                <Experience />
              </ScrollReveal>

              {/* Certificates Credentials Grid */}
              <ScrollReveal>
                <Certifications />
              </ScrollReveal>

              {/* GitHub Analytical Dashboard Section */}
              <ScrollReveal>
                <GitHubTracker />
              </ScrollReveal>

              {/* Reviews Slide Deck */}
              <ScrollReveal>
                <Testimonials />
              </ScrollReveal>

              {/* Morphing Contact Form Box */}
              <ScrollReveal>
                <Contact />
              </ScrollReveal>
            </main>

            {/* Minimal Footnotes Footer */}
            <Footer />

            {/* Career Assistant Chatbot Floating Widget */}
            <AIAssistant />

            {/* Smooth Floating Back to Top Button */}
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
