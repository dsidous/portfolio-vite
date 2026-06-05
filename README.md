# Tamas Jonas — Portfolio

Personal portfolio site for Tamas Jonas, Senior Frontend Architect. A single-page resume-style layout with scroll-spy navigation, spotlight cursor effect, and sections for about, skills, experience, and projects.

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Bun](https://bun.sh/) (package manager)

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the dev server with HMR |
| `bun run build` | Type-check and build for production |
| `bun run preview` | Preview the production build locally |
| `bun run typecheck` | Run TypeScript without emitting files |
| `bun run lint` | Lint the project with ESLint |

## Project structure

```
src/
├── assets/          # SVG icons (GitHub, LinkedIn)
├── components/      # UI sections and icons
├── data/            # Portfolio content (experience, projects, skills)
├── hooks/           # Mouse spotlight and scroll-spy hooks
├── App.tsx          # Page layout and composition
└── main.tsx         # App entry point
```

## Updating content

Portfolio copy lives in `src/data/`:

- `experience.ts` — work history
- `projects.ts` — case studies
- `tech-skills.ts` — skill tags
- `nav-sections.ts` — in-page navigation sections

Types are defined in `src/data/types.ts`.

## License

Private project.
