import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-line bg-white py-7">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-sm font-extrabold text-ink">Rana Hassan</p>
          <p className="mt-1 text-xs text-muted">
            Full-stack development for useful, modern products.
          </p>
        </div>
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Rana Hassan. All rights reserved.
        </p>
        <a
          href="#home"
          aria-label="Back to top"
          className="grid size-10 place-items-center rounded-xl border border-line bg-surface text-ink transition hover:border-indigo-300 hover:text-brand"
        >
          <ArrowUp size={17} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
