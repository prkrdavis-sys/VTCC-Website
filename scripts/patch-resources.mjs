import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

for (const locale of ['en', 'es']) {
  const localePath = join(rootDir, 'content/locales', `${locale}.json`)
  const resourcesPath = join(rootDir, 'content/locales', `resources-faq.${locale}.json`)
  const localeData = JSON.parse(readFileSync(localePath, 'utf8'))
  localeData.sections.resources = JSON.parse(readFileSync(resourcesPath, 'utf8'))
  writeFileSync(localePath, JSON.stringify(localeData, null, 2))
  console.log(`Updated ${locale}.json resources section`)
}
