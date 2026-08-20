# Portfolio — Final QA Record

## Verified in repository
- Public static GitHub Pages architecture retained; no framework/build dependency added.
- One-page resume PDF is present at `assets/Tejal_Ubale_Resume.pdf`.
- Resume CTA opens the uploaded PDF; modal remains as fallback.
- HSC and SSC scores are intentionally omitted from the public portfolio while education records remain.
- Personal photograph is present at `assets/tejal-ubale.jpg` and is now used by the identity panel instead of the previous robotics artwork.
- Existing experience hierarchy retained: IBM SkillsBuild × CSRBOX and Avignon receive full treatment; other internships remain in the compact record.
- SkyNet remains correctly connected to the Avignon research internship.
- Bachelor's project provenance retained for Comprehensive Enterprise Insights Platform, AI Life Coach and MD5 malware-detection work.
- Contact details, LinkedIn, GitHub, X/Twitter and Discord remain present.
- Visual refinement remains additive through `styles-overrides.css` rather than replacing the main stylesheet.
- Reduced-motion support and visible keyboard focus states retained.
- Credential counters are recalculated from the actual rendered records.
- Exact duplicate credential records are removed at render time only; distinct credentials are preserved.

## Current automated/static checks
1. `assets/tejal-ubale.jpg` exists in the repository.
2. The identity-panel CSS references `assets/tejal-ubale.jpg`.
3. The identity-panel CSS no longer references `assets/robot-portrait.svg`.
4. Resume path remains `assets/Tejal_Ubale_Resume.pdf`.
5. Existing `index.html` structure was not rewritten during this pass.
6. Existing `styles.css` was not replaced.
7. Theme toggle, mobile navigation, resume handling, credential deduplication and reduced-motion logic remain present in `script.js`.

## Remaining validation limitation
The GitHub connector can inspect and modify repository source, but it does not provide a browser-rendered GitHub Pages session. Therefore I will not claim pixel-level visual or live-browser validation has passed until a rendered preview/screenshot is available.

## Next refinement loop
- Inspect the live rendered page at desktop and mobile widths.
- Check image crop, hierarchy, spacing, contrast, navigation, project cards, resume CTA, contact links and footer.
- Fix only evidence-based issues, then re-run repository/static checks after each change.
