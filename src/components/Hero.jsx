import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Atom,
  BrainCircuit,
  Braces,
  ChevronDown,
  Code2,
  Database,
  FileCode2,
  FileText,
  GitBranch,
  Github,
  Layers3,
  Network,
  Server,
  Terminal,
  Wind,
  Zap,
} from "lucide-react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import {
  buttonHover,
  cardHover,
  fadeUp,
  heroWord,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

const stack = [
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "FastAPI",
  "Python",
  "JavaScript",
  "PHP",
  "AI Features",
];

const heroStats = [
  { textValue: "2+", label: "Years of Practical Experience" },
  { value: 20, label: "Technologies" },
  { textValue: "Multiple", label: "Full-Stack Platforms" },
  { value: 15, label: "Platform Features" },
];
const heroTech = [
  { label: "React", icon: Atom, color: "#0ea5e9", background: "rgba(14, 165, 233, 0.1)" },
  { label: "Next.js", icon: Code2, color: "#111827", background: "rgba(17, 24, 39, 0.08)" },
  { label: "Laravel", icon: Layers3, color: "#f43f5e", background: "rgba(244, 63, 94, 0.1)" },
  { label: "Node.js", icon: Server, color: "#16a34a", background: "rgba(22, 163, 74, 0.1)" },
  { label: "Express.js", icon: Server, color: "#475569", background: "rgba(71, 85, 105, 0.1)" },
  { label: "MySQL", icon: Database, color: "#0891b2", background: "rgba(8, 145, 178, 0.1)" },
  { label: "MongoDB", icon: Database, color: "#059669", background: "rgba(5, 150, 105, 0.1)" },
  { label: "REST API", icon: Network, color: "#4f46e5", background: "rgba(79, 70, 229, 0.1)" },
  { label: "FastAPI", icon: Zap, color: "#059669", background: "rgba(5, 150, 105, 0.1)" },
  { label: "Python", icon: Terminal, color: "#2563eb", background: "rgba(37, 99, 235, 0.1)" },
  { label: "JavaScript", icon: Braces, color: "#ca8a04", background: "rgba(202, 138, 4, 0.1)" },
  { label: "PHP", icon: FileCode2, color: "#7c3aed", background: "rgba(124, 58, 237, 0.1)" },
  { label: "Git", icon: GitBranch, color: "#ea580c", background: "rgba(234, 88, 12, 0.1)" },
  { label: "GitHub", icon: Github, color: "#334155", background: "rgba(51, 65, 85, 0.1)" },
  { label: "Tailwind", icon: Wind, color: "#0284c7", background: "rgba(2, 132, 199, 0.1)" },
  { label: "Postman Testing", icon: Network, color: "#ea580c", background: "rgba(234, 88, 12, 0.1)" },
  { label: "API Testing", icon: Network, color: "#4f46e5", background: "rgba(79, 70, 229, 0.1)" },
  { label: "UI Testing", icon: Code2, color: "#9333ea", background: "rgba(147, 51, 234, 0.1)" },
  { label: "AI", icon: BrainCircuit, color: "#9333ea", background: "rgba(147, 51, 234, 0.1)" },
];

const heroDriftItems = [
  { label: "Laravel", icon: Server, lane: 14, duration: 20, delay: -3 },
  { label: "React", icon: Code2, lane: 29, duration: 24, delay: -17 },
  { label: "MySQL", icon: Database, lane: 45, duration: 22, delay: -9 },
  { label: "FastAPI", icon: FileText, lane: 61, duration: 25, delay: -20 },
  { label: "REST API", icon: Server, lane: 76, duration: 21, delay: -13 },
  { label: "AI", icon: BrainCircuit, lane: 88, duration: 23, delay: -6 },
];
const headlineStart = "I build modern web platforms for";
const headlineAccent = "businesses, students, and AI-powered solutions.";
const typingRoles = [
  "Full-Stack Developer",
  "Laravel + React Platforms",
  "AI-Powered Web Platforms",
  "Dashboards & APIs",
];

const orbitTech = [
  { label: "React", icon: Code2, color: "text-blue-500" },
  { label: "Next.js", icon: Code2, color: "text-slate-700" },
  { label: "Laravel", icon: Server, color: "text-rose-500" },
  { label: "PHP", icon: FileCode2, color: "text-violet-600" },
  { label: "MySQL", icon: Database, color: "text-cyan-600" },
  { label: "Node.js", icon: Server, color: "text-green-600" },
  { label: "Express.js", icon: Server, color: "text-slate-600" },
  { label: "MongoDB", icon: Database, color: "text-emerald-600" },
  { label: "FastAPI", icon: Zap, color: "text-emerald-600" },
  { label: "REST API", icon: Network, color: "text-indigo-500" },
  { label: "AI", icon: BrainCircuit, color: "text-purple-500" },
];
const visibleOrbitCount = orbitTech.length;

function RevealWords({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <span>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`inline-block overflow-hidden align-bottom ${
            index < words.length - 1 ? "mr-[0.22em]" : ""
          }`}
        >
          <motion.span
            className={`inline-block will-change-transform ${className}`}
            variants={heroWord}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleText(typingRoles[0]);
      return undefined;
    }

    const currentRole = typingRoles[roleIndex];
    const isComplete = !isDeleting && visibleText === currentRole;
    const isEmpty = isDeleting && visibleText === "";
    const timeout = window.setTimeout(
      () => {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isEmpty) {
          setIsDeleting(false);
          setRoleIndex((index) => (index + 1) % typingRoles.length);
          return;
        }

        setVisibleText((text) =>
          isDeleting
            ? currentRole.slice(0, Math.max(0, text.length - 1))
            : currentRole.slice(0, text.length + 1),
        );
      },
      isComplete ? 1200 : isDeleting ? 34 : 58,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, prefersReducedMotion, roleIndex, visibleText]);

  return (
    <span className="typing-pill">
      <span>{visibleText || typingRoles[roleIndex].slice(0, 1)}</span>
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}

function AnimatedCounter({ value, textValue }) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { amount: 0.65 });
  const counter = useMotionValue(0);
  const roundedCounter = useTransform(counter, (latest) => Math.round(latest));
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (textValue) return undefined;

    if (!isInView) {
      counter.set(0);
      return undefined;
    }

    if (prefersReducedMotion) {
      counter.set(value);
      return undefined;
    }

    const controls = animate(counter, value, {
      duration: 1.25,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [counter, isInView, prefersReducedMotion, textValue, value]);

  if (textValue) {
    return (
      <strong ref={counterRef} aria-label={textValue}>
        <span className="hero-counter-value">{textValue}</span>
      </strong>
    );
  }

  return (
    <strong ref={counterRef} aria-label={`${value} plus`}>
      <motion.span className="hero-counter-value">{roundedCounter}</motion.span>
      <span className="hero-counter-suffix">+</span>
    </strong>
  );
}

function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 140, damping: 20, mass: 0.55 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 140, damping: 20, mass: 0.55 });
  const visibleOrbitItems = orbitTech;

  const handleHeroTiltMove = (event) => {
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    tiltX.set(y * -8);
    tiltY.set(x * 9);
  };

  const resetHeroTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      className="hero-orbit-wrap relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0"
      initial={{ opacity: 0, x: 28, scale: 0.985 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute -top-14 -right-10 size-52 rounded-full bg-purple/15 blur-3xl"
        animate={{ x: [0, 18, -8, 0], y: [0, -18, 10, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -left-14 size-52 rounded-full bg-blue-400/20 blur-3xl"
        animate={{ x: [0, -16, 8, 0], y: [0, 14, -10, 0], scale: [1, 0.94, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-orbit-scene card-glow relative"
        style={{ rotateX: smoothTiltX, rotateY: smoothTiltY, transformPerspective: 1100 }}
        onPointerMove={handleHeroTiltMove}
        onPointerLeave={resetHeroTilt}
        whileHover={prefersReducedMotion ? undefined : cardHover}
      >
        <div className="hero-orbit-system">
          <div className="hero-orbit-ring hero-orbit-ring-one" />
          <div className="hero-orbit-ring hero-orbit-ring-two" />

          {visibleOrbitItems.map(({ label, icon: Icon, color }, index) => {
            const angle = index * (360 / visibleOrbitCount) - 90;

            return (
              <div
                key={`orbit-slot-${index}`}
                className="orbit-badge-shell"
                style={{
                  "--angle-start": `${angle}deg`,
                  "--angle-end": `${angle + 360}deg`,
                  "--reverse-start": `${-angle}deg`,
                  "--reverse-end": `${-angle - 360}deg`,
                  "--delay": "0s",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={label}
                    className="orbit-badge"
                    style={{ "--badge-float-delay": `${index * -0.35}s` }}
                    initial={{ opacity: 0, y: 8, scale: 0.9, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, scale: 0.9, filter: "blur(4px)" }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.12, y: -4 }}
                  >
                    <Icon size={18} className={color} />
                    <span>{label}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}

          <motion.div
            className="hero-avatar"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hero-avatar-glow" />
            <div className="hero-avatar-inner">
              <span className="hero-avatar-mark">RH</span>
              <span className="hero-avatar-code">&lt;/&gt;</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroExtras() {
  return (
    <motion.div
      className="hero-extras"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <motion.div className="hero-stats-grid" variants={staggerContainer}>
        {heroStats.map((stat) => (
          <motion.div key={stat.label} className="hero-stat" variants={fadeUp}>
            <AnimatedCounter value={stat.value} textValue={stat.textValue} />
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="hero-tech-strip" variants={fadeUp}>
        <div className="hero-tech-track">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="hero-tech-set"
              aria-hidden={copyIndex === 1}
            >
              {heroTech.map(({ label, icon: Icon, color, background }) => (
                <span key={label} className="hero-tech-chip">
                  <span className="hero-tech-icon" style={{ color, background }}>
                    <Icon size={15} strokeWidth={2.2} />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.a href="#project" className="scroll-cue" variants={fadeUp}>
        <motion.span
          className="scroll-arrow"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <ChevronDown size={18} />
        </motion.span>
        Scroll Down
      </motion.a>
    </motion.div>
  );
}

function Hero() {
  return (
    <>
      <section id="home" className="hero-stage relative pt-[68px]">
        <div className="grid-fade absolute inset-0" />
        <div className="hero-drift-field" aria-hidden="true">
          {heroDriftItems.map(({ label, icon: Icon, lane, duration, delay }) => (
            <span
              key={label}
              className="hero-drift-badge"
              style={{
                "--drift-lane": `${lane}%`,
                "--drift-duration": `${duration}s`,
                "--drift-delay": `${delay}s`,
              }}
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>
        <motion.div
          className="absolute top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-300/15 blur-3xl"
          animate={{ scale: [1, 1.12, 0.98, 1], opacity: [0.45, 0.7, 0.5, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-light hero-light-one"
          animate={{ x: [0, 24, -16, 0], y: [0, -18, 10, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-light hero-light-two"
          animate={{ x: [0, -18, 18, 0], y: [0, 20, -14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-shell hero-shell relative">
          <div className="hero-main-grid grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
            <motion.div className="hero-copy" variants={staggerContainer} initial="hidden" animate="show">
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3.5 py-2 text-xs font-bold text-brand shadow-sm"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Open to Website Developer & Full-Stack Opportunities
              </motion.div>

              <motion.p variants={fadeUp} className="mb-4 font-display text-lg font-bold text-brand sm:text-xl">
                Full-Stack Developer | AI-Powered Web Platforms
              </motion.p>
              <motion.h2
                variants={staggerContainer}
                className="hero-name font-display max-w-3xl text-5xl leading-[0.98] font-extrabold tracking-[-0.065em] text-ink sm:text-6xl lg:text-[5.35rem]"
              >
                <RevealWords text="Rana" className="text-gradient" />
                <br />
                <RevealWords text="Hassan" />
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-6">
                <TypingRole />
              </motion.div>
              <motion.h1
                className="hero-copy-heading mt-7 font-display max-w-3xl text-3xl font-extrabold tracking-[-0.05em] text-ink sm:text-4xl lg:text-[3.15rem]"
                variants={staggerContainer}
              >
                <RevealWords text={headlineStart} />
                <span> </span>
                <RevealWords text={headlineAccent} className="text-gradient" />
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                I build modern full-stack web platforms, dashboards, e-commerce systems, REST API integrations, and AI-powered features using React, Next.js, Laravel, Node.js, Express.js, MySQL, MongoDB, FastAPI, Python, and modern web tools.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <motion.a
                  href="#project"
                  className="shine-button inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-brand-dark"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                  <ArrowRight size={17} />
                </motion.a>
                <motion.a
                  href="/Rana-Hassan-CV.pdf"
                  download="Rana-Hassan-CV.pdf"
                  className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-white px-6 py-3.5 text-sm font-bold text-brand shadow-sm transition hover:border-indigo-300 hover:bg-brand-soft"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink shadow-sm transition hover:border-indigo-300 hover:text-brand"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>

              <motion.div variants={staggerContainer} className="mt-10 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <motion.span
                    key={item}
                    className="rounded-lg border border-line bg-white/80 px-3 py-1.5 text-xs font-bold text-muted shadow-sm"
                    variants={fadeUp}
                    whileHover={{
                      y: -3,
                      scale: 1.04,
                      color: "#4f46e5",
                      borderColor: "rgba(99, 102, 241, 0.36)",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="hero-metrics-section" aria-label="Portfolio highlights">
        <div className="section-shell">
          <HeroExtras />
        </div>
      </section>
    </>
  );
}

export default Hero;
