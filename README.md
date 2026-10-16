# gammachemicaltrading

Static site for Gamma Chemical Trading (gammachemicaltrading.com), hosted on Netlify.

- `public/`: the whole site, published as is, no build step.
  - `index.html`, `styles.css`, `script.js`
  - `assets/`: pictures (open licences, credited in the footer) and the gamma mark
  - `thanks.html`: shown after an inquiry is posted; the form is handled by Netlify Forms
- `netlify.toml`: publish settings (publishes `public/` only).

The previous Next.js site is preserved at the git tag `backup-nextjs-site`.
