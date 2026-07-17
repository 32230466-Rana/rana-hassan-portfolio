import { BrainCircuit, Braces, Code2, Database, Layers3, MonitorSmartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  darkCardHover,
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Braces,
    skills: ["JavaScript", "Python", "Java", "PHP"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
      "Responsive Design",
      "UI/UX Implementation",
      "Animations",
    ],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: [
      "Laravel",
      "PHP",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
      "Authentication",
      "CRUD Operations",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQL", "Relational Data", "Dashboard Data", "Database Design"],
  },
  {
    title: "AI / Innovation",
    icon: BrainCircuit,
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Local AI",
      "Ollama/local LLMs",
      "FastAPI AI Services",
      "AI API Integration",
      "PDF-based AI Features",
      "Knowledge Graphs",
      "AI Agents",
      "Data Analytics",
    ],
  },
  {
    title: "Testing & Tools",
    icon: Wrench,
    skills: [
      "Postman Testing",
      "API Testing",
      "UI Testing",
      "Jest",
      "React Testing Library",
      "Cypress",
      "Debugging",
      "Cross-Browser Testing",
      "Form Validation Testing",
      "User Flow Testing",
      "Git",
      "GitHub",
      "Jira",
      "VS Code",
      "Figma",
    ],
  },
  {
    title: "Mobile & Responsive",
    icon: MonitorSmartphone,
    skills: [
      "Mobile Application Development",
      "React Native fundamentals",
      "Flutter fundamentals",
      "Mobile-First Responsive UI",
      "Responsive Web Apps",
      "Cross-Screen Testing",
    ],
  },
];
function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="dark-section-glow dark-section-glow-one" />
      <div className="dark-section-glow dark-section-glow-two" />
      <div className="section-shell">
        <div className="grid gap-14 lg:items-start">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <SectionHeading
              eyebrow="Technical toolkit"
              title="The right tools for complete products."
              description="A balanced stack for building responsive interfaces, robust APIs, data-driven dashboards, testing workflows, and useful AI features."
              tone="dark"
            />
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-indigo-400 to-purple-400 lg:mx-0" />
          </motion.div>

          <motion.div
            className="skills-progress-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {skillGroups.map(({ title, icon: Icon, skills }, index) => (
              <motion.div
                key={title}
                className="skill-progress-card premium-card-dark"
                variants={index % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ ...viewportOnce, amount: 0.18 }}
                whileHover={darkCardHover}
              >
                <div className="skill-progress-header">
                  <span>
                    <Icon size={22} />
                  </span>
                  <h3>{title}</h3>
                </div>
                <motion.div className="mt-7 flex flex-wrap gap-2" variants={staggerContainer}>
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/7 px-3 py-1.5 text-xs font-extrabold text-slate-200 shadow-[0_8px_22px_rgba(0,0,0,0.12)] transition hover:border-indigo-300/40 hover:bg-indigo-400/12 hover:text-white"
                      variants={fadeUp}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;