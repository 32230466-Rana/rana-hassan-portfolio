import {
  ArrowUpRight,
  BrainCircuit,
  CodeXml,
  Linkedin,
  Mail,
  MapPin,
  PanelsTopLeft,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
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
  {
    label: "Full-Stack Development",
    description: "React, Laravel, Node.js, Express.js, FastAPI, MySQL, MongoDB, REST APIs, authentication, CRUD, and full-stack workflows.",
    icon: CodeXml,
  },
  {
    label: "AI-Powered Platforms",
    description:
      "Study tools, PDF-based AI features, summaries, quizzes, recommendations, and local AI integrations.",
    icon: BrainCircuit,
  },
  {
    label: "Clean UI & User Experience",
    description:
      "Responsive layouts, reusable components, animations, testing, debugging, and smooth product flows.",
    icon: PanelsTopLeft,
  },
  {
    label: "Teamwork & Agile Practice",
    description:
      "Git/GitHub, Jira, code reviews, sprint workflows, Postman testing, deployment, and documentation.",
    icon: UsersRound,
  },
];

const avatarDots = [0, 72, 144, 216, 288];

function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-28">
      <div className="section-glow section-glow-about" />
      <div className="section-shell">
        <motion.div
          className="about-showcase-grid"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div className="relative mx-auto w-full max-w-[420px]" variants={slideLeft}>
            <div className="absolute inset-10 rounded-[32px] bg-gradient-to-br from-indigo-300 to-purple-300 opacity-25 blur-3xl" />
            <motion.div
              className="about-profile-card premium-card shine-surface"
              whileHover={cardHover}
            >
              <div className="about-avatar-stage">
                {avatarDots.map((angle, index) => (
                  <span
                    key={angle}
                    className="about-avatar-dot"
                    style={{
                      "--dot-angle": `${angle}deg`,
                      "--dot-reverse-angle": `${-angle}deg`,
                      "--dot-delay": `${index * -0.55}s`,
                    }}
                  />
                ))}
                <div className="about-avatar-large"><img src="/rana-hassan-profile.jpeg" alt="Rana Hassan" /></div>
              </div>

              <div className="text-center">
                <h3 className="font-display text-3xl font-extrabold tracking-[-0.04em] text-ink">
                  Rana Hassan
                </h3>
                <p className="mt-2 text-sm font-bold text-muted">Full-Stack Developer | AI-Powered Web Platforms</p>
              </div>

              <div className="mt-8 grid gap-3">
                <a href="mailto:ranaaa.hasan236@gmail.com" className="about-contact-row">
                  <Mail size={17} />
                  <span>ranaaa.hasan236@gmail.com</span>
                </a>
                <div className="about-contact-row">
                  <MapPin size={17} />
                  <span>Saida, Lebanon / Remote</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/rana-hassan-07aa8a308/"
                  target="_blank"
                  rel="noreferrer"
                  className="about-contact-row"
                >
                  <Linkedin size={17} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ ...viewportOnce, amount: 0.25 }}
          >
            <SectionHeading eyebrow="About me" title="Professional summary" />

            <motion.div className="about-summary-copy" variants={staggerContainer}>
              <motion.p variants={fadeUp}>
                Full-Stack Developer focused on building practical full-stack platforms, dashboards, e-commerce workflows, REST API integrations, and AI-powered web features. Skilled in React, Next.js, JavaScript, Laravel, Node.js, Express.js, FastAPI, Python, MySQL, MongoDB, REST APIs, API integration, Postman testing, and UI/API testing.
              </motion.p>
              <motion.p variants={fadeUp}>
                I developed StudyFlow, a full-stack AI learning platform that helps students upload
                study materials, generate summaries, create quizzes, ask questions from PDFs, track
                weak topics, and receive personalized study recommendations.
              </motion.p>
              <motion.p variants={fadeUp}>
                Through internships, freelance work, and bootcamp projects, I gained practical
                experience in frontend development, full-stack systems, Agile workflows, Git/GitHub,
                Jira, Postman testing, deployment, and building clean user-focused digital products.
              </motion.p>
            </motion.div>

            <motion.div className="about-philosophy-grid" variants={staggerContainer}>
              {features.map(({ label, description, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  className="about-philosophy-card premium-card"
                  variants={index % 2 === 0 ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ ...viewportOnce, amount: 0.18 }}
                  whileHover={cardHover}
                >
                  <span>
                    <Icon size={20} />
                  </span>
                  <div>
                    <h4>{label}</h4>
                    <p>{description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="about-cta-row" variants={fadeUp}>
              <span>Interested in working together?</span>
              <motion.a
                href="#contact"
                className="shine-button"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Connect
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;