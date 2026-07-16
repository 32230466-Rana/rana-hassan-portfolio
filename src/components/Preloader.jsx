import { motion } from "framer-motion";

function Preloader() {
  return (
    <motion.div
      className="preloader-backdrop fixed inset-0 z-[999] grid place-items-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(14px)",
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      }}
      aria-label="Loading Rana Hassan portfolio"
      role="status"
    >
      <div className="preloader-orb preloader-orb-one" />
      <div className="preloader-orb preloader-orb-two" />
      <div className="preloader-grid" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          className="mb-5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-bold tracking-[0.28em] text-indigo-100 uppercase backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Full-Stack Developer | AI-Powered Web Platforms
        </motion.div>

        <h1 className="font-display overflow-hidden text-4xl font-extrabold tracking-[-0.055em] text-white sm:text-6xl">
          <motion.span
            className="block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Rana Hassan
          </motion.span>
        </h1>

        <motion.div
          className="mt-7 h-px w-56 overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4 }}
        >
          <motion.div
            className="preloader-line h-full w-1/2 rounded-full"
            initial={{ x: "-120%" }}
            animate={{ x: "230%" }}
            transition={{ delay: 0.55, duration: 1.05, ease: "easeInOut", repeat: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Preloader;
