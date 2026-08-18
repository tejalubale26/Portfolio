# Portfolio — Final QA Record

## Finalized
- Public static GitHub Pages architecture retained; no framework/build dependency added.
- One-page resume PDF added at `assets/Tejal_Ubale_Resume.pdf`.
- Resume CTA opens the uploaded PDF; modal remains as fallback.
- HSC and SSC scores are intentionally omitted from the public portfolio while the education records remain.
- Generated robotics artwork added at `assets/robot-portrait.svg` as the temporary identity-panel visual. It is explicitly an illustrative AI/robotics motif, not a personal photograph.
- Existing experience hierarchy retained: IBM SkillsBuild × CSRBOX and Avignon receive full treatment; other internships remain in the compact record.
- SkyNet remains correctly connected to the Avignon research internship.
- Bachelor's project provenance retained for Comprehensive Enterprise Insights Platform, AI Life Coach and MD5 malware-detection work.
- Education retains OVGU, bachelor's, HSC and SSC records; only secondary-school marks are hidden.
- Contact details, LinkedIn, GitHub, X/Twitter and Discord remain present.
- Visual refinement remains additive through `styles-overrides.css` rather than replacing the main stylesheet.
- Reduced-motion support and visible keyboard focus states retained.
- Credential counters are recalculated from the actual rendered records.
- Exact duplicate credential records (same complete title + issuer/date text) are removed at render time only; distinct credentials are preserved.

## Deliberately deferred
- Personal professional photograph. The robot artwork is temporary and can be replaced later without structural changes.
- Two-page academic CV is not linked publicly; the one-page resume is the appropriate public-facing document.

## Safety against accidental regression
- No `index.html` content rewrite was performed during this final refinement pass.
- Existing `styles.css` was not replaced.
- Refinements were isolated to an additive CSS layer and targeted JavaScript updates.
- Existing portfolio sections and links were preserved.

## Final verification targets
1. GitHub Pages loads the site from `main` / root.
2. Resume button opens `assets/Tejal_Ubale_Resume.pdf`.
3. Robot artwork loads from `assets/robot-portrait.svg`.
4. HSC/SSC entries remain visible without their scores.
5. Theme toggle and mobile navigation continue to work.
6. Credential counts reflect rendered records.
7. Desktop and mobile layout remain responsive.
8. Reduced-motion users receive a non-animated experience.
