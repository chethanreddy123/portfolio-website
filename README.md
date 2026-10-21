# Chethan Reddy — Portfolio

Personal portfolio for Chethan Reddy, Forward Deployed Engineer (FDE-2) at Staple AI, focused on agentic workflows, multimodal applications and enterprise AI systems. Built with Next.js, React and TypeScript, and exported as a static site for GitHub Pages.

[Visit the portfolio](https://chethanreddy123.github.io/portfolio-website/)

## Explore by role

The portfolio connects engineering skills to specific contributions, delivery stages and implementation details.

- **[Forward deployed engineering](https://chethanreddy123.github.io/portfolio-website/#role-fde):** customer discovery, migrations, production investigation and verification across 20+ enterprise customers.
- **[Applied & agentic AI](https://chethanreddy123.github.io/portfolio-website/#role-applied-ai):** LangChain agent workflows, multimodal model integration, LLM/VLM evaluation and enterprise RAG work.
- **[AI platform engineering](https://chethanreddy123.github.io/portfolio-website/#role-backend):** service contracts, messaging, database routing, observability and testing for dependable AI applications.

Each view has a copy-link control and links to the underlying case studies. The full archive remains available from every view.

The [career history](https://chethanreddy123.github.io/portfolio-website/#career) separates engineering, teaching and community work. The [project archive](https://chethanreddy123.github.io/portfolio-website/#projects) includes earlier applications and links to public source where available.

## Evidence and contribution scope

The six Staple AI cases are public summaries of private employer work. They describe Chethan's contribution and distinguish production launches, merged changes, staging delivery and research. Employer source code, customer documents and internal evidence are not part of this repository. These summaries are not open-source project releases.

Project links labeled **View source** lead to public repositories; product or company links provide context and do not imply that their code is public. Team contributions remain attributed as such. Course completions, virtual programs and event credentials retain their original verification links and are not presented collectively as professional vendor certifications.

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

## Preview the static export locally

Build with an empty base path, then serve the exported files with Python 3:

```sh
NEXT_PUBLIC_BASE_PATH= npm run build
python3 -m http.server 3000 --directory out
```

Open [localhost:3000](http://localhost:3000). This previews the root-path export without adding a preview dependency. Rebuild with `NEXT_PUBLIC_BASE_PATH=/portfolio-website` before deploying to the GitHub Pages project URL; the deployment workflow supplies that value automatically.

## Deployment

GitHub Actions builds and publishes the site when changes are pushed to `main`. The **Deploy portfolio to GitHub Pages** workflow can also be run manually from the repository's Actions tab.

In repository **Settings → Pages**, the publishing source must be **GitHub Actions**. The workflow installs the lockfile's dependencies, runs lint and TypeScript checking, builds the static export, uploads `out/`, and deploys it to the `github-pages` environment. Deployment uses GitHub's built-in token; no hosting credentials are needed.

## Editing the portfolio

- `app/` contains the page, global styling and metadata.
- `components/portfolio-data.ts` contains the career, projects, skills, credentials, awards and education records.
- `components/portfolio.tsx` renders the archive, section navigation, filters, search and expandable implementation notes.
- `components/case-studies.ts` contains six detailed engineering cases and their contribution/delivery scope.
- `components/role-pathways.ts` maps the three role views to supporting case studies and career evidence.
- `public/` contains static images and `CV.pdf`, the current two-page general base résumé.
- `public/company-logos/` contains verified original employer/institution marks; records without a verified mark use a plain company heading.
- `next.config.js` defines static export and deployment paths.
- `.github/workflows/deploy.yml` controls publishing.

Keep public profile content accurate and update project links alongside project descriptions. Course completions and event credentials link directly to their original verification pages. Company role progressions stay visible within their career record; teaching and community contributions have their own filters.

The site needs no API keys or application backend. Navigation, deep-linked case studies, project search, project and career filters, credential search, native disclosure elements and email copying work entirely in the browser. It respects reduced-motion preferences and has keyboard-visible focus states.

## Content edition — 21 October 2026

FDE-2 progression begins in May 2026, as confirmed by Chethan on 21 October.

The edition leads with forward deployed engineering, agentic AI, multimodal applications, evaluation and enterprise AI systems. Four capability cards connect this positioning to named projects and engineering cases; implementation tools remain in supporting details. Hermes Agent and OpenClaw are described as hands-on setup and configuration.

The broader career archive is preserved: six Staple AI engineering case studies, 15 career records, 15 project families, 19 credentials and 15 awards. The project archive covers six Staple engineering areas, one advisory website team contribution and eight earlier applications or competition builds. Current FDE and earlier SDE responsibilities are separated. Public summaries omit private customer identifiers; source evidence and review reports remain in the private workspace. The two-page résumé download uses the same capability-led positioning.
