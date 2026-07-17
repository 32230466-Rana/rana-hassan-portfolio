import { BrainCircuit, Braces, Code2, Database, Layers3, MonitorSmartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  cardHover,
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
    <section id="skills" className="skills-light-section relative scroll-mt-20 overflow-x-hidden bg-white py-24 text-ink sm:py-28">
      <div className="section-glow skills-section-glow skills-section-glow-one" />
      <div className="section-glow skills-section-glow skills-section-glow-two" />
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
                className="skill-progress-card premium-card"
                variants={index % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ ...viewportOnce, amount: 0.18 }}
                whileHover={cardHover}
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
                      className="skill-chip rounded-full px-3 py-1.5 text-xs font-extrabold transition"
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