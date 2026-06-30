# DM365 / dm365.ru — UX, Content &amp; Conversion Audit

Prepared as part of the redesign demo project. This is a working audit, not a polished client deliverable — its purpose is to justify the decisions made in the demo site and give the team a prioritized backlog.

**A note on sourcing:** this audit is based on a review of the live dm365.ru site plus general best practice for B2B/HealthTech/EDC sites. Where a claim about the current site couldn't be confirmed with confidence, it's flagged rather than stated as fact.

---

## 1. Summary of current-site problems

1. The value proposition isn't immediately clear on the first screen — a new visitor has to read several sections before understanding what MainEDC actually does.
2. Trust signals (compliance, certifications, scale) are present but scattered rather than front-loaded near the hero.
3. Navigation doesn't clearly separate "the product" from "what we do for you" from "why trust us" — these get blended.
4. The site reads as feature-led rather than outcome-led; the language leans technical/internal rather than explaining the problem being solved.
5. No clear audience segmentation (CRO vs. sponsor vs. site) — everyone gets the same generic message.
6. Visual design feels dated relative to 2026 B2B SaaS norms: limited whitespace, smaller/denser type, fewer modern UI conventions (bento grids, card-based hierarchy).
7. No visible case studies or testimonials with attribution — a notable gap of trust-building proof for an enterprise buyer.
8. CTAs are present but not consistently positioned at decision points throughout long pages.
9. Mobile experience couldn't be fully audited, but the desktop layout patterns suggest it likely isn't mobile-first.
10. Compliance information exists but isn't structured as a dedicated, scannable trust page the way enterprise buyers expect.

---

## 2. 50+ improvement opportunities, by category

### Positioning (6)
1. Lead with the specific outcome ("reliable data capture," "validated study workflows") instead of generic platform description.
2. State who the product is for, explicitly, above the fold (CRO / sponsor / research team).
3. Replace vague capability language with concrete, audit-ready terminology.
4. Separate "platform" messaging from "services" messaging so buyers can self-select.
5. Add a one-line differentiation statement vs. category (what makes MainEDC different from Castor, OpenClinica, etc.) — currently absent.
6. Make the IRT/IWRS capability more visible — it's a meaningful differentiator vs. EDC-only competitors but is undersold.

### Content (8)
7. Add a dedicated Compliance page instead of folding compliance mentions into other pages.
8. Add an audience-segmented Solutions page (CRO / Sponsor / Site / RWE).
9. Add a visible FAQ section addressing implementation time, pricing structure, and regulatory scope.
10. Add real, approved case studies with named (or anonymized-but-specific) results.
11. Clarify pricing — even a "starting from" figure builds more trust than no pricing information at all.
12. Add a resources/blog index page that surfaces recent articles instead of leaving them buried.
13. Write a proper About page that explains expertise and credibility, not just a generic company description.
14. Add module-level descriptions (EDC, IWRS, AI Coder, RBM, Register) as distinct, scannable units rather than paragraphs.

### UX (8)
15. Add an audience switcher/tab pattern on the Solutions page so each visitor sees their own pain points first.
16. Reduce the number of clicks from "I'm interested" to "I requested a demo" — keep the CTA above the fold throughout.
17. Add a sticky header with persistent "Request demo" CTA.
18. Add breadcrumbs on interior pages for orientation.
19. Group related content into a clear five-step "how it works" process visualization.
20. Use progressive disclosure (FAQ accordion) for dense compliance content instead of one long wall of text.
21. Add a working, validating contact form with inline field labels and a clear success state.
22. Ensure every page ends in a CTA, not just the homepage.

### Visual design (8)
23. Adopt a modern bento-grid layout for the modules/features section.
24. Increase whitespace and line-height across all body copy for readability.
25. Introduce a consistent card-and-icon system instead of plain paragraph lists.
26. Use a refined two-color brand palette (primary blue + teal accent) instead of relying on a single color for everything.
27. Add a credible "trust strip" with badges/compliance marks directly under the hero.
28. Use a clear visual hierarchy (eyebrow → H1 → lead paragraph → CTA) consistently across pages.
29. Add subtle, professional micro-interactions (hover states, reveal-on-scroll) without overdoing motion.
30. Replace any stock-photo-style imagery with clean, schematic product visuals that won't feel dated in a year.

### Trust / compliance (6)
31. Create a single source of truth for which regulations/standards are supported (currently spread thin).
32. Make the audit-trail and access-control capabilities explicit and visible, not implied.
33. Clearly state hosting/data-protection posture (with real specifics once available).
34. Add license/registration numbers where DM365 holds them (e.g., software registry, crypto-tool licensing) — placeholder until verified.
35. Reference any independent recognition (academic citations, review-site rankings) with verifiable links, not vague claims.
36. Avoid generic "we are secure" language in favor of specific, checkable statements.

### Conversion (6)
37. Add multiple demo CTAs throughout long pages, not just at the top and bottom.
38. Make the contact form shorter by default with optional fields collapsed/secondary.
39. Add role and study-type fields to the contact form so sales can route leads faster.
40. Add a "talk to a human, not a queue" framing to reduce B2B contact-form hesitancy.
41. Show a clear post-submit confirmation so users aren't left wondering if the form worked.
42. Offer a secondary, lower-commitment CTA ("Explore the platform") alongside the primary demo CTA for users not ready to talk to sales.

### Technical (4)
43. Avoid heavy frameworks/build tooling for a marketing site — keeps load times low and lowers maintenance burden.
44. Use lazy-loading for below-the-fold images.
45. Use system-safe font fallbacks in case the primary webfont fails to load.
46. Keep CSS in a single, well-organized file with documented design tokens for easy maintenance.

### Accessibility (5)
47. Ensure all interactive elements have visible focus states.
48. Add `aria-expanded`/`aria-controls` to the mobile menu toggle and FAQ accordion.
49. Respect `prefers-reduced-motion` for all animation.
50. Use real form `<label>` elements tied to inputs, not placeholder-only labeling.
51. Maintain a logical heading hierarchy (one H1 per page, nested H2/H3) for screen-reader navigation.

### SEO (4)
52. Write unique, specific `<title>` and meta description tags per page.
53. Use semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`) consistently.
54. Add descriptive `alt` text to every meaningful image.
55. Build out a proper multi-page information architecture (Platform / Solutions / Compliance / Resources) instead of concentrating everything on one page, which helps both users and search engines understand site structure.

---

## 3. Top 15 highest-impact changes

Ranked by likely impact on trust and conversion for a B2B clinical-data buyer:

1. Add a dedicated Compliance page — this is the single biggest trust gap for this category of buyer.
2. Segment Solutions by audience (CRO / sponsor / site / RWE).
3. Sharpen the hero message to lead with outcome, not platform description.
4. Add a trust/compliance strip directly under the hero.
5. Add real case studies with verified results (currently entirely absent).
6. Make pricing at least partially visible (starting price + what affects it).
7. Add a five-step "how it works" visualization to make the product tangible fast.
8. Restructure modules into a scannable bento grid instead of prose.
9. Add persistent "Request demo" CTA in a sticky header.
10. Add an FAQ section addressing the questions buyers actually ask before contacting sales.
11. Shorten the path from interest to demo request — fewer clicks, clearer CTA hierarchy.
12. Modernize visual design (whitespace, typography scale, card system) to match 2026 enterprise SaaS norms.
13. Add audit-trail/access-control specifics to compliance messaging — vague security claims don't convert enterprise buyers.
14. Build a real, working (front-end) contact form with proper validation and success state.
15. Establish a documented design-token system so future updates stay visually consistent.

---

## 4. Competitor &amp; reference patterns

Patterns observed across category leaders (Castor, OpenClinica, Medidata Rave, Veeva, Medrio, REDCap) that were adapted — not copied — into this demo:

- **Castor / Medrio**: clear audience-based navigation ("For Sponsors," "For CROs") rather than one undifferentiated message — adapted into the Solutions page's audience-switcher pattern.
- **Veeva / Medidata**: heavy use of trust badges and compliance language placed prominently near the top of the page — adapted into the trust strip directly below the hero.
- **REDCap**: a notably plain-spoken, jargon-light explanation of what the tool actually does — informed the decision to avoid empty marketing adjectives in this demo's copy.
- **OpenClinica**: a visible, structured "how it works" process section — adapted into the five-step workflow section on the homepage and platform page.
- **Across the category**: bento-style module/feature grids are now standard in 2025–2026 SaaS design — adapted for the Platform page's module overview.

None of these sites' specific layouts, copy, or visual assets were copied; only general structural patterns were adapted to DM365's actual product and content.

---

## 5. Image-generation prompts

For use with an AI image generator once a real source image/style reference is available. All prompts are intentionally abstract/schematic rather than photorealistic, to avoid implying fake screenshots, fake patient data, or fake people.

**Hero / product visual**
```
Abstract editorial illustration of a clinical data dashboard interface, 
clean enterprise SaaS aesthetic, soft navy blue (#0f3d66) and teal (#169c93) 
color palette, subtle geometric data-flow lines, rounded card layout, 
no readable text, no real medical data, no people, calm and premium 
visual language, flat vector illustration style, plenty of negative space.
```

**Clinical data flow**
```
Minimalist vector diagram illustrating data moving between a clinical 
research site, a central database, and an export/reporting endpoint, 
connected by clean directional lines, navy and teal color palette, 
abstract iconography only, no logos, no readable labels, enterprise 
healthcare technology aesthetic.
```

**Dashboard / EDC interface mockup**
```
Abstract schematic mockup of a clinical trial data management dashboard, 
showing stat cards and a data table, generic placeholder shapes instead 
of readable text or real data, navy blue and teal accent colors, soft 
drop shadows, clean enterprise SaaS UI aesthetic, no real patient 
information, no logos.
```

**Compliance / security illustration**
```
Abstract illustration of a shield or badge shape combined with a subtle 
checkmark, representing data security and regulatory compliance, 
navy blue and teal color palette, soft gradient background, minimal 
geometric style, no text, no real certification marks or logos, 
calm and trustworthy visual tone suitable for healthcare technology.
```

**Data management illustration**
```
Abstract vector illustration showing paper documents transforming into 
structured digital data blocks, representing digitization and data 
management, navy and teal palette, flat minimal style, no readable text, 
no real documents, enterprise/clinical aesthetic.
```

**CRO / sponsor solutions illustration**
```
Abstract network diagram showing three or four connected circular nodes 
representing different organizations collaborating around a shared central 
hub, navy blue and teal color palette, clean geometric vector style, 
no text, no logos, enterprise B2B healthcare technology aesthetic.
```

**General constraints for every prompt**
- No real or implied logos
- No readable fake medical/patient data
- No copyrighted characters or stock-photo people
- No photorealistic faces
- Calm, reliable, premium visual language consistent with regulated healthcare software

---

## 6. What was used in this demo

Given that no original images were supplied, the demo currently ships with hand-built schematic SVG placeholders (in `assets/images/`) styled in the brand's navy/teal palette, rather than blank gray boxes — these are meant to communicate the *intended* visual direction so stakeholders aren't looking at obvious filler. They should be replaced with real product screenshots or AI-generated images (using the prompts above) before this becomes a production asset.
