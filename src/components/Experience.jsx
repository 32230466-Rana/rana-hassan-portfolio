import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";
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

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Techryt",
    location: "Remote",
    dates: "Aug 2025 - Dec 2025",
    bullets: [
      "Developed responsive websites and reusable interfaces using React, Next.js, CSS, and Tailwind CSS.",
      "Implemented modern layouts, animations, and accessible, user-friendly browser experiences.",
      "Tested and debugged forms, UI behavior, and responsive layouts across screen sizes.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "CSS", "Git", "GitHub"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    dates: "Sep 2024",
    bullets: [
      "Developed MERN-stack web applications with MongoDB, Express.js, React, and Node.js.",
      "Integrated responsive frontend interfaces with REST APIs and backend logic.",
      "Tested UI flows, forms, API integrations, and endpoints using Postman.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "CSS"],
  },
  {
    role: "Freelance / Independent Full-Stack Web Developer",
    company: "",
    location: "Remote",
    dates: "Dec 2024 - Jun 2026",
    bullets: [
      "Developed full-stack web applications, e-commerce websites, learning platforms, and dashboards.",
      "Implemented responsive interfaces, authentication, CRUD workflows, REST APIs, and database features.",
      "Tested APIs and user flows with Postman, UI testing, and cross-browser checks.",
    ],
    technologies: ["Laravel", "React", "MySQL", "Database Features", "REST APIs", "Authentication", "CRUD", "Full-Stack"],
  },
  {
    role: "AI Summer Sprint Bootcamp",
    company: "Near East University & SprintOS",
    location: "Remote",
    dates: "Jul 2025",
    bullets: [
      "Completed hands-on training in machine learning, NLP, Knowledge Graphs, AI agents, and automation.",
      "Collaborated on AI product concepts, model integration, documentation, and deployment preparation.",
      "Applied data-driven problem-solving to practical AI solution design.",
    ],
    technologies: ["AI", "Deep Learning", "Deployment", "Documentation", "Teamwork"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="experience-section relative scroll-mt-20 overflow-x-hidden py-24 sm:py-28"
    >
      <div className="section-glow experience-section-glow" />
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionHeading
            eyebrow="Experience"
            title="Professional Experience"
            description="Hands-on experience delivering responsive interfaces, full-stack applications, AI-powered products, and practical client solutions."
            align="center"
          />
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.role}-${experience.company || experience.dates}`}
              className={`experience-entry ${
                index % 2 === 0 ? "experience-entry-left" : "experience-entry-right"
              }`}
              variants={index % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ ...viewportOnce, amount: 0.18 }}
            >
              <span className="experience-node" aria-hidden="true">
                <BriefcaseBusiness size={16} />
              </span>

              <motion.div className="experience-card premium-card" whileHover={cardHover}>
                <div className="experience-card-heading">
                  <span className="experience-icon">
                    <BriefcaseBusiness size={21} />
                  </span>
                  <div>
                    <h3>{experience.role}</h3>
                    {experience.company && <p>{experience.company}</p>}
                  </div>
                </div>

                <div className="experience-meta">
                  <span>
                    <MapPin size={15} />
                    {experience.location}
                  </span>
                  <span>
                    <CalendarDays size={15} />
                    {experience.dates}
                  </span>
                </div>

                <motion.ul className="experience-bullets" variants={staggerContainer}>
                  {experience.bullets.map((bullet) => (
                    <motion.li key={bullet} variants={fadeUp}>
                      <CheckCircle2 size={16} />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div className="experience-tech" variants={staggerContainer}>
                  {experience.technologies.map((technology) => (
                    <motion.span key={technology} variants={fadeUp}>
                      {technology}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;