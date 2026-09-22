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

function renderProgramPage(page) {
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
    '### Program CTA',
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

${content.sections.services.cards
  .map((program) => {
    const goals = program.goals?.length ? `\n\nGoals:\n\n${bulletList(program.goals)}` : ''
    const structure = program.structure?.length
      ? `\n\nStructure:\n\n${numberedList(program.structure)}`
      : ''
    const ages = program.ageRange ? `\n\nAges served: ${program.ageRange}` : ''
    const related = program.related?.length
      ? `\n\nRelated programs: ${program.related.join(', ')}`
      : ''

    return `${program.label}:\n\n${program.body}${ages}${
      program.ageNote ? `\n\n${program.ageNote}` : ''
    }${program.description ? `\n\n${program.description}` : ''}${goals}${structure}${related}`
  })
  .join('\n\n')}

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

${renderProgramPage(content.pages.earlyLearners)}

${renderProgramPage(content.pages.feedingProgram)}

${renderProgramPage(content.pages.socialEnrichment)}

${renderProgramPage(content.pages.socialSkillsGroup)}

${renderProgramPage(content.pages.groupParentTraining)}

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

${(() => {
  const careers = content.sections.careers
  if (!careers) {
    return ''
  }

  const programs = (careers.programs.items ?? [])
    .map((program) => `### ${program.title}\n\n${program.body}\n\n${bulletList(program.details)}`)
    .join('\n\n')

  return [
    '## Careers Page',
    '',
    '### Page Hero',
    '',
    careers.title,
    '',
    careers.intro,
    '',
    `### ${careers.differentiator.eyebrow}`,
    '',
    careers.differentiator.title,
    '',
    careers.differentiator.body,
    '',
    `### ${careers.structure.eyebrow}`,
    '',
    careers.structure.title,
    '',
    careers.structure.intro,
    '',
    bulletList(careers.structure.roles.map((role) => `${role.title}: ${role.body}`)),
    '',
    '### Behavior Technician',
    '',
    careers.postings.bt.summary,
    '',
    careers.postings.bt.training.body,
    '',
    '### BCBA',
    '',
    careers.postings.bcba.summary,
    '',
    careers.postings.bcba.education.body,
    '',
    careers.postings.bcba.certification.body,
    '',
    careers.postings.bcba.licensing.body,
    '',
    '### Employee programs',
    '',
    programs,
    '',
    '### Recognition',
    '',
    careers.recognition.intro,
    '',
    '### Clinic photos',
    '',
    careers.clinic.galleryIntro,
    '',
  ].join('\n')
})()}

## Contact Page

### Page Hero

Headline:

Contact VTCC

Subheadline:

${content.sections.contact.intro}

${content.offices
  .map(
    (office) => `### ${office.name}

${office.street}  
${office.city}  
Phone: ${office.phone}  
Fax: ${office.fax}`,
  )
  .join('\n\n')}

### Short Request Form Fields

Recommended fields for a simple non-clinical inquiry form:

${bulletList(content.form.fields.map((field) => field.label))}
- Consent checkbox acknowledging that the form should not be used for emergencies or sensitive medical details

### Form Notice

${content.form.notice}
`

writeFileSync(join(rootDir, 'page-copy.md'), markdown)
console.log('Wrote page-copy.md')
