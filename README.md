# CampusPe — React JSX Website

Responsive nine-section CampusPe landing page based on the supplied nine PNG references.

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm

## Get started

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The deployable static site is generated in `dist/`.

## Structure

- `src/App.jsx` — hook-driven carousels, interaction state, and top-level app
- `src/StaticSections.jsx` — reusable reference-based JSX sections
- `src/style.css` — colors, typography, interactions, and responsive breakpoints
- `public/assets/phone-*.png` — original phone artwork extracted from supplied Page 7
- `public/assets/download-phones-reference.png` — the two angled app phones from supplied Page 8
- `public/assets/{ginserv,startup,...}.png` — logos extracted from supplied Page 2
- `index.html`, `vite.config.js`, `package.json`, `package-lock.json` — React/Vite configuration
- `dist/` — ready-to-deploy production output

## Experience

- The hero now includes both reference activity cards: "142 students matched today" and the Radiant Info recruiter update, along with decorative artwork in the three primary cards.
- Colleges and Employers show their secondary status badges from the supplied page references.
- The sharp discovery-dashboard phone (third phone asset) is the initial active, centered phone on Page 7.
- JSX and CSS are formatted into readable, indented, multiline source files.
- Final reference-alignment pass refined the header/hero typography, overlaid hero activity cards, partner statistics and SVG icons, opportunity note, resume uploader's inner dashed border, four-card colleges layout, app-download spacing, and footer content width.
- Nine sections from the supplied design, in order
- Seamless, continuously scrolling partner logo strip (CSS linear infinite animation; no pauses or step jumps)
- Hero and partner statistics/logo strip share one uninterrupted background
- Five-phone screenshot carousel (`useState`, `useEffect`, keyboard arrows, touch swipe, indicators)
- Reference phone artwork without any blur CSS filter
- Hover, active, and visible keyboard focus styles
- Working section navigation, job-feed filters, file selection preview, and clear demo dialogs for inactive services
- Working Blogs navigation with a dedicated article listing and three readable guide articles
- Sign In / Sign Up account-form UI with Gmail/email, password visibility toggle, confirmation, form switching and client-side validation; no credential transmission or storage
- Refined Sections 7 and 8 based on the latest supplied PNGs; the remaining design sections are unchanged
- Responsive styles for phone, tablet, laptop, and desktop

## Notes

This is a frontend prototype. User accounts, resume analysis, job posting, database actions, official policies, and app-store links require production service integration. CTA demo dialogs make those boundaries explicit.

The authentication forms validate fields locally but do not create accounts or sign users in until a secure authentication backend is configured. Do not use real passwords to test this frontend preview.

The tiny text embedded in the supplied mobile PNG cannot gain new detail beyond its source resolution; it is displayed without an intentional blur effect.
