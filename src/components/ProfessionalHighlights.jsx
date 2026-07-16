import {
  BrainCircuit,
  CheckCircle2,
  Code2,
  GitBranch,
  LayoutDashboard,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { cardHover, fadeUp, staggerContainer, viewportOnce } from "../lib/animations";

const highlights = [
  {
    title: "Built a complete AI-powered learning platform",
    description:
      "Delivered StudyFlow as a full-stack product with authentication, document uploads, AI summaries, quizzes, PDF Q&A, recommendations, and dashboard workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Developed responsive full-stack web applications",
    description:
      "Created polished interfaces and backend-connected workflows using Laravel, React, MySQL, FastAPI, Tailwind CSS, and REST APIs.",
    icon: LayoutDashboard,
  },
  {
    title: "Designed and integrated REST APIs",
    description:
      "Connected frontend experiences to backend services, database models, AI endpoints, and structured application logic.",
    icon: Network,
  },
  {
    title: "Collaborated in remote Agile teams",
    description:
      "Worked with distributed teams through Git/GitHub workflows, code reviews, sprint meetings, documentation, and shared delivery practices.",
    icon: GitBranch,
  },
  {
    title: "Delivered freelance web solutions",
    description:
      "Built client-facing websites with responsive layouts, practical feature updates, and clear communication around requirements.",
    icon: CheckCircle2,
  },
  {
    title: "Built scalable Laravel and React applications",
    description:
      "Focused on maintainable components, secure user systems, dashboards, file upload workflows, and product-ready structure.",
    icon: Code2,
  },
];

function ProfessionalHighlights() {
  return (
    <section id="highlights" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-28">
      <div className="section-glow section-glow-highlights" />
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionHeading
            eyebrow="Professional highlights"
            title="Product-focused work that shows real delivery."
            description="A recruiter-friendly snapshot of the systems, workflows, and collaboration habits behind my portfolio."
            align="center"
          />
        </motion.div>

        <motion.div
          className="highlights-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {highlights.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              className="highlight-card premium-card"
              variants={fadeUp}
              whileHover={cardHover}
            >
              <span className="highlight-icon">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProfessionalHighlights;
