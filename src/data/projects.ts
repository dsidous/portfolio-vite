import watchThumbnail from '../assets/watch-thumbnail.png';
import wealthTrackerThumbnail from '../assets/wealth-thumbnail.png';

import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    title: 'Wealth Tracker (SaaS Platform)',
    summary:
      'A full-stack multi-user personal wealth dashboard designed to aggregate multi-currency assets (equities, physical gold, crypto) into a unified net-worth visualization. Features a secure, authenticated dashboard for private asset management.',
    challenges: [
      '**Financial Precision:** Integrated **big.js** to handle all multi-currency conversions, ensuring decimal-safe arithmetic and completely preventing floating-point errors.',
      '**Server-Side Security:** Engineered an isolated protection layer using **Next.js** proxy conventions (proxy.ts) and custom server-side helpers (requireDashboardUser) to secure session data handling across **Server Actions**.',
      '**Complex Data Management:** Leveraged **TanStack Table** for real-time asset rendering alongside **Drizzle ORM** to handle atomic database transactions and complex cascading deletes between assets and transaction histories.',
      '**Automated Data Integrity:** Developed a lazy-refresh background synchronization service for Forex and Crypto rates that ensures current market pricing updates without degrading client performance.',
    ],
    link: 'https://wealth-tracker.tamasjonas.com/',
    thumbnail: wealthTrackerThumbnail,
    tags: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Drizzle ORM',
      'PostgreSQL',
      'Clerk Auth',
      'TanStack Table',
      'Zod',
      'big.js',
    ],
  },
  {
    title: 'Watch (Cinema Search & Watchlist Engine)',
    summary:
      'A high-performance media discovery engine utilizing the **TMDB API**. Provides deep-metadata browsing for movies and TV series, persistent authenticated watchlists, and paginated global search filters.',
    challenges: [
      '**Infrastructure as Code (IaC):** Architected the deployment lifecycle using **SST (Ion)**, hosting the **Next.js** application on **AWS** while optimizing edge routing and DNS through **Cloudflare** variables.',
      '**UI/UX Performance:** Built an accessible user interface implementing a custom command palette and optimized infinite scrolling via **TanStack Query v5** for seamless navigation.',
      '**Advanced Server Patterns:** Utilized **Next.js Server Actions** for all state mutations, drastically reducing client-side bundle weight and protecting backend API routes on the server.',
      '**DevOps Automation:** Engineered full **CI/CD** deployment pipelines using **GitHub Actions** for automated infrastructure updates and automated environment variable injections.',
    ],
    link: 'https://watch.tamasjonas.com/',
    thumbnail: watchThumbnail,
    tags: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind 4',
      'shadcn/ui',
      'Drizzle ORM',
      'Clerk Auth',
      'SST (Ion)',
      'AWS',
      'Cloudflare',
      'TanStack Query v5',
    ],
  },
];
