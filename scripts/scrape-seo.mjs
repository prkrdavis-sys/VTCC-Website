import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { rootDir } from './lib.mjs'

const URLS = [
  'https://vtcc.health/',
  'https://vtcc.health/aba/',
  'https://vtcc.health/intensive-in-home/',
  'https://vtcc.health/our-services/',
  'https://vtcc.health/our-services/accepted-insurance-providers/',
  'https://vtcc.health/resources/',
  'https://vtcc.health/contact/',
  'https://vtcc.health/about-our-director/',
  'https://vtcc.health/career/',
  'https://vtcc.health/blog/',
  'https://vtcc.health/inicio/',
  'https://vtcc.health/acerca-del-aba/',
  'https://vtcc.health/programa-de-servicios-intensivos-en-el-hogar/',
  'https://vtcc.health/recursos-para-familias-y-referentes/',
  'https://vtcc.health/contactenos/',
]

function isSeoHeadLine(line) {
  if (/<title/i.test(line)) return true
  if (/<meta/i.test(line) && /description|robots|viewport|keywords/i.test(line)) return true
  if (/<link/i.test(line) && /rel=["'](canonical|shortcut icon|apple-touch-icon|alternate)["']/i.test(line)) {
    if (/alternate/i.test(line) && !/rss\+xml/i.test(line)) return false
    return true
  }
  return false
}

function extractSeoFromHtml(html) {
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? ''
  const lines = []
  const patterns = [/<title[^>]*>[\s\S]*?<\/title>/gi, /<meta[^>]+>/gi, /<link[^>]+>/gi]

  for (const re of patterns) {
    let match
    while ((match = re.exec(head)) !== null) {
      const line = match[0].trim()
      if (isSeoHeadLine(line)) lines.push(line)
    }
  }

  const unique = [...new Set(lines)]
  const title = unique.find((l) => l.startsWith('<title'))?.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
  const description = unique
    .find((l) => /name=["']description["']/i.test(l))
    ?.match(/content=["']([\s\S]*?)["']/i)?.[1]

  return { headLines: unique, title, description }
}

const pages = {}
for (const url of URLS) {
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`)
  }
  const html = await response.text()
  pages[url] = extractSeoFromHtml(html)
  console.log(`Scraped ${url}`)
}

const output = {
  scrapedAt: new Date().toISOString(),
  sourceSite: 'https://vtcc.health/',
  pages,
  routeMap: {
    en: {
      home: 'https://vtcc.health/',
      aba: 'https://vtcc.health/aba/',
      'intensive-in-home': 'https://vtcc.health/intensive-in-home/',
      'get-started': 'https://vtcc.health/our-services/',
      insurance: 'https://vtcc.health/our-services/accepted-insurance-providers/',
      referrers: 'https://vtcc.health/resources/',
      resources: 'https://vtcc.health/resources/',
      forms: 'https://vtcc.health/resources/',
      resource: 'https://vtcc.health/resources/',
      about: 'https://vtcc.health/about-our-director/',
      contact: 'https://vtcc.health/contact/',
      'contact-referral': 'https://vtcc.health/contact/',
      career: 'https://vtcc.health/career/',
      blog: 'https://vtcc.health/blog/',
    },
    es: {
      home: 'https://vtcc.health/inicio/',
      aba: 'https://vtcc.health/acerca-del-aba/',
      'intensive-in-home': 'https://vtcc.health/programa-de-servicios-intensivos-en-el-hogar/',
      'get-started': 'https://vtcc.health/our-services/',
      insurance: 'https://vtcc.health/our-services/accepted-insurance-providers/',
      referrers: 'https://vtcc.health/recursos-para-familias-y-referentes/',
      resources: 'https://vtcc.health/recursos-para-familias-y-referentes/',
      forms: 'https://vtcc.health/recursos-para-familias-y-referentes/',
      resource: 'https://vtcc.health/recursos-para-familias-y-referentes/',
      about: 'https://vtcc.health/about-our-director/',
      contact: 'https://vtcc.health/contactenos/',
      'contact-referral': 'https://vtcc.health/contactenos/',
      career: 'https://vtcc.health/career/',
      blog: 'https://vtcc.health/blog/',
    },
  },
}

const outPath = join(rootDir, 'content', 'seo-from-vtcc-health.json')
writeFileSync(outPath, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Wrote ${outPath}`)
