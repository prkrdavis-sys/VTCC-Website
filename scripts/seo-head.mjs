import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { rootDir } from './lib.mjs'

let cache

export function loadSeoData() {
  if (!cache) {
    cache = JSON.parse(readFileSync(join(rootDir, 'content', 'seo-from-vtcc-health.json'), 'utf8'))
  }
  return cache
}

export function getSeoForPage(pageKey, locale = 'en') {
  const seo = loadSeoData()
  const url = seo.routeMap[locale]?.[pageKey] ?? seo.routeMap.en[pageKey]
  if (!url) return null
  return seo.pages[url] ?? null
}

function withSeoMarker(line) {
  if (/^<title/i.test(line)) {
    return line
  }
  return line.replace(/^<(\w+)/, '<$1 data-vtcc-seo=""')
}

export function renderSeoHeadHtml(pageKey, locale = 'en') {
  const entry = getSeoForPage(pageKey, locale)
  if (!entry?.headLines?.length) return ''
  return `${entry.headLines.map((line) => `    ${withSeoMarker(line)}`).join('\n')}\n`
}
