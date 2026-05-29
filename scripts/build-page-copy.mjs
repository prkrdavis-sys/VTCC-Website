import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { getLocaleContent, loadSiteContent, rootDir } from './lib.mjs'

const site = loadSiteContent()
const content = getLocaleContent(site, 'en')

function bulletList(items) {
  return items.map((item) => `- ${item}`).join('\n')
}

function numberedList(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n')
}

function renderPageHero(hero) {
  const lines = [`Headline:\n\n${hero.headline}`]

  if (hero.body) {
    lines.push(`\n${hero.body}`)
  }

  if (hero.buttons) {
    lines.push(`\nButtons:\n\n${bulletList(hero.buttons)}`)
  }

  return lines.join('\n')
}

function renderAbaPage(page) {
  const sections = page.sections.map((section) => {
    if (section.steps) {
      return `### ${section.title}\n\n${numberedList(section.steps)}`
    }

    if (section.items) {
      const parts = [`### ${section.title}`, '', section.intro ?? '', bulletList(section.items)]
      if (section.note) {
        parts.push('', section.note)
      }
      return parts.filter(Boolean).join('\n')
    }

    return `### ${section.title}\n\n${section.body}`
  })

  return [
    `## ${page.title}`,
    '',
    '### Page Hero',
    '',
    renderPageHero(page.hero),
    '',
    ...sections,
    '',
    '### ABA CTA',
    '',
    page.cta.body,
    '',
    'Button:',
    '',
    `- ${page.cta.button}`,
  ].join('\n')
}

function renderIihPage(page) {
  const sections = page.sections.map((section) => {
    if (section.items) {
      return [
        `### ${section.title}`,
        '',
        section.intro,
        '',
        bulletList(section.items),
      ].join('\n')
    }

    return `### ${section.title}\n\n${section.body}`
  })

  return [
    `## ${page.title}`,
    '',
    '### Page Hero',
    '',
    renderPageHero(page.hero),
    '',
    ...sections,
    '',
    '### IIH CTA',
    '',
    page.cta.body,
    '',
    'Button:',
    '',
    `- ${page.cta.button}`,
  ].join('\n')
}

function renderInsurancePage(page) {
  const sections = page.sections.map((section) => {
    if (section.items) {
      return [
        `### ${section.title}`,
        '',
        section.intro,
        '',
        bulletList(section.items),
      ].join('\n')
    }

    return `### ${section.title}\n\n${section.body}`
  })

  return [
    `## ${page.title}`,
    '',
    '### Page Hero',
    '',
    renderPageHero(page.hero),
    '',
    ...sections,
    '',
    'CTA:',
    '',
    `- ${page.cta}`,
  ].join('\n')
}

function renderReferrersPage(page) {
  const section = page.sections[0]
  return [
    `## ${page.title}`,
    '',
    '### Page Hero',
    '',
    renderPageHero(page.hero),
    '',
    `### ${section.title}`,
    '',
    section.intro,
    '',
    bulletList(section.items),
    '',
    section.note,
    '',
    '### Referrer CTA',
    '',
    page.cta.body,
    '',
    'Button:',
    '',
    `- ${page.cta.button}`,
  ].join('\n')
}

function renderResourcesFromSection(resources) {
  return resources.categories
    .map((category) => {
      const faqs = category.faqs
        .map((faq) => `${faq.question}\n\n${faq.answer}`)
        .join('\n\n')

      return [`### ${category.title}`, '', category.intro, '', faqs].join('\n')
    })
    .join('\n\n')
}

const markdown = `# VTCC Website Copy Draft

This file is generated from \`content/site.json\`. Edit the JSON, then run \`npm run build:copy\`.

${content.compliance.contentApproval}

## Homepage

### Hero

Headline:

${content.hero.headline}

Subheadline:

${content.hero.subheadline}

Primary buttons:

${bulletList(content.hero.actions.map((action) => action.label))}

Supporting line:

${content.hero.supportingLine}

### Services Overview

${content.sections.services.intro}

ABA Therapy:

${content.sections.services.cards[0].body}

Intensive In-Home Services:

${content.sections.services.cards[1].body}

Referral and Funding Support:

${content.sections.services.cards[2].body}

### How To Get Started

${content.sections.process.intro}

${numberedList(content.sections.process.steps.map((step) => `${step.title}: ${step.body}`))}

### Who We Serve

${content.sections.whoWeServe.intro}

Families may contact VTCC for support with:

${bulletList(content.sections.whoWeServe.items)}

### Multicultural Care

${content.sections.multiculturalCare.body}

### Insurance And Funding Preview

${content.sections.funding.intro}

Current public site information lists the following payer/funding names:

${bulletList(content.sections.funding.payers)}

${content.sections.funding.note}

Button:

- ${content.sections.funding.ctaLabel}

### Family And Referrer Split

For Families:

${content.sections.referrers.paths[0].body}

Button:

- ${content.sections.referrers.paths[0].buttonLabel}

For Referrers:

${content.sections.referrers.paths[1].body}

Button:

- ${content.sections.referrers.paths[1].buttonLabel}

${renderAbaPage(content.pages.abaTherapy)}

${renderIihPage(content.pages.intensiveInHome)}

${renderInsurancePage(content.pages.insuranceFunding)}

${renderReferrersPage(content.pages.forReferrers)}

${(() => {
  const resources = content.sections.resources
  return [
    '## Resources / FAQ',
    '',
    resources.intro,
    '',
    renderResourcesFromSection(resources),
  ].join('\n')
})()}

## Contact Page

### Page Hero

Headline:

Contact VTCC

Subheadline:

${content.sections.contact.intro}

### Fairfax Office

${content.offices[0].street}  
${content.offices[0].city}  
Phone: ${content.offices[0].phone}  
Fax: ${content.offices[0].fax}

### Fredericksburg Office

${content.offices[1].street}  
${content.offices[1].city}  
Phone: ${content.offices[1].phone}  
Fax: ${content.offices[1].fax}

### Short Request Form Fields

Recommended fields for a simple non-clinical inquiry form:

${bulletList(content.form.fields.map((field) => field.label))}
- Consent checkbox acknowledging that the form should not be used for emergencies or sensitive medical details

### Form Notice

${content.form.notice}
`

writeFileSync(join(rootDir, 'page-copy.md'), markdown)
console.log('Wrote page-copy.md')
