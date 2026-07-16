# Rana Hassan Portfolio

## Testing the Formspree contact form

1. Add a real Formspree endpoint to `.env.local` using a plain URL:
   `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_REAL_FORM_ID`
2. Restart `npm run dev` after creating or changing `.env.local`.
3. Submit a test message through the Contact form.
4. In browser DevTools, confirm the Network tab shows a `POST` request to `formspree.io` with a successful response.
5. Confirm the message appears in the Formspree inbox or configured email.

Do not use Markdown link syntax around the environment variable value. The value must be the plain Formspree URL.