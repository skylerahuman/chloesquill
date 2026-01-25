# Developer Workflow

## Setup

1.  Install dependencies: `pnpm install`
2.  Start dev server: `pnpm dev`

## Development Cycle (TDD)

1.  Create a feature branch: `git checkout -b feature/my-feature`
2.  **Red**: Write a failing test in `src/lib/components/__tests__/`.
3.  **Green**: Implement the component.
4.  **Refactor**: Improve code and style.
5.  Verify: `pnpm test:unit` and check browser.

## Commands

- `pnpm dev`: Start local server.
- `pnpm build`: Build for production.
- `pnpm test:unit`: Run unit tests.
- `pnpm test:e2e`: Run E2E tests.
- `pnpm lint`: Check code style.
- `pnpm format`: Format code.
