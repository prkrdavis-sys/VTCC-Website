# VTCC Current Site Audit

## Platform Finding

The live website at `https://vtcc.health/` appears to be powered by WordPress.

Public evidence:

- The WordPress REST endpoint is available at `https://vtcc.health/wp-json/`.
- Public page data is available through `wp/v2/pages`.
- Public post data is available through `wp/v2/posts`.
- The API exposes WordPress/plugin namespaces including Elementor, Elementor Pro, Contact Form 7, Wordfence, Redirection, LiteSpeed, and Google Site Kit.

This means the most likely editing workflow is through the WordPress admin dashboard, Elementor page editor, WordPress pages/posts, menus, Contact Form 7 forms, and plugin settings.

## Current Public Pages Found

Important English pages:

- Home: `https://vtcc.health/`
- ABA Services: `https://vtcc.health/aba/`
- Intensive In-Home Services: `https://vtcc.health/intensive-in-home/`
- Our Services: `https://vtcc.health/our-services/`
- Accepted Insurance Providers: `https://vtcc.health/our-services/accepted-insurance-providers/`
- Forms: `https://vtcc.health/resources/`
- Contact Us: `https://vtcc.health/contact/`
- About Our Director: `https://vtcc.health/about-our-director/`
- Career: `https://vtcc.health/career/`
- Blog: `https://vtcc.health/blog/`

Important Spanish pages:

- Inicio: `https://vtcc.health/inicio/`
- Acerca de los servicios ABA: `https://vtcc.health/acerca-del-aba/`
- Programa de Servicios Intensivos en el Hogar: `https://vtcc.health/programa-de-servicios-intensivos-en-el-hogar/`
- Recursos para Familias y Referentes: `https://vtcc.health/recursos-para-familias-y-referentes/`
- Contactenos: `https://vtcc.health/contactenos/`
- Carrera: `https://vtcc.health/carrera/`
- Articulos de Interes: `https://vtcc.health/articulos-de-interes/`

Cleanup candidates:

- `https://vtcc.health/sample-page/`
- Multiple appointment pages with the same title and similar slugs.

## What Is Already Working

1. VTCC has clear service categories: ABA Services and Medicaid Intensive In-Home Services.
2. The site already communicates a multicultural/transcultural identity, which is a strong differentiator in Northern Virginia.
3. The ABA page contains useful educational content about what ABA is, how services are provided, BCBA assessment, treatment plans, parent involvement, and progress monitoring.
4. The IIH page explains the core purpose: stabilizing intense behaviors, supporting families, and preventing out-of-home placement.
5. The site has public forms/resources and phone numbers.
6. The site already has English and Spanish content.
7. The accepted insurance page lists specific payers.
8. The site has testimonials and blog content that can be reused or refreshed.

## Main Problems To Fix

1. The homepage headline is warm but not specific enough. It should immediately say what VTCC does, who it serves, and where it serves.

2. Calls to action are weak. A parent or referrer should see obvious buttons like `Request Services`, `Verify Insurance`, `Refer a Client`, and `Call VTCC`.

3. The intake path is unclear. Families need a simple explanation of what happens after they contact VTCC.

4. Insurance messaging needs review. The accepted insurance page lists Medicaid, MCO, and commercial payers, while the forms page says VTCC currently only accepts Medicaid or county funding. This should be clarified before publishing new copy.

5. The blog appears old to a visitor. Many posts are dated 2020, even though modified dates appear newer in the API. The visible experience still feels stale unless resources are reframed as evergreen guides.

6. The contact page lists office addresses and numbers but does not clearly say service areas, hours, expected response time, or which number to call for which office.

7. The site has a `Social Connect` heading in several places without meaningful visible content in the fetched text.

8. The `Forms` page asks visitors to download and print forms. This is okay as a backup, but a modern site should also offer a short request form or referral form.

9. There is no obvious `For Referrers` path, even though schools, county workers, doctors, and case managers may be important referral sources.

10. Team trust can be stronger. The director page is helpful, but the site would benefit from a broader team/credentials page if VTCC can approve it.

11. Spanish content is a major asset, but the site should make the language switch and bilingual support easier to find.

12. Some content uses clinical language that could be simplified for stressed parents reading quickly on a phone.

## High-Priority Improvements

1. Rewrite the homepage hero around services, geography, and action.
2. Add a `How To Get Started` section.
3. Add clear call-to-action buttons throughout the site.
4. Clarify insurance/funding language with leadership.
5. Split navigation into family and referrer paths.
6. Refresh `Resources` so old blog posts feel like evergreen parent education.
7. Add or improve forms carefully, avoiding sensitive medical details unless the tool is approved for that use.
8. Improve the footer with contact info, service links, office locations, referral link, privacy policy, and accessibility statement.

## Suggested Navigation Audit Outcome

Recommended main navigation:

1. Home
2. Services
3. ABA Therapy
4. Intensive In-Home Services
5. How To Get Started
6. Insurance & Funding
7. For Referrers
8. Resources
9. About / Team
10. Contact

Recommended utility actions:

1. Request Services
2. Refer a Client
3. Call Fairfax
4. Call Fredericksburg
5. Espanol
