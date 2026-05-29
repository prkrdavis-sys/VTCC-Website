# VTCC Build Path Recommendation

## Recommendation

Start by improving the current WordPress site instead of rebuilding from scratch.

The live site appears to already use WordPress, Elementor, Contact Form 7, redirection tooling, security tooling, caching, and Google Site Kit. That means VTCC likely has enough infrastructure to make a strong first round of improvements without a full rebuild.

## Why This Path Makes Sense

1. The current site already has useful content, service pages, Spanish pages, office locations, forms, insurance information, and blog posts.
2. The biggest problems are structure, clarity, call-to-action placement, outdated presentation, and intake flow.
3. These issues can usually be improved inside WordPress faster and cheaper than rebuilding.
4. A staged improvement gives the CEO something practical to approve before investing in a larger redesign.
5. Updating the current site first helps reveal whether the business needs a full rebuild or only a stronger content/design pass.

## Phase 1: Improve Existing WordPress Site

Goal: make the current site clearer, more trustworthy, and easier to use.

Recommended work:

1. Update homepage hero headline, subheadline, and buttons.
2. Add `Request Services`, `Refer a Client`, and `Call VTCC` calls to action.
3. Add a homepage `How To Get Started` section.
4. Clarify insurance and funding language.
5. Improve the ABA and IIH pages using the copy in `content/site.json` (exported to `page-copy.md`).
6. Add or improve a non-sensitive inquiry form.
7. Add a `For Referrers` page.
8. Convert the blog/resource area into evergreen resources.
9. Improve footer and contact information.
10. Clean up duplicate/unused pages such as sample and duplicate appointment pages after confirming they are not used.

Best tools:

- WordPress Pages
- Elementor
- Menus
- Contact Form 7
- Redirection plugin
- Google Site Kit for analytics/search data

## Phase 2: Measure And Tighten

Goal: learn whether the improved website is helping.

Track:

1. Contact form submissions
2. Phone clicks
3. Referral form submissions
4. Insurance/funding page visits
5. ABA and IIH page visits
6. Search terms in Google Search Console
7. Mobile usability
8. Page speed

Recommended follow-up:

- Ask office staff what questions callers repeat most often.
- Use those questions to improve FAQs.
- Track whether referrers know where to send families.
- Review which pages are visited before someone contacts VTCC.

## Phase 3: Pitch A Larger Redesign Only If Needed

A bigger redesign is worth pitching if:

1. The current WordPress theme is hard to edit or visually limiting.
2. Elementor pages are slow, fragile, or difficult to maintain.
3. The CEO wants a more premium brand presence.
4. VTCC wants stronger SEO landing pages for service areas.
5. VTCC wants multilingual content, referral workflows, or secure intake integrations beyond the current setup.
6. The current site cannot support accessibility, speed, or mobile improvements well.

## Rebuild Pitch Positioning

Do not pitch the redesign as just a prettier website. Pitch it as a better digital intake and trust system.

Suggested CEO framing:

VTCC's website can become a digital front desk for families and referral partners. It can explain services clearly, guide parents through funding questions, help professionals send referrals, reduce repeated phone calls, and present VTCC's multicultural clinical identity more professionally.

## What Access Is Needed

To safely edit the current website, ask for:

1. WordPress admin access with appropriate permissions
2. Elementor access if pages are built in Elementor
3. Contact Form 7 access for forms
4. Google Site Kit/Search Console access if available
5. Hosting or backup access only if the CEO wants deeper technical changes
6. A staging site if available

## Safety Checklist Before Editing The Live Site

1. Confirm there is a recent backup.
2. Avoid changing domain, hosting, DNS, or plugin settings without approval.
3. Save screenshots of important pages before changing them.
4. Edit one page at a time.
5. Preview on desktop and mobile.
6. Ask leadership to approve all insurance, clinical, and compliance language.
7. Do not collect protected health information through a normal contact form.
8. Keep old pages unpublished or redirected only after confirming they are not used.

## Beginner-Friendly Next Step

Use `prototype/index.html` as the visual pitch, then use `page-copy.md` (generated from `content/site.json`) to update the current WordPress pages section by section. Start with the homepage, because it controls the first impression and the main intake path.
