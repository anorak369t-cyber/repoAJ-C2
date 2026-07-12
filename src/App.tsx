import { useState } from 'react';
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

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
            className="min-h-screen bg-[#070b19] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-300"
          >
            {/* Frosted Floating Header */}
            <Navbar />

            {/* Main Content Sections */}
            <main>
              {/* Hero Showcase Section */}
              <Hero />

              {/* Split Bio & Counters Section */}
              <About />

              {/* Competencies Chip Deck Section */}
              <Skills />

              {/* Shared Layout Projects Showcase */}
              <Projects />

              {/* Leadership timeline Section */}
              <Experience />

              {/* Certificates Credentials Grid */}
              <Certifications />

              {/* GitHub Analytical Dashboard Section */}
              <GitHubTracker />

              {/* Reviews Slide Deck */}
              <Testimonials />

              {/* Morphing Contact Form Box */}
              <Contact />
            </main>

            {/* Minimal Footnotes Footer */}
            <Footer />

            {/* Career Assistant Chatbot Floating Widget */}
            <AIAssistant />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
