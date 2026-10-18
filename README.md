# RS2 Healthcare Partners — AI Use Case Explorer

Static site, no build step. Scored by PraxisIQ.

- index.html — portfolio scorecard + use case cards (12 companies, 36 use cases)
- prototypes.html — working agent prototypes (opened from each use case)

## Hosting
Upload the whole folder to any static host (Netlify drop, Vercel, S3/CloudFront, GitHub Pages, IIS/nginx).
Serve over http(s) — opening index.html directly from disk will not load the JSON data.

Local preview: `npx serve .` or `python3 -m http.server` in this folder.

Company logos without a local file load from Google's favicon service and need internet access.
