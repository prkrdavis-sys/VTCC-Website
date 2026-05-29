# VTCC Website Planning

This project contains planning documents and the **current static website prototype** for Victoria Transcultural Clinical Center.

A separate React demo also exists in [`../vtcc-redesign`](../vtcc-redesign), but it has not been updated with the latest navigation, home page, or forms work. Use this repo’s prototype for the current design.

## Single Source Of Truth

All website copy lives in `content/locales/en.json` and `content/locales/es.json`. Shared assets are in `content/site.json`.

Generated artifacts:

- `page-copy.md` — English WordPress-ready copy (`npm run build:copy`)
- `prototype/index.html` — static browser mockup with language dropdown (`npm run build:prototype`)

After editing locale files, run:

```sh
npm run build
```

## What Is In This Project

- `content/locales/en.json` and `content/locales/es.json`: canonical website copy in English and Spanish.
- `content/locales/resources-faq.en.json` and `content/locales/resources-faq.es.json`: Resources topic cards and long FAQ content (synced into locale files on `npm run build`).
- `content/site.json`: shared assets, default locale, and language labels.
- `current-site-audit.md`: what exists today, what is working, and what should be improved.
- `sitemap-and-homepage.md`: recommended navigation and homepage section order.
- `page-copy.md`: generated from `content/site.json` for WordPress paste workflows.
- `build-path-recommendation.md`: recommended implementation path for WordPress and when to pitch a rebuild.
- `prototype/index.html`: generated static website mockup you can open in a browser.
- `prototype/styles.css`: styling for the static mockup.

## How To View The Prototype (Current Design)

Build and start the local server:

```sh
npm run build
npm run dev
```

Then open [http://localhost:4178/](http://localhost:4178/).

This prototype includes the condensed dropdown navigation, forms page, updated home page, insurance logos, and Spanish parity work.

You can also open `prototype/index.html` directly after running `npm run build`, but `npm run dev` is recommended so asset paths resolve correctly.

## How To View The React Demo (Older UI)

```sh
npm run dev:redesign
```

Or from the sibling project:

```sh
cd ../vtcc-redesign
npm install
npm run dev
```

The React demo imports locale files from this project but still uses an older flat navigation layout and does not yet include the forms page UI.

## Important Notes

- Do not collect diagnosis reports, clinical details, or protected health information through a normal contact form unless VTCC confirms the form is secure, approved, and compliant.
- Ask the CEO or compliance lead to approve all final medical, insurance, and service eligibility language.
- Any testimonials, photos, staff bios, and client stories should only be used with proper written permission.
