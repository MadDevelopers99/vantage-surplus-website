# Vantage Surplus Traders — Website

A professional, fully responsive multi-page website for a surplus & dead-stock buying business, built with plain HTML, CSS and JavaScript (no build step, no frameworks).

## Pages
- `index.html` — Home
- `about.html` — About the company
- `services.html` — Surplus stock categories + FAQ
- `blog.html` — Blog listing
- `blog-post.html` — Sample blog article template
- `contact.html` — Quote request form, office info & map

## Structure
```
css/style.css     Shared stylesheet (theme, layout, components)
js/main.js        Navbar, scroll reveal, counters, testimonial slider, FAQ, form handling
assets/           Favicon and other static assets
```

## Running locally
No build step required — open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Notes
- The contact form currently validates and shows a success message client-side only; connect it to a backend or a form service (e.g. Formspree) to receive real submissions.
- Placeholder phone numbers, email addresses and the office address in the footer/contact page should be replaced with real business details before going live.
