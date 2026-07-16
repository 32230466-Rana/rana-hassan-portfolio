import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";

function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }) {
  const centered = align === "center";
  const isDark = tone === "dark";

  return (
    <motion.div
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
      variants={staggerContainer}
    >
      <motion.p
        variants={fadeUp}
        className={`section-badge-lite mb-3 text-xs font-bold tracking-[0.2em] uppercase ${
          isDark ? "text-indigo-300" : "text-brand"
        }`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className={`font-display text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={`mt-4 text-base leading-7 sm:text-lg ${
            isDark ? "text-slate-400" : "text-muted"
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
