import { useEffect, useState } from "react";
import { BrainCircuit, CloudUpload, Database, Server } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const floatingItems = ["React", "Laravel", "AI", "API"];

function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const handlePointerMove = (event) => {
      setPointer({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handlePointerMove);
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, [prefersReducedMotion]);

  return (
    <div className="animated-page-bg" aria-hidden="true">
      <div className="ambient-mesh" />
      <motion.div
        className="ambient-orb ambient-orb-primary"
        style={{ x: pointer.x * 24, y: pointer.y * 24 }}
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 0.98, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb-secondary"
        style={{ x: pointer.x * -18, y: pointer.y * -18 }}
        animate={prefersReducedMotion ? undefined : { scale: [1, 0.94, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="floating-tech-field">
        {floatingItems.map((item, index) => (
          <motion.span
            key={item}
            className="floating-tech"
            initial={false}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                    rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                  }
            }
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.45,
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default AnimatedBackground;
