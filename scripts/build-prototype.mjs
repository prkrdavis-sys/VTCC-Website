import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { loadSiteContent, rootDir } from './lib.mjs'

const fontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />`

const site = loadSiteContent()
const prototypeDir = join(rootDir, 'prototype')

writeFileSync(join(prototypeDir, 'site-content.js'), `window.VTCC_SITE = ${JSON.stringify(site)};\n`)

const pages = [
  { file: 'index.html', page: 'home', base: '' },
  { file: 'aba.html', page: 'aba', base: '' },
  { file: 'intensive-in-home.html', page: 'intensive-in-home', base: '' },
  { file: 'get-started.html', page: 'get-started', base: '' },
  { file: 'insurance.html', page: 'insurance', base: '' },
  { file: 'referrers.html', page: 'referrers', base: '' },
  { file: 'about.html', page: 'about', base: '' },
  { file: 'contact.html', page: 'contact', base: '' },
  { file: join('contact', 'referral.html'), page: 'contact-referral', base: '../' },
  { file: join('resources', 'index.html'), page: 'resources', base: '../' },
  { file: join('resources', 'forms.html'), page: 'forms', base: '../' },
  ...[
    'what-is-aba-therapy',
    'what-to-expect-during-intake',
    'medicaid-fapt-funding-basics',
    'parent-training-faqs',
    'intensive-in-home-basics',
    'referrals-and-eligibility',
  ].map((slug) => ({
    file: join('resources', `${slug}.html`),
    page: 'resource',
    base: '../',
    slug,
  })),
]

mkdirSync(join(prototypeDir, 'resources'), { recursive: true })
mkdirSync(join(prototypeDir, 'contact'), { recursive: true })

for (const entry of pages) {
  const slugScript = entry.slug ? `\n    <script>window.VTCC_RESOURCE_SLUG = ${JSON.stringify(entry.slug)};</script>` : ''
  writeFileSync(
    join(prototypeDir, entry.file),
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>VTCC Website Prototype</title>
    ${fontLinks}
    <link rel="stylesheet" href="${entry.base}styles.css" />
  </head>
  <body>
    <div id="app"></div>
    <script>window.VTCC_PAGE = ${JSON.stringify(entry.page)}; window.VTCC_BASE = ${JSON.stringify(entry.base)};</script>${slugScript}
    <script src="${entry.base}site-content.js"></script>
    <script src="${entry.base}i18n.js"></script>
  </body>
</html>
`,
  )
}

console.log(`Wrote ${pages.length} prototype pages and site-content.js`)
