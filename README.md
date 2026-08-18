# Vantage Surplus Traders — Website

A professional, fully responsive multi-page website for a surplus & dead-stock buying business, built with plain HTML, CSS and JavaScript (no build step, no frameworks).

## Pages
- `index.html` — Home
- `about.html` — About the company
- `services.html` — Surplus stock categories + FAQ
- `blog.html` — Blog listing (6 articles)
- `blog-post.html`, `blog-post-2.html` … `blog-post-6.html` — Full blog articles
- `contact.html` — Quote request form, office info & map
- `privacy.html`, `terms.html` — Legal pages (sample templates — see notes below)
- `404.html` — Not-found page

## Structure
```
css/style.css     Shared stylesheet (theme, layout, components)
js/main.js        Navbar, scroll reveal, counters, testimonial slider, FAQ, form handling
assets/           Favicon and other static assets
package.json      "serve" static-file start script (used by hosts like Railway)
```

## Running locally
No build step required — open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Deploying (e.g. Railway)
`package.json` includes a `start` script (`serve . -l $PORT`) so platforms that expect a Node app — like Railway — can detect, install and run the site automatically. Remember to generate/enable a public domain in the host's networking settings after deploying.

## Notes — before going live
- **Placeholder contact details**: the phone number (`+971 50 123 4567`), email addresses and office address are samples — replace with real business details.
- **Contact form**: currently validates and shows a success message client-side only (see the notice on the Contact page); connect it to a backend or a form service (e.g. Formspree) to receive real submissions.
- **Social links**: LinkedIn/Facebook/Instagram icons in the footer are placeholders (no real profiles linked yet) — add real URLs once accounts exist.
- **Privacy Policy / Terms of Service**: generic sample templates for demonstration. Have them reviewed and customized by a licensed legal professional before publishing.
