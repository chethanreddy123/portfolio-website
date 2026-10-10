# Chethan Reddy — Portfolio

Personal portfolio for Chethan Reddy, Forward Deployed Engineer (FDE-2) at Staple AI and founder of AIoverflow. Built with Next.js, React and TypeScript, and exported as a static site for GitHub Pages.

[Visit the portfolio](https://chethanreddy123.github.io/portfolio-website/)

## Local development

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Local development uses the root path; no environment variables or API keys are required.

## Production build

```sh
npm run lint
npm run typecheck
NEXT_PUBLIC_BASE_PATH=/portfolio-website npm run build
```

Next.js writes the static site to `out/`. The base path is set at build time so links and assets work at the repository's GitHub Pages URL. Public asset references must include `NEXT_PUBLIC_BASE_PATH` when constructing their URLs.

To build for a root domain or another static host, omit `NEXT_PUBLIC_BASE_PATH`. A static export is served by a static web server rather than `next start`.

## Deployment

GitHub Actions builds and publishes the site when changes are pushed to `main`. The **Deploy portfolio to GitHub Pages** workflow can also be run manually from the repository's Actions tab.

In repository **Settings → Pages**, the publishing source must be **GitHub Actions**. The workflow installs the lockfile's dependencies, runs lint, builds the static export, uploads `out/`, and deploys it to the `github-pages` environment. Deployment uses GitHub's built-in token; no hosting credentials are needed.

## Editing the portfolio

- `app/` contains the page, global styling and metadata.
- `components/portfolio-data.ts` contains the career, projects, skills, credentials, awards and education records.
- `components/portfolio.tsx` renders the archive, section navigation, filters, search and expandable implementation notes.
- `components/case-studies.ts` contains six detailed engineering cases and their contribution/delivery scope.
- `public/` contains static images and the current two-page general base résumé PDF.
- `next.config.js` defines static export and deployment paths.
- `.github/workflows/deploy.yml` controls publishing.

Keep public profile content accurate and update project links alongside project descriptions. Course completions and event credentials link directly to their original verification pages. Company role progressions stay visible within their career record; teaching and community contributions have their own filters.

The site needs no API keys or application backend. Navigation, deep-linked case studies, project search, project and career filters, credential search, native disclosure elements and email copying work entirely in the browser. It respects reduced-motion preferences and has keyboard-visible focus states.

## Content edition — 10 October 2026

Six engineering case studies, 16 career records, 22 project families, four website explorations, 19 credentials and 15 awards. Additional prototypes and research tools are summarized separately. Current FDE and earlier SDE responsibilities are separated; named collaborators are credited. Public summaries omit private employer/customer identifiers and distinguish releases from staging, implementation and prototypes. The source evidence and review reports remain in the private workspace.
