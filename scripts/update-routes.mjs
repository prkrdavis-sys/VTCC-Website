import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

const routeMap = {
  '#services': '/#services',
  '#aba': '/aba',
  '#iih': '/intensive-in-home',
  '#process': '/get-started',
  '#funding': '/insurance',
  '#referrers': '/referrers',
  '#resources': '/resources',
  '#about': '/about',
  '#contact': '/contact',
  '#top': '/',
}

function mapHref(href) {
  if (href.startsWith('tel:') || href.startsWith('http')) {
    return href
  }
  return routeMap[href] ?? href
}

function updateLocale(localePath, locale) {
  const data = JSON.parse(readFileSync(localePath, 'utf8'))

  data.navigation.main = data.navigation.main.map((item) => ({
    ...item,
    href: mapHref(item.href),
  }))

  data.navigation.utility = data.navigation.utility.map((item) => ({
    ...item,
    href: mapHref(item.href),
  }))

  data.hero.actions = data.hero.actions.map((action) => ({
    ...action,
    href: mapHref(action.href),
  }))

  data.sections.services.cards = data.sections.services.cards.map((card) => ({
    ...card,
    href: mapHref(card.href),
  }))

  data.sections.funding.ctaHref = '/contact'
  data.sections.referrers.paths = data.sections.referrers.paths.map((path) => ({
    ...path,
    buttonHref: '/contact',
  }))

  data.footer.links = data.footer.links.map((item) => ({
    ...item,
    href: mapHref(item.href),
  }))

  const isSpanish = locale === 'es'
  data.home = {
    processTeaser: {
      linkLabel: isSpanish ? 'Ver la ruta completa de admisión' : 'See the full intake path',
      linkHref: '/get-started',
    },
    resourcesTeaser: {
      title: isSpanish ? 'Guías y preguntas frecuentes' : 'Helpful guides and FAQs',
      intro: isSpanish
        ? 'Explore temas comunes sobre admisión, financiamiento, terapia ABA, servicios en el hogar y referencias.'
        : 'Explore common topics about intake, funding, ABA therapy, in-home services, and referrals.',
      linkLabel: isSpanish ? 'Ver preguntas y guías' : 'Browse FAQs & guides',
      linkHref: '/resources',
    },
  }

  writeFileSync(localePath, JSON.stringify(data, null, 2))
  console.log(`Updated routes in ${localePath}`)
}

for (const locale of ['en', 'es']) {
  updateLocale(join(rootDir, 'content/locales', `${locale}.json`), locale)
}
