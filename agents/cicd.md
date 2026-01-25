# CI/CD Pipeline

## Continuous Integration (CI)

- **Automated Triggers**: Tests run automatically on every push and pull request.
- **Blocking Merges**: No code shall be merged into `main` if the TDD suite or linting fails.
- **Deployment Gate**: Successful E2E tests are a prerequisite for the production build.

## Workflow Stages

1.  **Lint & Format**: Run `prettier` and `eslint`.
2.  **Unit Tests**: Run `pnpm test:unit` (Vitest).
3.  **Build**: Run `pnpm build` (Vite) to catch build-time errors.
4.  **E2E Tests**: Run `pnpm test:e2e` (Playwright) on the build artifact.
5.  **Deploy**: Automatic push to Vercel/Cloudflare Pages only if all previous steps pass.
