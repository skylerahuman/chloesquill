# Coding Standards

## Svelte 5 Runes

- Use Runes (`$state`, `$derived`, `$props`, `$effect`) for all reactivity.
- Avoid legacy export `let` props or `$:`.

## Component Design

- **Prop-Driven**: Components should be "dumb". Logic should reside in stores or parent components where possible.
- **Explicit Typing**: Use TypeScript interfaces for `$props`.
  ```typescript
  interface Props {
	title: string;
	isActive?: boolean;
  }
  let { title, isActive = false }: Props = $props();
  ```

## Style

- Use Tailwind utility classes.
- Avoid inline styles.
- Enforce Prettier formatting.
