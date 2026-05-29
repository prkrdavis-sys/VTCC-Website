# VTCC Website Redesign — Leadership Pitch

**Prepared for:** VTCC leadership  
**Compares:** Live site ([vtcc.health](https://vtcc.health/)) vs. proposed redesign (prototype in this repo + React demo in `../vtcc-redesign`)  
**Date:** May 2026

---

## Why This Is Better

The current site has strong clinical content and a clear multicultural identity, but it behaves like a brochure: warm messaging, weak next steps, and no clear path for families or referral partners who arrive stressed and on a phone.

The redesign reframes the website as a **digital front desk** — not a prettier homepage. It tells visitors *what VTCC does, who it serves, where it serves, and exactly how to start* within seconds. It separates family and referrer journeys, explains intake step-by-step, and turns outdated blog posts into searchable parent guides. The result should reduce repeated phone questions, improve trust before the first call, and present VTCC’s transcultural clinical identity more professionally.

---

## New Ideas (Not on the Current Site)

These are the conceptual additions leadership should weigh:

- **Service-first hero** — Headline names ABA and Intensive In-Home services, Northern Virginia geography, and funding pathways up front (replacing the generic “Every Child Is Unique” opener).
- **Persistent utility actions** — Header always offers *Request Services*, *Refer a Client*, *Call Fairfax*, and *Call Fredericksburg* (current site has no equivalent always-visible intake actions).
- **“How to Get Started” as a dedicated page** — Seven-step intake journey from first contact through services beginning (current site never explains what happens after someone calls).
- **“For Referrers” page and split pathways** — Explicit route for schools, pediatricians, case managers, and county partners (no referrer path exists today).
- **Family vs. referrer choice on the homepage** — Two clear entry points instead of one undifferentiated contact flow.
- **Trust strip** — Three quick proof points: family-centered care, culturally responsive support, and clear next steps.
- **Structured request / inquiry form** — Non-sensitive fields (service interest, funding source, age range, location, preferred contact method) with compliance notice and consent checkbox (current contact page is addresses and phone numbers only).
- **Insurance & Funding as its own page** — Payer logos, verification guidance, and a path to ask questions (today insurance appears in fragments across homepage, forms page, and a separate list page — with conflicting messaging).
- **FAQs & Guides hub** — Six evergreen topic pages replacing the dated blog:
  - What Is ABA Therapy?
  - What To Expect During Intake
  - Medicaid and FAPT Funding Basics
  - Parent Training FAQs
  - Intensive In-Home Services
  - Referrals and Eligibility
- **Forms reorganized under Resources** — Intake PDFs, FAPT questionnaire, and client-rights notices grouped with links to insurance guidance (current `/resources/` is forms-only with no surrounding context).
- **Grouped navigation** — Services, FAQs & Guides, For Providers, and About VTCC clusters instead of a flat or unclear menu.
- **Language switcher with persistence** — English/Spanish dropdown that remembers choice (Spanish pages exist today but switching is harder to discover).
- **Single source of truth for copy** — All text in structured locale files (`content/locales/`) so English and Spanish stay aligned and WordPress updates can be staged from `page-copy.md`.
- **Mobile-first layout and modern visual system** — Cleaner typography, service cards, payer grid, and section hierarchy tuned for parents reading on a phone.
- **Compliance-aware form design** — Explicit guidance not to submit PHI, diagnosis reports, or emergencies through the public form (not present on current forms).

---

## What Was Kept the Same

Core clinical and organizational identity carries forward:

- **Two primary services** — ABA therapy and Medicaid Intensive In-Home (IIH) services remain the center of the site.
- **Multicultural / transcultural positioning** — VTCC’s identity serving diverse Northern Virginia families is preserved and elevated (not replaced).
- **ABA clinical substance** — Gold-standard framing, BCBA assessment process, parent training, behavior intervention plans, technician supervision, and progress monitoring (live ABA page content is largely retained, reorganized into plainer language).
- **IIH purpose and philosophy** — Short-term home-based stabilization, family-system focus, out-of-home placement prevention, and strength-based care (same concepts as the current IIH page).
- **Who VTCC serves** — Children and adolescents with behavioral, emotional, or developmental needs; Medicaid and county/FAPT populations; Northern Virginia service area.
- **Office locations** — Fairfax (703.218.6599) and Fredericksburg (540.412.9969) addresses, phones, and shared fax.
- **Accepted payers list** — Anthem, Cigna, UnitedHealthcare, BlueCross BlueShield, Aetna Better Health, Molina, Optima, Kaiser, plus county/FAPT (subject to leadership confirmation — see note below).
- **Downloadable intake forms** — ABA intake, IIH/FAPT intake, supervised visitation / FAPT referral questionnaire, and client-rights notices in English and Spanish.
- **Spanish language support** — Full parallel locale (`content/locales/es.json`); not removing bilingual commitment.
- **Director and mission framing** — About section retains mission, multicultural care, director bio, and clinical leadership (expanded from “About Our Director” only).
- **WordPress-first implementation path** — Recommendation is still to improve the existing WordPress/Elementor site using this copy and structure, not a mandatory full rebuild.

---

## What Was Left Out (Intentionally or Pending Approval)

| Current site element | Redesign decision |
|---|---|
| **Blog / Artículos de Interés** (2020-dated posts) | Replaced by evergreen FAQs & Guides; blog articles are not migrated as dated posts |
| **Homepage testimonials** (“What Do They Have To Say About Us”) | Not included in prototype; can be re-added with written permission per README guidance |
| **Careers page** (`/career/`) with resume upload | No careers route in redesign; recruiting would need a separate decision |
| **“Schedule an Appointment”** blocks on career and other pages | Removed; intake is phone, form, or downloaded paperwork — not self-scheduling |
| **“Our Services” placeholder page** (lorem ipsum: psychology, speech therapy, CH/SH/R/L sounds) | Dropped entirely — content does not reflect VTCC’s actual offerings |
| **“Social Connect”** headings (empty on multiple pages) | Removed |
| **Sample page and duplicate appointment pages** | Flagged for cleanup on live site; not carried into new sitemap |
| **Supervised visitation** as a marketed service | Only referenced via FAPT referral questionnaire form — not a standalone service page |
| **Full long-form ABA page on first click** | Live ABA page is very long; redesign uses scannable summaries on the service page with depth moved to FAQ topics (full legacy ABA copy is preserved in locale data for reuse) |
| **Live blog topics** (marriage tips, social stories, dressing ASD child, sibling support, etc.) | Not ported verbatim; themes may inform future FAQ articles if leadership approves |
| **Office hours, service-area map, expected response time** | Called out as gaps on current site; placeholders in About/Contact — **leadership must supply final facts** |
| **Staff bios beyond director** | About page lists slots for BCBA/RBT bios “where approved” — content not yet populated |
| **Privacy policy / accessibility statement** | Recommended in audit; not yet in prototype footer |
| **Working form backend** | Prototype form is UI-only; WordPress Contact Form 7 or approved secure tool still required |

---

## Conceptual Changes by Area

### Homepage

| Current (`vtcc.health`) | Proposed |
|---|---|
| Generic emotional headline | Specific: services + geography + funding pathways |
| About Us and Our Services text blocks | Hero + trust strip + three service cards (ABA, IIH, Referral Support) |
| Blog post teasers (2020 dates) | FAQs & Guides preview with six topic cards |
| Testimonials section | Removed in prototype (optional add-back) |
| “Get In Touch” with no form | Links to dedicated Contact page with structured form |
| No intake explanation | Compact 3-step process teaser + link to full Get Started page |
| Insurance mentioned inline | Funding preview; detail on Insurance page |

### Navigation & Information Architecture

| Current | Proposed |
|---|---|
| ~10 disparate pages + blog + career | 10 purposeful routes: Home, ABA, IIH, Get Started, Insurance, Referrers, Resources (+ 6 topics + Forms), About, Contact |
| No referrer entry | Referrers in main nav + utility bar |
| Resources = forms only | Resources = FAQs, guides, and forms |
| Spanish as separate URL tree | Unified site with language toggle |

### ABA & IIH Service Pages

| Current | Proposed |
|---|---|
| ABA: long single scroll, clinical tone | ABA: scannable columns (what it supports / how VTCC provides it) + CTAs; depth in FAQ |
| IIH: one short paragraph | IIH: goals, who can ask, family-centered framing, referral CTA |
| No per-service FAQs on page | Cross-linked FAQ topics for each service line |

### Insurance & Funding

| Current | Proposed |
|---|---|
| List on `/accepted-insurance-providers/` | Dedicated Insurance page with logos and verification steps |
| Forms page says “Medicaid or county only” | Site copy flags inconsistency; asks leadership to confirm commercial acceptance before publish |
| No “what to prepare” guidance | Checklist: DOB, insurance card, referral docs, etc. |

### Contact & Intake

| Current | Proposed |
|---|---|
| Two office addresses, phone, fax | Same offices + structured inquiry form + compliance notice |
| Print-and-call only path | Print forms **and** online request **and** click-to-call per office |
| No service/funding pre-questions | Form captures service interest, funding source, age range, location |

### Resources / Education

| Current | Proposed |
|---|---|
| Blog with stale dates | Evergreen FAQ library (~36 Q&As across 6 topics) |
| Forms isolated from help content | Forms nested under Resources with link to Insurance page |
| No intake or referrer how-to articles | Dedicated guides for intake, funding, referrals, parent training |

### About & Trust

| Current | Proposed |
|---|---|
| Single “About Our Director” page | Broader About / Team page (mission, multicultural care, leadership, future staff bios) |
| Testimonials on home | Not in prototype |
| Empty social sections | Removed until real links or feeds are approved |

### Spanish Experience

| Current | Proposed |
|---|---|
| Parallel pages (`/inicio/`, `/acerca-del-aba/`, etc.) | Same routes and structure in Spanish via locale files |
| Spanish blog articles | Spanish FAQs and UI strings; blog posts not auto-migrated |

---

## Leadership Decisions Before Launch

1. **Resolve insurance messaging** — Accepted-insurance page lists commercial payers; forms page says Medicaid/county only. Final published language needs one approved answer per service.
2. **Confirm testimonials, photos, and staff bios** — Only use with written permission.
3. **Approve form scope and security** — No PHI in public forms unless a compliant tool is in place.
4. **Supply missing operational details** — Hours, service-area boundaries, expected response times.
5. **Decide on Careers** — Keep, update, or link out (e.g., Indeed).
6. **Choose implementation phase** — Phase 1 WordPress refresh using this structure vs. later full rebuild (see `build-path-recommendation.md`).

---

## How to Review the Prototype

```sh
npm run build && open prototype/index.html
```

Or run the interactive demo:

```sh
cd ../vtcc-redesign && npm run dev
```

---

## Bottom Line

The redesign does not change *what* VTCC offers. It changes *how clearly and quickly* families and referral partners can understand services, funding, and next steps. The biggest wins are structural and behavioral: clearer intake, a referrer channel, searchable parent education, and action-oriented design — with clinical substance and multicultural identity preserved.
