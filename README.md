# Chethan Reddy — Portfolio

Personal portfolio for Chethan Reddy, AI Forward Deployed Engineer. Built with Next.js, React and TypeScript, and exported as a static site for GitHub Pages.

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
NEXT_PUBLIC_BASE_PATH=/portfolio-website npm run build
```

Next.js writes the static site to `out/`. The base path is set at build time so links and assets work at the repository's GitHub Pages URL. Public asset references must include `NEXT_PUBLIC_BASE_PATH` when constructing their URLs.

To build for a root domain or another static host, omit `NEXT_PUBLIC_BASE_PATH`. A static export is served by a static web server rather than `next start`.

## Deployment

GitHub Actions builds and publishes the site when changes are pushed to `main`. The **Deploy portfolio to GitHub Pages** workflow can also be run manually from the repository's Actions tab.

In repository **Settings → Pages**, the publishing source must be **GitHub Actions**. The workflow installs the lockfile's dependencies, runs lint, builds the static export, uploads `out/`, and deploys it to the `github-pages` environment. Deployment uses GitHub's built-in token; no hosting credentials are needed.

## Editing the portfolio

- `app/` contains the page, global styling and metadata.
- `components/` contains interactive UI components.
- `public/` contains static images and the existing résumé PDF.
- `next.config.js` defines static export and deployment paths.
- `.github/workflows/deploy.yml` controls publishing.

Keep public profile content accurate and update project links alongside project descriptions.
