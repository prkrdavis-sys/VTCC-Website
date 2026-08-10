import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { rootDir } from './lib.mjs'

const URLS = [
  'https://vtcc.health/',
  'https://vtcc.health/aba/',
  'https://vtcc.health/our-services/',
  'https://vtcc.health/our-services/accepted-insurance-providers/',
  'https://vtcc.health/resources/',
  'https://vtcc.health/contact/',
  'https://vtcc.health/about-our-director/',
  'https://vtcc.health/career/',
  'https://vtcc.health/blog/',
  'https://vtcc.health/inicio/',
  'https://vtcc.health/acerca-del-aba/',
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

const manualPages = {
  'https://vtcc.health/early-learners/': {
    title: 'Victoria Transcultural Clinical Center | Early Learners Program',
    description:
      'VTCC’s Early Learners program supports preschool-aged children as they build skills for school and social settings.',
    headLines: [
      '<title>Victoria Transcultural Clinical Center | Early Learners Program</title>',
      '<meta name="description" content="VTCC’s Early Learners program supports preschool-aged children as they build skills for school and social settings.">',
      '<link rel="canonical" href="https://vtcc.health/early-learners/">',
    ],
  },
  'https://vtcc.health/feeding-program/': {
    title: 'Victoria Transcultural Clinical Center | Feeding Program',
    description:
      'VTCC’s Feeding Program uses ABA practices to help children expand their food repertoire and preferences.',
    headLines: [
      '<title>Victoria Transcultural Clinical Center | Feeding Program</title>',
      '<meta name="description" content="VTCC’s Feeding Program uses ABA practices to help children expand their food repertoire and preferences.">',
      '<link rel="canonical" href="https://vtcc.health/feeding-program/">',
    ],
  },
  'https://vtcc.health/social-skills-group/': {
    title: 'Victoria Transcultural Clinical Center | Social Skills Group',
    description:
      'VTCC’s Social Skills Group helps clients practice advanced social skills, including sarcasm and age-appropriate peer play.',
    headLines: [
      '<title>Victoria Transcultural Clinical Center | Social Skills Group</title>',
      '<meta name="description" content="VTCC’s Social Skills Group helps clients practice advanced social skills, including sarcasm and age-appropriate peer play.">',
      '<link rel="canonical" href="https://vtcc.health/social-skills-group/">',
    ],
  },
  'https://vtcc.health/programa-primeros-aprendices/': {
    title: 'Victoria Transcultural Clinical Center | Programa de Primeros Aprendices',
    description:
      'El programa de Primeros Aprendices de VTCC apoya a niños en edad preescolar para prepararse para la escuela y los entornos sociales.',
    headLines: [
      '<title>Victoria Transcultural Clinical Center | Programa de Primeros Aprendices</title>',
      '<meta name="description" content="El programa de Primeros Aprendices de VTCC apoya a niños en edad preescolar para prepararse para la escuela y los entornos sociales.">',
      '<link rel="canonical" href="https://vtcc.health/programa-primeros-aprendices/">',
    ],
  },
  'https://vtcc.health/programa-alimentacion/': {
    title: 'Victoria Transcultural Clinical Center | Programa de Alimentación',
    description:
      'El Programa de Alimentación de VTCC utiliza prácticas ABA para ayudar a los niños a ampliar su repertorio y sus preferencias alimentarias.',
    headLines: [
      '<title>Victoria Transcultural Clinical Center | Programa de Alimentación</title>',
      '<meta name="description" content="El Programa de Alimentación de VTCC utiliza prácticas ABA para ayudar a los niños a ampliar su repertorio y sus preferencias alimentarias.">',
      '<link rel="canonical" href="https://vtcc.health/programa-alimentacion/">',
    ],
  },
  'https://vtcc.health/grupo-habilidades-sociales/': {
    title: 'Victoria Transcultural Clinical Center | Grupo de Habilidades Sociales',
    description:
      'El Grupo de Habilidades Sociales de VTCC ayuda a los clientes a practicar habilidades sociales avanzadas y juego apropiado para su edad con compañeros.',
    headLines: [
      '<title>Victoria Transcultural Clinical Center | Grupo de Habilidades Sociales</title>',
      '<meta name="description" content="El Grupo de Habilidades Sociales de VTCC ayuda a los clientes a practicar habilidades sociales avanzadas y juego apropiado para su edad con compañeros.">',
      '<link rel="canonical" href="https://vtcc.health/grupo-habilidades-sociales/">',
    ],
  },
}

const output = {
  scrapedAt: new Date().toISOString(),
  sourceSite: 'https://vtcc.health/',
  pages: { ...pages, ...manualPages },
  routeMap: {
    en: {
      home: 'https://vtcc.health/',
      aba: 'https://vtcc.health/aba/',
      'early-learners': 'https://vtcc.health/early-learners/',
      'feeding-program': 'https://vtcc.health/feeding-program/',
      'social-skills-group': 'https://vtcc.health/social-skills-group/',
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
      'early-learners': 'https://vtcc.health/programa-primeros-aprendices/',
      'feeding-program': 'https://vtcc.health/programa-alimentacion/',
      'social-skills-group': 'https://vtcc.health/grupo-habilidades-sociales/',
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
