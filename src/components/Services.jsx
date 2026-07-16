import {
  ArrowUpRight,
  Bot,
  Bug,
  LayoutDashboard,
  PanelsTopLeft,
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

const services = [
  {
    number: "01",
    title: "Business websites with admin dashboards",
    description:
      "Professional business websites with secure, simple dashboards for managing content and operations.",
    icon: LayoutDashboard,
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    title: "Custom Laravel + React web apps",
    description:
      "Purpose-built platforms with thoughtful frontend experiences and reliable backend architecture.",
    icon: PanelsTopLeft,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    number: "03",
    title: "AI-powered web tools & automation",
    description:
      "Smart web workflows, AI integrations, summarization, Q&A, automation, and useful AI-powered platform features.",
    icon: Bot,
    color: "bg-purple-50 text-purple-600",
  },
  {
    number: "04",
    title: "Bug fixing and API integration",
    description:
      "Focused debugging, third-party service integrations, and API work that gets existing products moving again.",
    icon: Bug,
    color: "bg-rose-50 text-rose-600",
  },
];

function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-28">
      <div className="section-glow section-glow-services" />
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionHeading
            eyebrow="Services"
            title="Practical development for real business needs."
            description="From the first interface to the final API connection, I build clear, dependable products that are ready to use."
            align="center"
          />
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {services.map(({ number, title, description, icon: Icon, color }, index) => (
            <motion.article
              key={title}
              className="premium-card group rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7"
              variants={index % 2 === 0 ? slideLeft : slideRight}
              whileHover={cardHover}
            >
              <div className="flex items-start justify-between">
                <span className={`grid size-12 place-items-center rounded-xl ${color}`}>
                  <Icon size={22} />
                </span>
                <span className="font-display text-xs font-extrabold tracking-widest text-slate-300">
                  {number}
                </span>
              </div>
              <h3 className="font-display mt-7 max-w-sm text-xl font-extrabold tracking-[-0.025em] text-ink">
                {title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted">{description}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand"
              >
                Discuss a project
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
