import {
  CalendarDays,
  CheckCircle2,
  GraduationCap,
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

const educationItems = [
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "Lebanese International University",
    location: "Saida, Lebanon",
    dates: "Oct 2022 - Jun 2026",
    description:
      "Relevant coursework: Machine Learning, Natural Language Processing, Web Development, Mobile Application Development, Data Structures, Information Systems Development.",
    technologies: ["Computer Science", "Machine Learning", "NLP", "Web Development", "Mobile Application Development", "Data Structures", "Information Systems"],
  },
  {
    title: "Full-Stack Web Development Training",
    institution: "Alwan Center",
    location: "Saida, Lebanon",
    dates: "Jul 2024 - Dec 2024",
    bullets: [
      "Built and deployed full-stack web applications using MERN and Next.js technologies.",
      "Designed RESTful APIs using Express.js and Next.js for backend functionality and integration.",
      "Developed dashboards and informative web solutions for fintech and multi-role use cases.",
      "Applied responsive UI/UX practices, structured code organization, and SOLID principles.",
    ],
    technologies: ["MERN", "Next.js", "Express.js", "REST APIs", "Responsive UI/UX", "SOLID Principles"],
  },
];

function Education() {
  return (
    <section
      id="education"
      className="experience-section education-section relative scroll-mt-20 overflow-x-hidden py-24 sm:py-28"
    >
      <div className="section-glow experience-section-glow education-section-glow" />
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionHeading
            eyebrow="Education"
            title="Education"
            description="Academic foundation and focused full-stack training behind my software development work."
            align="center"
          />
        </motion.div>

        <motion.div
          className="experience-timeline education-timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {educationItems.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.institution}`}
              className={`experience-entry ${
                index % 2 === 0 ? "experience-entry-left" : "experience-entry-right"
              }`}
              variants={index % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ ...viewportOnce, amount: 0.18 }}
            >
              <span className="experience-node education-node" aria-hidden="true">
                <GraduationCap size={16} />
              </span>

              <motion.div className="experience-card education-card premium-card" whileHover={cardHover}>
                <div className="experience-card-heading">
                  <span className="experience-icon education-icon">
                    <GraduationCap size={21} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.institution}</p>
                  </div>
                </div>

                <div className="experience-meta">
                  <span>
                    <MapPin size={15} />
                    {item.location}
                  </span>
                  <span>
                    <CalendarDays size={15} />
                    {item.dates}
                  </span>
                </div>

                {item.description && (
                  <motion.p className="education-description" variants={fadeUp}>
                    {item.description}
                  </motion.p>
                )}

                {item.bullets && (
                  <motion.ul className="experience-bullets" variants={staggerContainer}>
                    {item.bullets.map((bullet) => (
                      <motion.li key={bullet} variants={fadeUp}>
                        <CheckCircle2 size={16} />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}

                <motion.div className="experience-tech" variants={staggerContainer}>
                  {item.technologies.map((technology) => (
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

export default Education;