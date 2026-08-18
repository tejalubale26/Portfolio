# Tejal Ubale — Portfolio

Static one-page portfolio for GitHub Pages. Built with semantic HTML, CSS and vanilla JavaScript; no build step or framework is required.

## Structure

- `index.html` — complete portfolio content and semantic sections
- `styles.css` — core responsive visual system and theme layout
- `styles-overrides.css` — final visual polish, accessibility focus states and motion refinements
- `script.js` — navigation, theme toggle, credential counts, resume opening/fallback and reveal effects
- `assets/robot-portrait.svg` — temporary generated AI/robotics identity artwork
- `assets/Tejal_Ubale_Resume.pdf` — public one-page resume
- `assets/PHOTO_GUIDE.md` — instructions for an optional future professional photo
- `.nojekyll` — keeps GitHub Pages in static-file mode

## Current content coverage

- Hero + identity panel
- Engineering Principles
- About
- Full internship record, with the two strongest experiences expanded and earlier internships compacted
- Featured projects: SkyNet, Comprehensive Enterprise Insights Platform, AI Customer Support Agent
- Additional project gallery including HealthBot, Customer Churn Dashboard, Cybersecurity Toolkit, AI Life Coach and MD5 Malware Detection Tool
- Technical skills with honest positioning of current strengths and developing areas
- Full education history: incoming OVGU M.Sc., bachelor's, HSC and SSC
- HSC/SSC records retained without public school marks
- IELTS Academic result and English medium-of-instruction note
- Categorized credentials, job simulations, workshops and research/academic records
- Community and leadership: NSS, Computer Association, Sea Cadet Corps, AIESEC and research participation
- Journey timeline
- Collaboration-focused contact CTA
- LinkedIn, GitHub, X/Twitter, email and Discord information

## Content decisions

- **SkyNet** is the principal technical project developed during the Avignon University AI & Robotics internship. It is linked from both the relevant experience entry and the project section without pretending that it was a separate employment experience.
- **Comprehensive Enterprise Insights Platform** is identified as the bachelor's final-year / black-book project.
- **AI Life Coach** and **MD5 Hash-Based Malware Detection Tool** are identified as bachelor's subject-focused projects and are therefore supporting gallery items rather than featured work.
- The **one-page resume** is the selected public-facing document for the portfolio. The longer academic CV is intentionally not duplicated on the website; it remains useful for formal applications.
- Personal CV details such as date of birth, gender, nationality and full residential address are intentionally excluded from the public portfolio.

## Identity artwork

A generated abstract robotics illustration is currently used in the identity panel instead of a personal photograph. It is deliberately presented as illustrative artwork, not as a photograph of Tejal. The artwork can be replaced later without changing the layout.

## Contact

- Email: `tejalubale26@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/tejal-ubale-0aa8b3248/`
- GitHub: `https://github.com/tejalubale26`
- X/Twitter: `https://x.com/ubale_tejal`
- Discord: `tejal_ubale26`

## GitHub Pages deployment

The repository is public and GitHub Pages is enabled. The project requires no Node.js, npm, bundler or server.

Recommended source configuration:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`.
4. Save and wait for deployment to finish.
5. Verify the published URL and enable **Enforce HTTPS** when available.

## Final QA checklist

- [x] Content hierarchy reviewed against supplied resume/CV information
- [x] SkyNet / Avignon relationship corrected
- [x] Bachelor's project context corrected
- [x] HSC and SSC retained without scores
- [x] Internship record retained without overcrowding the primary timeline
- [x] Email and social links added
- [x] One-page resume PDF added and wired to the Resume CTA
- [x] Generated robotics identity artwork added
- [x] Credential groups and rendered counts normalized
- [x] Exact duplicate credential records removed at render time without deleting distinct credentials
- [x] Reduced-motion handling added
- [x] Keyboard focus states added
- [x] Responsive visual refinement added
- [x] Regression/QA record added in `FINAL_QA.md`
- [ ] Optional future professional photo
- [ ] Final manual browser/mobile inspection after deployment cache refresh
