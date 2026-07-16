import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  buttonHover,
  cardHover,
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  _gotcha: "",
};

const contactLinks = [
  {
    label: "Email",
    value: "ranaaa.hasan236@gmail.com",
    href: "mailto:ranaaa.hasan236@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone / WhatsApp",
    value: "+961 81039584",
    href: "https://wa.me/96181039584",
    icon: Phone,
    external: true,
  },
  {
    label: "Location",
    value: "Saida, Lebanon / Remote",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "View LinkedIn Profile",
    href: "https://www.linkedin.com/in/rana-hassan-07aa8a308/",
    icon: Linkedin,
    external: true,
  },
];

function validateForm(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = "Please enter your name.";

  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.subject.trim()) errors.subject = "Please enter a subject.";

  if (!form.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }

  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);
  const submissionLock = useRef(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submissionLock.current) return;

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() || "https://formspree.io/f/xqevzdnb";
    if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
      setStatus({
        type: "error",
        message:
          "Formspree endpoint is missing. Please add VITE_FORMSPREE_ENDPOINT to .env.local and restart the dev server.",
      });
      return;
    }

    try {
      const endpointUrl = new URL(endpoint);
      if (endpointUrl.protocol !== "https:" || endpointUrl.hostname !== "formspree.io") {
        throw new Error("Unexpected Formspree endpoint.");
      }
    } catch (error) {
      console.error("Invalid Formspree endpoint configuration.", error);
      setStatus({
        type: "error",
        message:
          "Formspree endpoint is missing. Please add VITE_FORMSPREE_ENDPOINT to .env.local and restart the dev server.",
      });
      return;
    }

    submissionLock.current = true;
    setIsSending(true);
    setStatus(null);

    const payload = new FormData();
    payload.append("name", form.name.trim());
    payload.append("email", form.email.trim());
    payload.append("subject", form.subject.trim());
    payload.append("message", form.message.trim());
    payload.append("_gotcha", form._gotcha.trim());

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        let responseDetails = "";

        try {
          responseDetails = await response.text();
        } catch (readError) {
          console.error("Unable to read the Formspree error response.", readError);
        }

        console.error("Formspree submission failed.", {
          status: response.status,
          response: responseDetails.slice(0, 500),
        });
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again or contact me by email.",
        });
        return;
      }

      setForm(initialForm);
      setErrors({});
      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      console.error("Formspree network request failed.", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact me by email.",
      });
    } finally {
      submissionLock.current = false;
      setIsSending(false);
    }
  };
  return (
    <section
      id="contact"
      className="contact-section relative scroll-mt-20 overflow-hidden py-24 sm:py-28"
    >
      <div className="section-glow contact-section-glow" />
      <div className="section-shell">
        <motion.div
          className="contact-layout"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div className="contact-side-panel" variants={slideLeft}>
            <p className="section-badge-lite text-xs font-bold tracking-[0.2em] text-brand uppercase">
              Contact
            </p>
            <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.045em] text-ink sm:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
              I am open to Website Developer, Full-Stack Developer, Frontend Developer, and AI-powered web platform opportunities. Feel free to contact me for junior roles, freelance projects, or collaboration opportunities.
            </p>

            <motion.div className="contact-info-grid" variants={staggerContainer}>
              {contactLinks.map(({ label, value, href, icon: Icon, external }) => {
                const Card = href ? motion.a : motion.div;

                return (
                  <Card
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="contact-info-card premium-card"
                    variants={fadeUp}
                    whileHover={cardHover}
                  >
                    <span className="contact-info-icon">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="contact-info-label">{label}</span>
                      <span className="contact-info-value">{value}</span>
                    </span>
                    {href && <ArrowUpRight size={17} className="contact-info-arrow" />}
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div className="contact-form-card" variants={slideRight}>
            <div className="contact-form-heading">
              <span className="contact-form-icon">
                <Send size={21} />
              </span>
              <div>
                <h3>Send a Message</h3>
                <p>I typically respond as soon as possible.</p>
              </div>
            </div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              variants={staggerContainer}
            >
              <motion.div className="contact-field" variants={fadeUp}>
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  autoComplete="name"
                  required
                />
                {errors.name && (
                  <span id="contact-name-error" className="contact-field-error">
                    {errors.name}
                  </span>
                )}
              </motion.div>

              <motion.div className="contact-field" variants={fadeUp}>
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  autoComplete="email"
                  required
                />
                {errors.email && (
                  <span id="contact-email-error" className="contact-field-error">
                    {errors.email}
                  </span>
                )}
              </motion.div>

              <motion.div className="contact-field contact-field-full" variants={fadeUp}>
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="How can I help?"
                  value={form.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  required
                />
                {errors.subject && (
                  <span id="contact-subject-error" className="contact-field-error">
                    {errors.subject}
                  </span>
                )}
              </motion.div>

              <motion.div className="contact-field contact-field-full" variants={fadeUp}>
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  minLength="10"
                  required
                />
                {errors.message && (
                  <span id="contact-message-error" className="contact-field-error">
                    {errors.message}
                  </span>
                )}
              </motion.div>

              <div className="contact-honeypot" aria-hidden="true" hidden>
                <input
                  id="contact-gotcha"
                  name="_gotcha"
                  type="text"
                  value={form._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  hidden
                />
              </div>

              <motion.button
                type="submit"
                className="contact-submit shine-button contact-field-full"
                disabled={isSending}
                whileHover={isSending ? undefined : buttonHover}
                whileTap={isSending ? undefined : { scale: 0.98 }}
                variants={fadeUp}
              >
                <Send size={17} />
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

              {status && (
                <motion.p
                  className={`contact-status contact-field-full contact-status-${status.type}`}
                  role={status.type === "error" ? "alert" : "status"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;