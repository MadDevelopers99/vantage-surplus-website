# Vantage Surplus Traders — Website

A professional, fully responsive B2B surplus marketplace website (buy & sell surplus/dead stock) built with plain HTML, CSS and JavaScript (no build step, no frameworks).

## Pages
- `index.html` — Home (marketplace hub: categories, featured/top-selling products, for-buyers/for-sellers, process, testimonials, sustainability, FAQ, contact)
- `buy.html` — Shop surplus inventory: category grid + tabbed product listings (Best Sellers / New Arrivals / Featured) + Top Selling
- `sell.html` — Sell/list surplus stock landing page (For Sellers pitch, process, categories bought)
- `about.html` — About the company
- `services.html` — Surplus stock categories + FAQ (`#faq`)
- `sustainability.html` — Sustainability mission and impact stats
- `checklist-comparison.html` — Pre-sale checklist + comparison table vs other options
- `ageing-calculator.html` — Interactive inventory ageing/value calculator
- `sitemap.html` — Full site index
- `blog.html` — Blog listing (6 articles)
- `blog-post.html`, `blog-post-2.html` … `blog-post-6.html` — Full blog articles
- `contact.html` — Quote request form, office info & map
- `privacy.html`, `terms.html`, `return-policy.html`, `service-warranty.html` — Legal pages (sample templates — see notes below)
- `404.html` — Not-found page

## Structure
```
css/style.css     Shared stylesheet (theme, layout, components incl. product cards, category grid, calculator)
js/main.js        Navbar, scroll reveal, counters, testimonial slider, product tabs, FAQ, form handling
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
- **Placeholder contact details**: the phone number (`+966 50 123 4567`), email addresses and office address (Riyadh, Saudi Arabia) are samples — replace with real business details.
- **Product listings & prices on `buy.html` / `index.html`**: sample data for demonstration only (no real inventory/checkout backend) — every "Buy Now" currently routes to the contact form. Replace with real listings and a payment flow before going live.
- **Contact form**: currently validates and shows a success message client-side only (see the notice on the Contact page); connect it to a backend or a form service (e.g. Formspree) to receive real submissions.
- **Social links**: LinkedIn/Facebook/Instagram icons in the footer are placeholders (no real profiles linked yet) — add real URLs once accounts exist.
- **Legal pages**: `privacy.html`, `terms.html`, `return-policy.html` and `service-warranty.html` are generic sample templates for demonstration. Have them reviewed and customized by a licensed legal professional before publishing.
- **Inventory Ageing Calculator**: uses an illustrative decay formula for demonstration, not real appraisal data.
