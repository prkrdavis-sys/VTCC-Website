const STORAGE_KEY = window.VTCC_SITE?.localeStorageKey ?? 'vtcc-locale'
const CAREER_ROLE_STORAGE_KEY = 'vtcc-career-role'
const QUIZ_PREFILL_STORAGE_KEY = 'vtcc-quiz-prefill'
const INK_HANDOFF_KEY = 'vtcc-form-ink'
const INTAKE_RECEIPT_KEY = 'vtcc-intake-receipt'
const INK_MAX_AGE_MS = 10000
const PAGE = window.VTCC_PAGE ?? 'home'
const BASE = window.VTCC_BASE ?? ''
const RESOURCE_SLUG = window.VTCC_RESOURCE_SLUG
const CAREERS_TAB_IDS = ['behavior-technician', 'bcba', 'other']
const CAREER_DISCLOSURE_IDS = ['rbt-pathway', 'team-structure', 'programs', 'clinic', 'hiring-process']

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function getLocale() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && window.VTCC_SITE.locales[stored]) {
    return stored
  }
  return window.VTCC_SITE.defaultLocale
}

function getContent() {
  return window.VTCC_SITE.locales[getLocale()]
}

function toStaticHref(path) {
  if (path.startsWith('tel:') || path.startsWith('http')) {
    return path
  }

  const routes = {
    '/': `${BASE}index.html`,
    '/aba': `${BASE}aba.html`,
    '/early-learners': `${BASE}early-learners.html`,
    '/feeding-program': `${BASE}feeding-program.html`,
    '/social-enrichment': `${BASE}social-enrichment.html`,
    '/social-skills-group': `${BASE}social-skills-group.html`,
    '/group-parent-training': `${BASE}group-parent-training.html`,
    '/get-started': `${BASE}get-started.html`,
    '/insurance': `${BASE}insurance.html`,
    '/resources': `${BASE}resources/index.html`,
    '/about': `${BASE}about.html`,
    '/career': `${BASE}career.html`,
    '/careers': `${BASE}career.html`,
    '/career/apply': `${BASE}career/apply.html`,
    '/contact': `${BASE}contact.html`,
    '/contact/request': `${BASE}contact/request.html`,
    '/contact/referral': `${BASE}contact/referral.html`,
    '/thank-you': `${BASE}thank-you.html`,
    '/privacy': `${BASE}privacy.html`,
    '/terms': `${BASE}terms.html`,
    '/accessibility': `${BASE}accessibility.html`,
    '/nondiscrimination': `${BASE}nondiscrimination.html`,
    '/notice-of-privacy-practices': `${BASE}notice-of-privacy-practices.html`,
  }

  if (path.startsWith('/#')) {
    return `${BASE}index.html${path.slice(1)}`
  }

  if (path.startsWith('/resources/')) {
    return `${BASE}resources/${path.replace('/resources/', '')}.html`
  }

  return routes[path] ?? path
}

function assetSrc(path) {
  return `${BASE}${String(path ?? '').replace(/^\//, '')}`
}

function getServicePrograms(content) {
  return content.sections.services.cards ?? []
}

function getProgramById(content, id) {
  return getServicePrograms(content).find((program) => program.id === id)
}

function pageHasProgramPanel(programId) {
  if (PAGE === 'home') {
    return true
  }

  if (PAGE === 'aba') {
    return programId === 'aba'
  }

  if (PAGE === 'early-learners') {
    return programId === 'early-learners'
  }

  if (PAGE === 'feeding-program') {
    return programId === 'feeding'
  }

  if (PAGE === 'social-enrichment') {
    return programId === 'social-enrichment'
  }

  if (PAGE === 'social-skills-group') {
    return programId === 'social-skills'
  }

  if (PAGE === 'group-parent-training') {
    return programId === 'group-parent-training'
  }

  return false
}

const PROGRAM_RESOURCE_SLUGS = {
  aba: 'what-is-aba-therapy',
  'early-learners': 'early-learners',
  feeding: 'feeding-program',
  'social-enrichment': 'social-enrichment',
  'social-skills': 'social-skills-group',
  'group-parent-training': 'parent-training-faqs',
}

function programFaqHref(programId) {
  const slug = PROGRAM_RESOURCE_SLUGS[programId]
  return slug ? `/resources/${slug}` : ''
}

function programIdForResource(slug) {
  const match = Object.entries(PROGRAM_RESOURCE_SLUGS).find(([, resourceSlug]) => resourceSlug === slug)
  return match?.[0] ?? ''
}

function renderProgramFaqCta(program, content) {
  const href = programFaqHref(program.id)
  if (!href) {
    return `<a class="button page-link-cta" href="${escapeHtml(toStaticHref(program.href))}">${escapeHtml(program.linkLabel)}</a>`
  }

  const label = (content.ui.programFaqLinkLabel ?? 'View {program} FAQs').replaceAll(
    '{program}',
    program.label,
  )

  return `<a class="button page-link-cta" href="${escapeHtml(toStaticHref(href))}">${escapeHtml(label)}</a>`
}

function renderFaqServiceLink(content) {
  const program = getProgramById(content, programIdForResource(RESOURCE_SLUG))
  if (!program?.href) {
    return ''
  }

  return `<div class="faq-program-link">
            <p>${escapeHtml(content.ui.faqProgramLinkNote)}</p>
            <a class="button page-link-cta" href="${escapeHtml(toStaticHref(program.href))}">${escapeHtml(program.linkLabel)}</a>
          </div>`
}

function relatedProgramHref(program) {
  if (pageHasProgramPanel(program.id)) {
    return `#program-${program.id}`
  }

  return toStaticHref(`/#program-${program.id}`)
}

function renderButton(action) {
  const style = action.style ? ` ${action.style}` : ''
  return `<a class="button button--arrow${style}" href="${escapeHtml(toStaticHref(action.href))}">${escapeHtml(action.label)}</a>`
}

function renderNavLink(item) {
  const isActive = linkMatchesCurrentPage(item.href)
  return `<a href="${escapeHtml(toStaticHref(item.href))}"${isActive ? ' class="is-active" aria-current="page"' : ''}>${escapeHtml(item.label)}</a>`
}

function headerGroupIsCurrent(group) {
  if (group.href && linkBelongsToCurrentSection(group.href)) {
    return true
  }

  return (group.links ?? []).some((link) => linkBelongsToCurrentSection(link.href))
}

function renderNavMenu(group, className = 'nav-menu') {
  if (group.href) {
    const onThisPage = linkMatchesCurrentPage(group.href)
    const isActive = headerGroupIsCurrent(group)
    return `<a class="nav-menu-link${isActive ? ' is-active' : ''}" href="${escapeHtml(toStaticHref(group.href))}"${onThisPage ? ' aria-current="page"' : ''}>${escapeHtml(group.label)}</a>`
  }

  const isActive = headerGroupIsCurrent(group)
  const links = group.links.map(renderNavLink).join('\n            ')
  return `<details class="${className}${isActive ? ' is-active' : ''}">
          <summary><span class="nav-menu-label">${escapeHtml(group.label)}</span></summary>
          <div class="${className}-panel">
            ${links}
          </div>
        </details>`
}

function renderHeaderAction(item) {
  if (item.links) {
    return renderNavMenu(item, 'utility-menu')
  }

  const style = item.style ? ` ${item.style}` : ''
  return `<a class="header-action${style}" href="${escapeHtml(toStaticHref(item.href))}">${escapeHtml(item.label)}</a>`
}

function expandServicesNavGroup(group, content) {
  if (group.href !== '/#services') {
    return group
  }

  return {
    label: group.label,
    links: getServicePrograms(content).map((program) => ({
      label: program.label,
      href: program.href,
    })),
  }
}

function getHeaderGroups(content) {
  const groups = content.navigation.headerGroups ?? [
    {
      label: content.navigation.main[0].label,
      links: content.navigation.main,
    },
  ]

  return groups.map((group) => expandServicesNavGroup(group, content))
}

function getServiceHrefs(content) {
  return new Set(getServicePrograms(content).map((program) => program.href))
}

function isServicesHeaderGroup(group, content) {
  const serviceHrefs = getServiceHrefs(content)
  const links = group.links ?? []
  return links.length > 0 && links.every((link) => serviceHrefs.has(link.href))
}

const PAGE_SECTION_PATHS = {
  home: '/',
  aba: '/aba',
  'early-learners': '/early-learners',
  'feeding-program': '/feeding-program',
  'social-enrichment': '/social-enrichment',
  'social-skills-group': '/social-skills-group',
  'group-parent-training': '/group-parent-training',
  'get-started': '/get-started',
  insurance: '/insurance',
  resources: '/resources',
  resource: '/resources',
  forms: '/resources/forms',
  about: '/about',
  career: '/career',
  careers: '/career',
  'career-apply': '/career/apply',
  contact: '/contact',
  'contact-request': '/contact/request',
  'contact-referral': '/contact/referral',
  'thank-you': '/thank-you',
  privacy: '/privacy',
  terms: '/terms',
  accessibility: '/accessibility',
  nondiscrimination: '/nondiscrimination',
  'notice-of-privacy-practices': '/notice-of-privacy-practices',
}

const LEGAL_PAGE_KEYS = {
  privacy: 'privacy',
  terms: 'terms',
  accessibility: 'accessibility',
  nondiscrimination: 'nondiscrimination',
  'notice-of-privacy-practices': 'npp',
}

function getCurrentSectionPath() {
  return PAGE_SECTION_PATHS[PAGE] ?? null
}

function getCurrentPagePath() {
  if (PAGE === 'resource' && RESOURCE_SLUG) {
    return `/resources/${RESOURCE_SLUG}`
  }

  return getCurrentSectionPath()
}

function linkMatchesCurrentPage(linkHref) {
  const currentPath = getCurrentPagePath()
  if (currentPath && linkHref === currentPath) {
    return true
  }

  if (linkHref === '/#services' && PAGE === 'home') {
    return true
  }

  if (linkHref === '/contact' && (PAGE === 'contact' || PAGE === 'contact-request')) {
    return true
  }

  if (linkHref === '/career' && (PAGE === 'career' || PAGE === 'careers' || PAGE === 'career-apply')) {
    return true
  }

  if (linkHref === '/resources' && PAGE === 'resources') {
    return true
  }

  return false
}

function linkBelongsToCurrentSection(linkHref) {
  if (linkMatchesCurrentPage(linkHref)) {
    return true
  }

  return linkHref === '/resources' && PAGE === 'resource'
}

function getActiveHeaderGroup(content) {
  return getHeaderGroups(content).find(
    (group) => (group.links?.length ?? 0) > 1 && headerGroupIsCurrent(group),
  )
}

function renderSectionSubnav(content) {
  const group = getActiveHeaderGroup(content)
  if (!group) {
    return ''
  }

  const isServices = isServicesHeaderGroup(group, content)
  const isGuides = group.href === '/resources'
  const navClass = isServices ? 'service-subnav' : 'guides-subnav'
  const ariaLabel = isServices
    ? (content.ui.servicesNavLabel ?? group.label)
    : isGuides
      ? (content.ui.guidesNavLabel ?? group.label)
      : group.label

  const links = group.links
    .filter((link) => link.href !== group.href)
    .map((link) => {
      const isActive = linkMatchesCurrentPage(link.href)
      return `<a class="${navClass}-link${isActive ? ' is-active' : ''}" href="${escapeHtml(toStaticHref(link.href))}"${isActive ? ' aria-current="page"' : ''}>${escapeHtml(link.label)}</a>`
    })
    .join('\n          ')

  return `<div class="${navClass}-band">
      <nav class="${navClass}" aria-label="${escapeHtml(ariaLabel)}">
        <div class="${navClass}-bar">${links}</div>
      </nav>
    </div>`
}

function getHeaderActions(content) {
  return content.navigation.headerActions ?? content.navigation.utility
}

function renderInputExtras(field) {
  const extras = []

  if (field.autocomplete) {
    extras.push(` autocomplete="${escapeHtml(field.autocomplete)}"`)
  }
  if (field.min != null) {
    extras.push(` min="${escapeHtml(field.min)}"`)
  }
  if (field.max != null) {
    extras.push(` max="${escapeHtml(field.max)}"`)
  }
  if (field.step != null) {
    extras.push(` step="${escapeHtml(field.step)}"`)
  }
  if (field.inputmode) {
    extras.push(` inputmode="${escapeHtml(field.inputmode)}"`)
  }
  if (field.placeholder) {
    extras.push(` placeholder="${escapeHtml(field.placeholder)}"`)
  }

  return extras.join('')
}

function renderFormField(field, content) {
  const required = field.name === 'name' ? ' required' : ''

  if (field.type === 'multiselect') {
    return renderMultiSelectField(field, content)
  }

  if (field.type === 'select') {
    const options = field.options
      .map((option) => `<option>${escapeHtml(option)}</option>`)
      .join('\n              ')
    return `<label>
            ${escapeHtml(field.label)}
            <select name="${escapeHtml(field.name)}"${required}>
              ${options}
            </select>
          </label>`
  }

  if (field.type === 'textarea') {
    return `<label>
            ${escapeHtml(field.label)}
            <textarea name="${escapeHtml(field.name)}" rows="${field.rows ?? 4}"${required}></textarea>
          </label>`
  }

  return `<label>
            ${escapeHtml(field.label)}
            <input type="${escapeHtml(field.type)}" name="${escapeHtml(field.name)}"${renderInputExtras(field)}${required} />
          </label>`
}

function renderMultiSelectOption(fieldName, option, solo) {
  const soloAttr = solo ? ' data-solo="true"' : ''
  return `<button type="button" class="multi-select-option" role="option" aria-selected="false" data-value="${escapeHtml(option)}"${soloAttr}>
              <span class="multi-select-mark" aria-hidden="true"></span>
              <span>${escapeHtml(option)}</span>
            </button>
            <input class="multi-select-input" type="checkbox" name="${escapeHtml(fieldName)}" value="${escapeHtml(option)}" tabindex="-1" />`
}

function renderMultiSelectOptions(field) {
  if (Array.isArray(field.groups) && field.groups.length > 0) {
    return field.groups
      .map((group, index) => {
        const solo = new Set(group.solo ?? [])
        const options = (group.options ?? [])
          .map((option) => renderMultiSelectOption(field.name, option, solo.has(option)))
          .join('\n              ')
        return `<div class="multi-select-group" data-multi-group role="group" aria-label="${escapeHtml(group.label)}">
              <p class="multi-select-group-label" id="multi-${escapeHtml(field.name)}-group-${index}">${escapeHtml(group.label)}</p>
              ${options}
            </div>`
      })
      .join('\n            ')
  }

  const solo = new Set(field.solo ?? [])
  return (field.options ?? [])
    .map((option) => renderMultiSelectOption(field.name, option, solo.has(option)))
    .join('\n            ')
}

function renderMultiSelectField(field, content) {
  const quiz = content.contactQuiz ?? {}
  const placeholder = quiz.multiSelectPlaceholder ?? 'Select all that apply'
  const selectedTemplate = quiz.multiSelectSelected ?? '{count} selected'
  const labelId = `multi-${field.name}-label`

  return `<div class="multi-select" data-multi-select data-name="${escapeHtml(field.name)}" data-placeholder="${escapeHtml(placeholder)}" data-selected-template="${escapeHtml(selectedTemplate)}">
          <span class="multi-select-heading" id="${escapeHtml(labelId)}">${escapeHtml(field.label)}</span>
          <button type="button" class="multi-select-trigger" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="${escapeHtml(labelId)}">
            <span data-multi-summary>${escapeHtml(placeholder)}</span>
          </button>
          <div class="multi-select-panel" role="listbox" aria-multiselectable="true" aria-labelledby="${escapeHtml(labelId)}" hidden>
            ${renderMultiSelectOptions(field)}
          </div>
        </div>`
}

function renderLanguageSelect(content, { hiddenLabel = false, compact = false } = {}) {
  const locale = getLocale()
  const options = Object.entries(window.VTCC_SITE.localeLabels)
    .map(
      ([code, label]) =>
        `<option value="${escapeHtml(code)}"${code === locale ? ' selected' : ''}>${escapeHtml(label)}</option>`,
    )
    .join('\n            ')

  const labelText = escapeHtml(content.ui.languageLabel)
  const label =
    hiddenLabel || compact
      ? `<span class="visually-hidden">${labelText}</span>`
      : `<span class="language-select-label">${labelText}</span>`
  const icon = `<svg class="language-select-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.7 3.7 5.8 3.7 9s-1.3 6.3-3.7 9"/><path d="M12 3C9.6 5.7 8.3 8.8 8.3 12s1.3 6.3 3.7 9"/></svg>`
  const className = compact ? 'language-select language-select--compact' : 'language-select'

  return `<label class="${className}">
          ${label}
          ${icon}
          <select data-language-select aria-label="${labelText}">
            ${options}
          </select>
        </label>`
}

function renderMobileMenuChevron() {
  return `<svg class="site-menu-chevron" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7.5 10 12.5 15 7.5"/></svg>`
}

function renderMobileMenuLink(item, { nested = false } = {}) {
  const isActive = linkMatchesCurrentPage(item.href)
  const nestedClass = nested ? ' site-menu-link--nested' : ''
  const activeClass = isActive ? ' is-active' : ''
  return `<a class="site-menu-link${nestedClass}${activeClass}" href="${escapeHtml(toStaticHref(item.href))}"${isActive ? ' aria-current="page"' : ''}>${escapeHtml(item.label)}</a>`
}

function renderMobileMenuGroup(group, index) {
  const childLinks = (group.links ?? []).filter((item) => item.href !== group.href)
  if (group.href && childLinks.length === 0) {
    return renderMobileMenuLink(group)
  }

  if (!group.href && childLinks.length <= 2) {
    return childLinks.map((item) => renderMobileMenuLink(item)).join('\n          ')
  }

  const isOpen = headerGroupIsCurrent(group)
  const panelId = `site-menu-panel-${index}`
  const links = childLinks.map((item) => renderMobileMenuLink(item, { nested: true })).join('\n              ')
  const expanded = isOpen ? 'true' : 'false'
  const hidden = isOpen ? '' : ' hidden'
  const openClass = isOpen ? ' is-open' : ''

  if (group.href) {
    const parentActive = linkMatchesCurrentPage(group.href)
    const parentActiveClass = parentActive ? ' is-active' : ''
    return `<div class="site-menu-group${openClass}">
            <div class="site-menu-row">
              <a class="site-menu-link${parentActiveClass}" href="${escapeHtml(toStaticHref(group.href))}"${parentActive ? ' aria-current="page"' : ''}>${escapeHtml(group.label)}</a>
              <button type="button" class="site-menu-expand" aria-expanded="${expanded}" aria-controls="${panelId}" aria-label="${escapeHtml(group.label)}">
                ${renderMobileMenuChevron()}
              </button>
            </div>
            <div class="site-menu-panel" id="${panelId}"${hidden}>
              ${links}
            </div>
          </div>`
  }

  return `<div class="site-menu-group${openClass}">
            <button type="button" class="site-menu-link site-menu-expand-row" aria-expanded="${expanded}" aria-controls="${panelId}">
              <span>${escapeHtml(group.label)}</span>
              ${renderMobileMenuChevron()}
            </button>
            <div class="site-menu-panel" id="${panelId}"${hidden}>
              ${links}
            </div>
          </div>`
}

function renderMobileMenu(content) {
  const navLinks = getHeaderGroups(content)
    .map((group, index) => renderMobileMenuGroup(group, index))
    .join('\n          ')

  const utilityLinks = getHeaderActions(content)
    .map((item) => {
      if (item.links) {
        return item.links
          .map(
            (link) =>
              `<a class="site-menu-link site-menu-link--utility" href="${escapeHtml(toStaticHref(link.href))}">${escapeHtml(link.label)}</a>`,
          )
          .join('\n            ')
      }

      const style = item.style ? ` site-menu-link--${item.style}` : ''
      return `<a class="site-menu-link site-menu-link--action${style}" href="${escapeHtml(toStaticHref(item.href))}">${escapeHtml(item.label)}</a>`
    })
    .join('\n          ')

  return `<div class="site-menu-backdrop" data-site-menu-backdrop hidden></div>
    <aside id="site-menu-drawer" class="site-menu-drawer" aria-hidden="true" aria-label="${escapeHtml(content.ui.menuLabel)}">
      <div class="site-menu-drawer-head">
        <p class="site-menu-drawer-title">${escapeHtml(content.ui.menuLabel)}</p>
        <button type="button" class="menu-close" aria-label="${escapeHtml(content.ui.closeMenu)}">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="site-menu-drawer-body">
        ${renderLanguageSelect(content)}
        <nav class="site-menu-nav" aria-label="${escapeHtml(content.ui.menuLabel)}">
          ${navLinks}
        </nav>
      </div>
      <div class="site-menu-actions">
        ${utilityLinks}
      </div>
    </aside>`
}

function renderSectionHeading(eyebrow, title, intro = '') {
  return `<div class="section-heading">
          ${eyebrow ? `<p class="eyebrow">${escapeHtml(eyebrow)}</p>` : ''}
          <h2>${escapeHtml(title)}</h2>
          ${intro ? `<p>${escapeHtml(intro)}</p>` : ''}
        </div>`
}

function renderServicesBanner(eyebrow, title, intro = '') {
  return `<header class="services-banner band band--deep">
          <div class="services-banner-name">
            <p class="services-banner-mark">${escapeHtml(eyebrow)}</p>
          </div>
          <div class="services-banner-copy">
            <h2>${escapeHtml(title)}</h2>
            ${intro ? `<p>${escapeHtml(intro)}</p>` : ''}
          </div>
        </header>`
}

function renderQuoteBoard(quotes, extraClass = '') {
  const items = quotes?.items ?? []
  if (!items.length) {
    return ''
  }

  const bubbles = items
    .map((item, index) => {
      const style = item.style === 'speech' ? 'speech' : 'thought'
      const align = index === items.length - 1 ? 'quote-bubble--end' : 'quote-bubble--start'
      const decor =
        style === 'thought'
          ? `<img class="quote-shape-cap" src="${escapeHtml(`${BASE}assets/quotes/thought-cap.svg`)}" alt="" />
              <img class="quote-shape-dots" src="${escapeHtml(`${BASE}assets/quotes/thought-dots.svg`)}" alt="" />`
          : `<img class="quote-shape-tail" src="${escapeHtml(`${BASE}assets/quotes/speech-tail.svg`)}" alt="" />`

      return `<figure class="quote-bubble quote-bubble--${style} ${align}">
          <div class="quote-bubble-shell">
            <div class="quote-bubble-art" aria-hidden="true">
              <div class="quote-shape-box"></div>
              ${decor}
            </div>
            <blockquote class="quote-bubble-copy">
              <p>${escapeHtml(item.quote)}</p>
            </blockquote>
          </div>
          <figcaption>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.role)}</span>
          </figcaption>
        </figure>`
    })
    .join('\n          ')

  return `<section class="section quote-board band band--tint ${extraClass}">
        ${renderSectionHeading(quotes.eyebrow, quotes.title, quotes.intro)}
        <div class="quote-board-frame">
          <div class="quote-board-grid">${bubbles}</div>
        </div>
      </section>`
}

function renderHeroHeading(hero) {
  if (!hero.headlineLead) {
    return `<h1>${escapeHtml(hero.headline)}</h1>`
  }

  return `<h1 class="hero-heading">
          <span class="hero-headline-main">${escapeHtml(hero.headline)}</span>
          <span class="hero-headline-lead">${escapeHtml(hero.headlineLead)}</span>
        </h1>`
}

function renderHeroServiceTags(tags) {
  if (!tags?.length) {
    return ''
  }

  return `<ul class="hero-service-tags" aria-label="Services">
          ${tags
            .map((tag) => {
              const label = typeof tag === 'string' ? tag : tag.label
              const href = typeof tag === 'string' ? '' : tag.href
              if (!href) {
                return `<li>${escapeHtml(label)}</li>`
              }

              return `<li><a href="${escapeHtml(toStaticHref(href))}">${escapeHtml(label)}</a></li>`
            })
            .join('\n          ')}
        </ul>`
}

function renderHeroText(hero) {
  if (hero.subheadlineLead) {
    return `<div class="hero-text-block">
          <p class="hero-text-lead">${escapeHtml(hero.subheadlineLead)}</p>
          <p class="hero-text">${escapeHtml(hero.subheadline)}</p>
        </div>`
  }

  return `<p class="hero-text">${escapeHtml(hero.subheadline)}</p>`
}

function renderTopBar(content) {
  const bar = content.topBar
  if (!bar) {
    return ''
  }

  const phoneIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>`
  const emailIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`
  const pinIcon = `<svg class="top-bar-pin" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/></svg>`
  const addressShort = bar.addressShort || bar.address
  const emailLabel = content.ui.emailLabel || bar.email

  return `<div class="top-bar">
      <a class="top-bar-address" href="${escapeHtml(bar.addressHref)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(bar.address)}">
        ${pinIcon}
        <span class="top-bar-address-full">${escapeHtml(bar.address)}</span>
        <span class="top-bar-address-short">${escapeHtml(addressShort)}</span>
      </a>
      <span class="top-bar-contacts">
        <a href="${escapeHtml(bar.phoneHref)}">${phoneIcon}<span>${escapeHtml(bar.phone)}</span></a>
        <a class="top-bar-email" href="${escapeHtml(bar.emailHref)}" aria-label="${escapeHtml(bar.email)}">${emailIcon}<span class="top-bar-email-full">${escapeHtml(bar.email)}</span><span class="top-bar-email-short">${escapeHtml(emailLabel)}</span></a>
      </span>
    </div>`
}

function renderShell(content, mainHtml) {
  const phone = content.topBar?.phone ?? ''
  const phoneHref = content.topBar?.phoneHref ?? '#'

  return `
    ${renderTopBar(content)}
    <header class="site-header">
      <div class="site-header-inner">
      <a class="brand" href="${escapeHtml(toStaticHref('/'))}" aria-label="${escapeHtml(content.company.shortName)} home">
        <img class="brand-mark" src="${escapeHtml(BASE)}assets/vtcc-logo.png" alt="" />
        <span>
          <strong>${escapeHtml(content.company.name)}</strong>
          <small>${escapeHtml(content.company.tagline)}</small>
        </span>
      </a>
      <a class="header-phone" href="${escapeHtml(phoneHref)}">${escapeHtml(content.ui.callLabel)}</a>
      <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="site-menu-drawer">
        <span class="menu-toggle-bars" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="visually-hidden">${escapeHtml(content.ui.openMenu)}</span>
      </button>
      <div class="header-controls">
        ${renderLanguageSelect(content, { compact: true })}
        <nav class="utility-nav" aria-label="Utility actions">
          ${getHeaderActions(content).map(renderHeaderAction).join('\n          ')}
        </nav>
      </div>
      <nav class="site-nav" aria-label="Main navigation">
        <div class="site-nav-bar">
          ${getHeaderGroups(content).map((group) => renderNavMenu(group)).join('\n          ')}
        </div>
      </nav>
      </div>
      ${renderSectionSubnav(content)}
    </header>
    ${renderMobileMenu(content)}
    <main id="top">${mainHtml}</main>
    <footer class="site-footer">
      <div class="site-footer-copy">
        <p class="site-footer-emergency">${escapeHtml(content.footer.emergency)}</p>
        <p>${escapeHtml(content.footer.text.replace('{year}', String(new Date().getFullYear())))}</p>
      </div>
      <div class="site-footer-navs">
        <nav aria-label="Footer navigation">
          ${content.footer.links.map(renderNavLink).join('\n          ')}
        </nav>
        <nav class="site-footer-legal" aria-label="${escapeHtml(content.footer.legalNavLabel)}">
          ${content.footer.legalLinks.map(renderNavLink).join('\n          ')}
        </nav>
      </div>
    </footer>
  `
}

const INLINE_LINK_PATTERN = /\[([^\]]+)\]\(((?:https:\/\/|mailto:|tel:|\/)[^)\s]*)\)/g

function renderInlineText(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(INLINE_LINK_PATTERN, (_, label, href) => {
      const target = href.startsWith('https://') ? ' target="_blank" rel="noopener"' : ''
      return `<a href="${toStaticHref(href)}"${target}>${label}</a>`
    })
}

function renderPrivacyPolicyLink(content) {
  return `<a href="${escapeHtml(toStaticHref('/privacy'))}" target="_blank" rel="noopener">${escapeHtml(content.legal.privacyLinkLabel)}</a>`
}

function renderServiceDisclaimer(content) {
  return `<p class="service-disclaimer">${escapeHtml(content.legal.serviceDisclaimer)}</p>`
}

function renderLegalParagraphs(paragraphs) {
  return (paragraphs ?? []).map((paragraph) => `<p>${renderInlineText(paragraph)}</p>`).join('')
}

function renderLegalSection(section) {
  const items = section.items?.length
    ? `<ul>${section.items.map((item) => `<li>${renderInlineText(item)}</li>`).join('')}</ul>`
    : ''

  return `<section class="legal-section">
            <h2>${escapeHtml(section.heading)}</h2>
            ${renderLegalParagraphs(section.paragraphs)}${items}${renderLegalParagraphs(section.after)}
          </section>`
}

function renderLegalPage(content, pageKey) {
  const legal = content.legal
  const page = legal.pages[pageKey]
  const documentFile = pageKey === 'npp' ? window.VTCC_SITE?.legal?.noticeOfPrivacyPracticesPdf : ''
  const documentLink = documentFile
    ? `<p class="legal-document-link"><a class="button" href="${escapeHtml(assetSrc(documentFile))}" target="_blank" rel="noopener">${escapeHtml(page.documentLinkLabel)}</a></p>`
    : ''
  const bodyLang = getLocale() === 'en' ? '' : ' lang="en"'

  return `<section class="section legal-page page-section">
        <article class="legal-article">
          <header class="legal-header">
            <h1>${escapeHtml(page.title)}</h1>
            ${page.updated ? `<p class="legal-updated">${escapeHtml(legal.updatedLabel)}: ${escapeHtml(page.updated)}</p>` : ''}
          </header>
          ${legal.translationNotice ? `<p class="legal-translation-notice">${escapeHtml(legal.translationNotice)}</p>` : ''}
          <div class="legal-body"${bodyLang}>
            ${renderLegalParagraphs(page.intro)}
            ${documentLink}
            ${page.sections.map(renderLegalSection).join('\n            ')}
          </div>
        </article>
      </section>`
}

function renderTextWithPhone(text, content) {
  const parts = String(text).split('{phone}')
  if (parts.length === 1) {
    return escapeHtml(text)
  }

  return `${escapeHtml(parts[0])}<a href="${escapeHtml(content.topBar.phoneHref)}">${escapeHtml(content.topBar.phone)}</a>${escapeHtml(parts[1])}`
}

function getDownloadMeta(id) {
  return window.VTCC_SITE?.shared?.downloads?.[id] ?? null
}

function renderFormDownloadCard(item, content) {
  const download = getDownloadMeta(item.id)
  if (!download) {
    return ''
  }

  const href = `${BASE}${download.file.replace(/^\//, '')}`
  const fileType = String(download.type ?? 'file').toUpperCase()

  return `<a class="form-download-card" href="${escapeHtml(href)}" download target="_blank" rel="noopener">
            <span class="form-download-main">
              <span class="form-download-type">${escapeHtml(fileType)}</span>
              <span class="form-download-copy">
                <strong>${escapeHtml(item.title)}</strong>
                ${item.note ? `<span class="form-download-note">${escapeHtml(item.note)}</span>` : ''}
              </span>
            </span>
            <span class="form-download-action">${escapeHtml(content.ui.downloadLabel)}</span>
          </a>`
}

function renderFormsPromo(promo, { variant = 'default' } = {}) {
  const className =
    variant === 'secondary' ? 'forms-promo-card forms-promo-card--secondary' : 'forms-promo-card'
  return `<a class="${className}" href="${escapeHtml(toStaticHref(promo.linkHref))}">
          <span class="resource-card-kicker">${escapeHtml(promo.label)}</span>
          <strong>${escapeHtml(promo.title)}</strong>
          <span>${escapeHtml(promo.summary)}</span>
          <span class="forms-promo-action">${escapeHtml(promo.linkLabel)} <span aria-hidden="true">→</span></span>
        </a>`
}

function renderFormsPage(content) {
  const forms = content.sections.forms
  const steps = (forms.steps ?? [])
    .map(
      (step, index) =>
        `<li><span class="forms-step-number">${index + 1}</span><span>${escapeHtml(step)}</span></li>`,
    )
    .join('\n            ')

  const categories = forms.categories
    .map(
      (category) => `<section class="form-download-group">
          <h2>${escapeHtml(category.title)}</h2>
          <div class="form-download-list">
            ${category.items.map((item) => renderFormDownloadCard(item, content)).join('\n            ')}
          </div>
        </section>`,
    )
    .join('\n        ')

  return `<section class="section forms-section page-section">
        <div class="forms-shell">
          ${renderSectionHeading('', forms.title, forms.intro)}
          ${
            steps
              ? `<ol class="forms-steps" aria-label="${escapeHtml(forms.title)}">${steps}</ol>`
              : ''
          }
          <p class="forms-assistance">${renderTextWithPhone(forms.assistanceText, content)}</p>
          <p class="forms-privacy-notice">${renderTextWithPhone(forms.privacyNotice, content)}</p>
          <div class="forms-layout">${categories}</div>
          <aside class="forms-insurance-note">
            <p><strong>${escapeHtml(forms.insuranceTitle)}.</strong> ${escapeHtml(forms.insuranceBody)} <a href="${escapeHtml(toStaticHref(forms.insuranceLinkHref))}">${escapeHtml(forms.insuranceLinkLabel)}</a></p>
          </aside>
        </div>
      </section>`
}

function renderFaqSearch(content, { compact = false } = {}) {
  const className = compact ? 'faq-search faq-search--compact' : 'faq-search'
  const searchIcon = `<svg class="faq-search-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="m16.5 16.5 4.5 4.5"/></svg>`
  return `<div class="${className}">
          <label class="faq-search-field">
            ${searchIcon}
            <span class="visually-hidden">${escapeHtml(content.ui.faqSearchLabel)}</span>
            <input
              type="search"
              data-faq-search
              placeholder="${escapeHtml(content.ui.faqSearchPlaceholder)}"
              autocomplete="off"
              enterkeyhint="search"
            />
          </label>
          <p class="faq-search-status" data-faq-search-status hidden aria-live="polite"></p>
        </div>`
}

function normalizeFaqSearch(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function faqSearchMatches(query, ...parts) {
  if (!query) {
    return true
  }

  return parts.some((part) => normalizeFaqSearch(part).includes(query))
}

function renderFaqSearchHit(category, faq, content) {
  return `<a class="faq-search-hit" href="${escapeHtml(toStaticHref(`/resources/${category.slug}`))}">
            <span class="faq-search-hit-topic">${escapeHtml(content.ui.faqSearchInTopic.replace('{topic}', category.title))}</span>
            <strong>${escapeHtml(faq.question)}</strong>
            <span>${escapeHtml(faq.answer)}</span>
          </a>`
}

function bindFaqSearch(content) {
  const searchInput = document.querySelector('[data-faq-search]')
  if (!searchInput) {
    return
  }

  const status = document.querySelector('[data-faq-search-status]')
  const resourceCards = Array.from(document.querySelectorAll('.resource-list .resource-card'))
  const resultsRoot = document.querySelector('[data-faq-search-results]')
  const faqItems = Array.from(document.querySelectorAll('[data-faq-list] .faq-item'))
  const categories = content.sections.resources.categories ?? []

  const setStatus = (message) => {
    if (!status) {
      return
    }

    if (message) {
      status.hidden = false
      status.textContent = message
    } else {
      status.hidden = true
      status.textContent = ''
    }
  }

  const applySearch = () => {
    const query = normalizeFaqSearch(searchInput.value)

    if (PAGE === 'resource' && faqItems.length) {
      let visibleCount = 0

      faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question')?.textContent ?? ''
        const answer = item.querySelector('p')?.textContent ?? ''
        const matches = faqSearchMatches(query, question, answer)
        item.hidden = !matches

        if (matches && query) {
          item.open = true
        }

        if (matches) {
          visibleCount += 1
        }
      })

      if (!query) {
        faqItems.forEach((item) => {
          item.hidden = false
          item.open = false
        })
        setStatus('')
        return
      }

      if (visibleCount === 0) {
        setStatus(content.ui.faqSearchNoResults)
        return
      }

      setStatus(content.ui.faqSearchResultsCount.replace('{count}', String(visibleCount)))
      return
    }

    if (PAGE === 'resources') {
      let cardMatches = 0

      resourceCards.forEach((card) => {
        const title = card.querySelector('strong')?.textContent ?? ''
        const summary = card.querySelector('span:not(.resource-card-kicker)')?.textContent ?? ''
        const matches = faqSearchMatches(query, title, summary)
        card.hidden = Boolean(query) && !matches

        if (!card.hidden) {
          cardMatches += 1
        }
      })

      if (resultsRoot) {
        if (!query) {
          resultsRoot.hidden = true
          resultsRoot.innerHTML = ''
          setStatus('')
          return
        }

        const hits = []
        categories.forEach((category) => {
          category.faqs.forEach((faq) => {
            if (faqSearchMatches(query, category.title, faq.question, faq.answer)) {
              hits.push(renderFaqSearchHit(category, faq, content))
            }
          })
        })

        if (hits.length === 0 && cardMatches === 0) {
          resultsRoot.hidden = true
          resultsRoot.innerHTML = ''
          setStatus(content.ui.faqSearchNoResults)
          return
        }

        if (hits.length > 0) {
          resultsRoot.hidden = false
          resultsRoot.innerHTML = `<div class="faq-search-results-heading">${escapeHtml(content.ui.faqSearchResultsCount.replace('{count}', String(hits.length)))}</div>
            <div class="faq-search-results-list">${hits.join('\n')}</div>`
          setStatus('')
          return
        }

        resultsRoot.hidden = true
        resultsRoot.innerHTML = ''
        setStatus('')
      }
    }
  }

  searchInput.addEventListener('input', applySearch)
  searchInput.addEventListener('search', applySearch)
}

function renderResourceCards(items, cardLabel = '') {
  return `<div class="resource-list">
          ${items
            .map(
              (item) => `<a href="${escapeHtml(toStaticHref(`/resources/${item.slug}`))}" class="resource-card">
            ${cardLabel ? `<span class="resource-card-kicker">${escapeHtml(cardLabel)}</span>` : ''}
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.summary ?? '')}</span>
          </a>`,
            )
            .join('\n          ')}
        </div>`
}

function renderFaqCategory(category, content) {
  return `<article class="faq-category page-faq-category">
          <h1>${escapeHtml(category.title)}</h1>
          <p class="faq-category-intro">${escapeHtml(category.intro)}</p>
          <div class="faq-toolbar">
            ${renderFaqSearch(content, { compact: true })}
            <button type="button" class="faq-toggle-all" data-faq-toggle-all aria-pressed="false">
              ${escapeHtml(content.ui.expandAll)}
            </button>
          </div>
          <div class="faq-list" data-faq-list>
            ${category.faqs
              .map(
                (faq) => `<details class="faq-item">
              <summary>
                <span class="faq-question">${escapeHtml(faq.question)}</span>
                <span class="faq-indicator" aria-hidden="true"></span>
              </summary>
              <p>${escapeHtml(faq.answer)}</p>
            </details>`,
              )
              .join('\n            ')}
          </div>
          ${renderFaqServiceLink(content)}
        </article>`
}

function renderListItems(items, ordered = false) {
  const tag = ordered ? 'ol' : 'ul'
  return `<${tag}>${(items ?? [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('')}</${tag}>`
}

function renderRelatedPrograms(program, content) {
  const related = (program.related ?? [])
    .map((id) => getProgramById(content, id))
    .filter(Boolean)

  if (!related.length) {
    return ''
  }

  return `<div class="program-related">
            <h4>${escapeHtml(content.ui.relatedProgramsLabel)}</h4>
            <ul>
              ${related
                .map(
                  (item) => `<li>
                <a href="${escapeHtml(relatedProgramHref(item))}" data-open-program="${escapeHtml(item.id)}">
                  <span class="program-related-label">${escapeHtml(item.label)}</span>
                  <span class="program-related-age">${escapeHtml(item.ageRange ?? '')}</span>
                </a>
              </li>`,
                )
                .join('')}
            </ul>
          </div>`
}

function renderProgramPanel(program, content, { open = false } = {}) {
  const ageLabel = content.ui.ageRangeLabel
  const ageRange = program.ageRange ?? ''

  return `<details class="program-panel" id="program-${escapeHtml(program.id)}"${open ? ' open' : ''}>
            <summary>
              <span class="program-panel-summary">
                <span class="card-label">${escapeHtml(program.label)}</span>
                <span class="program-panel-title">${escapeHtml(program.title)}</span>
                ${
                  ageRange
                    ? `<span class="program-age-badge">${escapeHtml(ageLabel)}: ${escapeHtml(ageRange)}</span>`
                    : ''
                }
              </span>
              <span class="program-panel-indicator" aria-hidden="true"></span>
            </summary>
            <div class="program-panel-body">
              <p class="program-summary">${escapeHtml(program.body)}</p>
              <div class="program-copy">
                <section>
                  <h4>${escapeHtml(ageLabel)}</h4>
                  <p class="program-age-range"><strong>${escapeHtml(ageRange)}</strong></p>
                  ${program.ageNote ? `<p>${escapeHtml(program.ageNote)}</p>` : ''}
                </section>
                <section>
                  <h4>${escapeHtml(content.ui.programGoalsLabel)}</h4>
                  ${program.description ? `<p>${escapeHtml(program.description)}</p>` : ''}
                  ${renderListItems(program.goals)}
                </section>
                <section>
                  <h4>${escapeHtml(content.ui.programStructureLabel)}</h4>
                  ${renderListItems(program.structure, true)}
                </section>
                ${renderProgramFaqCta(program, content)}
              </div>
              ${renderRelatedPrograms(program, content)}
            </div>
          </details>`
}

function renderHome(content) {
  const { sections, home } = content
  const assets = window.VTCC_SITE?.shared?.assets ?? {}
  const heroImage = assets.heroImage ? `${BASE}${assets.heroImage.replace(/^\//, '')}` : ''
  const whoImage = assets.whoWeServeImage ? `${BASE}${assets.whoWeServeImage.replace(/^\//, '')}` : ''
  const featuredResources = sections.resources.items.slice(0, 3)
  const heroActions = content.hero.actions.filter((action) => action.style !== 'ghost')

  const trustItems = content.trustStrip
    .map(
      (item) => `<div class="home-trust-item">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.body)}</span>
        </div>`,
    )
    .join('')

  const serviceCards = getServicePrograms(content)
    .map((program) => renderProgramPanel(program, content))
    .join('')

  const processSteps = sections.process.steps
    .slice(0, 3)
    .map(
      (step) =>
        `<li><strong>${escapeHtml(step.title)}</strong><span>${escapeHtml(step.body)}</span></li>`,
    )
    .join('')

  const pathLinks = sections.referrers.paths
    .map(
      (path) => `<a class="home-path-link home-path-link--${escapeHtml(path.buttonStyle)}" href="${escapeHtml(toStaticHref(path.buttonHref))}">
            <span class="home-path-link-content">
              <span class="home-path-link-heading">
                <strong>${escapeHtml(path.title)}</strong>
                <span class="home-path-link-arrow" aria-hidden="true">→</span>
              </span>
              <span>${escapeHtml(path.body)}</span>
            </span>
            <span class="home-path-link-action">${escapeHtml(path.buttonLabel)}</span>
          </a>`,
    )
    .join('')

  const whoItems = sections.whoWeServe.items
    .slice(0, 4)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('')

  const cultureNote = sections.multiculturalCare.body.split('.')[0] + '.'

  const resourceCards = featuredResources
    .map(
      (item) => `<a href="${escapeHtml(toStaticHref(`/resources/${item.slug}`))}" class="home-resource-card">
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.summary ?? '')}</span>
          </a>`,
    )
    .join('')

  return `
      <section class="home-hero">
        <div class="home-hero-copy">
          ${renderHeroHeading(content.hero)}
          ${renderHeroServiceTags(content.hero.serviceTags)}
          ${renderHeroText(content.hero)}
          <div class="button-row">${heroActions.map(renderButton).join('\n            ')}</div>
          <div class="home-trust" aria-label="Trust highlights">${trustItems}</div>
        </div>
        ${
          heroImage
            ? `<div class="home-hero-media">
          <img src="${escapeHtml(heroImage)}" alt="" loading="eager" />
        </div>`
            : ''
        }
      </section>
      <section id="services" class="section home-services">
        ${renderServicesBanner(sections.services.eyebrow, sections.services.title, sections.services.intro)}
        <div class="program-panel-list home-service-grid">${serviceCards}</div>
      </section>
      <section class="section home-start section--ruled">
        <div class="home-start-panel">
          <div class="home-start-grid">
            <div class="home-start-steps">
              ${renderSectionHeading('', sections.process.title, sections.process.intro)}
              <ol class="home-steps">${processSteps}</ol>
              <a class="text-link page-link-cta" href="${escapeHtml(toStaticHref(home.processTeaser.linkHref))}">${escapeHtml(home.processTeaser.linkLabel)}</a>
            </div>
            <aside class="home-start-paths">
              <p class="eyebrow">${escapeHtml(sections.referrers.eyebrow)}</p>
              <h3>${escapeHtml(sections.referrers.title)}</h3>
              <div class="home-path-links">${pathLinks}</div>
            </aside>
          </div>
        </div>
      </section>
      <section class="section home-who section--ruled">
        <div class="home-who-grid">
          ${
            whoImage
              ? `<figure class="home-who-media">
            <img src="${escapeHtml(whoImage)}" alt="" loading="lazy" />
          </figure>`
              : ''
          }
          <div class="home-who-copy">
            ${renderSectionHeading(sections.whoWeServe.eyebrow, sections.whoWeServe.title, sections.whoWeServe.intro)}
            ${
              sections.whoWeServe.missionStatement
                ? `<blockquote class="home-mission-statement">${escapeHtml(sections.whoWeServe.missionStatement)}</blockquote>`
                : ''
            }
            <ul class="check-list home-check-list">${whoItems}</ul>
            <p class="home-culture-note">${escapeHtml(cultureNote)}</p>
          </div>
        </div>
      </section>
      <section class="section home-resources band band--tint">
        ${renderSectionHeading('', home.resourcesTeaser.title, home.resourcesTeaser.intro)}
        <div class="home-resource-list">${resourceCards}</div>
        <a class="button secondary page-link-cta" href="${escapeHtml(toStaticHref(home.resourcesTeaser.linkHref))}">${escapeHtml(home.resourcesTeaser.linkLabel)}</a>
      </section>`
}

function renderFeatureColumns(columns) {
  return `<div class="feature-list">${columns
    .map(
      (column) => `<div><h3>${escapeHtml(column.title)}</h3><ul>${column.items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('')}</ul></div>`,
    )
    .join('')}</div>`
}

function renderDetailSection(section, soft = false) {
  return `<section class="section detail-section page-section${soft ? ' soft' : ''}">
        ${renderSectionHeading(section.eyebrow, section.title, section.intro)}
        ${renderFeatureColumns(section.columns)}
        <a class="button page-link-cta" href="${escapeHtml(toStaticHref('/contact'))}">${escapeHtml(getContent().hero.actions[0].label)}</a>
      </section>`
}

function renderProgramDetailPage(content, programId, section) {
  const program = getProgramById(content, programId)
  const panel = program
    ? `<section class="section page-section program-page-intro">
        <div class="program-panel-list">${renderProgramPanel(program, content, { open: true })}</div>
      </section>`
    : ''

  return `${panel}${renderDetailSection(section, true)}${renderServiceDisclaimer(content)}`
}

function renderAbaTopicBody(topic) {
  const paragraphs = (topic.paragraphs ?? [])
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('')
  const items = topic.items?.length
    ? `<ul class="aba-topic-list-items">${topic.items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('')}</ul>`
    : ''

  return `${paragraphs}${items}`
}

function renderAbaPage(content) {
  const aba = content.sections.aba
  const program = getProgramById(content, 'aba')

  return `<section class="section aba-page page-section">
        ${renderSectionHeading(aba.eyebrow, aba.title, aba.intro)}
        ${program ? `<div class="program-panel-list">${renderProgramPanel(program, content, { open: true })}</div>` : ''}
        <div class="aba-topic-list">
          ${aba.topics
            .map(
              (topic, index) => `<details class="aba-topic"${index === 0 ? ' open' : ''}>
            <summary>
              <span class="aba-topic-question">${escapeHtml(topic.title)}</span>
              <span class="aba-topic-indicator" aria-hidden="true"></span>
            </summary>
            <div class="aba-topic-body">
              ${renderAbaTopicBody(topic)}
            </div>
          </details>`,
            )
            .join('\n          ')}
        </div>
      </section>
      <section class="section detail-section page-section soft aba-summary">
        ${renderFeatureColumns(aba.columns)}
        <a class="button page-link-cta" href="${escapeHtml(toStaticHref('/contact'))}">${escapeHtml(content.hero.actions[0].label)}</a>
      </section>
      ${renderServiceDisclaimer(content)}`
}

function isIntakeReceipt(value) {
  return (
    value &&
    /^\d{8}$/.test(value.reference) &&
    (value.form === 'family' || value.form === 'referral') &&
    typeof value.submittedAt === 'string' &&
    !Number.isNaN(Date.parse(value.submittedAt))
  )
}

function readIntakeReceipt() {
  try {
    const receipt = JSON.parse(localStorage.getItem(INTAKE_RECEIPT_KEY) ?? 'null')
    return isIntakeReceipt(receipt) ? receipt : null
  } catch {
    return null
  }
}

function writeIntakeReceipt(receipt) {
  localStorage.setItem(INTAKE_RECEIPT_KEY, JSON.stringify(receipt))
}

function clearIntakeReceipt() {
  localStorage.removeItem(INTAKE_RECEIPT_KEY)
}

function readThankYouReceipt() {
  const variant = readThankYouVariant()
  let receipt = null

  try {
    const handoff = JSON.parse(sessionStorage.getItem(INK_HANDOFF_KEY) ?? 'null')
    if (handoff?.receipt) {
      receipt = handoff.receipt
    }
  } catch {
    receipt = null
  }

  if (!isIntakeReceipt(receipt)) {
    receipt = readIntakeReceipt()
  }

  if (!isIntakeReceipt(receipt) || receipt.form !== variant) {
    return null
  }

  return receipt
}

function thankYouHref(form) {
  return `${toStaticHref('/thank-you')}?form=${encodeURIComponent(form)}`
}

function formatSubmittedStamp(iso) {
  return new Intl.DateTimeFormat(getLocale() === 'es' ? 'es' : 'en', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date(iso))
}

function renderIntakeReceipt(content, receipt, { placement }) {
  if (!receipt) {
    return ''
  }

  const ui = content.ui
  const clear =
    placement === 'checklist'
      ? `<button type="button" class="intake-receipt-clear" data-clear-receipt>${escapeHtml(ui.clearReceiptLabel)}</button>`
      : ''
  const confirmation =
    placement === 'checklist'
      ? `<a href="${escapeHtml(thankYouHref(receipt.form))}">${escapeHtml(ui.viewConfirmationLabel)}</a>`
      : ''
  const actions = confirmation || clear ? `<p class="intake-receipt-actions">${confirmation}${clear}</p>` : ''

  return `<div class="intake-receipt intake-receipt--${escapeHtml(placement)}">
            <p class="intake-receipt-status">${escapeHtml(ui.stepCompleteLabel)}</p>
            <p class="intake-receipt-ref">
              <span>${escapeHtml(ui.referenceLabel)}</span>
              <strong>${escapeHtml(receipt.reference)}</strong>
              <button type="button" class="intake-receipt-copy" data-copy-reference="${escapeHtml(receipt.reference)}" data-copy-label="${escapeHtml(ui.copyReferenceLabel)}" data-copied-label="${escapeHtml(ui.copiedReferenceLabel)}">${escapeHtml(ui.copyReferenceLabel)}</button>
            </p>
            <p class="intake-receipt-time">
              <span>${escapeHtml(ui.submittedLabel)}</span>
              <time datetime="${escapeHtml(receipt.submittedAt)}">${escapeHtml(formatSubmittedStamp(receipt.submittedAt))}</time>
            </p>
            <p class="intake-receipt-note">${escapeHtml(ui.keepReferenceNote)}</p>
            ${actions}
          </div>`
}

function renderProcessPage(content) {
  const process = content.sections.process
  const receipt = readIntakeReceipt()
  const steps = process.steps
    .map((step, index) => {
      const complete = index === 0 && receipt
      const badge = complete
        ? `<span class="step-check" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M18 33.5 27.5 43 46 22" /></svg></span>`
        : ''
      const panel = complete ? renderIntakeReceipt(content, receipt, { placement: 'checklist' }) : ''
      return `<li${complete ? ' class="is-complete"' : ''}>${badge}<strong>${escapeHtml(step.title)}.</strong> ${escapeHtml(step.body)}${panel}</li>`
    })
    .join('')
  const primary = receipt
    ? `<a class="button secondary page-link-cta" href="${escapeHtml(thankYouHref(receipt.form))}">${escapeHtml(content.ui.viewConfirmationLabel)}</a>`
    : `<a class="button page-link-cta" href="${escapeHtml(toStaticHref('/contact'))}">${escapeHtml(content.hero.actions[0].label)}</a>`

  return `<section class="section split-section page-section">
        ${renderSectionHeading('', process.title, process.intro)}
        <ol class="steps">${steps}</ol>
        <div class="button-row">
          ${primary}
          <a class="button secondary page-link-cta" href="${escapeHtml(toStaticHref(process.formsLinkHref))}">${escapeHtml(process.formsLinkLabel)}</a>
        </div>
      </section>`
}

function renderInsurancePage(content) {
  const funding = content.sections.funding
  const providers = window.VTCC_SITE?.shared?.assets?.insuranceProviders ?? []

  const providerCards = providers
    .map((provider) => {
      const logoPath = `${escapeHtml(BASE)}${escapeHtml(provider.logo.replace(/^\//, ''))}`
      return `<article class="provider-card">
            <img src="${logoPath}" alt="${escapeHtml(provider.name)} logo" loading="lazy" />
            <span>${escapeHtml(provider.name)}</span>
          </article>`
    })
    .join('\n          ')

  const payerListItems = funding.payers
    .map((payer) => `<li>${escapeHtml(payer)}</li>`)
    .join('')

  return `<section class="section payer-band band band--tint">
        <div class="payer-band-inner">
          <div class="payer-lead">
            ${renderSectionHeading('', funding.title, funding.intro)}
          </div>
          <h2 class="payer-band-title">${escapeHtml(content.ui.payerListTitle)}</h2>
          <div class="provider-grid">
          ${providerCards}
          </div>
          <details class="payer-full-list">
            <summary>${escapeHtml(content.ui.fullPayerListLabel)}</summary>
            <ul class="payer-list">${payerListItems}</ul>
          </details>
        </div>
      </section>
      <section class="section split-section page-section payer-outro">
        <div class="payer-card">
          <p class="compliance-note">${escapeHtml(funding.note)}</p>
          <a class="button page-link-cta" href="${escapeHtml(toStaticHref(funding.ctaHref ?? '/contact'))}">${escapeHtml(funding.ctaLabel)}</a>
        </div>
      </section>`
}

function renderAboutPage(content) {
  const about = content.sections.about
  const aboutImage = getSharedAssetPath('aboutTeamImage')
  const careersLink = about.careersLink
    ? `<a class="button page-link-cta" href="${escapeHtml(toStaticHref(about.careersLink.href))}">${escapeHtml(about.careersLink.label)}</a>`
    : ''
  const photo = aboutImage
    ? `<figure class="about-media">
        <img src="${escapeHtml(aboutImage)}" alt="${escapeHtml(about.photoAlt ?? '')}" width="1000" height="562" loading="eager" />
      </figure>`
    : ''

  return `<section class="section about-page page-section">
        ${renderSectionHeading('', about.title, about.intro)}
        ${photo}
        <ul class="check-list">${about.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        ${careersLink}
      </section>
      ${renderQuoteBoard(about.quotes, 'about-quotes')}`
}

function getSharedAssetPath(assetKey) {
  const path = window.VTCC_SITE?.shared?.assets?.[assetKey]
  if (!path) {
    return ''
  }

  return `${BASE}${String(path).replace(/^\//, '')}`
}

function renderCareersList(items) {
  return `<ul class="check-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
}

function renderIndeedLink(indeed, extraClass = '') {
  if (!indeed?.href) {
    return ''
  }

  const className = extraClass ? `career-indeed ${extraClass}` : 'career-indeed'
  // The mark's ink sits right of the 24px viewBox center, so the window is
  // shifted until the glyph sits in the middle of the round button.
  return `<a class="${className}" href="${escapeHtml(indeed.href)}" target="_blank" rel="noopener noreferrer">
            <svg class="career-indeed-icon" viewBox="1.2 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M11.566 21.5633v-8.762c.2553.0231.5009.0346.758.0346 1.2225 0 2.3739-.3206 3.3506-.8928v9.6182c0 .8219-.1957 1.4287-.5757 1.8338-.378.4033-.8808.6049-1.491.6049-.6007 0-1.0766-.2016-1.468-.6183-.3781-.4032-.5739-1.01-.5739-1.8184zM11.589.5659c2.5447-.8929 5.4424-.8449 7.6186.987.405.3687.8673.8334 1.0515 1.3806.2207.6913-.7695-.073-.9057-.167-.71-.4532-1.4182-.8334-2.2127-1.0946C12.8614.3873 8.8122 2.709 6.2945 6.315c-1.0516 1.5939-1.7367 3.2721-2.299 5.1174-.0614.2017-.1094.4647-.2207.6413-.1113.2036-.048-.5453-.048-.5702.0845-.7623.2438-1.4997.4414-2.237C5.3292 5.3375 7.897 2.0655 11.5891.5658zm4.9281 7.0587c0 1.6686-1.353 3.0224-3.0205 3.0224-1.6677 0-3.0186-1.3538-3.0186-3.0224 0-1.6687 1.351-3.0224 3.0186-3.0224 1.6676 0 3.0205 1.3518 3.0205 3.0224Z"/>
            </svg>
            <span class="visually-hidden">${escapeHtml(indeed.label)}</span>
          </a>`
}

function renderCareersPosting(posting) {
  const blocks = []

  if (posting.youWill) {
    blocks.push(`<div class="careers-posting-block">
            <h3>${escapeHtml(posting.youWill.title)}</h3>
            ${renderCareersList(posting.youWill.items)}
          </div>`)
  }

  if (posting.training) {
    blocks.push(`<div class="careers-posting-block">
            <h3>${escapeHtml(posting.training.title)}</h3>
            <p>${escapeHtml(posting.training.body)}</p>
          </div>`)
  }

  if (posting.education) {
    blocks.push(`<div class="careers-posting-block">
            <h3>${escapeHtml(posting.education.title)}</h3>
            <p>${escapeHtml(posting.education.body)}</p>
          </div>`)
  }

  if (posting.certification) {
    blocks.push(`<div class="careers-posting-block">
            <h3>${escapeHtml(posting.certification.title)}</h3>
            <p>${escapeHtml(posting.certification.body)}</p>
          </div>`)
  }

  if (posting.licensing) {
    blocks.push(`<div class="careers-posting-block">
            <h3>${escapeHtml(posting.licensing.title)}</h3>
            <p>${escapeHtml(posting.licensing.body)}</p>
          </div>`)
  }

  if (posting.requirements) {
    blocks.push(`<div class="careers-posting-block">
            <h3>${escapeHtml(posting.requirements.title)}</h3>
            ${renderCareersList(posting.requirements.items)}
            ${
              posting.requirements.note
                ? `<p class="careers-note">${escapeHtml(posting.requirements.note)}</p>`
                : ''
            }
          </div>`)
  }

  const applyHref = posting.applyHref ?? '/career/apply'

  return `<article class="careers-posting">
          <p class="card-label">${escapeHtml(posting.kicker)}</p>
          <h2>${escapeHtml(posting.title)}</h2>
          <p class="careers-posting-meta">${escapeHtml(posting.meta)}</p>
          <p>${escapeHtml(posting.summary)}</p>
          ${blocks.join('\n          ')}
          <a class="button" href="${escapeHtml(toStaticHref(applyHref))}" data-apply-role="${escapeHtml(posting.applyRole)}">${escapeHtml(posting.applyLabel)}</a>
        </article>`
}

function renderCareersGallery(clinic, recognition) {
  const figures = (clinic.gallery ?? [])
    .map((item) => {
      const imagePath = item.asset ? getSharedAssetPath(item.asset) : ''

      if (imagePath) {
        return `<figure class="careers-photo">
            <img src="${escapeHtml(imagePath)}" alt="${escapeHtml(recognition.photoAlt ?? item.caption)}" loading="lazy" />
            <figcaption>${escapeHtml(item.caption)}</figcaption>
          </figure>`
      }

      return `<figure class="careers-photo careers-photo--pending">
            <div class="careers-photo-frame" role="img" aria-label="${escapeHtml(item.pendingDetail ?? clinic.photoPendingLabel)}">
              <span>${escapeHtml(clinic.photoPendingLabel)}</span>
            </div>
            <figcaption>
              <strong>${escapeHtml(item.caption)}</strong>
              ${item.pendingDetail ? `<span>${escapeHtml(item.pendingDetail)}</span>` : ''}
            </figcaption>
          </figure>`
    })
    .join('\n          ')

  return `<div class="careers-gallery">${figures}</div>`
}

function renderCareerDisclosure({ id, eyebrow, title, summary, body, expandLabel }) {
  return `<section class="section career-disclosure" id="${escapeHtml(id)}" data-disclosure>
        <h2 class="career-disclosure-head">
          <button type="button" class="career-disclosure-trigger" aria-expanded="false" aria-controls="disclosure-${escapeHtml(id)}" data-disclosure-trigger>
            <span class="career-disclosure-copy">
              <span class="eyebrow">${escapeHtml(eyebrow)}</span>
              <span class="career-disclosure-title">${escapeHtml(title)}</span>
              <span class="career-disclosure-summary">${escapeHtml(summary)}</span>
            </span>
            <span class="career-disclosure-indicator" aria-hidden="true"></span>
            <span class="visually-hidden" data-disclosure-state>${escapeHtml(expandLabel)}</span>
          </button>
        </h2>
        <div class="career-disclosure-panel" id="disclosure-${escapeHtml(id)}" data-disclosure-panel hidden="until-found">
          <div class="career-disclosure-inner">${body}</div>
        </div>
      </section>`
}

function renderCareerBenefits(content) {
  const careers = content.sections.careers
  const cards = (careers.benefits ?? [])
    .map(
      (benefit) => `<article class="career-benefit">
            <h3>${escapeHtml(benefit.title)}</h3>
            <p>${escapeHtml(benefit.body)}</p>
          </article>`,
    )
    .join('')
  const facts = (careers.facts ?? [])
    .map(
      (fact) => `<div class="careers-fact">
            <dt>${escapeHtml(fact.value)}</dt>
            <dd>${escapeHtml(fact.label)}</dd>
          </div>`,
    )
    .join('')
  const photo = `${BASE}assets/employee-appreciation.jpg`

  return `<section class="section career-benefits" id="why-vtcc">
        <figure class="career-benefits-photo">
          <img src="${escapeHtml(photo)}" alt="${escapeHtml(careers.opportunity.photoAlt ?? '')}" />
        </figure>
        ${renderSectionHeading(careers.opportunity.eyebrow, careers.opportunity.title, careers.opportunity.body)}
        <div class="career-benefit-grid">${cards}</div>
        <div class="career-benefit-foot">
          <dl class="career-benefit-facts">${facts}</dl>
          ${careers.factsNote ? `<p class="careers-note">${escapeHtml(careers.factsNote)}</p>` : ''}
        </div>
      </section>`
}

function renderHiringDetails(content) {
  const careers = content.sections.careers
  if (!careers.tabs || !careers.postings) {
    return ''
  }

  const tabs = (careers.tabs ?? []).filter((tab) => CAREERS_TAB_IDS.includes(tab.id))
    .map((tab, index) => {
      const selected = index === 0
      return `<button type="button" class="careers-tab${selected ? ' is-active' : ''}" role="tab" id="careers-tab-${escapeHtml(tab.id)}" aria-controls="careers-panel-${escapeHtml(tab.id)}" aria-selected="${selected ? 'true' : 'false'}" tabindex="${selected ? '0' : '-1'}" data-careers-tab="${escapeHtml(tab.id)}">${escapeHtml(tab.label)}</button>`
    })
    .join('\n          ')

  return `<section id="open-roles" class="section careers-board page-section" data-careers-board>
        ${renderSectionHeading('', careers.openRolesEyebrow)}
        <div class="careers-tabs-wrap">
          <div class="careers-tabs" role="tablist" aria-label="${escapeHtml(careers.tabsLabel)}">
          ${tabs}
          </div>
        </div>
        <div class="careers-panels">
          <div class="careers-panel" role="tabpanel" id="careers-panel-behavior-technician" aria-labelledby="careers-tab-behavior-technician" data-careers-panel="behavior-technician">
            ${renderCareersPosting(careers.postings.bt)}
          </div>
          <div class="careers-panel" role="tabpanel" id="careers-panel-bcba" aria-labelledby="careers-tab-bcba" data-careers-panel="bcba" hidden>
            ${renderCareersPosting(careers.postings.bcba)}
          </div>
          <div class="careers-panel" role="tabpanel" id="careers-panel-other" aria-labelledby="careers-tab-other" data-careers-panel="other" hidden>
            <aside class="careers-other-openings">
              <h3>${escapeHtml(careers.otherOpenings.title)}</h3>
              <p>${escapeHtml(careers.otherOpenings.body)}</p>
              <a class="button" href="${escapeHtml(toStaticHref(careers.applyHref))}">${escapeHtml(careers.applyLabel)}</a>
            </aside>
          </div>
        </div>
      </section>`
}

function renderCareerPage(content) {
  const careers = content.sections.careers
  const expandLabel = content.ui.careerExpandLabel ?? 'Show this section'
  const chips = (careers.pillars ?? [])
    .map(
      (pillar) => `<li class="career-pillar-chip">
          <strong>${escapeHtml(pillar.title)}</strong>
          <span>${escapeHtml(pillar.body)}</span>
        </li>`,
    )
    .join('')
  const leadQuotes = careers.quotes ?? null
  const steps = careers.steps.items
    .map(
      (step, index) => `<li class="career-step">
          <span class="career-step-number" aria-hidden="true">${index + 1}</span>
          <div class="career-step-copy">
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.body)}</p>
          </div>
        </li>`,
    )
    .join('\n          ')

  const structureCards = (careers.structure?.roles ?? [])
    .map(
      (role) => `<article class="careers-role-card">
            <p class="card-label">${escapeHtml(role.level)}</p>
            <h3>${escapeHtml(role.title)}</h3>
            <p>${escapeHtml(role.body)}</p>
          </article>`,
    )
    .join('')
  const differentiatorSteps = (careers.differentiator?.steps ?? [])
    .map(
      (step) => `<li>
            <strong>${escapeHtml(step.title)}</strong>
            <span>${escapeHtml(step.body)}</span>
          </li>`,
    )
    .join('')
  const programCards = (careers.programs?.items ?? [])
    .map(
      (program) => `<article class="careers-program-card">
            <p class="card-label">${escapeHtml(program.summary)}</p>
            <h3>${escapeHtml(program.title)}</h3>
            <p>${escapeHtml(program.body)}</p>
            ${renderCareersList(program.details)}
          </article>`,
    )
    .join('')
  const recognitionItems = (careers.recognition?.items ?? [])
    .map(
      (item) => `<article>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>`,
    )
    .join('')
  const officeCards = (content.offices ?? [])
    .map(
      (office) => `<address class="careers-office">
            <strong>${escapeHtml(office.name)}</strong>
            ${escapeHtml(office.street)}<br />
            ${escapeHtml(office.city)}<br />
            <a href="${escapeHtml(office.phoneHref)}">${escapeHtml(office.phone)}</a><br />
            ${escapeHtml(content.ui.faxLabel)}: ${escapeHtml(office.fax)}
          </address>`,
    )
    .join('')

  const disclosures = [
    careers.differentiator
      ? renderCareerDisclosure({
          id: 'rbt-pathway',
          eyebrow: careers.differentiator.eyebrow,
          title: careers.differentiator.title,
          summary: careers.differentiator.summary,
          expandLabel,
          body: `<p>${escapeHtml(careers.differentiator.body)}</p><ol class="home-steps careers-steps">${differentiatorSteps}</ol>`,
        })
      : '',
    careers.structure
      ? renderCareerDisclosure({
          id: 'team-structure',
          eyebrow: careers.structure.eyebrow,
          title: careers.structure.title,
          summary: careers.structure.summary,
          expandLabel,
          body: `<p>${escapeHtml(careers.structure.intro)}</p><div class="careers-role-grid">${structureCards}</div>`,
        })
      : '',
    careers.programs
      ? renderCareerDisclosure({
          id: 'programs',
          eyebrow: careers.programs.eyebrow,
          title: careers.programs.title,
          summary: careers.programs.summary,
          expandLabel,
          body: `<p>${escapeHtml(careers.programs.intro)}</p><div class="careers-program-grid">${programCards}</div>`,
        })
      : '',
    careers.clinic
      ? renderCareerDisclosure({
          id: 'clinic',
          eyebrow: careers.clinic.eyebrow,
          title: careers.clinic.title,
          summary: careers.clinic.summary,
          expandLabel,
          body: `<p>${escapeHtml(careers.clinic.intro)}</p>
            <div class="careers-office-grid">${officeCards}</div>
            <div class="careers-gallery-block">
              <h3>${escapeHtml(careers.clinic.galleryTitle)}</h3>
              <p>${escapeHtml(careers.clinic.galleryIntro)}</p>
              ${renderCareersGallery(careers.clinic, careers.recognition)}
            </div>
            <div class="careers-recognition">
              ${renderSectionHeading(careers.recognition.eyebrow, careers.recognition.title, careers.recognition.intro)}
              <div class="careers-recognition-grid">${recognitionItems}</div>
            </div>`,
        })
      : '',
    renderCareerDisclosure({
      id: careers.steps.id ?? 'hiring-process',
      eyebrow: careers.steps.eyebrow,
      title: careers.steps.title,
      summary: careers.steps.summary,
      expandLabel,
      body: `<p>${escapeHtml(careers.steps.intro)}</p><ol class="career-step-list">${steps}</ol>`,
    }),
  ].join('\n      ')

  return `<section class="career-hero page-section">
        <div class="career-hero-copy">
          <h1>${escapeHtml(careers.title)}</h1>
          <p class="career-hero-intro">${escapeHtml(careers.intro)}</p>
          <ul class="career-pillar-chips">${chips}</ul>
          <div class="button-row">
            <a class="button" href="${escapeHtml(toStaticHref(careers.applyHref))}">${escapeHtml(careers.applyLabel)}</a>
            <a class="button secondary" href="#open-roles">${escapeHtml(careers.overviewLabel)}</a>
            ${renderIndeedLink(careers.indeed)}
          </div>
        </div>
        <div class="career-hero-media">
          <img src="${escapeHtml(`${BASE}assets/who-we-serve.png`)}" alt="" loading="eager" />
          <div class="career-hero-note">
            <strong>${escapeHtml(careers.opportunity.title)}</strong>
            <span>${escapeHtml(careers.opportunity.body)}</span>
          </div>
        </div>
      </section>
      ${renderCareerBenefits(content)}
      ${leadQuotes ? renderQuoteBoard(leadQuotes, 'career-quotes') : ''}
      ${renderHiringDetails(content)}
      <div class="career-disclosure-stack">
        ${disclosures}
      </div>
      <section class="section career-closing">
        <div>
          <h2>${escapeHtml(careers.closing.title)}</h2>
          <p>${escapeHtml(careers.closing.body)}</p>
        </div>
        <div class="career-closing-actions">
          <a class="button" href="${escapeHtml(toStaticHref(careers.applyHref))}">${escapeHtml(careers.closing.buttonLabel)}</a>
          ${renderIndeedLink(careers.indeed)}
        </div>
      </section>`
}

function renderCareerApplicationField(field, content) {
  const required = ' required'
  const fieldClass = `career-field career-field--${escapeHtml(field.type)}`

  if (field.type === 'select') {
    const options = field.options
      .map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
      .join('\n              ')
    return `<label class="${fieldClass}">
            ${escapeHtml(field.label)}
            <select name="${escapeHtml(field.name)}"${required}>
              <option value="" selected disabled>${escapeHtml(content.careerApplication.selectPlaceholder)}</option>
              ${options}
            </select>
          </label>`
  }

  if (field.type === 'textarea') {
    return `<label class="${fieldClass}">
            ${escapeHtml(field.label)}
            <textarea name="${escapeHtml(field.name)}" rows="${field.rows ?? 4}"${required}></textarea>
          </label>`
  }

  const autocomplete = field.autocomplete
    ? ` autocomplete="${escapeHtml(field.autocomplete)}"`
    : ''

  return `<label class="${fieldClass}">
            ${escapeHtml(field.label)}
            <input type="${escapeHtml(field.type)}" name="${escapeHtml(field.name)}"${autocomplete}${required} />
          </label>`
}

function resumeUploadsEnabled() {
  return window.VTCC_SITE?.formspree?.resumeUploads === true
}

function renderCareerFileField(content) {
  if (!resumeUploadsEnabled()) {
    return ''
  }

  const application = content.careerApplication

  return `<div class="career-file-field">
              <span class="career-field-label">${escapeHtml(application.fileLabel)}</span>
              <div
                class="career-upload"
                data-career-dropzone
                tabindex="0"
                role="button"
                aria-controls="career-file-input"
                aria-describedby="career-file-hint"
              >
                <input
                  id="career-file-input"
                  class="visually-hidden"
                  type="file"
                  name="document"
                  accept="${escapeHtml(application.fileTypes)}"
                  data-career-file-input
                  required
                />
                <span class="career-upload-icon" aria-hidden="true">↑</span>
                <strong data-career-file-prompt>${escapeHtml(content.ui.careerFileDrop)}</strong>
                <span class="career-upload-action">${escapeHtml(content.ui.careerFileChoose)}</span>
                <span id="career-file-hint" class="career-upload-hint">${escapeHtml(content.ui.careerFileHint)}</span>
                <span class="career-file-name" data-career-file-name hidden></span>
                <button type="button" class="career-file-remove" data-career-file-remove hidden>${escapeHtml(content.ui.careerFileRemove)}</button>
              </div>
              <p class="career-file-error" data-career-file-error role="alert" hidden></p>
            </div>`
}

function renderCareerApplicationPage(content) {
  const application = content.careerApplication
  const fields = application.fields
    .map((field) => renderCareerApplicationField(field, content))
    .join('\n          ')

  return `<section class="section career-application page-section">
        <div class="career-application-intro">
          <a class="back-button" href="${escapeHtml(toStaticHref(application.backHref))}">
            <span aria-hidden="true">←</span> ${escapeHtml(application.backLabel)}
          </a>
          ${renderSectionHeading(application.eyebrow, application.title, application.intro)}
          <aside class="career-privacy-note">
            <strong>${escapeHtml(application.privacyTitle)}</strong>
            <p>${escapeHtml(application.privacyNote)}</p>
          </aside>
        </div>
        <div class="career-form-panel">
          <form class="career-application-form" data-career-form data-form-type="career">
            <input class="form-honeypot" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" />
            ${fields}
            ${renderCareerFileField(content)}
            <label class="consent-field">
              <input type="checkbox" name="consent" required />
              <span>${escapeHtml(application.consentLabel)} ${renderPrivacyPolicyLink(content)}</span>
            </label>
            <p class="form-note">${escapeHtml(application.privacyNote)}</p>
            <button type="submit" data-default-label="${escapeHtml(application.submitLabel)}">${escapeHtml(application.submitLabel)}</button>
            <p class="form-status" data-career-form-status aria-live="polite"></p>
          </form>
        </div>
      </section>`
}

function getContactPageConfig(content) {
  const isReferral = PAGE === 'contact-referral'

  return {
    contact:
      content.sections[isReferral ? 'contactReferral' : 'contactFamily'] ?? content.sections.contact,
    form: content[isReferral ? 'formReferral' : 'formFamily'] ?? content.form,
    variant: isReferral ? 'referral' : 'family',
  }
}

function renderContactAside(content, contact) {
  return `<details class="contact-aside-panel" data-contact-aside open>
            <summary>${escapeHtml(content.ui.contactAsideLabel)}</summary>
            <div class="contact-aside-body">
              <div class="contact-call-card">
                <p class="eyebrow">${escapeHtml(contact.callEyebrow)}</p>
                <h3>${escapeHtml(contact.callTitle)}</h3>
                <p>${escapeHtml(contact.callIntro)}</p>
                <div class="call-button-list">
                  ${content.offices
                    .map(
                      (office) => `<a class="call-button" href="${escapeHtml(office.phoneHref)}">
                    <span>${escapeHtml(office.name)}</span>
                    <strong>${escapeHtml(office.phone)}</strong>
                  </a>`,
                    )
                    .join('\n                  ')}
                </div>
              </div>
              <div class="office-list">${content.offices
                .map(
                  (office) => `<address>
                  <strong>${escapeHtml(office.name)}</strong>
                  ${escapeHtml(office.street)}<br />
                  ${escapeHtml(office.city)}<br />
                  <a class="office-phone" href="${escapeHtml(office.phoneHref)}">${escapeHtml(office.phone)}</a><br />
                  ${escapeHtml(content.ui.faxLabel)}: ${escapeHtml(office.fax)}
                </address>`,
                )
                .join('')}</div>
            </div>
          </details>`
}

function renderContactFormSwitch(content, variant) {
  const trailing = `<p class="contact-form-switch">${escapeHtml(content.ui.contactSwitchQuizPrompt)} <a href="${escapeHtml(toStaticHref('/contact'))}">${escapeHtml(content.ui.contactSwitchQuizLink)}</a>.</p>`
  const lead =
    variant === 'referral'
      ? `<p class="contact-form-switch">${escapeHtml(content.ui.contactSwitchFamilyPrompt)} <a href="${escapeHtml(toStaticHref('/contact/request'))}">${escapeHtml(content.ui.contactSwitchFamilyLink)}</a>.</p>`
      : `<p class="contact-form-switch">${escapeHtml(content.ui.contactSwitchReferralPrompt)} <a href="${escapeHtml(toStaticHref('/contact/referral'))}">${escapeHtml(content.ui.contactSwitchReferralLink)}</a>.</p>`

  return { lead, trailing }
}

function renderThankYouPage(content) {
  const copy = content.thankYou
  const variant = copy?.[readThankYouVariant()] ?? copy?.default
  if (!variant) {
    return ''
  }

  const steps = (variant.steps ?? [])
    .map(
      (step, index) => `<li class="thank-you-step">
              <span>${index + 1}</span>
              <p>${escapeHtml(step)}</p>
            </li>`,
    )
    .join('')

  return `<section class="section thank-you-page page-section">
        <div class="thank-you-card">
          <svg class="thank-you-mark" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="30" />
            <path d="M18 33.5 27.5 43 46 22" />
          </svg>
          ${renderSectionHeading(variant.eyebrow, variant.title, '')}
          <p class="thank-you-lead">${escapeHtml(variant.lead)}</p>
          ${renderIntakeReceipt(content, readThankYouReceipt(), { placement: 'confirm' })}
          <h3>${escapeHtml(copy.nextLabel)}</h3>
          <ol class="thank-you-steps">${steps}</ol>
          <div class="thank-you-actions">
            <a class="button" href="${escapeHtml(toStaticHref(copy.homeHref))}">${escapeHtml(copy.homeLabel)}</a>
            <a class="button secondary" href="${escapeHtml(toStaticHref(variant.secondaryHref))}">${escapeHtml(variant.secondaryLabel)}</a>
          </div>
          <p class="thank-you-note">${escapeHtml(copy.notice)}</p>
        </div>
      </section>`
}

function renderContactPage(content) {
  const { contact, form, variant } = getContactPageConfig(content)
  const formType = variant === 'referral' ? 'referral' : 'service_request'
  const formSwitch = renderContactFormSwitch(content, variant)

  return `<section class="section contact-section page-section">
        <div class="contact-main">
          <header class="contact-intro">
            ${renderSectionHeading(contact.eyebrow, contact.title, contact.intro)}
          </header>
          <aside class="contact-aside">
            ${renderContactAside(content, contact)}
          </aside>
        </div>
        <div class="contact-form-panel">
          ${formSwitch.lead}
          <form class="request-form request-form--${escapeHtml(variant)}" data-form-type="${escapeHtml(formType)}">
          <input class="form-honeypot" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" />
          ${form.fields.map((field) => renderFormField(field, content)).join('')}
          <label class="consent-field"><input type="checkbox" name="consent" required /> <span>${escapeHtml(form.consentLabel)} ${renderPrivacyPolicyLink(content)}</span></label>
          <p class="form-note">${escapeHtml(form.notice)}</p>
          <button type="submit" data-default-label="${escapeHtml(form.submitLabel)}">${escapeHtml(form.submitLabel)}</button>
          <p class="form-status" data-form-status aria-live="polite"></p>
        </form>
          ${formSwitch.trailing}
        </div>
      </section>`
}

function createEmptyQuizState() {
  return {
    role: '',
    parentDiagnosis: '',
    childAge: null,
    child18Months: '',
    feeding: '',
    social: '',
    classroom: '',
    credentials: [],
    experienceSettings: [],
    experienceLength: '',
    experienceAges: [],
    doctorDiagnosis: '',
    editing: '',
    confirmed: [],
  }
}

let quizState = createEmptyQuizState()
let quizRefreshToken = 0

function getQuiz(content) {
  return content.contactQuiz
}

function parseChildAge(value) {
  if (value === '' || value == null) {
    return null
  }

  const age = Number.parseInt(String(value), 10)
  if (!Number.isFinite(age) || age < 0 || age > 30) {
    return null
  }

  return age
}

function isAbaEligible(state) {
  if (state.childAge == null) {
    return false
  }
  if (state.childAge >= 2 && state.childAge <= 21) {
    return true
  }
  return state.childAge === 1 && state.child18Months === 'yes'
}

function parentProgramIds(age) {
  const questions = []
  if (age >= 2 && age <= 12) {
    questions.push('feeding')
  }
  if (age >= 5 && age <= 17) {
    questions.push('social')
  }
  if (age >= 2 && age <= 5) {
    questions.push('classroom')
  }
  return questions
}

function parentSpecializedMatches(state) {
  const matches = []
  if (state.childAge == null) {
    return matches
  }
  if (state.childAge >= 2 && state.childAge <= 12 && state.feeding === 'yes') {
    matches.push('feeding')
  }
  if (state.childAge >= 8 && state.childAge <= 12 && state.social === 'yes') {
    matches.push('social-enrichment')
  }
  if (state.childAge >= 5 && state.childAge <= 17 && state.social === 'yes') {
    matches.push('social-skills')
  }
  if (state.childAge >= 2 && state.childAge <= 5 && state.classroom === 'yes') {
    matches.push('early-learners')
  }
  return matches
}

function parentReadyForResult(state) {
  if (state.role !== 'parent') {
    return false
  }
  if (state.parentDiagnosis === 'no') {
    return true
  }
  if (state.parentDiagnosis !== 'yes' || state.childAge == null) {
    return false
  }
  if (state.childAge === 1 && !state.child18Months) {
    return false
  }

  return parentProgramIds(state.childAge).every((questionId) => state[questionId])
}

function applicantHasCredentials(state) {
  return state.credentials.length > 0
}

function applicantReadyForResult(state) {
  if (state.role !== 'applicant' || !applicantHasCredentials(state) || !state.experienceLength) {
    return false
  }
  if (state.experienceLength === 'none') {
    return true
  }
  if (state.experienceSettings.includes('none-children')) {
    return true
  }
  return state.experienceSettings.length > 0 && state.experienceAges.length > 0
}

function collectCredentialOptions(quiz) {
  return (quiz.applicantCredentialsQuestion.groups ?? []).flatMap((group) => group.options)
}

function labelForOption(options, id) {
  return options.find((option) => option.id === id)?.label ?? id
}

function suggestApplicantRole(state, quiz) {
  const selected = new Set(state.credentials)
  if (selected.has('bcba') || selected.has('bcba-d')) {
    return 'bcba'
  }
  if (selected.has('bcaba')) {
    return 'bcaba'
  }
  if (selected.has('masters')) {
    return 'masters'
  }
  if (selected.has('rbt') || selected.has('qbt')) {
    return 'rbt'
  }
  return 'bt'
}

function buildParentPrefill(state, quiz) {
  if (state.parentDiagnosis === 'no') {
    return {
      form: 'family',
      fields: {
        serviceIds: ['not-sure'],
        message: quiz.parentMessages.noDiagnosis,
      },
    }
  }

  if (state.parentDiagnosis !== 'yes') {
    return null
  }

  const fields = {}
  if (state.childAge != null) {
    fields.ageRange = String(state.childAge)
  }

  if (!parentReadyForResult(state)) {
    return Object.keys(fields).length > 0 ? { form: 'family', fields } : null
  }

  const specialized = parentSpecializedMatches(state)
  const abaEligible = isAbaEligible(state)
  const programs = [...specialized]
  if (abaEligible) {
    programs.unshift('aba')
  }

  const programLabels = programs.map((id) => quiz.programLabels[id] ?? id)
  fields.serviceIds = programs.length > 0 ? programs : ['not-sure']
  fields.message =
    programs.length > 0
      ? quiz.parentMessages.programs.replace('{programs}', programLabels.join(', '))
      : quiz.parentMessages.outsideAge

  return { form: 'family', fields }
}

function buildDoctorPrefill(quiz) {
  return {
    form: 'referral',
    fields: {
      role: quiz.referralRoleValue,
      message: quiz.doctorMessage,
    },
  }
}

function buildApplicantPrefill(state, quiz) {
  const roleKey = suggestApplicantRole(state, quiz)
  const credentialOptions = collectCredentialOptions(quiz)
  const credentialLabels = state.credentials.map((id) => labelForOption(credentialOptions, id))
  const settingLabels = state.experienceSettings.map((id) =>
    labelForOption(quiz.applicantExperienceSettingsQuestion.options, id),
  )
  const lengthLabel = labelForOption(quiz.applicantExperienceLengthQuestion.options, state.experienceLength)
  const ageLabels = state.experienceAges.map((id) =>
    labelForOption(quiz.applicantExperienceAgesQuestion.options, id),
  )

  const experienceLines = [
    `${quiz.applicantCredentialsQuestion.label} ${credentialLabels.join(', ') || '—'}`,
    `${quiz.applicantExperienceLengthQuestion.label} ${lengthLabel}`,
  ]
  if (settingLabels.length) {
    experienceLines.push(`${quiz.applicantExperienceSettingsQuestion.label} ${settingLabels.join(', ')}`)
  }
  if (ageLabels.length) {
    experienceLines.push(`${quiz.applicantExperienceAgesQuestion.label} ${ageLabels.join(', ')}`)
  }

  return {
    form: 'career',
    fields: {
      role: quiz.careerRoles[roleKey],
      experience: `${quiz.applicantResult.experienceLabel}\n${experienceLines.join('\n')}`,
    },
    careerRole: quiz.careerRoles[roleKey],
  }
}

function buildQuizPrefill(state, quiz) {
  switch (state.role) {
    case 'parent':
      return buildParentPrefill(state, quiz)
    case 'doctor':
      return state.doctorDiagnosis ? buildDoctorPrefill(quiz) : null
    case 'applicant':
      return applicantReadyForResult(state) ? buildApplicantPrefill(state, quiz) : null
    case '':
      return null
    default: {
      const _exhaustiveCheck = state.role
      return _exhaustiveCheck ? null : null
    }
  }
}

function persistQuizPrefill(quiz) {
  if (!quiz) {
    return
  }

  const payload = buildQuizPrefill(quizState, quiz)
  if (!payload) {
    clearQuizPrefill()
    return
  }

  writeQuizPrefill(payload)
}

function writeQuizPrefill(payload) {
  sessionStorage.setItem(QUIZ_PREFILL_STORAGE_KEY, JSON.stringify(payload))
  if (payload.careerRole) {
    sessionStorage.setItem(CAREER_ROLE_STORAGE_KEY, payload.careerRole)
  }
}

function readQuizPrefill() {
  try {
    const raw = sessionStorage.getItem(QUIZ_PREFILL_STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function clearQuizPrefill() {
  sessionStorage.removeItem(QUIZ_PREFILL_STORAGE_KEY)
}

function quizYesNoOptions(quiz) {
  return [
    { id: 'yes', label: quiz.yesLabel },
    { id: 'no', label: quiz.noLabel },
  ]
}

function appendParentQuizSteps(steps, state, quiz) {
  steps.push({
    id: 'parentDiagnosis',
    kind: 'choice',
    label: quiz.parentDiagnosisQuestion.label,
    options: quizYesNoOptions(quiz),
  })

  if (state.parentDiagnosis !== 'yes') {
    return
  }

  steps.push({
    id: 'childAge',
    kind: 'number',
    label: quiz.parentAgeQuestion.label,
    help: quiz.ageHelp,
    suffix: quiz.ageSuffix,
  })

  if (state.childAge == null) {
    return
  }

  if (state.childAge === 1) {
    steps.push({
      id: 'child18Months',
      kind: 'choice',
      label: quiz.parent18MonthsQuestion.label,
      options: quizYesNoOptions(quiz),
    })
    if (!state.child18Months) {
      return
    }
  }

  const questionCopy = {
    feeding: quiz.parentFeedingQuestion.label,
    social: quiz.parentSocialQuestion.label,
    classroom: quiz.parentClassroomQuestion.label,
  }

  for (const questionId of parentProgramIds(state.childAge)) {
    steps.push({
      id: questionId,
      kind: 'choice',
      label: questionCopy[questionId],
      options: quizYesNoOptions(quiz),
    })
    if (!state[questionId]) {
      break
    }
  }
}

function appendApplicantQuizSteps(steps, state, quiz) {
  steps.push({
    id: 'credentials',
    kind: 'multi',
    label: quiz.applicantCredentialsQuestion.label,
    groups: quiz.applicantCredentialsQuestion.groups,
  })

  if (!state.confirmed.includes('credentials') || !applicantHasCredentials(state)) {
    return
  }

  steps.push({
    id: 'experienceLength',
    kind: 'choice',
    label: quiz.applicantExperienceLengthQuestion.label,
    options: quiz.applicantExperienceLengthQuestion.options,
  })

  if (!state.experienceLength) {
    return
  }

  if (state.experienceLength === 'none') {
    return
  }

  steps.push({
    id: 'experienceSettings',
    kind: 'multi',
    label: quiz.applicantExperienceSettingsQuestion.label,
    groups: [
      {
        label: quiz.applicantExperienceSettingsQuestion.label,
        options: quiz.applicantExperienceSettingsQuestion.options,
      },
    ],
  })

  if (!state.confirmed.includes('experienceSettings') || state.experienceSettings.length === 0) {
    return
  }

  if (state.experienceSettings.includes('none-children')) {
    return
  }

  steps.push({
    id: 'experienceAges',
    kind: 'multi',
    label: quiz.applicantExperienceAgesQuestion.label,
    groups: [
      {
        label: quiz.applicantExperienceAgesQuestion.label,
        options: quiz.applicantExperienceAgesQuestion.options,
      },
    ],
  })
}

function maxParentFollowUpCount() {
  let max = 0
  for (let age = 0; age <= 30; age += 1) {
    const followUps = (age === 1 ? 1 : 0) + parentProgramIds(age).length
    if (followUps > max) {
      max = followUps
    }
  }
  return max
}

function longestQuizCeiling() {
  const parent = 3 + maxParentFollowUpCount()
  const doctor = 2
  const applicant = 5
  return Math.max(parent, doctor, applicant)
}

function parentQuizProgressBounds(state) {
  if (state.parentDiagnosis === 'no') {
    return { total: 2, exact: true }
  }

  const ceiling = 3 + maxParentFollowUpCount()
  if (state.parentDiagnosis !== 'yes' || state.childAge == null) {
    return { total: ceiling, exact: false }
  }

  const followUps = (state.childAge === 1 ? 1 : 0) + parentProgramIds(state.childAge).length
  return { total: 3 + followUps, exact: true }
}

function applicantQuizProgressBounds(state) {
  if (!state.experienceLength) {
    return { total: 5, exact: false }
  }
  if (state.experienceLength === 'none') {
    return { total: 3, exact: true }
  }
  return { total: 5, exact: true }
}

function quizProgressBounds(state) {
  switch (state.role) {
    case '':
      return { total: longestQuizCeiling(), exact: false }
    case 'parent':
      return parentQuizProgressBounds(state)
    case 'doctor':
      return { total: 2, exact: true }
    case 'applicant':
      return applicantQuizProgressBounds(state)
    default: {
      const _exhaustiveCheck = state.role
      return _exhaustiveCheck
        ? { total: longestQuizCeiling(), exact: false }
        : { total: longestQuizCeiling(), exact: false }
    }
  }
}

function getQuizSteps(state, quiz) {
  const steps = [
    {
      id: 'role',
      kind: 'choice',
      label: quiz.roleQuestion.label,
      options: quiz.roleQuestion.options,
    },
  ]

  switch (state.role) {
    case 'parent':
      appendParentQuizSteps(steps, state, quiz)
      break
    case 'doctor':
      steps.push({
        id: 'doctorDiagnosis',
        kind: 'choice',
        label: quiz.doctorDiagnosisQuestion.label,
        options: quizYesNoOptions(quiz),
      })
      break
    case 'applicant':
      appendApplicantQuizSteps(steps, state, quiz)
      break
    case '':
      break
    default: {
      const _exhaustiveCheck = state.role
      return _exhaustiveCheck ? steps : steps
    }
  }

  return steps
}

function quizStepIsComplete(state, step) {
  switch (step.kind) {
    case 'number':
      return state.childAge != null
    case 'multi':
      return state.confirmed.includes(step.id) && (state[step.id]?.length ?? 0) > 0
    case 'choice':
      return Boolean(state[step.id])
    default: {
      const _exhaustiveCheck = step.kind
      return _exhaustiveCheck ? false : false
    }
  }
}

function quizResultReady(state) {
  switch (state.role) {
    case 'parent':
      return parentReadyForResult(state)
    case 'doctor':
      return Boolean(state.doctorDiagnosis)
    case 'applicant':
      return applicantReadyForResult(state)
    case '':
      return false
    default: {
      const _exhaustiveCheck = state.role
      return _exhaustiveCheck ? false : false
    }
  }
}

function getCurrentQuizStep(state, quiz) {
  const steps = getQuizSteps(state, quiz)
  if (state.editing) {
    const editing = steps.find((step) => step.id === state.editing)
    if (editing) {
      return { steps, step: editing, showingResult: false }
    }
  }

  const incomplete = steps.find((step) => !quizStepIsComplete(state, step))
  if (incomplete) {
    return { steps, step: incomplete, showingResult: false }
  }

  if (quizResultReady(state)) {
    return { steps, step: null, showingResult: true }
  }

  return { steps, step: steps[steps.length - 1] ?? null, showingResult: false }
}

function quizOptionTabIndex(isSelected, index, anySelected) {
  if (anySelected) {
    return isSelected ? 0 : -1
  }
  return index === 0 ? 0 : -1
}

function renderQuizChoiceStep(step) {
  const selected = step.options.some((option) => option.id === quizState[step.id])
  const options = step.options
    .map((option, index) => {
      const isSelected = option.id === quizState[step.id]
      return `<button type="button" class="quiz-option${isSelected ? ' is-selected' : ''}" role="radio" aria-checked="${isSelected ? 'true' : 'false'}" tabindex="${quizOptionTabIndex(isSelected, index, selected)}" data-quiz-choice="${escapeHtml(step.id)}" data-quiz-value="${escapeHtml(option.id)}">
                <span class="quiz-option-label">${escapeHtml(option.label)}</span>
                <span class="quiz-option-mark" aria-hidden="true"></span>
              </button>`
    })
    .join('')

  return `<div class="quiz-step-card">
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(step.label)}</h3>
            <div class="quiz-options" role="radiogroup" aria-labelledby="quiz-question">${options}</div>
          </div>`
}

function renderQuizNumberStep(step, quiz) {
  const value = quizState.childAge == null ? '' : String(quizState.childAge)
  return `<div class="quiz-step-card">
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(step.label)}</h3>
            <div class="quiz-age">
              <input type="number" inputmode="numeric" min="0" max="30" autocomplete="off" data-quiz-age aria-labelledby="quiz-question" aria-describedby="quiz-age-help" value="${escapeHtml(value)}" />
              <span class="quiz-age-suffix">${escapeHtml(step.suffix ?? quiz.ageSuffix)}</span>
            </div>
            <p id="quiz-age-help" class="quiz-help">${escapeHtml(step.help ?? quiz.ageHelp)}</p>
            <button type="button" class="button button--arrow" data-quiz-continue="childAge"${value === '' ? ' disabled' : ''}>${escapeHtml(quiz.continueLabel ?? 'Continue')}</button>
          </div>`
}

function renderQuizMultiStep(step, quiz) {
  const selectedIds = new Set(quizState[step.id] ?? [])
  const groups = step.groups
    .map((group) => {
      const hideLegend = step.groups.length === 1
      const options = group.options
        .map((option, index) => {
          const isSelected = selectedIds.has(option.id)
          return `<button type="button" class="quiz-option quiz-option--check${isSelected ? ' is-selected' : ''}" role="checkbox" aria-checked="${isSelected ? 'true' : 'false'}" tabindex="${quizOptionTabIndex(isSelected, index, selectedIds.size > 0)}" data-quiz-multi="${escapeHtml(step.id)}" data-quiz-value="${escapeHtml(option.id)}">
                    <span class="quiz-option-mark" aria-hidden="true"></span>
                    <span class="quiz-option-label">${escapeHtml(option.label)}</span>
                  </button>`
        })
        .join('')
      return `<fieldset class="quiz-option-group">
                <legend class="${hideLegend ? 'visually-hidden' : ''}">${escapeHtml(group.label)}</legend>
                <div class="quiz-options">${options}</div>
              </fieldset>`
    })
    .join('')

  return `<div class="quiz-step-card">
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(step.label)}</h3>
            ${groups}
            <button type="button" class="button button--arrow" data-quiz-continue="${escapeHtml(step.id)}"${selectedIds.size > 0 ? '' : ' disabled'}>${escapeHtml(quiz.continueLabel ?? 'Continue')}</button>
          </div>`
}

function renderQuizStep(step, quiz) {
  switch (step.kind) {
    case 'choice':
      return renderQuizChoiceStep(step)
    case 'number':
      return renderQuizNumberStep(step, quiz)
    case 'multi':
      return renderQuizMultiStep(step, quiz)
    default: {
      const _exhaustiveCheck = step.kind
      return _exhaustiveCheck ? '' : ''
    }
  }
}

function renderQuizCta(href, label) {
  return `<a class="button button--arrow button--sheen-once" href="${escapeHtml(toStaticHref(href))}" data-quiz-prefill>${escapeHtml(label)}</a>`
}

function renderParentResultCard(state, quiz) {
  if (state.parentDiagnosis === 'no') {
    const copy = quiz.parentNoDiagnosis
    const steps = copy.steps
      .map(
        (step, index) => `<li class="quiz-step" style="--reveal-i:${index}">
              <span class="quiz-step-index">${index + 1}</span>
              <p>${escapeHtml(step)}</p>
            </li>`,
      )
      .join('')
    return `<article class="quiz-result" data-quiz-result>
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(copy.resultTitle)}</h3>
            <p>${escapeHtml(copy.resultBody)}</p>
            <p>${escapeHtml(copy.intro)}</p>
            <ol class="quiz-stepper">${steps}</ol>
            ${renderQuizCta('/contact/request', copy.ctaLabel)}
          </article>`
  }

  const specialized = parentSpecializedMatches(state)
  const abaEligible = isAbaEligible(state)
  const copy = quiz.parentResult

  if (!abaEligible && specialized.length === 0) {
    return `<article class="quiz-result" data-quiz-result>
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(copy.outsideAgeTitle)}</h3>
            <p>${escapeHtml(copy.outsideAgeBody)}</p>
            ${renderQuizCta('/contact/request', copy.ctaLabel)}
          </article>`
  }

  if (specialized.length === 0) {
    return `<article class="quiz-result" data-quiz-result>
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(copy.onlyAbaTitle)}</h3>
            <p>${escapeHtml(copy.onlyAbaBody)}</p>
            ${renderQuizCta('/contact/request', copy.ctaLabel)}
          </article>`
  }

  const items = specialized
    .map((id, index) => `<li style="--reveal-i:${index}">${escapeHtml(quiz.programLabels[id] ?? id)}</li>`)
    .join('')
  const abaNote = abaEligible ? `<p>${escapeHtml(copy.abaNote)}</p>` : ''

  return `<article class="quiz-result" data-quiz-result>
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(copy.title)}</h3>
            <p>${escapeHtml(copy.body)}</p>
            <ul class="quiz-result-list">${items}</ul>
            ${abaNote}
            ${renderQuizCta('/contact/request', copy.ctaLabel)}
          </article>`
}

function renderDoctorResultCard(state, quiz) {
  const answered = state.doctorDiagnosis
  if (!answered) {
    return ''
  }

  if (answered === 'yes') {
    const copy = quiz.doctorYes
    const steps = copy.steps
      .map(
        (step, index) => `<li class="quiz-step" style="--reveal-i:${index}">
              <span class="quiz-step-index">${index + 1}</span>
              <div>
                <strong>${escapeHtml(step.title)}</strong>
                <p>${escapeHtml(step.body)}</p>
              </div>
            </li>`,
      )
      .join('')
    return `<article class="quiz-result" data-quiz-result>
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(copy.title)}</h3>
            <p>${escapeHtml(copy.intro)}</p>
            <ol class="quiz-stepper">${steps}</ol>
            <p class="quiz-result-note">${escapeHtml(copy.notice)}</p>
            ${renderQuizCta('/contact/referral', copy.ctaLabel)}
          </article>`
  }

  const copy = quiz.doctorNo
  const items = copy.items
    .map((item, index) => `<li style="--reveal-i:${index}">${escapeHtml(item)}</li>`)
    .join('')
  return `<article class="quiz-result" data-quiz-result>
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(copy.title)}</h3>
            <p>${escapeHtml(copy.intro)}</p>
            <ul class="quiz-result-list">${items}</ul>
            ${renderQuizCta('/contact/referral', copy.ctaLabel)}
          </article>`
}

function renderApplicantResultCard(state, quiz) {
  const roleKey = suggestApplicantRole(state, quiz)
  const copy = quiz.applicantResult
  return `<article class="quiz-result" data-quiz-result>
            <h3 id="quiz-question" tabindex="-1" data-quiz-question>${escapeHtml(copy.title)}</h3>
            <p class="quiz-result-role">${escapeHtml(quiz.careerRoles[roleKey])}</p>
            <p>${escapeHtml(quiz.roleReasons[roleKey])}</p>
            <p>${escapeHtml(copy.body)}</p>
            ${renderQuizCta('/career/apply', copy.ctaLabel)}
          </article>`
}

function renderQuizResult(state, quiz) {
  switch (state.role) {
    case 'parent':
      return parentReadyForResult(state) ? renderParentResultCard(state, quiz) : ''
    case 'doctor':
      return state.doctorDiagnosis ? renderDoctorResultCard(state, quiz) : ''
    case 'applicant':
      return applicantReadyForResult(state) ? renderApplicantResultCard(state, quiz) : ''
    case '':
      return ''
    default: {
      const _exhaustiveCheck = state.role
      return _exhaustiveCheck ? '' : ''
    }
  }
}

function renderContactQuizInner(content, direction = 'none') {
  const quiz = getQuiz(content)
  const { steps, step, showingResult } = getCurrentQuizStep(quizState, quiz)
  const bounds = quizProgressBounds(quizState)
  const index = step ? Math.max(steps.findIndex((item) => item.id === step.id), 0) : bounds.total
  const fraction = showingResult ? 1 : Math.min(index, bounds.total) / bounds.total
  const showCount = bounds.exact && !showingResult
  const progressLabel = showCount
    ? (quiz.progressLabel ?? 'Question {n} of {total}')
        .replace('{n}', String(index + 1))
        .replace('{total}', String(bounds.total))
    : ''
  const progressName = showCount
    ? 'aria-labelledby="quiz-progress-label"'
    : `aria-label="${escapeHtml(quiz.progressAriaLabel ?? 'Questionnaire progress')}"`
  const phone = content.topBar?.phone ?? ''
  const phoneHref = content.topBar?.phoneHref ?? '#'
  const canGoBack = showingResult || index > 0
  const motion = direction === 'back' ? 'enter-back' : direction === 'forward' ? 'enter-forward' : 'none'
  const stage = showingResult || !step ? renderQuizResult(quizState, quiz) : renderQuizStep(step, quiz)

  return `<header class="quiz-intro">
            <h2>${escapeHtml(quiz.title)}</h2>
            <p>${escapeHtml(quiz.intro)}</p>
          </header>
          <div class="quiz-progress">
            <div class="quiz-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(fraction * 100)}" ${progressName}>
              <span class="quiz-progress-fill" style="transform: scaleX(${fraction})"></span>
            </div>
            <p id="quiz-progress-label" class="quiz-progress-label"${showCount ? '' : ' hidden'}>${escapeHtml(progressLabel)}</p>
          </div>
          <div class="quiz-stage" data-quiz-stage data-motion="${motion}">
            ${stage}
          </div>
          <div class="quiz-footer-links">
            ${canGoBack ? `<button type="button" class="quiz-back" data-quiz-back>${escapeHtml(quiz.backLabel ?? 'Back')}</button>` : ''}
            <a class="quiz-footer-call" href="${escapeHtml(phoneHref)}">${escapeHtml(quiz.callPrompt ?? 'Prefer to talk?')} ${escapeHtml(phone)}</a>
            <span class="quiz-footer-skip">${escapeHtml(quiz.skipLinkPrompt)} <a href="${escapeHtml(toStaticHref(quiz.skipLinkHref))}">${escapeHtml(quiz.skipLinkLabel)}</a></span>
          </div>
          <p class="quiz-disclaimer">${escapeHtml(quiz.disclaimer)}</p>`
}

function renderContactQuizPage(content) {
  return `<section class="section quiz-section page-section">
        <div class="contact-quiz" data-contact-quiz>
          ${renderContactQuizInner(content)}
        </div>
      </section>`
}

function dropConfirmedQuizSteps(ids) {
  quizState.confirmed = quizState.confirmed.filter((id) => !ids.includes(id))
}

function resetDependentQuizFields(fieldName) {
  if (fieldName === 'role') {
    const role = quizState.role
    quizState = createEmptyQuizState()
    quizState.role = role
    return
  }

  if (fieldName === 'parentDiagnosis') {
    quizState.childAge = null
    quizState.child18Months = ''
    quizState.feeding = ''
    quizState.social = ''
    quizState.classroom = ''
    return
  }

  if (fieldName === 'childAge') {
    quizState.child18Months = ''
    quizState.feeding = ''
    quizState.social = ''
    quizState.classroom = ''
    return
  }

  if (fieldName === 'experienceLength' && quizState.experienceLength === 'none') {
    quizState.experienceSettings = []
    quizState.experienceAges = []
    dropConfirmedQuizSteps(['experienceSettings', 'experienceAges'])
  }
}

function syncQuizMultiValue(fieldName, values) {
  const unique = [...new Set(values)]
  if (fieldName === 'credentials' && unique.includes('none-yet') && unique.length > 1) {
    const last = unique[unique.length - 1]
    quizState.credentials = last === 'none-yet' ? ['none-yet'] : unique.filter((id) => id !== 'none-yet')
    return
  }

  if (fieldName === 'experienceSettings' && unique.includes('none-children') && unique.length > 1) {
    const last = unique[unique.length - 1]
    quizState.experienceSettings = last === 'none-children' ? ['none-children'] : unique.filter((id) => id !== 'none-children')
    return
  }

  quizState[fieldName] = unique
}

function focusQuizQuestion() {
  const age = document.querySelector('[data-quiz-age]')
  if (age instanceof HTMLElement) {
    age.focus({ preventScroll: true })
    return
  }

  const heading = document.querySelector('[data-quiz-question]')
  if (heading instanceof HTMLElement) {
    heading.focus({ preventScroll: true })
  }
}

function refreshContactQuiz(content, { direction = 'none' } = {}) {
  window.clearTimeout(bindContactQuizControls.advanceTimer)
  const root = document.querySelector('[data-contact-quiz]')
  if (!root) {
    return
  }

  const token = ++quizRefreshToken
  const stage = root.querySelector('[data-quiz-stage]')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const enterDirection = direction === 'back' ? 'back' : direction === 'forward' ? 'forward' : 'none'

  const paint = () => {
    if (token !== quizRefreshToken) {
      return
    }
    persistQuizPrefill(getQuiz(content))
    const current = document.querySelector('[data-contact-quiz]')
    if (!current) {
      return
    }
    const markup = renderContactQuizInner(content, enterDirection)
    const next = document.createElement('div')
    next.innerHTML = markup
    const currentStage = current.querySelector('[data-quiz-stage]')
    const nextStage = next.querySelector('[data-quiz-stage]')
    const currentFill = current.querySelector('.quiz-progress-fill')
    const nextFill = next.querySelector('.quiz-progress-fill')
    if (currentStage && nextStage && currentFill && nextFill) {
      const currentTrack = current.querySelector('.quiz-progress-track')
      const nextTrack = next.querySelector('.quiz-progress-track')
      const currentLabel = current.querySelector('.quiz-progress-label')
      const nextLabel = next.querySelector('.quiz-progress-label')
      const currentFooter = current.querySelector('.quiz-footer-links')
      const nextFooter = next.querySelector('.quiz-footer-links')
      if (currentTrack && nextTrack) {
        for (const name of ['aria-valuemin', 'aria-valuemax', 'aria-valuenow', 'aria-label', 'aria-labelledby']) {
          const value = nextTrack.getAttribute(name)
          if (value == null) {
            currentTrack.removeAttribute(name)
          } else {
            currentTrack.setAttribute(name, value)
          }
        }
      }
      if (currentLabel && nextLabel) {
        currentLabel.textContent = nextLabel.textContent
        currentLabel.hidden = nextLabel.hidden
      }
      currentFill.style.transform = nextFill.style.transform
      currentStage.innerHTML = nextStage.innerHTML
      const nextMotion = nextStage.dataset.motion ?? 'none'
      if (currentStage.dataset.motion === nextMotion) {
        currentStage.dataset.motion = 'none'
        void currentStage.offsetWidth
      }
      currentStage.dataset.motion = nextMotion
      if (currentFooter && nextFooter) {
        currentFooter.innerHTML = nextFooter.innerHTML
      }
    } else {
      current.innerHTML = markup
    }
    bindContactQuizControls(content)
    if (direction !== 'none') {
      focusQuizQuestion()
    }
  }

  if (!stage || reduceMotion || direction === 'none') {
    paint()
    return
  }

  let settled = false
  const finish = (event) => {
    if (event && event.target !== stage) {
      return
    }
    if (settled) {
      return
    }
    settled = true
    stage.removeEventListener('animationend', finish)
    window.clearTimeout(stage.leaveTimer)
    try {
      paint()
    } catch (error) {
      console.error(error)
      const current = document.querySelector('[data-contact-quiz]')
      if (current) {
        current.innerHTML = renderContactQuizInner(content, 'none')
        bindContactQuizControls(content)
      }
    }
  }

  stage.dataset.motion = direction === 'back' ? 'leave-back' : 'leave-forward'
  stage.addEventListener('animationend', finish)
  stage.leaveTimer = window.setTimeout(finish, 320)
}

function bindQuizOptionKeys(group) {
  group.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
      return
    }

    const options = [...group.querySelectorAll('.quiz-option')]
    const index = options.indexOf(document.activeElement)
    if (index === -1) {
      return
    }

    event.preventDefault()
    const offset = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1
    const next = options[(index + offset + options.length) % options.length]
    options.forEach((option) => {
      option.tabIndex = option === next ? 0 : -1
    })
    next.focus()
  })
}

function paintQuizMulti(root, fieldName) {
  const selected = new Set(quizState[fieldName] ?? [])
  root.querySelectorAll(`[data-quiz-multi="${fieldName}"]`).forEach((button) => {
    const on = selected.has(button.dataset.quizValue)
    button.classList.toggle('is-selected', on)
    button.setAttribute('aria-checked', on ? 'true' : 'false')
  })
  const continueButton = root.querySelector('[data-quiz-continue]')
  if (continueButton) {
    continueButton.disabled = selected.size === 0
  }
}

function bindContactQuizControls(content) {
  const root = document.querySelector('[data-contact-quiz]')
  if (!root) {
    return
  }

  const quiz = getQuiz(content)
  persistQuizPrefill(quiz)

  root.querySelectorAll('.quiz-options').forEach((group) => {
    bindQuizOptionKeys(group)
  })

  root.querySelectorAll('[data-quiz-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.quizChoice
      const value = button.dataset.quizValue
      root.querySelectorAll(`[data-quiz-choice="${name}"]`).forEach((option) => {
        const on = option === button
        option.classList.toggle('is-selected', on)
        option.setAttribute('aria-checked', on ? 'true' : 'false')
      })
      const changed = quizState[name] !== value
      quizState[name] = value
      if (changed) {
        resetDependentQuizFields(name)
      }
      quizState.editing = ''
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.clearTimeout(bindContactQuizControls.advanceTimer)
      bindContactQuizControls.advanceTimer = window.setTimeout(
        () => {
          refreshContactQuiz(content, { direction: 'forward' })
        },
        reduceMotion ? 0 : 160,
      )
    })
  })

  root.querySelectorAll('[data-quiz-multi]').forEach((button) => {
    button.addEventListener('click', () => {
      const fieldName = button.dataset.quizMulti
      const value = button.dataset.quizValue
      const current = new Set(quizState[fieldName] ?? [])
      if (current.has(value)) {
        current.delete(value)
      } else {
        current.add(value)
      }
      syncQuizMultiValue(fieldName, [...current])
      if ((quizState[fieldName] ?? []).length === 0) {
        dropConfirmedQuizSteps([fieldName])
      }
      if (fieldName === 'experienceSettings' && (quizState.experienceSettings.length === 0 || quizState.experienceSettings.includes('none-children'))) {
        quizState.experienceAges = []
        dropConfirmedQuizSteps(['experienceAges'])
      }
      paintQuizMulti(root, fieldName)
    })
  })

  const ageInput = root.querySelector('[data-quiz-age]')
  const continueButton = root.querySelector('[data-quiz-continue]')
  if (ageInput && continueButton) {
    ageInput.addEventListener('input', () => {
      continueButton.disabled = parseChildAge(ageInput.value) == null
    })
    ageInput.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') {
        return
      }
      event.preventDefault()
      continueButton.click()
    })
  }

  continueButton?.addEventListener('click', () => {
    const fieldName = continueButton.dataset.quizContinue
    if (fieldName === 'childAge') {
      const age = parseChildAge(ageInput?.value)
      if (age == null) {
        return
      }
      const changed = quizState.childAge !== age
      quizState.childAge = age
      if (changed) {
        resetDependentQuizFields('childAge')
      }
      quizState.editing = ''
      refreshContactQuiz(content, { direction: 'forward' })
      return
    }

    if (!fieldName || !(quizState[fieldName]?.length ?? 0)) {
      return
    }
    if (!quizState.confirmed.includes(fieldName)) {
      quizState.confirmed = [...quizState.confirmed, fieldName]
    }
    quizState.editing = ''
    refreshContactQuiz(content, { direction: 'forward' })
  })

  root.querySelector('[data-quiz-back]')?.addEventListener('click', () => {
    const { steps, step, showingResult } = getCurrentQuizStep(quizState, quiz)
    const index = showingResult ? steps.length : steps.findIndex((item) => item.id === step?.id)
    const previous = steps[index - 1]
    if (!previous) {
      return
    }
    quizState.editing = previous.id
    refreshContactQuiz(content, { direction: 'back' })
  })

  root.querySelectorAll('[data-quiz-prefill]').forEach((link) => {
    link.addEventListener('click', () => {
      const payload = buildQuizPrefill(quizState, quiz)
      if (payload) {
        writeQuizPrefill(payload)
      }
    })
  })
}

function bindContactAside() {
  const panel = document.querySelector('[data-contact-aside]')
  if (!(panel instanceof HTMLDetailsElement)) {
    return
  }

  const wide = window.matchMedia('(min-width: 981px)')
  const sync = () => {
    panel.open = wide.matches
  }

  sync()
  wide.addEventListener('change', sync)
}

function bindContactQuiz(content) {
  if (PAGE !== 'contact' || !getQuiz(content)) {
    return
  }

  bindContactQuizControls(content)

  if (!bindContactQuiz.persistsOnShow) {
    bindContactQuiz.persistsOnShow = true
    window.addEventListener('pageshow', () => {
      if (PAGE === 'contact') {
        persistQuizPrefill(getQuiz(getContent()))
      }
    })
  }
}

function renderResourcesIndex(content) {
  const resources = content.sections.resources
  return `<section class="section resources-section page-section">
        ${renderSectionHeading('', resources.title, resources.intro)}
        <div class="faq-search-panel">
          ${renderFaqSearch(content)}
          <div class="faq-search-results" data-faq-search-results hidden></div>
        </div>
        ${renderResourceCards(resources.items, resources.cardLabel)}
        ${resources.formsPromo ? renderFormsPromo(resources.formsPromo, { variant: 'secondary' }) : ''}
      </section>`
}

function renderResourceTopic(content) {
  const category = content.sections.resources.categories.find((item) => item.slug === RESOURCE_SLUG)
  if (!category) {
    return `<section class="section page-section"><p>Resource not found.</p></section>`
  }

  return `<section class="section resources-section page-section">
        <a class="back-button" href="${escapeHtml(toStaticHref('/resources'))}">
          <span aria-hidden="true">←</span> ${escapeHtml(content.ui.backToResources)}
        </a>
        ${renderFaqCategory(category, content)}
      </section>
      ${renderServiceDisclaimer(content)}`
}

function renderMain(content) {
  let mainHtml = ''

  switch (PAGE) {
    case 'aba':
      mainHtml = renderAbaPage(content)
      break
    case 'early-learners':
      mainHtml = renderProgramDetailPage(content, 'early-learners', content.sections.earlyLearners)
      break
    case 'feeding-program':
      mainHtml = renderProgramDetailPage(content, 'feeding', content.sections.feedingProgram)
      break
    case 'social-enrichment':
      mainHtml = renderProgramDetailPage(content, 'social-enrichment', content.sections.socialEnrichment)
      break
    case 'social-skills-group':
      mainHtml = renderProgramDetailPage(content, 'social-skills', content.sections.socialSkillsGroup)
      break
    case 'group-parent-training':
      mainHtml = renderProgramDetailPage(
        content,
        'group-parent-training',
        content.sections.groupParentTraining,
      )
      break
    case 'get-started':
      mainHtml = renderProcessPage(content)
      break
    case 'insurance':
      mainHtml = renderInsurancePage(content)
      break
    case 'resources':
      mainHtml = renderResourcesIndex(content)
      break
    case 'resource':
      mainHtml = renderResourceTopic(content)
      break
    case 'forms':
      mainHtml = renderFormsPage(content)
      break
    case 'about':
      mainHtml = renderAboutPage(content)
      break
    case 'career':
    case 'careers':
      mainHtml = renderCareerPage(content)
      break
    case 'career-apply':
      mainHtml = renderCareerApplicationPage(content)
      break
    case 'contact':
      mainHtml = renderContactQuizPage(content)
      break
    case 'contact-request':
    case 'contact-referral':
      mainHtml = renderContactPage(content)
      break
    case 'thank-you':
      mainHtml = renderThankYouPage(content)
      break
    case 'privacy':
    case 'terms':
    case 'accessibility':
    case 'nondiscrimination':
    case 'notice-of-privacy-practices':
      mainHtml = renderLegalPage(content, LEGAL_PAGE_KEYS[PAGE])
      break
    default:
      mainHtml = renderHome(content)
  }

  return mainHtml
}

function bindHeaderMenus() {
  const header = document.querySelector('.site-header')
  if (!header) {
    return
  }

  const menus = header.querySelectorAll('details')

  menus.forEach((menu) => {
    menu.addEventListener('toggle', () => {
      if (!menu.open) {
        return
      }

      menus.forEach((openMenu) => {
        if (openMenu !== menu) {
          openMenu.open = false
        }
      })
    })

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.open = false
      })
    })
  })

  if (bindHeaderMenus.outsideHandler) {
    document.removeEventListener('click', bindHeaderMenus.outsideHandler)
  }

  bindHeaderMenus.outsideHandler = (event) => {
    if (!(event.target instanceof Element)) {
      return
    }

    if (event.target.closest('.site-header details')) {
      return
    }

    menus.forEach((menu) => {
      menu.open = false
    })
  }

  document.addEventListener('click', bindHeaderMenus.outsideHandler)
}

function syncHeaderOffset() {
  const header = document.querySelector('.site-header')
  if (!header) {
    return
  }

  const height = Math.ceil(header.getBoundingClientRect().height)
  document.documentElement.style.setProperty('--header-offset', `${height}px`)
}

function bindHeaderOffset() {
  if (bindHeaderOffset.observer) {
    bindHeaderOffset.observer.disconnect()
    bindHeaderOffset.observer = null
  }

  syncHeaderOffset()

  const header = document.querySelector('.site-header')
  if (!header || typeof ResizeObserver !== 'function') {
    return
  }

  bindHeaderOffset.observer = new ResizeObserver(() => {
    syncHeaderOffset()
  })
  bindHeaderOffset.observer.observe(header)
}

function bindMobileMenu() {
  const toggle = document.querySelector('.menu-toggle')
  const drawer = document.getElementById('site-menu-drawer')
  const backdrop = document.querySelector('[data-site-menu-backdrop]')
  const closeButton = document.querySelector('.menu-close')

  if (!toggle || !drawer || !backdrop) {
    return
  }

  const setOpen = (open) => {
    document.body.classList.toggle('site-menu-open', open)
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true')
    backdrop.hidden = !open
  }

  toggle.addEventListener('click', () => {
    setOpen(!document.body.classList.contains('site-menu-open'))
  })

  closeButton?.addEventListener('click', () => {
    setOpen(false)
  })

  backdrop.addEventListener('click', () => {
    setOpen(false)
  })

  const setGroupOpen = (group, open) => {
    const button = group.querySelector('.site-menu-expand, .site-menu-expand-row')
    const panel = group.querySelector('.site-menu-panel')
    if (!button || !panel) {
      return
    }

    group.classList.toggle('is-open', open)
    button.setAttribute('aria-expanded', open ? 'true' : 'false')
    panel.hidden = !open
  }

  drawer.querySelectorAll('.site-menu-expand, .site-menu-expand-row').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.closest('.site-menu-group')
      if (!group) {
        return
      }

      setGroupOpen(group, button.getAttribute('aria-expanded') !== 'true')
    })
  })

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setOpen(false)
    })
  })

  if (bindMobileMenu.escapeHandler) {
    document.removeEventListener('keydown', bindMobileMenu.escapeHandler)
  }

  bindMobileMenu.escapeHandler = (event) => {
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  document.addEventListener('keydown', bindMobileMenu.escapeHandler)
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function inkRadius(x, y) {
  const width = window.innerWidth
  const height = window.innerHeight
  return Math.hypot(Math.max(x, width - x), Math.max(y, height - y)) + 12
}

function playSubmitInk(button, message) {
  if (prefersReducedMotion() || !(button instanceof HTMLElement)) {
    return { reduced: true, startedAt: performance.now(), x: 0, y: 0, dur: 0, ink: null }
  }

  const rect = button.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2
  const radius = inkRadius(x, y)
  const dur = Math.min(720, Math.max(480, radius * 0.45))
  const ink = document.createElement('div')
  ink.className = 'submit-ink'
  ink.style.setProperty('--ink-x', `${x}px`)
  ink.style.setProperty('--ink-y', `${y}px`)
  ink.style.setProperty('--ink-r', `${radius}px`)
  ink.style.setProperty('--ink-dur', `${dur}ms`)
  ink.innerHTML = `<p class="submit-ink-status" aria-live="polite">${escapeHtml(message)}</p>`
  document.body.appendChild(ink)
  document.body.classList.add('is-ink-submitting')
  button.classList.add('is-ink-origin')

  return { reduced: false, startedAt: performance.now(), x, y, dur, ink, button }
}

async function holdSubmitInk(session) {
  if (session.reduced || !session.ink) {
    return
  }

  const elapsed = performance.now() - session.startedAt
  const wait = Math.max(0, session.dur + 400 - elapsed)
  if (wait) {
    await new Promise((resolve) => {
      window.setTimeout(resolve, wait)
    })
  }

  if (session.cancelled) {
    return
  }

  session.ink.classList.add('is-holding')
}

function navigateWithInk(session, formVariant, receipt = null) {
  if (!session.reduced) {
    sessionStorage.setItem(
      INK_HANDOFF_KEY,
      JSON.stringify({
        x: session.x,
        y: session.y,
        form: formVariant,
        t: Date.now(),
        receipt,
      }),
    )
  }

  window.location.assign(`${toStaticHref('/thank-you')}?form=${encodeURIComponent(formVariant)}`)
}

function reverseSubmitInk(session) {
  session.cancelled = true
  document.body.classList.remove('is-ink-submitting')
  session.button?.classList.remove('is-ink-origin')

  if (!session.ink) {
    return Promise.resolve()
  }

  session.ink.classList.remove('is-holding')
  session.ink.classList.add('is-contracting')

  return new Promise((resolve) => {
    let settled = false
    const finish = () => {
      if (settled) {
        return
      }
      settled = true
      session.ink.remove()
      resolve()
    }

    session.ink.addEventListener('animationend', finish, { once: true })
    window.setTimeout(finish, 280)
  })
}

function readThankYouVariant() {
  const params = new URLSearchParams(window.location.search)
  const form = params.get('form')
  if (form === 'family' || form === 'referral' || form === 'career') {
    return form
  }
  return 'default'
}

function bindIntakeReceipt() {
  document.querySelectorAll('[data-copy-reference]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copyReference
      try {
        await navigator.clipboard.writeText(value)
      } catch {
        const field = document.createElement('textarea')
        field.value = value
        field.setAttribute('readonly', '')
        field.style.position = 'fixed'
        field.style.left = '-9999px'
        document.body.appendChild(field)
        field.select()
        document.execCommand('copy')
        field.remove()
      }
      const copied = button.dataset.copiedLabel
      button.textContent = copied
      window.setTimeout(() => {
        button.textContent = button.dataset.copyLabel
      }, 1600)
    })
  })

  document.querySelector('[data-clear-receipt]')?.addEventListener('click', () => {
    clearIntakeReceipt()
    render()
  })
}

function bindInkArrival() {
  const root = document.documentElement
  if (!root.classList.contains('is-ink-arrival')) {
    return
  }

  const ink = document.createElement('div')
  ink.className = 'submit-ink is-holding'
  ink.style.setProperty('--ink-x', root.style.getPropertyValue('--ink-x') || '50%')
  ink.style.setProperty('--ink-y', root.style.getPropertyValue('--ink-y') || '50%')
  document.body.appendChild(ink)

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      root.classList.remove('is-ink-arrival')
      ink.classList.add('is-dismissing')
      document.dispatchEvent(new CustomEvent('vtcc-ink-reveal'))
    })
  })

  ink.addEventListener(
    'animationend',
    () => {
      ink.remove()
    },
    { once: true },
  )
}

window.addEventListener('pageswap', (event) => {
  let handoff = null
  try {
    handoff = JSON.parse(sessionStorage.getItem(INK_HANDOFF_KEY) ?? 'null')
  } catch {
    handoff = null
  }

  if (handoff && Date.now() - handoff.t < INK_MAX_AGE_MS && event.viewTransition?.skipTransition) {
    event.viewTransition.skipTransition()
  }
})

function setFormStatus(form, message, status = 'idle') {
  const statusNode = form.querySelector('[data-form-status]')
  if (!statusNode) {
    return
  }

  statusNode.textContent = message
  statusNode.dataset.status = status
}

const FORMSPREE_FORMS = {
  service_request: {
    configKey: 'serviceRequest',
    subject: 'New VTCC service request',
    labels: {
      name: 'Parent or guardian name',
      email: 'Email',
      phone: 'Phone',
      preferredContact: 'Preferred contact method',
      ageRange: "Child's age range",
      service: 'Service interest',
      funding: 'Funding source',
      location: 'City or county',
      message: 'Message',
    },
  },
  referral: {
    configKey: 'referral',
    subject: 'New VTCC referral inquiry',
    labels: {
      name: 'Referrer name',
      organization: 'Organization or agency',
      role: 'Role',
      email: 'Work email',
      phone: 'Work phone',
      preferredContact: 'Preferred contact method',
      parentName: 'Parent or guardian name',
      parentPhone: 'Parent or guardian phone',
      ageRange: "Child's age range",
      service: 'Service requested',
      funding: 'Funding source',
      location: "Child's city or county",
      message: 'Reason for referral',
    },
  },
  career: {
    configKey: 'career',
    subject: 'New VTCC career application',
    labels: {
      fullName: 'Full name',
      email: 'Email',
      phone: 'Phone',
      role: 'Role of interest',
      location: 'City and state',
      workAuthorization: 'Work authorization',
      experience: 'Relevant experience',
      coverLetter: 'Interest in VTCC',
    },
  },
}

function readFormFields(form) {
  const formData = new FormData(form)
  const fields = {}

  for (const [name, value] of formData.entries()) {
    if (typeof value !== 'string') {
      continue
    }

    const trimmed = value.trim()
    if (!trimmed) {
      continue
    }

    fields[name] = fields[name] ? `${fields[name]}, ${trimmed}` : trimmed
  }

  return fields
}

function buildFormspreePayload(formType, fields, receipt = null) {
  const config = FORMSPREE_FORMS[formType]
  if (!config) {
    throw new Error('Unknown form type')
  }

  const payload = {
    _subject: receipt?.reference ? `${config.subject} (${receipt.reference})` : config.subject,
    _gotcha: fields._gotcha ?? '',
  }

  const replyTo = fields.email
  if (replyTo) {
    payload._replyto = replyTo
  }

  for (const [name, label] of Object.entries(config.labels)) {
    const value = fields[name]
    if (value == null || value === '') {
      continue
    }

    payload[label] = value
  }

  payload.Consent = 'Yes'
  payload.Language = getLocale() === 'es' ? 'Spanish' : 'English'
  payload.Page = PAGE_SECTION_PATHS[PAGE] ?? window.location.pathname

  if (formType === 'service_request' || formType === 'referral') {
    payload['Reference number'] = receipt?.reference ?? 'pending'
    if (receipt?.submittedAt) {
      payload.Submitted = formatSubmittedStamp(receipt.submittedAt)
    }
  }

  return { config, payload }
}

async function requestReferenceNumber() {
  const attempt = async () => {
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), 4000)
    try {
      const response = await fetch('/api/reference', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      })
      if (!response.ok) {
        throw new Error('Reference request failed')
      }
      const data = await response.json()
      if (!/^\d{8}$/.test(data?.reference)) {
        throw new Error('Invalid reference number')
      }
      const submittedAt = data.issuedAt && !Number.isNaN(Date.parse(data.issuedAt))
        ? data.issuedAt
        : new Date().toISOString()
      return { reference: data.reference, submittedAt }
    } finally {
      window.clearTimeout(timer)
    }
  }

  try {
    return await attempt()
  } catch {
    return attempt()
  }
}

async function submitFormspree(formType, fields, file = null, receipt = null) {
  const { config, payload } = buildFormspreePayload(formType, fields, receipt)
  const formId = String(window.VTCC_SITE?.formspree?.[config.configKey] ?? '').trim()
  if (!formId) {
    throw new Error('Formspree form is not configured')
  }

  const endpoint = `https://formspree.io/f/${formId}`
  let response

  if (file) {
    const body = new FormData()
    for (const [key, value] of Object.entries(payload)) {
      body.append(key, value)
    }
    body.append('Resume', file, file.name)
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body,
    })
  } else {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  }

  if (!response.ok) {
    throw new Error('Form submission failed')
  }
}

function whenDocumentActive(callback) {
  if (document.prerendering) {
    document.addEventListener('prerenderingchange', callback, { once: true })
    return
  }

  callback()
}

function applyQuizPrefillToForm(form, content, expectedForm) {
  if (document.prerendering) {
    whenDocumentActive(() => applyQuizPrefillToForm(form, content, expectedForm))
    return
  }

  const prefill = readQuizPrefill()
  if (!prefill || prefill.form !== expectedForm) {
    return
  }

  const fields = { ...prefill.fields }
  const quiz = getQuiz(content)
  if (fields.serviceId) {
    fields.serviceIds = [fields.serviceId]
    delete fields.serviceId
  }
  if (Array.isArray(fields.serviceIds)) {
    fields.service = fields.serviceIds.map((id) => quiz?.serviceValues?.[id] ?? id)
    delete fields.serviceIds
  }

  Object.entries(fields).forEach(([name, value]) => {
    if (value == null || value === '' || (Array.isArray(value) && value.length === 0)) {
      return
    }

    const multi = form.querySelector(`[data-multi-select][data-name="${CSS.escape(name)}"]`)
    if (multi) {
      setMultiSelectValues(multi, value)
      return
    }

    const field = form.elements.namedItem(name)
    if (!field || !('value' in field)) {
      return
    }

    if (field instanceof HTMLSelectElement) {
      const hasOption = Array.from(field.options).some((option) => option.value === value)
      if (hasOption) {
        field.value = value
      }
      return
    }

    field.value = String(value)
  })

  clearQuizPrefill()
}

function selectedMultiValues(root) {
  return [...root.querySelectorAll('.multi-select-input:checked')].map((input) => input.value)
}

function refreshMultiSelect(root) {
  const values = selectedMultiValues(root)
  const summary = root.querySelector('[data-multi-summary]')
  if (values.length === 0) {
    summary.textContent = root.dataset.placeholder ?? ''
    root.classList.remove('has-value')
  } else {
    summary.textContent = values.join(', ')
    root.classList.add('has-value')
  }

  root.querySelectorAll('.multi-select-option').forEach((option) => {
    const input = option.nextElementSibling
    const selected = Boolean(input?.checked)
    option.classList.toggle('is-selected', selected)
    option.setAttribute('aria-selected', selected ? 'true' : 'false')
  })
}

function setMultiSelectValues(root, values) {
  const wanted = new Set(Array.isArray(values) ? values : [values])
  root.querySelectorAll('.multi-select-input').forEach((input) => {
    input.checked = wanted.has(input.value)
  })
  refreshMultiSelect(root)
}

function closeMultiSelect(root) {
  const trigger = root.querySelector('.multi-select-trigger')
  const panel = root.querySelector('.multi-select-panel')
  root.classList.remove('is-open')
  trigger?.setAttribute('aria-expanded', 'false')
  if (panel) {
    panel.hidden = true
  }
}

function toggleMultiOption(option) {
  const input = option.nextElementSibling
  if (!(input instanceof HTMLInputElement)) {
    return
  }

  const root = option.closest('[data-multi-select]')
  const scope = option.closest('[data-multi-group]') ?? root
  const willSelect = !input.checked
  if (willSelect && option.dataset.solo === 'true') {
    scope.querySelectorAll('.multi-select-input').forEach((other) => {
      other.checked = false
    })
  }
  if (willSelect && option.dataset.solo !== 'true') {
    scope.querySelectorAll('.multi-select-option[data-solo="true"]').forEach((soloOption) => {
      const soloInput = soloOption.nextElementSibling
      if (soloInput instanceof HTMLInputElement) {
        soloInput.checked = false
      }
    })
  }
  input.checked = willSelect
  refreshMultiSelect(root)
}

function bindMultiSelects(scope) {
  if (!document.documentElement.dataset.multiSelectDismiss) {
    document.documentElement.dataset.multiSelectDismiss = 'true'
    document.addEventListener('pointerdown', (event) => {
      document.querySelectorAll('[data-multi-select].is-open').forEach((root) => {
        if (!root.contains(event.target)) {
          closeMultiSelect(root)
        }
      })
    })
  }

  scope.querySelectorAll('[data-multi-select]').forEach((root) => {
    if (root.dataset.bound === 'true') {
      return
    }
    root.dataset.bound = 'true'
    const trigger = root.querySelector('.multi-select-trigger')
    const panel = root.querySelector('.multi-select-panel')
    refreshMultiSelect(root)

    trigger.addEventListener('click', () => {
      const willOpen = panel.hidden
      document.querySelectorAll('[data-multi-select].is-open').forEach((open) => {
        if (open !== root) {
          closeMultiSelect(open)
        }
      })
      root.classList.toggle('is-open', willOpen)
      trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false')
      panel.hidden = !willOpen
    })

    panel.addEventListener('click', (event) => {
      const option = event.target.closest('.multi-select-option')
      if (!option || !panel.contains(option)) {
        return
      }
      toggleMultiOption(option)
    })

    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMultiSelect(root)
        trigger.focus()
      }
    })
  })
}

function bindRequestForms(content) {
  document.querySelectorAll('.request-form[data-form-type]').forEach((form) => {
    bindMultiSelects(form)
    const expectedForm = form.dataset.formType === 'referral' ? 'referral' : 'family'
    applyQuizPrefillToForm(form, content, expectedForm)

    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      if (!form.checkValidity()) {
        form.reportValidity()
        return
      }

      const submitButton = form.querySelector('button[type="submit"]')
      const defaultLabel = submitButton?.dataset.defaultLabel ?? submitButton?.textContent ?? ''
      const submittingLabel = content.ui.formSubmitting ?? 'Sending...'
      const ink = playSubmitInk(
        submitButton,
        content.ui.formSubmittingAnnouncement ?? submittingLabel,
      )

      submitButton.disabled = true
      submitButton.textContent = submittingLabel
      setFormStatus(form, '', 'idle')

      try {
        const formType = form.dataset.formType
        const tracksReceipt = formType === 'service_request' || formType === 'referral'
        let receipt = null
        if (tracksReceipt) {
          try {
            receipt = await requestReferenceNumber()
          } catch {
            receipt = null
          }
        }
        const posted = submitFormspree(formType, readFormFields(form), null, receipt)
        const held = holdSubmitInk(ink)
        await posted
        await held
        const variant = formType === 'referral' ? 'referral' : 'family'
        if (receipt) {
          const stored = { reference: receipt.reference, submittedAt: receipt.submittedAt, form: variant }
          writeIntakeReceipt(stored)
          navigateWithInk(ink, variant, stored)
        } else {
          navigateWithInk(ink, variant)
        }
      } catch {
        await reverseSubmitInk(ink)
        setFormStatus(
          form,
          content.ui.formError ??
            'We could not send this form. Please call VTCC or try again later.',
          'error',
        )
        submitButton.disabled = false
        submitButton.textContent = defaultLabel
      }
    })
  })
}

function setCareersTab(tabId) {
  const board = document.querySelector('[data-careers-board]')
  if (!board || !CAREERS_TAB_IDS.includes(tabId)) {
    return
  }

  board.querySelectorAll('[data-careers-tab]').forEach((button) => {
    const selected = button.dataset.careersTab === tabId
    button.classList.toggle('is-active', selected)
    button.setAttribute('aria-selected', selected ? 'true' : 'false')
    button.tabIndex = selected ? 0 : -1
  })

  board.querySelectorAll('[data-careers-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.careersPanel !== tabId
  })
}

function bindCareersPage(content) {
  const expandLabel = content?.ui?.careerExpandLabel ?? 'Show this section'
  const collapseLabel = content?.ui?.careerCollapseLabel ?? 'Hide this section'
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  const setDisclosureLabel = (trigger, open) => {
    const state = trigger.querySelector('[data-disclosure-state]')
    if (state) {
      state.textContent = open ? collapseLabel : expandLabel
    }
  }

  const openDisclosure = (section, { scroll = false } = {}) => {
    const panel = section.querySelector('[data-disclosure-panel]')
    const trigger = section.querySelector('[data-disclosure-trigger]')
    if (!panel || !trigger) {
      return
    }

    window.clearTimeout(section.disclosureTimer)
    panel.removeAttribute('hidden')

    const reveal = () => {
      section.classList.add('is-open')
      trigger.setAttribute('aria-expanded', 'true')
      setDisclosureLabel(trigger, true)
      if (scroll) {
        section.scrollIntoView({ behavior: motionQuery.matches ? 'auto' : 'smooth', block: 'start' })
      }
    }

    if (section.classList.contains('is-open')) {
      if (scroll) {
        section.scrollIntoView({ behavior: motionQuery.matches ? 'auto' : 'smooth', block: 'start' })
      }
      return
    }

    if (motionQuery.matches) {
      reveal()
      return
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(reveal)
    })
  }

  const closeDisclosure = (section) => {
    const panel = section.querySelector('[data-disclosure-panel]')
    const trigger = section.querySelector('[data-disclosure-trigger]')
    if (!panel || !trigger || !section.classList.contains('is-open')) {
      return
    }

    section.classList.remove('is-open')
    trigger.setAttribute('aria-expanded', 'false')
    setDisclosureLabel(trigger, false)

    const finish = () => {
      if (!section.classList.contains('is-open')) {
        panel.setAttribute('hidden', 'until-found')
      }
    }

    if (motionQuery.matches) {
      finish()
      return
    }

    const onEnd = (event) => {
      if (event.target !== panel || event.propertyName !== 'grid-template-rows') {
        return
      }
      panel.removeEventListener('transitionend', onEnd)
      window.clearTimeout(section.disclosureTimer)
      finish()
    }

    panel.addEventListener('transitionend', onEnd)
    section.disclosureTimer = window.setTimeout(() => {
      panel.removeEventListener('transitionend', onEnd)
      finish()
    }, 450)
  }

  document.querySelectorAll('[data-disclosure]').forEach((section) => {
    const trigger = section.querySelector('[data-disclosure-trigger]')
    const panel = section.querySelector('[data-disclosure-panel]')
    if (!trigger || !panel) {
      return
    }

    trigger.addEventListener('click', () => {
      if (section.classList.contains('is-open')) {
        closeDisclosure(section)
        return
      }
      openDisclosure(section)
    })

    panel.addEventListener('beforematch', () => {
      section.classList.add('is-open')
      trigger.setAttribute('aria-expanded', 'true')
      setDisclosureLabel(trigger, true)
    })
  })

  const board = document.querySelector('[data-careers-board]')
  const tabButtons = board ? Array.from(board.querySelectorAll('[data-careers-tab]')) : []

  const activate = (tabId, { updateHash = true } = {}) => {
    setCareersTab(tabId)

    if (updateHash) {
      const nextHash = `#${tabId}`
      if (window.location.hash !== nextHash) {
        history.replaceState(null, '', nextHash)
      }
    }
  }

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      activate(button.dataset.careersTab)
    })

    button.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
        return
      }

      event.preventDefault()
      const offset = event.key === 'ArrowRight' ? 1 : -1
      const next = tabButtons[(index + offset + tabButtons.length) % tabButtons.length]
      next.focus()
      activate(next.dataset.careersTab)
    })
  })

  document.querySelectorAll('[data-apply-role]').forEach((link) => {
    link.addEventListener('click', () => {
      if (link.dataset.applyRole) {
        sessionStorage.setItem(CAREER_ROLE_STORAGE_KEY, link.dataset.applyRole)
      }
    })
  })

  const applyHash = () => {
    const hash = window.location.hash.replace('#', '')
    if (CAREERS_TAB_IDS.includes(hash)) {
      activate(hash, { updateHash: false })
      return
    }
    if (!CAREER_DISCLOSURE_IDS.includes(hash)) {
      return
    }
    const section = document.getElementById(hash)
    if (section) {
      openDisclosure(section, { scroll: true })
    }
  }

  applyHash()

  if (bindCareersPage.hashHandler) {
    window.removeEventListener('hashchange', bindCareersPage.hashHandler)
  }

  bindCareersPage.hashHandler = applyHash
  window.addEventListener('hashchange', bindCareersPage.hashHandler)
}

function bindCareerApplication(content) {
  const form = document.querySelector('[data-career-form]')
  const fileInput = form?.querySelector('[data-career-file-input]')
  const dropzone = form?.querySelector('[data-career-dropzone]')
  const fileName = form?.querySelector('[data-career-file-name]')
  const filePrompt = form?.querySelector('[data-career-file-prompt]')
  const removeButton = form?.querySelector('[data-career-file-remove]')
  const fileError = form?.querySelector('[data-career-file-error]')
  const status = form?.querySelector('[data-career-form-status]')
  const submitButton = form?.querySelector('button[type="submit"]')

  if (!form || !status || !submitButton) {
    return
  }

  const uploadsEnabled = Boolean(
    resumeUploadsEnabled() && fileInput && dropzone && fileName && filePrompt && removeButton && fileError,
  )

  const roleSelect = form.querySelector('select[name="role"]')
  const storedRole = sessionStorage.getItem(CAREER_ROLE_STORAGE_KEY)
  if (roleSelect && storedRole) {
    const hasOption = Array.from(roleSelect.options).some((option) => option.value === storedRole)
    if (hasOption) {
      roleSelect.value = storedRole
    }
    sessionStorage.removeItem(CAREER_ROLE_STORAGE_KEY)
  }

  applyQuizPrefillToForm(form, content, 'career')

  const maxFileSize = 5 * 1024 * 1024
  const allowedExtensions = ['.pdf', '.doc', '.docx', '.txt']
  let selectedFile = null

  const setStatus = (message, state = 'idle') => {
    status.textContent = message
    status.dataset.status = state
  }

  const setFileError = (message) => {
    fileError.textContent = message
    fileError.hidden = !message
    dropzone.classList.toggle('is-invalid', Boolean(message))
    fileInput.setAttribute('aria-invalid', message ? 'true' : 'false')
  }

  const resetFile = () => {
    selectedFile = null
    fileInput.value = ''
    fileInput.setCustomValidity('')
    fileName.textContent = ''
    fileName.hidden = true
    removeButton.hidden = true
    filePrompt.hidden = false
    dropzone.classList.remove('has-file', 'is-invalid', 'is-dragging')
    setFileError('')
  }

  const getFileError = (file) => {
    if (!file) {
      return content.careerApplication.fileRequiredMessage
    }

    const extension = `.${file.name.split('.').pop()?.toLowerCase() ?? ''}`
    if (!allowedExtensions.includes(extension) || file.size > maxFileSize) {
      return content.ui.careerFileError
    }

    return ''
  }

  const selectFile = (file) => {
    const error = getFileError(file)
    if (error) {
      resetFile()
      fileInput.setCustomValidity(error)
      setFileError(error)
      return
    }

    selectedFile = file
    fileInput.setCustomValidity('')
    fileName.textContent = file.name
    fileName.hidden = false
    removeButton.hidden = false
    filePrompt.hidden = true
    dropzone.classList.add('has-file')
    setFileError('')
  }

  if (uploadsEnabled) {
    fileInput.addEventListener('change', () => {
      selectFile(fileInput.files?.[0] ?? null)
    })

    removeButton.addEventListener('click', (event) => {
      event.stopPropagation()
      resetFile()
      fileInput.focus()
    })

    dropzone.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('button')) {
        return
      }

      fileInput.click()
    })

    dropzone.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return
      }

      event.preventDefault()
      fileInput.click()
    })

    dropzone.addEventListener('dragenter', (event) => {
      event.preventDefault()
      dropzone.classList.add('is-dragging')
    })

    dropzone.addEventListener('dragover', (event) => {
      event.preventDefault()
      dropzone.classList.add('is-dragging')
    })

    dropzone.addEventListener('dragleave', (event) => {
      if (event.relatedTarget && dropzone.contains(event.relatedTarget)) {
        return
      }

      dropzone.classList.remove('is-dragging')
    })

    dropzone.addEventListener('drop', (event) => {
      event.preventDefault()
      dropzone.classList.remove('is-dragging')
      selectFile(event.dataTransfer?.files?.[0] ?? null)
    })
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (uploadsEnabled && !selectedFile) {
      const message = content.careerApplication.fileRequiredMessage
      fileInput.setCustomValidity(message)
      setFileError(message)
    }

    if (!form.checkValidity()) {
      form.reportValidity()
      if (uploadsEnabled && !selectedFile) {
        dropzone.focus()
      }
      return
    }

    const defaultLabel = submitButton.dataset.defaultLabel ?? submitButton.textContent ?? ''
    const submittingLabel = content.ui.careerFormSubmitting
    const ink = playSubmitInk(
      submitButton,
      content.ui.formSubmittingAnnouncement ?? submittingLabel,
    )
    submitButton.disabled = true
    submitButton.textContent = submittingLabel
    setStatus('', 'idle')

    try {
      const posted = submitFormspree('career', readFormFields(form), uploadsEnabled ? selectedFile : null)
      const held = holdSubmitInk(ink)
      await posted
      await held
      navigateWithInk(ink, 'career')
    } catch {
      await reverseSubmitInk(ink)
      setStatus(content.ui.careerFormError, 'error')
      submitButton.disabled = false
      submitButton.textContent = defaultLabel
    }
  })
}

function applyDocumentSeo(locale) {
  const seo = window.VTCC_SEO
  if (!seo) return

  const pageKey =
    PAGE === 'contact-request'
      ? 'contact'
      : PAGE === 'resource' || PAGE === 'career-apply' || PAGE === 'careers'
        ? 'career'
        : PAGE
  const url = seo.routeMap[locale]?.[pageKey] ?? seo.routeMap.en?.[pageKey]
  const entry = url ? seo.pages[url] : null
  if (!entry?.headLines?.length) return

  document.title = entry.title ?? document.title

  document.querySelectorAll('[data-vtcc-seo]').forEach((node) => node.remove())

  entry.headLines.forEach((line) => {
    if (/^<title/i.test(line)) return

    const template = document.createElement('template')
    template.innerHTML = line.trim()
    const node = template.content.firstElementChild
    if (!node) return

    node.setAttribute('data-vtcc-seo', '')
    document.head.appendChild(node)
  })
}

function bindProgramPanels() {
  const openProgram = (id, { updateHash = true } = {}) => {
    if (!id) {
      return false
    }

    const panel = document.getElementById(`program-${id}`)
    if (!(panel instanceof HTMLDetailsElement)) {
      return false
    }

    panel.open = true

    if (updateHash) {
      history.replaceState(null, '', `#program-${id}`)
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    panel.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
    return true
  }

  const openFromHash = () => {
    const hash = window.location.hash.replace(/^#/, '')
    if (!hash.startsWith('program-')) {
      return
    }

    openProgram(hash.replace(/^program-/, ''), { updateHash: false })
  }

  document.querySelectorAll('[data-open-program]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('data-open-program')
      if (!document.getElementById(`program-${id}`)) {
        return
      }

      event.preventDefault()
      openProgram(id)
    })
  })

  document.querySelectorAll('details.program-panel').forEach((panel) => {
    panel.addEventListener('toggle', () => {
      if (panel.open) {
        history.replaceState(null, '', `#${panel.id}`)
        return
      }

      if (window.location.hash === `#${panel.id}`) {
        history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
      }
    })
  })

  if (bindProgramPanels.hashHandler) {
    window.removeEventListener('hashchange', bindProgramPanels.hashHandler)
  }

  bindProgramPanels.hashHandler = openFromHash
  window.addEventListener('hashchange', openFromHash)
  openFromHash()
}

const REVEAL_SELECTORS = [
  '.section-heading',
  '.home-resource-card',
  '.program-panel',
  '.home-trust-item',
  '.home-start-steps > *',
  '.quote-bubble',
  '.provider-card',
  '.careers-panel',
  '.faq-category',
  '.thank-you-mark',
  '.thank-you-lead',
  '.thank-you-steps',
  '.thank-you-actions',
  '.thank-you-note',
].join(',')

function bindScrollReveal() {
  if (bindScrollReveal.observer) {
    bindScrollReveal.observer.disconnect()
    bindScrollReveal.observer = null
  }

  const nodes = [...document.querySelectorAll(REVEAL_SELECTORS)]
  if (!nodes.length) {
    return
  }

  const groups = new Map()
  nodes.forEach((node) => {
    const list = groups.get(node.parentElement) ?? []
    list.push(node)
    groups.set(node.parentElement, list)
  })
  groups.forEach((list) => {
    list.forEach((node, index) => {
      node.classList.add('reveal')
      node.style.setProperty('--reveal-i', String(index))
    })
  })

  const startReveal = () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || typeof IntersectionObserver !== 'function') {
    nodes.forEach((node) => node.classList.add('is-revealed'))
    return
  }

  const viewportHeight = window.innerHeight || 0
  const pending = []
  nodes.forEach((node) => {
    if (node.closest('[hidden]')) {
      node.classList.add('is-revealed')
      return
    }
    const rect = node.getBoundingClientRect()
    const inView = rect.top < viewportHeight * 0.92 && rect.bottom > 0
    if (inView) {
      node.classList.add('is-revealed')
      return
    }
    pending.push(node)
  })

  if (!pending.length) {
    return
  }

  bindScrollReveal.observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }
        entry.target.classList.add('is-revealed')
        bindScrollReveal.observer?.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )
  pending.forEach((node) => bindScrollReveal.observer.observe(node))
  }

  if (document.documentElement.classList.contains('is-ink-arrival')) {
    document.addEventListener('vtcc-ink-reveal', startReveal, { once: true })
    return
  }

  startReveal()
}

function bindPageEnter() {
  if ('onpagereveal' in window) {
    return
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }
  document.querySelector('main')?.classList.add('page-enter')
}

function render() {
  quizRefreshToken += 1
  const locale = getLocale()
  const content = getContent()
  document.documentElement.lang = locale
  applyDocumentSeo(locale)
  document.getElementById('app').innerHTML = renderShell(content, renderMain(content))

  document.querySelectorAll('[data-language-select]').forEach((select) => {
    select.addEventListener('change', (event) => {
      localStorage.setItem(STORAGE_KEY, event.target.value)
      render()
    })
  })

  bindHeaderMenus()
  bindHeaderOffset()
  bindMobileMenu()
  bindFaqSearch(content)
  bindRequestForms(content)
  bindCareersPage(content)
  bindCareerApplication(content)
  bindContactQuiz(content)
  bindContactAside()
  bindProgramPanels()
  if (PAGE === 'thank-you') {
    try {
      sessionStorage.removeItem(INK_HANDOFF_KEY)
    } catch {
      /* sessionStorage can be unavailable */
    }
    const variant = content.thankYou?.[readThankYouVariant()] ?? content.thankYou?.default
    if (variant?.title) {
      document.title = `${variant.title} | ${content.company.shortName}`
    }
  }
  if (LEGAL_PAGE_KEYS[PAGE]) {
    document.title = `${content.legal.pages[LEGAL_PAGE_KEYS[PAGE]].title} | ${content.company.name}`
  }

  bindIntakeReceipt()
  bindInkArrival()
  bindScrollReveal()
  bindPageEnter()

  const toggleAll = document.querySelector('[data-faq-toggle-all]')
  const faqList = document.querySelector('[data-faq-list]')
  if (toggleAll && faqList) {
    toggleAll.addEventListener('click', () => {
      const items = Array.from(faqList.querySelectorAll('details'))
      const shouldOpen = items.some((item) => !item.open)
      items.forEach((item) => {
        item.open = shouldOpen
      })
      toggleAll.setAttribute('aria-pressed', shouldOpen ? 'true' : 'false')
      toggleAll.textContent = shouldOpen ? content.ui.collapseAll : content.ui.expandAll
    })
  }
}

render()
