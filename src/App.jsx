import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudyFlow from "./components/StudyFlow";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Services from "./components/Services";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = false;

  useEffect(() => {
    const timer = window.setTimeout(
      () => setLoading(false),
      prefersReducedMotion ? 450 : 1800,
    );

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <MotionConfig reducedMotion="never">
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      {!loading && (
        <motion.div
          className="relative isolate min-h-screen overflow-hidden bg-surface text-ink"
          initial={{ opacity: 0, scale: 1.012, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatedBackground />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <StudyFlow />
            <Experience />
            <Education />
            <Certificates />
            <Services />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </motion.div>
      )}
    </MotionConfig>
  );
}

export default App;