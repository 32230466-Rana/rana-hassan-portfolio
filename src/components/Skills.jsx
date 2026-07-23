import { BrainCircuit, Code2, Database, Layers3, Rocket, Wrench } from "lucide-react";
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
    title: "Frontend",
    icon: Layers3,
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS",
      "Bootstrap", "Sass", "Responsive Design", "UI Implementation", "Animations", "TanStack Query",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Code2,
    skills: [
      "Laravel", "Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication",
      "Laravel Sanctum", "Role-Based Access", "Validation", "PHP", "Python", "Java",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "Database Design", "CRUD", "Queries", "Joins"],
  },
  {
    title: "Testing & Quality",
    icon: Wrench,
    skills: [
      "Postman", "API Testing", "UI Testing", "Debugging", "Cross-Browser Testing",
      "Form Validation", "Error Handling",
    ],
  },
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    skills: [
      "Ollama", "Local LLMs", "AI Integration", "Ask-PDF", "AI Summarization",
      "Quiz Generation", "Knowledge Graphs", "AI Agents", "n8n", "LangGraph",
      "Machine Learning", "Natural Language Processing",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: Rocket,
    skills: [
      "Git", "GitHub", "GitHub Actions", "Vercel", "Docker", "Jira", "Agile/Scrum",
      "Figma", "CI/CD Fundamentals", "VS Code",
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