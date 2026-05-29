const STORAGE_KEY = window.VTCC_SITE?.localeStorageKey ?? 'vtcc-locale'
const PAGE = window.VTCC_PAGE ?? 'home'
const BASE = window.VTCC_BASE ?? ''
const RESOURCE_SLUG = window.VTCC_RESOURCE_SLUG

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
    '/#services': `${BASE}index.html#services`,
    '/aba': `${BASE}aba.html`,
    '/intensive-in-home': `${BASE}intensive-in-home.html`,
    '/get-started': `${BASE}get-started.html`,
    '/insurance': `${BASE}insurance.html`,
    '/referrers': `${BASE}referrers.html`,
    '/resources': `${BASE}resources/index.html`,
    '/about': `${BASE}about.html`,
    '/contact': `${BASE}contact.html`,
    '/contact/referral': `${BASE}contact/referral.html`,
  }

  if (path.startsWith('/resources/')) {
    return `${BASE}resources/${path.replace('/resources/', '')}.html`
  }

  return routes[path] ?? path
}

function renderButton(action) {
  const style = action.style ? ` ${action.style}` : ''
  return `<a class="button${style}" href="${escapeHtml(toStaticHref(action.href))}">${escapeHtml(action.label)}</a>`
}

function renderNavLink(item) {
  return `<a href="${escapeHtml(toStaticHref(item.href))}">${escapeHtml(item.label)}</a>`
}

function renderNavMenu(group, className = 'nav-menu') {
  if (group.href) {
    return `<a class="nav-menu-link" href="${escapeHtml(toStaticHref(group.href))}">${escapeHtml(group.label)}</a>`
  }

  const links = group.links.map(renderNavLink).join('\n            ')
  return `<details class="${className}">
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

function getHeaderGroups(content) {
  return content.navigation.headerGroups ?? [
    {
      label: content.navigation.main[0].label,
      links: content.navigation.main,
    },
  ]
}

const PAGE_SECTION_PATHS = {
  home: '/',
  aba: '/aba',
  'intensive-in-home': '/intensive-in-home',
  'get-started': '/get-started',
  insurance: '/insurance',
  resources: '/resources',
  resource: '/resources',
  forms: '/resources/forms',
  referrers: '/referrers',
  about: '/about',
  contact: '/contact',
  'contact-referral': '/contact/referral',
}

function getCurrentSectionPath() {
  return PAGE_SECTION_PATHS[PAGE] ?? null
}

function linkMatchesCurrentPage(linkHref) {
  const currentPath = getCurrentSectionPath()
  if (!currentPath) {
    return false
  }

  if (linkHref === currentPath) {
    return true
  }

  if (linkHref === '/#services' && PAGE === 'home') {
    return true
  }

  if (linkHref === '/contact' && (PAGE === 'contact' || PAGE === 'contact-referral')) {
    return true
  }

  if (linkHref === '/resources' && (PAGE === 'resources' || PAGE === 'resource')) {
    return true
  }

  return false
}

function getActiveHeaderGroup(content) {
  return getHeaderGroups(content).find(
    (group) =>
      group.links?.length > 1 &&
      group.links.some((link) => linkMatchesCurrentPage(link.href)),
  )
}

function renderSectionSubnav(content) {
  const group = getActiveHeaderGroup(content)
  if (!group) {
    return ''
  }

  const links = group.links
    .map((link) => {
      const isActive = linkMatchesCurrentPage(link.href)
      return `<a class="guides-subnav-link${isActive ? ' is-active' : ''}" href="${escapeHtml(toStaticHref(link.href))}"${isActive ? ' aria-current="page"' : ''}>${escapeHtml(link.label)}</a>`
    })
    .join('\n          ')

  return `<div class="guides-subnav-band">
      <nav class="guides-subnav" aria-label="${escapeHtml(content.ui.guidesNavLabel ?? group.label)}">
        <div class="guides-subnav-bar">${links}</div>
      </nav>
    </div>`
}

function getHeaderActions(content) {
  return content.navigation.headerActions ?? content.navigation.utility
}

function renderFormField(field) {
  if (field.type === 'select') {
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

function renderLanguageSelect(content, { hiddenLabel = false } = {}) {
  const locale = getLocale()
  const options = Object.entries(window.VTCC_SITE.localeLabels)
    .map(
      ([code, label]) =>
        `<option value="${escapeHtml(code)}"${code === locale ? ' selected' : ''}>${escapeHtml(label)}</option>`,
    )
    .join('\n            ')

  const label = hiddenLabel
    ? `<span class="visually-hidden">${escapeHtml(content.ui.languageLabel)}</span>`
    : escapeHtml(content.ui.languageLabel)

  return `<label class="language-select">
          ${label}
          <select data-language-select aria-label="${escapeHtml(content.ui.languageLabel)}">
            ${options}
          </select>
        </label>`
}

function renderMobileMenu(content) {
  const groups = getHeaderGroups(content)
  const navLinks = groups
    .map((group) => {
      if (group.href) {
        return `<a class="site-menu-link" href="${escapeHtml(toStaticHref(group.href))}">${escapeHtml(group.label)}</a>`
      }

      const links = (group.links ?? [])
        .map(
          (item) =>
            `<a class="site-menu-link" href="${escapeHtml(toStaticHref(item.href))}">${escapeHtml(item.label)}</a>`,
        )
        .join('\n            ')

      return `<div class="site-menu-group">
            <p class="site-menu-group-label">${escapeHtml(group.label)}</p>
            ${links}
          </div>`
    })
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
        ${renderLanguageSelect(content, { hiddenLabel: true })}
        <nav class="site-menu-nav" aria-label="${escapeHtml(content.ui.menuLabel)}">
          ${navLinks}
        </nav>
        <div class="site-menu-actions">
          ${utilityLinks}
        </div>
      </div>
    </aside>`
}

function renderSectionHeading(eyebrow, title, intro = '') {
  return `<div class="section-heading">
          <p class="eyebrow">${escapeHtml(eyebrow)}</p>
          <h2>${escapeHtml(title)}</h2>
          ${intro ? `<p>${escapeHtml(intro)}</p>` : ''}
        </div>`
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
          ${tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join('\n          ')}
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

  return `<div class="top-bar">
      <a class="top-bar-address" href="${escapeHtml(bar.addressHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(bar.address)}</a>
      <span class="top-bar-contacts">
        <a href="${escapeHtml(bar.phoneHref)}">${phoneIcon}${escapeHtml(bar.phone)}</a>
        <a href="${escapeHtml(bar.emailHref)}">${emailIcon}${escapeHtml(bar.email)}</a>
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
        ${renderLanguageSelect(content)}
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
    </header>
    ${renderMobileMenu(content)}
    <main id="top">${mainHtml}</main>
    <footer class="site-footer">
      <p>${escapeHtml(content.footer.text)}</p>
      <nav aria-label="Footer navigation">
        ${content.footer.links.map(renderNavLink).join('\n        ')}
      </nav>
    </footer>
  `
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
          ${renderSectionHeading(forms.eyebrow, forms.title, forms.intro)}
          ${
            steps
              ? `<ol class="forms-steps" aria-label="${escapeHtml(forms.title)}">${steps}</ol>`
              : ''
          }
          <p class="forms-assistance">${renderTextWithPhone(forms.assistanceText, content)}</p>
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
        </article>`
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

  const serviceCards = sections.services.cards
    .map(
      (card) => `<article class="service-card home-service-card">
            <span class="card-label">${escapeHtml(card.label)}</span>
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.body)}</p>
            <a href="${escapeHtml(toStaticHref(card.href))}">${escapeHtml(card.linkLabel)}</a>
          </article>`,
    )
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
          <p class="eyebrow">${escapeHtml(content.hero.eyebrow)}</p>
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
        ${renderSectionHeading(sections.services.eyebrow, sections.services.title, sections.services.intro)}
        <div class="card-grid home-service-grid">${serviceCards}</div>
      </section>
      <section class="section home-start">
        <div class="home-start-panel">
          <div class="home-start-grid">
            <div class="home-start-steps">
              ${renderSectionHeading(sections.process.eyebrow, sections.process.title, sections.process.intro)}
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
      <section class="section home-who">
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
      <section class="section home-resources">
        ${renderSectionHeading(sections.resources.eyebrow, home.resourcesTeaser.title, home.resourcesTeaser.intro)}
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

  return `<section class="section aba-page page-section">
        ${renderSectionHeading(aba.eyebrow, aba.title, aba.intro)}
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
      </section>`
}

function renderProcessPage(content) {
  const process = content.sections.process
  return `<section class="section split-section page-section">
        ${renderSectionHeading(process.eyebrow, process.title, process.intro)}
        <ol class="steps">${process.steps
          .map(
            (step) =>
              `<li><strong>${escapeHtml(step.title)}.</strong> ${escapeHtml(step.body)}</li>`,
          )
          .join('')}</ol>
        <div class="button-row">
          <a class="button page-link-cta" href="${escapeHtml(toStaticHref('/contact'))}">${escapeHtml(content.hero.actions[0].label)}</a>
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

  return `<section class="section payer-band">
        <div class="payer-band-inner">
          <div class="payer-lead">
            ${renderSectionHeading(funding.eyebrow, funding.title, funding.intro)}
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

function renderReferrersPage(content) {
  const referrers = content.sections.referrers
  return `<section class="section page-section">
        ${renderSectionHeading(referrers.eyebrow, referrers.title)}
        <div class="path-grid">${referrers.paths
          .map(
            (path) => `<article>
            <h3>${escapeHtml(path.title)}</h3>
            <p>${escapeHtml(path.body)}</p>
            <a class="button ${escapeHtml(path.buttonStyle)}" href="${escapeHtml(toStaticHref(path.buttonHref))}">${escapeHtml(path.buttonLabel)}</a>
          </article>`,
          )
          .join('')}</div>
      </section>`
}

function renderAboutPage(content) {
  const about = content.sections.about
  return `<section class="section split-section page-section">
        ${renderSectionHeading(about.eyebrow, about.title, about.intro)}
        <ul class="check-list">${about.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
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

function renderContactPage(content) {
  const { contact, form, variant } = getContactPageConfig(content)
  const switchLink =
    variant === 'referral'
      ? `<p class="contact-form-switch">${escapeHtml(content.ui.contactSwitchFamilyPrompt)} <a href="${escapeHtml(toStaticHref('/contact'))}">${escapeHtml(content.ui.contactSwitchFamilyLink)}</a>.</p>`
      : `<p class="contact-form-switch">${escapeHtml(content.ui.contactSwitchReferralPrompt)} <a href="${escapeHtml(toStaticHref('/contact/referral'))}">${escapeHtml(content.ui.contactSwitchReferralLink)}</a>.</p>`

  return `<section class="section contact-section page-section">
        <div>
          ${renderSectionHeading(contact.eyebrow, contact.title, contact.intro)}
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
                .join('\n              ')}
            </div>
          </div>
          <div class="office-list">${content.offices
            .map(
              (office) => `<address>
              <strong>${escapeHtml(office.name)}</strong>
              ${escapeHtml(office.street)}<br />
              ${escapeHtml(office.city)}<br />
              <a href="${escapeHtml(office.phoneHref)}">${escapeHtml(office.phone)}</a><br />
              ${escapeHtml(content.ui.faxLabel)}: ${escapeHtml(office.fax)}
            </address>`,
            )
            .join('')}</div>
        </div>
        <div class="contact-form-panel">
          ${switchLink}
          <form class="request-form request-form--${escapeHtml(variant)}">
          ${form.fields.map(renderFormField).join('')}
          <label class="consent-field"><input type="checkbox" name="consent" required /> ${escapeHtml(form.consentLabel)}</label>
          <p class="form-note">${escapeHtml(form.notice)}</p>
          <button type="button">${escapeHtml(form.submitLabel)}</button>
        </form>
        </div>
      </section>`
}

function renderResourcesIndex(content) {
  const resources = content.sections.resources
  return `<section class="section resources-section page-section">
        ${renderSectionHeading(resources.eyebrow, resources.title, resources.intro)}
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
      </section>`
}

function renderMain(content) {
  let mainHtml = ''

  switch (PAGE) {
    case 'aba':
      mainHtml = renderAbaPage(content)
      break
    case 'intensive-in-home':
      mainHtml = renderDetailSection(content.sections.iih, true)
      break
    case 'get-started':
      mainHtml = renderProcessPage(content)
      break
    case 'insurance':
      mainHtml = renderInsurancePage(content)
      break
    case 'referrers':
      mainHtml = renderReferrersPage(content)
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
    case 'contact':
    case 'contact-referral':
      mainHtml = renderContactPage(content)
      break
    default:
      mainHtml = renderHome(content)
  }

  return renderSectionSubnav(content) + mainHtml
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

function render() {
  const content = getContent()
  document.documentElement.lang = getLocale()
  document.getElementById('app').innerHTML = renderShell(content, renderMain(content))

  document.querySelectorAll('[data-language-select]').forEach((select) => {
    select.addEventListener('change', (event) => {
      localStorage.setItem(STORAGE_KEY, event.target.value)
      render()
    })
  })

  bindHeaderMenus()
  bindMobileMenu()
  bindFaqSearch(content)

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
