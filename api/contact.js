/* global process */
const attempts = new Map();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value) => typeof value === "string" ? value.trim() : "";
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

function validate(body) {
  const values = { name: clean(body?.name), email: clean(body?.email).toLowerCase(), subject: clean(body?.subject), message: clean(body?.message), website: clean(body?.website) };
  const errors = {};
  if (values.name.length < 2 || values.name.length > 80) errors.name = "Name must be between 2 and 80 characters.";
  if (!emailPattern.test(values.email) || values.email.length > 254) errors.email = "Please enter a valid email address.";
  if (!values.subject || values.subject.length > 160) errors.subject = "Subject is required and must be 160 characters or fewer.";
  if (values.message.length < 10 || values.message.length > 5000) errors.message = "Message must be between 10 and 5,000 characters.";
  return { values, errors };
}

function limited(request) {
  const forwarded = request.headers["x-forwarded-for"];
  const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded || request.socket?.remoteAddress || "unknown").split(",")[0].trim();
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((time) => now - time < 600000);
  if (recent.length >= 3) return true;
  attempts.set(ip, [...recent, now]);
  return false;
}

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Allow", "POST");
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed." });

  const { values, errors } = validate(request.body);
  if (values.website) return response.status(200).json({ ok: true });
  if (Object.keys(errors).length) return response.status(400).json({ error: "Please correct the highlighted fields.", errors });
  if (limited(request)) {
    response.setHeader("Retry-After", "600");
    return response.status(429).json({ error: "Too many messages. Please try again later." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !receiver || !from) {
    console.error("Contact email environment variables are incomplete.");
    return response.status(503).json({ error: "Email service is temporarily unavailable." });
  }

  const safe = { name: escapeHtml(values.name), email: escapeHtml(values.email), subject: escapeHtml(values.subject), message: escapeHtml(values.message).replaceAll("\n", "<br>") };
  const emails = [
    {
      from, to: [receiver], reply_to: values.email,
      subject: `New Portfolio Message from ${values.name}`,
      html: `<h2>New portfolio message</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Subject:</strong> ${safe.subject}</p><p><strong>Message:</strong><br>${safe.message}</p><p><strong>Submitted:</strong> ${escapeHtml(new Date().toISOString())}</p>`,
    },
    {
      from, to: [values.email], reply_to: receiver,
      subject: "We received your message – Rana Hassan",
      html: `<p>Hello ${safe.name},</p><p>Thank you for contacting me.</p><p>I have successfully received your message and will review it as soon as possible. I will get back to you at the earliest opportunity.</p><p>Best regards,<br>Rana Hassan<br>Full-Stack Developer | AI &amp; Digital Innovation<br>Portfolio: <a href="https://rana-hassan-portfolio-hdsn.vercel.app/">rana-hassan-portfolio-hdsn.vercel.app</a></p>`,
    },
  ];

  try {
    const sent = await fetch("https://api.resend.com/emails/batch", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(emails) });
    if (!sent.ok) {
      console.error("Resend batch failed.", sent.status, (await sent.text()).slice(0, 500));
      return response.status(502).json({ error: "Email delivery failed. Please try again." });
    }
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact email request failed.", error);
    return response.status(502).json({ error: "Email delivery failed. Please try again." });
  }
}