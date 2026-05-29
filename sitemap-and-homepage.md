# VTCC Sitemap And Homepage Blueprint

This document describes site structure and section order only. All website copy lives in `content/site.json` and is exported to `page-copy.md` via `npm run build:copy`.

## Recommended Sitemap

### 1. Home

Purpose: Quickly explain who VTCC helps, what services are offered, where services are available, and how to start.

Section order:

1. Hero
2. Trust bar
3. Services overview
4. How to get started
5. Who VTCC serves
6. Multicultural care message
7. Insurance and funding
8. Parent/referrer pathways
9. Resources preview
10. About / team preview
11. Contact section

Copy source: `content/site.json` → `hero`, `trustStrip`, `sections.services`, `sections.process`, `sections.whoWeServe`, `sections.multiculturalCare`, `sections.funding`, `sections.referrers`, `sections.resources`, `sections.about`, `sections.contact`

Primary CTAs:

- Request Services
- Refer a Client
- Call VTCC

### 2. Services

Purpose: Give visitors a simple overview of VTCC's programs before they choose a detailed service page.

Subpages:

- ABA Therapy → `pages.abaTherapy`
- Intensive In-Home Services → `pages.intensiveInHome`
- Parent Training and Family Support → covered in ABA and IIH page copy
- Referral and Funding Support → `pages.forReferrers` and `pages.insuranceFunding`

### 3. ABA Therapy

Purpose: Explain ABA in parent-friendly language and describe VTCC's process.

Key sections:

1. What ABA is
2. Who ABA may help
3. What goals therapy can support
4. How VTCC provides ABA
5. Parent training
6. BCBA assessment and supervision
7. How to begin
8. FAQ

Copy source: `pages.abaTherapy`

### 4. Intensive In-Home Services

Purpose: Explain IIH services, eligibility, and family support.

Key sections:

1. What IIH is
2. Who IIH supports
3. Common situations IIH helps stabilize
4. Family-centered treatment
5. Funding and referral expectations
6. How to begin
7. FAQ

Copy source: `pages.intensiveInHome`

### 5. How To Get Started

Purpose: Reduce confusion and phone friction by explaining the intake journey.

Suggested steps:

1. Contact VTCC
2. Share basic service and funding information
3. Complete intake or referral paperwork
4. VTCC verifies funding/insurance
5. Clinical assessment is scheduled
6. Treatment plan is created
7. Services begin

Copy source: `sections.process`

### 6. Insurance & Funding

Purpose: Help families understand whether services may be covered and what documents may be needed.

Key sections:

1. Accepted insurance/funding list
2. Medicaid and MCO information
3. County/FAPT funding information
4. Commercial insurance note if applicable
5. Verification process
6. Who to call for help

Copy source: `pages.insuranceFunding` and `sections.funding`

Important: leadership should resolve the current public inconsistency between the accepted insurance page and the forms page before this page is published.

### 7. For Referrers

Purpose: Give pediatricians, schools, social workers, counties, and case managers a direct path.

Key sections:

1. Who can refer
2. Services available
3. Basic eligibility information
4. Documents that may be needed
5. Referral form or contact method
6. Expected response time

Copy source: `pages.forReferrers`

### 8. Resources / FAQ

Purpose: Make the old blog content useful again and build parent trust.

Recommended resource categories:

- Understanding ABA
- Autism and developmental support
- Parent training
- Insurance and funding
- School and community support
- Spanish resources

Copy source: `pages.resourcesFaq` and `sections.resources`

### 9. About / Team

Purpose: Build trust through people, credentials, mission, and history.

Key sections:

1. VTCC mission
2. Multicultural/transcultural care
3. Director bio
4. Clinical leadership
5. BCBA/RBT or therapist bios where approved
6. Office photos

Copy source: `sections.about`

### 10. Contact / Request Services

Purpose: Make contacting VTCC easy and direct.

Key sections:

1. Short request form
2. Fairfax office
3. Fredericksburg office
4. Phone and fax
5. Hours
6. Service area
7. Referral instructions
8. Emergency disclaimer if needed

Copy source: `sections.contact`, `offices`, and `form`

## Homepage Section Order

Use the same section order listed under Home above. Do not duplicate copy here. For WordPress-ready text, run `npm run build:copy` and open `page-copy.md`.

## Navigation Model

Main navigation (desktop):

1. Services
2. ABA Therapy
3. Intensive In-Home
4. Get Started
5. Insurance
6. Referrers
7. Resources
8. About
9. Contact

Utility actions:

1. Request Services
2. Refer a Client
3. Call Fairfax
4. Call Fredericksburg

Language selection:

- Header dropdown toggles between English and Spanish
- Choice persists in `localStorage` (`vtcc-locale`)
- Default language is English

Copy source: `navigation.main`, `navigation.utility`, and `content/locales/*.json`
