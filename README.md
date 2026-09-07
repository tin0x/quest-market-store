# 🎮 Quest Market - Store

Quest Market - a modern, responsive web application and digital store for exploring, filtering, and purchasing video games, featuring secure checkout simulations, user profile management, wishlist tracking, and order history analytics.

The project follows **Feature-Sliced Design (FSD)** principles with a focus on clear separation of responsibilities, reusable domain modules, and maintainable application structure.

The development workflow also follows consistent **Git conventions**.

---

## Live Demo

- **Deployed App:** [Link to Vercel]()
- **Design Concept:** UI/UX concept inspired by [Figma Community](https://www.figma.com/community/file/1541511338761813063/ecommerce-games-store-gameverse)
- **IGDB API:** [Link to API](https://api-docs.igdb.com/#getting-started)
- **Supabase SDK:** [Link to BaaS](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)

---

## Key Features & Architectural Highlights

### Application Views

- **Storefront Dashboard:** A rich multi-section catalog featuring interactive game carousels, highlighted titles (Game of the Year editions), and categorized displays for anticipated and top-rated games.
- **Unified Game Browser:** High-performance filtering and exploration engine allowing users to search, sort, and filter games dynamically by keywords, genres, and target platforms.
- **Detailed Game Profiles:** Comprehensive media and metadata views featuring video trailer integration, platform specifications, age ratings, release details, and instant purchase options.
- **Secure Shopping & Checkout Flow:** Interactive shopping cart management, streamlined multi-field checkout with payment method selection, and real-time order confirmation processing.
- **User Account Management:** Dedicated profile sub-modules for managing personal account info, reviewing saved wishlist items, and tracking full historical order fulfillment lists.

### Search & Filtering

- **Search by Name:** Client-side search with debounced input handling.
- **Content Filtering:** Filter entities by available statuses and categories.
- **Sorting:** Dynamic sorting controls for supported collections.

---

## Performance & Polish

- **Asset Optimization Pipeline:** Built-in automatic image compressions via vite-plugin-image-optimizer relying on sharp and svgo runtimes to ensure minimal bundle footprints and fast loading times.
- **Skeleton Loading States:** Layout-aware loading placeholders implemented with `react-loading-skeleton` to provide a smoother loading experience and reduce cumulative layout shifts.
- **Responsive UI:** Interface adapted for different screen sizes and devices.
- **Reusable Components:** Shared UI primitives are separated from domain-specific functionality to improve consistency and reusability.

---

## Tech Stack & Dependencies

### Core

- **React 19** — UI library
- **TypeScript** — static type checking
- **Vite** — development server and build tool

### State & Data Management

- **Redux Toolkit** — application state management
- **RTK Query** — server-state management, request caching, and asynchronous data fetching

### Data Processing & Validation

- **Zod** — runtime API response validation and type inference
- **Transform Response Mappers** — conversion of external API DTOs into application-specific domain models

### Routing

- **React Router DOM** — client-side routing, dynamic routes, nested layouts, and route-level error handling

### Styling & UI

- **Tailwind CSS** — utility-first styling
- **clsx** — conditional class composition
- **tailwind-merge** — resolving conflicting Tailwind utility classes
- **react-loading-skeleton** — loading states

### Build & Asset Optimization

- **vite-plugin-image-optimizer** — automatic image optimization
- **sharp** — image processing
- **svgo** — SVG optimization
- **vite-plugin-svgr** — importing SVG files as React components

### Code Quality

- **ESLint** — static code analysis
- **Prettier** — code formatting
- **prettier-plugin-tailwindcss** — automatic Tailwind class sorting

---

## Feature-Sliced Design (FSD)

The project is organized according to the **Feature-Sliced Design** methodology:

```text
src/
├── 1_app/
├── 2_pages/
├── 3_widgets/
├── 4_features/
├── 5_entities/
└── 6_shared/
```

--- 

## Getting Started Locally

1. Clone the project locally:
```bash
git clone https://github.com/tin0x/quest-market-store.git
```
2. Boot into the source directory and pull production dependencies:
```bash
cd quest-market-store
pnpm install
```
3. Set up your environment variables (.env.local) with your Supabase and Twitch/IGDB credentials:
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
TWITCH_CLIENT_ID=your_twitch_client_id
TWITCH_CLIENT_SECRET=your_twitch_client_secret
```
4. Fire up Vite local dev environment:
```bash
pnpm vercel dev
```
5. Run strict static type checks and compile production-ready assets:
```bash
pnpm build
```
6. Run ESLint validation checks:
```bash
pnpm lint
```