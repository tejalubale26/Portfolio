# Portfolio — Final QA Record

## Verified in repository
- Public static GitHub Pages architecture retained; no framework/build dependency added.
- One-page resume PDF is present at `assets/Tejal_Ubale_Resume.pdf`.
- Resume CTA opens the uploaded PDF; modal remains as fallback.
- HSC and SSC scores are intentionally omitted from the public portfolio while education records remain.
- Personal photograph is present at `assets/tejal-ubale.jpg` and is used by the identity panel instead of the previous robotics artwork.
- Legacy `assets/robot-portrait.svg` was removed after confirming it was not referenced by active source.
- Existing experience hierarchy retained: IBM SkillsBuild × CSRBOX and Avignon receive full treatment; other internships remain in the compact record.
- SkyNet remains correctly connected to the Avignon research internship.
- Bachelor's project provenance retained for Comprehensive Enterprise Insights Platform, AI Life Coach and MD5 malware-detection work.
- Contact details, LinkedIn, GitHub, X/Twitter and Discord remain present.
- Visual refinement remains additive through `styles-overrides.css` rather than replacing the main stylesheet.
- Anchor scrolling accounts for the sticky header.
- Keyboard focus states remain visible.
- Reduced-motion handling bypasses reveal animation entirely and reveal observers stop observing an element after it becomes visible.
- Credential counters are recalculated from the actual rendered records.
- Exact duplicate credential records are removed at render time only; distinct credentials are preserved.
- `robots.txt` and `sitemap.xml` are present and point to the public GitHub Pages URL.

## Source-level regression checks
1. Repository tree is complete and non-truncated.
2. `assets/tejal-ubale.jpg` exists.
3. `assets/robot-portrait.svg` is absent.
4. Search for `robot-portrait.svg` returned no active source reference before deletion.
5. Identity-panel CSS references `assets/tejal-ubale.jpg`.
6. Resume path remains `assets/Tejal_Ubale_Resume.pdf`.
7. `index.html` continues to load `styles.css`; `script.js` loads the additive override stylesheet.
8. Theme, mobile navigation, resume handling, credential normalization, reduced-motion and reveal logic remain present.
9. README and photo guide describe the current photo implementation.
10. `robots.txt` references the portfolio sitemap.
11. `sitemap.xml` contains the canonical GitHub Pages portfolio URL.

## Browser QA limitation
The GitHub connector can inspect and modify repository source, but it does not provide an interactive browser-rendered GitHub Pages session. A live browser/mobile visual sign-off is therefore not claimed from source inspection alone.

## Final manual validation required
- Desktop: approximately 1440px and 1280px widths.
- Tablet: approximately 900px width.
- Mobile: approximately 390px and 430px widths.
- Verify photograph crop, hero balance, sticky navigation, mobile menu, theme toggle, project cards, credential accordions, resume opening, external links and footer.
- Test keyboard Tab navigation and Escape behavior.
- Test with reduced motion enabled.
- Test a hard refresh of the GitHub Pages URL after deployment/cache propagation.

## Final status
Source-level implementation and regression checks: **PASS**.
Live browser/mobile visual validation: **PENDING / NOT CLAIMED** because an interactive rendered browser is not available through the current GitHub connector.

No further source changes should be made solely to manufacture a “complete” status. The remaining gate is genuine rendered-browser inspection.
