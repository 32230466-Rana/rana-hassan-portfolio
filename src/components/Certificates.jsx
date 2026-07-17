import { Award, CalendarDays, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { cardHover, fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from "../lib/animations";

const certificates = [
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    date: "Jul 2025",
  },
  {
    title: "AI Summer Sprint Bootcamp Certificate of Accomplishment",
    issuer: "Near East University & SprintOS",
    date: "Jul 2025",
  },
  {
    title: "Frontend Developer Internship Completion Letter",
    issuer: "Techryt",
    date: "Oct 2025",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="relative scroll-mt-20 overflow-x-hidden bg-white py-24 sm:py-28">
      <div className="section-glow section-glow-project" />
      <div className="section-shell">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <SectionHeading
            eyebrow="Certificates"
            title="Certifications and accomplishments."
            description="Recent learning and validation across generative AI, AI product work, and frontend development."
            align="center"
          />
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {certificates.map((certificate, index) => (
            <motion.article
              key={`${certificate.title}-${certificate.date}`}
              className="premium-card rounded-3xl border border-line bg-surface p-6 shadow-card"
              variants={index % 2 === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ ...viewportOnce, amount: 0.18 }}
              whileHover={cardHover}
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand shadow-sm">
                <Award size={22} />
              </span>
              <h3 className="font-display mt-5 text-xl font-extrabold tracking-[-0.03em] text-ink">
                {certificate.title}
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm font-bold text-muted">
                <CheckCircle2 size={16} className="text-brand" />
                {certificate.issuer}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-bold text-muted">
                <CalendarDays size={16} className="text-brand" />
                {certificate.date}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;