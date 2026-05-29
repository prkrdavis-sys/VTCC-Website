import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
export const rootDir = join(scriptDir, '..')
export const contentPath = join(rootDir, 'content', 'site.json')

export function loadSiteContent() {
  const meta = JSON.parse(readFileSync(contentPath, 'utf8'))
  const locales = {
    en: JSON.parse(readFileSync(join(rootDir, 'content/locales/en.json'), 'utf8')),
    es: JSON.parse(readFileSync(join(rootDir, 'content/locales/es.json'), 'utf8')),
  }

  return { ...meta, locales }
}

export function getLocaleContent(site, locale = site.defaultLocale) {
  return site.locales[locale] ?? site.locales[site.defaultLocale]
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function renderButton(action) {
  const style = action.style ? ` ${action.style}` : ''
  return `<a class="button${style}" href="${escapeHtml(action.href)}">${escapeHtml(action.label)}</a>`
}

export function renderSelectField(field) {
  const options = field.options
    .map((option) => `<option>${escapeHtml(option)}</option>`)
    .join('\n              ')

  return `<label>
            ${escapeHtml(field.label)}
            <select name="${escapeHtml(field.name)}">
              ${options}
            </select>
          </label>`
}

export function renderFormField(field) {
  if (field.type === 'select') {
    return renderSelectField(field)
  }

  if (field.type === 'textarea') {
    return `<label>
            ${escapeHtml(field.label)}
            <textarea name="${escapeHtml(field.name)}" rows="${field.rows ?? 4}"></textarea>
          </label>`
  }

  const autocomplete = field.autocomplete
    ? ` autocomplete="${escapeHtml(field.autocomplete)}"`
    : ''

  return `<label>
            ${escapeHtml(field.label)}
            <input type="${escapeHtml(field.type)}" name="${escapeHtml(field.name)}"${autocomplete} />
          </label>`
}
