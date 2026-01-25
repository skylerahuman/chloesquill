# Architecture

## Technical Stack

- **Framework**: Svelte 5 (SvelteKit) with Runes (`$state`, `$derived`, `$props`).
- **Package Manager**: `pnpm` (Strict dependency management).
- **Build Tool**: Vite (Lightning-fast HMR and optimized production bundling).
- **Styling**: Tailwind CSS (Atomic utility classes, specific color palette).
- **Component Design**: Component-Driven Design (CDD).

## Component-Driven Development (CDD)

Build from the "inside out".

1.  **Atoms**: Buttons, typography.
2.  **Molecules**: Book cards.
3.  **Organisms**: Full navigation bar.

- **Isolation**: Develop components in `src/lib/components`.
- **Prop-Driven**: Components should be "dumb"—they receive data via `$props()` and emit events.
- **Testable**: Highly testable units.

## Svelte 5 Rune Architecture

Use Runes to manage state outside of traditional component boundaries.

- **`$state`**: Declare reactive variables for book lists or UI toggles.
- **`$props`**: Explicitly type and pass properties from parent to child.
- **`$derived`**: Handle "slow burn" logic, like filtering novels by genre or date.

## Content Management

- **Headless CMS or Markdown**: `/journal` and `/books` sections must be powered by a system (like Markdown files) where content can be uploaded without touching code.
