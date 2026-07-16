import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { buttonHover } from "../lib/animations";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#project" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const updateActiveSection = () => {
      let current = "home";

      for (let index = 0; index < sectionIds.length; index += 1) {
        const id = sectionIds[index];
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 140) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-surface/85 shadow-[0_12px_40px_rgba(79,70,229,0.06)] backdrop-blur-xl"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="section-shell flex h-[68px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label="Rana Hassan home">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-purple font-display text-sm font-extrabold text-white shadow-soft transition-transform group-hover:-rotate-3">
            RH
          </span>
          <span className="font-display inline text-[15px] font-extrabold tracking-[-0.02em] text-ink sm:text-base md:hidden lg:inline">
            Rana Hassan
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex lg:gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <motion.div key={link.label} className="relative">
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="navActivePill"
                  className="absolute inset-x-[-10px] inset-y-[-6px] rounded-full bg-brand-soft"
                  transition={{ type: "spring", stiffness: 430, damping: 32 }}
                />
              )}
              <motion.a
                href={link.href}
                className={`relative z-10 text-[13px] font-semibold lg:text-sm transition-colors ${
                  activeSection === link.href.slice(1) ? "text-brand" : "text-muted hover:text-brand"
                }`}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-purple"
                  transition={{ type: "spring", stiffness: 430, damping: 32 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-brand md:flex"
          whileHover={buttonHover}
          whileTap={{ scale: 0.98 }}
        >
          Let&apos;s talk
          <ArrowUpRight size={16} />
        </motion.a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-line bg-white text-ink md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="border-t border-line bg-white px-4 py-5 shadow-xl md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="section-shell flex flex-col gap-1"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.055 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                    activeSection === link.href.slice(1)
                      ? "bg-brand-soft text-brand"
                      : "text-muted hover:bg-brand-soft hover:text-brand"
                  }`}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white"
              >
                Let&apos;s talk
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
