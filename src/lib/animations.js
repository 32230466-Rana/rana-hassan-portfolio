const easeOut = [0.16, 1, 0.3, 1];
const softSpring = { type: "spring", stiffness: 120, damping: 18, mass: 0.7 };

export const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: "-40px 0px -40px 0px",
};

export const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -72 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.84, ease: easeOut },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 72 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.84, ease: easeOut },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

export const heroWord = {
  hidden: { opacity: 0, y: "115%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.72, ease: easeOut },
  },
};

export const cardHover = {
  y: -6,
  scale: 1.012,
  borderColor: "rgba(99, 102, 241, 0.45)",
  boxShadow: "0 26px 70px rgba(79, 70, 229, 0.16)",
  transition: softSpring,
};

export const darkCardHover = {
  y: -6,
  scale: 1.012,
  borderColor: "rgba(129, 140, 248, 0.52)",
  boxShadow: "0 26px 70px rgba(79, 70, 229, 0.22)",
  transition: softSpring,
};

export const buttonHover = {
  y: -2,
  scale: 1.01,
  transition: softSpring,
};
