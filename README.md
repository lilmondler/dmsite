# DM365 / MainEDC — Redesign Demo

This is a **static prototype**, not a production website. It's a redesign demo for the DM365 / MainEDC site, built to show stakeholders a possible direction and to give developers something concrete to dissect and reuse — not to be deployed as-is.

No build tools, no framework, no backend. Just HTML, CSS and vanilla JS, so anyone can open it locally or publish it for free on GitHub Pages in a few minutes.

---

## 1. What's in this project

```
dm365-redesign/
  index.html          Home page
  platform.html        MainEDC platform / product overview
  solutions.html        Solutions by audience (CRO / sponsor / sites / RWE)
  compliance.html        Compliance, security, validation
  services.html         Implementation, training, document management
  resources.html         News, FAQ, knowledge-base placeholders
  about.html            Company page
  contact.html           Contact / request-demo form (front-end only)
  404.html              Error page
  css/style.css          All styling (design tokens at the top of the file)
  js/main.js              Mobile menu, scroll reveal, accordion, demo form
  assets/logo/            Logo placeholder — swap for the real DM365 logo
  assets/images/          Placeholder product visuals (SVG)
  assets/icons/           Placeholder module icons (SVG)
  audit-summary.md        Site audit + 50+ prioritized improvement ideas
  README.md              This file
```

## 2. Open it locally

No installation required.

1. Download or clone this folder.
2. Double-click `index.html`, or open it from your browser with **File → Open**.
3. Click through the navigation — every page links to every other page, the mobile menu works below ~940px width, and the contact form shows a demo success message (it does not send data anywhere).

If your browser blocks local images/scripts under `file://`, run a tiny local server instead (optional):

```bash
# from inside the dm365-redesign folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## 3. Publish for free on GitHub Pages

**If you've never used GitHub before:**

1. Go to [github.com](https://github.com) and create a free account.
2. Click the **+** in the top-right corner → **New repository**.
3. Name it something like `dm365-redesign-demo`, set it to **Public**, and click **Create repository**.
4. On the new repository page, click **uploading an existing file** (or drag-and-drop).
5. Drag the **entire contents** of the `dm365-redesign` folder (not the folder itself — its contents: `index.html`, `css/`, `js/`, `assets/`, etc.) into the upload area.
6. Scroll down and click **Commit changes**.
7. Go to **Settings → Pages** (left sidebar).
8. Under "Build and deployment," set **Source** to **Deploy from a branch**, branch **main**, folder **/ (root)**, then click **Save**.
9. Wait 1–2 minutes, then refresh the Pages settings screen. A green box will show your live URL, something like:
   `https://yourusername.github.io/dm365-redesign-demo/`
10. If the link doesn't load right away, wait a minute and refresh — first deploys can take a moment.

**To update the site later:**

1. Open the repository on GitHub.
2. Click into the file you want to change (e.g. `index.html`).
3. Click the pencil icon (Edit), make your change, then **Commit changes**.
4. GitHub Pages rebuilds automatically within a minute or two.

**To share it:**
- Send the `github.io` link directly to leadership for review.
- Share the repository URL with developers — they can clone it, or just browse the code in-browser.

**Optional: command-line alternative**, if you're comfortable with Git:

```bash
git init
git add .
git commit -m "Initial DM365 redesign demo"
git branch -M main
git remote add origin https://github.com/yourusername/dm365-redesign-demo.git
git push -u origin main
```
Then enable Pages the same way as step 7 above.

## 4. Where to make changes

| What | Where |
|---|---|
| Logo | `assets/logo/dm365-logo.svg` — replace the file, keep the filename, or update the `<img src>` in every page's header/footer if you rename it |
| Brand colors | `css/style.css`, top `:root { ... }` block — see the comment above it about verifying against the live site |
| Product/marketing copy | Directly in each `.html` file — search for the section you want to edit |
| Images | `assets/images/*.svg` — currently schematic placeholders; see `audit-summary.md` for AI-image-generation prompts |
| Icons | `assets/icons/*.svg` — simple line icons; swap for the real DM365 icon set if one exists |
| Contact form behavior | `js/main.js`, function `initDemoForm()` |

## 5. Design system honesty note

This demo's colors, fonts and spacing are a **professional best-effort match** for a clinical-data SaaS brand — they were not extracted automatically from the production dm365.ru stylesheet (programmatic CSS extraction wasn't reliably available in this environment). Before treating any color or font value as final brand truth:

1. Open dm365.ru in Chrome.
2. Right-click → Inspect on the header, primary buttons and body text.
3. Check the "Computed" tab for `background-color`, `color` and `font-family`.
4. Update the CSS variables in `css/style.css` accordingly.

## 6. What's a placeholder vs. confirmed content

Everything in `[square brackets]` in the HTML is a placeholder for content that needs verification before this can be a real production site — see `audit-summary.md` for the full list and reasoning. The most important ones:

- Client logos, testimonials, and case-study results (none are published; do not invent any)
- Exact compliance/certification wording and license numbers
- Team bios and company history details
- Pricing details beyond the publicly stated starting price
- Privacy policy / terms of use legal text
- The contact form is a **front-end demo only** — it does not submit anywhere

## 7. Before this goes to production

- [ ] Connect the contact form to a real backend or CRM (HubSpot, Salesforce, custom endpoint, etc.)
- [ ] Replace all placeholder text in `[brackets]` with verified, legal-approved copy
- [ ] Replace placeholder SVG illustrations with real product screenshots or commissioned art
- [ ] Replace the logo placeholder with the official DM365 logo file
- [ ] Have legal/compliance review every claim on the Compliance page
- [ ] Add a real cookie banner and privacy policy if using any analytics
- [ ] Add an analytics tool (none is included in this demo)
- [ ] Run an accessibility audit (axe, Lighthouse) — the demo follows semantic HTML, alt text, focus states and `prefers-reduced-motion`, but hasn't been audited by a real tool
- [ ] Run an SEO pass — add Open Graph tags, a sitemap.xml and robots.txt
- [ ] Compress/optimize any real images before upload (the current SVGs are lightweight by design)
- [ ] Security review of the production hosting environment
- [ ] Set up a custom domain if not using the github.io URL
