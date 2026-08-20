# Professional Photo Guide

The portfolio now uses the personal photograph at `assets/tejal-ubale.jpg` in the identity panel.

## Current implementation

- Portrait image is loaded locally from the repository, so the portfolio does not depend on an external image host.
- Desktop and mobile use a responsive cover crop.
- The identity panel uses the photograph as the visual focal point rather than an AI-generated portrait.
- Keep the source image sharp enough for the square desktop presentation and mobile crop.

## If the photograph is replaced later

Prefer:
- Portrait orientation, approximately 4:5 or 1:1.
- Head-and-shoulders framing with face and eyes clearly visible.
- Neutral, uncluttered background with soft natural or studio lighting.
- Professional but approachable expression.
- Clean, understated professional or semi-formal clothing.
- No heavy filters, distracting props or excessive background detail.

If the filename changes, update the `background-image` URL in `styles-overrides.css` and re-run the repository QA checks before deployment.
