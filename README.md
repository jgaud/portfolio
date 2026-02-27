# Jean-Gabriel Gaudreault's Personal Website

This is the source code for my personal website, built with [Astro](https://astro.build) using the [Astro Micro](https://astro-micro.vercel.app/) theme and deployed on [Vercel](https://vercel.com).

## About

I'm Jean-Gabriel Gaudreault, a PhD researcher working in machine learning, software development, and education. This website hosts my personal blog, projects, and academic publications.

## Project Structure

```text
├── public/               # Static assets and Pagefind search index
│   └── pagefind/        # Pre-built search index files
├── src/
│   ├── components/      # Reusable Astro UI components
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog posts in Markdown
│   │   ├── projects/    # Project write-ups
│   │   └── publications/ # Academic publications
│   ├── layouts/         # Page layouts and templates
│   ├── lib/             # Utility functions
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles (Tailwind CSS)
│   ├── consts.ts        # Site-wide constants and metadata
│   ├── content.config.ts # Content collection schemas
│   └── types.ts         # TypeScript type definitions
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
└── LICENSE              # MIT License
```

## Commands

| Command                | Action                                                  |
| :--------------------- | :------------------------------------------------------ |
| `npm install`          | Installs dependencies                                   |
| `npm run dev`          | Starts local dev server at `localhost:4321`              |
| `npm run build`        | Type-checks and builds the production site to `./dist/`  |
| `npm run preview`      | Preview the build locally, before deploying              |

## Features

- Blog with tag filtering and full-text search via [Pagefind](https://pagefind.app/)
- Projects showcase
- Academic publications section
- RSS feed
- Sitemap generation
- Dark mode support
- Tailwind CSS v4 styling
- MDX support
- Giscus comments
- Table of contents for posts
- Vercel Analytics

## Deployment

This site is set up for easy deployment on Vercel. Connect your GitHub repository to Vercel, and it will automatically build and deploy the site when changes are pushed.

## License

This code is licensed under the [MIT License](LICENSE).
Blog posts and project write-ups are licensed under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Thanks

Thanks to [Trevor Lee](https://github.com/trevortylerlee) for the creation of the [Astro Micro](https://astro-micro.vercel.app/) theme that this site is based on.