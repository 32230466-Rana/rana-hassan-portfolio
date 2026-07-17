import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileQuestion,
  FileText,
  Github,
  LayoutDashboard,
  Lightbulb,
  Play,
  LockKeyhole,
  Network,
  Server,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Tags,
  Upload,
} from "lucide-react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import landingPageScreenshot from "../assets/studyflow/landing-page.png";
import askPdfScreenshot from "../assets/studyflow/ask-pdf-summary.png";
import summaryScreenshot from "../assets/studyflow/summary-result.png";
import recommendationsScreenshot from "../assets/studyflow/recommendations-result.png";
import quizResultScreenshot from "../assets/studyflow/quiz-result.png";
import SectionHeading from "./SectionHeading";
import {
  buttonHover,
  cardHover,
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

const features = [
  { label: "Authentication", icon: LockKeyhole },
  { label: "File upload", icon: Upload },
  { label: "Laravel APIs", icon: Network },
  { label: "MySQL database features", icon: Database },
  { label: "React frontend pages", icon: LayoutDashboard },
  { label: "Admin/student dashboards", icon: LayoutDashboard },
  { label: "Saved summaries", icon: Sparkles },
  { label: "Saved chats", icon: BrainCircuit },
  { label: "AI summary generation", icon: Sparkles },
  { label: "Quiz generation", icon: FileQuestion },
  { label: "Ask-PDF chat", icon: BrainCircuit },
  { label: "Recommendations", icon: Lightbulb },
  { label: "Postman Testing", icon: CheckCircle2 },
  { label: "API Testing", icon: CheckCircle2 },
  { label: "UI Testing", icon: Activity },
  { label: "Form Validation", icon: CheckCircle2 },
  { label: "Loading States", icon: Activity },
  { label: "Error Handling", icon: CheckCircle2 },
];

const technologies = [
  "React",
  "Laravel",
  "MySQL",
  "FastAPI",
  "Python",
  "Ollama/local LLMs",
  "REST APIs",
  "Tailwind CSS",
  "Postman Testing",
  "API Testing",
  "UI Testing",
  "Form Validation",
  "Loading States",
  "Error Handling",
];

const studyFlowScreens = [
  {
    image: landingPageScreenshot,
    title: "Landing Page",
    description: "AI-powered study platform homepage.",
  },
  {
    image: summaryScreenshot,
    title: "AI Summary Result",
    description: "Generated study summary from uploaded materials.",
  },
  {
    image: askPdfScreenshot,
    title: "Ask PDF",
    description: "Ask questions and generate summaries from uploaded PDFs.",
  },
  {
    image: recommendationsScreenshot,
    title: "Smart Recommendations",
    description: "Personalized weak-topic and study recommendations.",
  },
  {
    image: quizResultScreenshot,
    title: "AI Quiz Results",
    description: "Generated quiz results and answer feedback.",
  },
];

const ecommerceFeatures = [
  "Product Browsing",
  "Category-based layouts",
  "Product Details Page",
  "Add to Cart Flow",
  "Responsive UI",
  "Reusable React components",
  "Backend / API Integration",
  "MySQL Database",
  "UI Animations",
  "API Testing with Postman",
  "UI Testing",
  "Responsive Testing",
];

const ecommerceTechnologies = [
  "React",
  "Laravel",
  "RESTful API",
  "CSS",
  "MySQL",
  "Postman Testing",
  "API Testing",
  "UI Testing",
  "UI Animations",
  "Responsive Testing",
];

const studyFlowGithubUrl = "https://github.com/32230466-Rana/studyflow-showcase";

const demoSteps = [
  { label: "Upload PDF", icon: Upload },
  { label: "React Frontend", icon: LayoutDashboard },
  { label: "Laravel API", icon: Server },
  { label: "FastAPI AI Service", icon: BrainCircuit },
  { label: "MySQL Database", icon: Database },
  { label: "Student Dashboard", icon: LayoutDashboard },
];

const demoStatuses = [
  "Uploading file...",
  "Sending request to Laravel API...",
  "Sending request to Laravel API...",
  "Processing with FastAPI AI service...",
  "Saving result in MySQL...",
  "Displaying dashboard results...",
];

const demoResults = [
  "AI Summary Generated",
  "Quiz Generated",
  "Weak Topics Detected",
  "Recommendations Saved",
];

function StudyFlowPreview() {
  return (
    <div className="project-preview-card group rounded-[26px] border border-indigo-100 bg-white p-2.5 shadow-card">
      <div className="overflow-hidden rounded-[19px] border border-line bg-[#f6f8ff]">
        <div className="flex items-center justify-between border-b border-line bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-brand text-[10px] font-extrabold text-white">
              SF
            </span>
            <span className="text-xs font-bold text-ink">StudyFlow</span>
          </div>
          <span className="rounded-full bg-brand-soft px-3 py-1 text-[10px] font-extrabold text-brand">
            Real screenshot
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 p-3 sm:p-4">
          <div className="absolute -right-10 -bottom-12 size-40 rounded-full bg-purple/10 blur-2xl" />
          <img
            src={landingPageScreenshot}
            alt="StudyFlow landing page screenshot"
            className="project-preview-image relative h-full w-full scale-[1.06] rounded-2xl border border-white/80 object-cover object-center shadow-sm transition duration-500 group-hover:scale-[1.1]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="project-preview-card group relative overflow-hidden rounded-[26px] border border-indigo-100 bg-white p-3 shadow-card">
      <div className="absolute -right-12 -top-12 size-40 rounded-full bg-purple/10 blur-2xl" />
      <div className="relative rounded-[20px] border border-line bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-purple text-white shadow-soft">
              <ShoppingBag size={18} />
            </span>
            <div>
              <p className="text-xs font-extrabold text-ink">Fashion Store</p>
              <p className="text-[10px] font-semibold text-muted">Clothes & Jewelry</p>
            </div>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-brand shadow-sm">
            Cart UI
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-[0.75fr_1fr]">
          <div className="space-y-2">
            {["Dresses", "Jewelry", "Accessories"].map((category, index) => (
              <div
                key={category}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold ${
                  index === 0
                    ? "border-indigo-200 bg-white text-brand"
                    : "border-white/70 bg-white/70 text-muted"
                }`}
              >
                <Tags size={13} />
                {category}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl border border-white bg-white/85 p-2 shadow-sm">
                <div className="mb-2 h-16 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100" />
                <div className="h-2 w-3/4 rounded bg-slate-100" />
                <div className="mt-2 flex items-center justify-between">
                  <span className="h-2 w-8 rounded bg-indigo-100" />
                  <ShoppingCart size={13} className="text-brand" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            [Network, "API"],
            [Database, "MySQL"],
            [CheckCircle2, "Testing"],
          ].map(([Icon, label]) => (
            <div key={label} className="rounded-xl border border-white bg-white/78 p-2 text-[10px] font-bold text-muted shadow-sm">
              <Icon className="mx-auto mb-1 text-brand" size={14} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StudyFlowSystemDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const timersRef = useRef([]);
  const prefersReducedMotion = useReducedMotion();

  const clearDemoTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  useEffect(() => clearDemoTimers, []);

  const runDemo = () => {
    clearDemoTimers();
    setHasRun(true);
    setShowResults(false);
    setIsRunning(true);
    setActiveStep(0);

    if (prefersReducedMotion) {
      setActiveStep(demoSteps.length - 1);
      setShowResults(true);
      setIsRunning(false);
      return;
    }

    demoSteps.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setActiveStep(index);

        if (index === demoSteps.length - 1) {
          const completeTimer = window.setTimeout(() => {
            setShowResults(true);
            setIsRunning(false);
          }, 520);

          timersRef.current.push(completeTimer);
        }
      }, index * 850);

      timersRef.current.push(timer);
    });
  };

  const progressPercent = hasRun
    ? `${(activeStep / (demoSteps.length - 1)) * 100}%`
    : "0%";

  return (
    <motion.div
      className="studyflow-system-demo premium-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="studyflow-demo-heading">
        <div>
          <p className="section-badge-lite text-xs font-bold tracking-[0.2em] text-brand uppercase">
            Interactive StudyFlow System Demo
          </p>
          <h3 className="font-display mt-4 text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
            See how a study file moves through the full-stack AI workflow.
          </h3>
        </div>
        <motion.button
          type="button"
          className="shine-button studyflow-demo-button"
          onClick={runDemo}
          disabled={isRunning}
          whileHover={isRunning ? undefined : buttonHover}
          whileTap={isRunning ? undefined : { scale: 0.98 }}
        >
          <Play size={16} />
          Run StudyFlow Demo
        </motion.button>
      </div>

      <LayoutGroup>
        <div className="studyflow-demo-flow" style={{ "--demo-progress": progressPercent }}>
          <div className="studyflow-demo-line" aria-hidden="true" />
          <div className="studyflow-demo-nodes">
            {demoSteps.map(({ label, icon: Icon }, index) => {
              const isActive = hasRun && activeStep === index;
              const isDone = hasRun && activeStep > index;

              return (
                <motion.div
                  key={label}
                  className={`studyflow-demo-node ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}`}
                  layout
                >
                  {hasRun && isActive && (
                    <motion.span
                      layoutId="studyflow-moving-file"
                      className="studyflow-demo-file"
                      transition={{ type: "spring", stiffness: 180, damping: 24, mass: 0.65 }}
                    >
                      <FileText size={15} />
                      file.pdf
                    </motion.span>
                  )}
                  <span className="studyflow-demo-icon">
                    <Icon size={18} />
                  </span>
                  <strong>{label}</strong>
                  {isActive && (
                    <span className="studyflow-demo-status" aria-live="polite">
                      {demoStatuses[index]}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </LayoutGroup>

      {showResults && (
        <motion.div
          className="studyflow-demo-results"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {demoResults.map((result) => (
            <motion.div key={result} className="studyflow-demo-result-card" variants={fadeUp}>
              <CheckCircle2 size={17} />
              <span>{result}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
function StudyFlow() {
  return (
    <section id="project" className="relative scroll-mt-20 overflow-x-hidden bg-white py-24 sm:py-28">
      <div className="section-glow section-glow-project" />
      <div className="section-shell">
        <motion.div
          className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionHeading
            eyebrow="Projects"
            title="Featured full-stack platforms."
            description="A focused look at real product workflows, API-connected interfaces, and AI-powered features."
          />
          <span className="w-fit rounded-full border border-indigo-200 bg-brand-soft px-4 py-2 text-xs font-bold text-brand">
            Main case study: StudyFlow
          </span>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr]">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={cardHover}
          >
            <StudyFlowPreview />
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h3 className="font-display text-3xl font-extrabold tracking-[-0.04em] text-ink">
              StudyFlow
            </h3>
            <p className="mt-5 leading-7 text-muted">
              StudyFlow is a full-stack AI-powered learning platform built with React, Laravel, MySQL, and FastAPI. It helps students upload study materials, generate summaries, create quizzes, ask questions from PDFs, track weak topics, and receive personalized study recommendations.
            </p>

            <motion.div
              className="mt-7 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {features.map(({ label, icon: Icon }) => (
                <motion.div
                  key={label}
                  className="premium-card flex items-center gap-3 rounded-xl border border-line bg-surface px-3.5 py-3"
                  variants={fadeUp}
                  whileHover={cardHover}
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-brand shadow-sm">
                    <Icon size={15} />
                  </span>
                  <span className="text-sm font-bold text-ink">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold tracking-[0.16em] text-muted uppercase">
                Built & tested with
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-brand-soft px-3 py-1.5 text-xs font-bold text-brand-dark"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href={studyFlowGithubUrl}
                target="_blank"
                rel="noreferrer"
                className="shine-button inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-brand"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={17} />
                GitHub showcase
                <ArrowUpRight size={15} />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-indigo-300 hover:text-brand"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
              >
                Discuss a similar platform
                <ArrowUpRight size={15} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <StudyFlowSystemDemo />

        <motion.div
          className="mt-16 scroll-mt-28"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-badge-lite text-xs font-bold tracking-[0.2em] text-brand uppercase">
                StudyFlow screens
              </p>
              <h3 className="font-display mt-4 text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
                Real product screenshots
              </h3>
            </div>
          </div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {studyFlowScreens.map((screen, index) => (
              <motion.article
                key={screen.title}
                className="premium-card group overflow-hidden rounded-2xl border border-line bg-surface"
                variants={index % 2 === 0 ? slideLeft : slideRight}
                initial="hidden"
                whileInView="show"
                viewport={{ ...viewportOnce, amount: 0.18 }}
                whileHover={cardHover}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-gradient-to-br from-indigo-50 to-purple-50 p-3">
                  <div className="absolute -right-8 -bottom-10 size-32 rounded-full bg-purple/10 blur-2xl" />
                  <img
                    src={screen.image}
                    alt={`${screen.title} screenshot`}
                    className="relative h-full w-full scale-[1.06] rounded-xl border border-white/80 object-cover object-center shadow-sm transition duration-300 group-hover:scale-[1.08]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display text-base font-extrabold text-ink">
                        {screen.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-muted">{screen.description}</p>
                    </div>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.article
          className="project-main-card premium-card mt-16 overflow-hidden rounded-[28px] border border-line bg-surface p-5 shadow-card sm:p-7 lg:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={cardHover}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewportOnce}>
              <EcommercePreview />
            </motion.div>

            <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={viewportOnce}>
              <span className="section-badge-lite text-xs font-bold tracking-[0.2em] text-brand uppercase">
                Second project
              </span>
              <h3 className="font-display mt-5 text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
                Fashion & Jewelry E-Commerce Website
              </h3>
              <p className="mt-4 leading-7 text-muted">
                A responsive full-stack online shopping website for clothes and jewelry. Users can browse products, view details, filter categories, add items to cart, and complete a simple shopping flow.
              </p>

              <motion.div className="mt-6 grid gap-2 sm:grid-cols-2" variants={staggerContainer}>
                {ecommerceFeatures.map((feature) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-2 rounded-xl border border-line bg-white/82 px-3 py-2 text-sm font-bold text-ink shadow-sm"
                    variants={fadeUp}
                  >
                    <CheckCircle2 size={15} className="shrink-0 text-brand" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6">
                <p className="mb-3 text-xs font-bold tracking-[0.16em] text-muted uppercase">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {ecommerceTechnologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-brand-dark shadow-sm ring-1 ring-indigo-100"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default StudyFlow;