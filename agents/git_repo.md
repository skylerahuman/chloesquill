# Git Repository Rules

## Branch & Version Control

Direct pushes to `main` are prohibited.

### Branching Strategy

- **`main`**: The stable, production-ready code.
- **`feature/*`**: For new UI components or site sections (e.g., `feature/book-gallery`).
- **`fix/*`**: For resolving bugs identified in testing.

## Governance Rules

- **Require Pull Requests**: All changes must come through a PR.
- **Status Checks**: GitHub Actions must report "Success" before the Merge button is enabled.
- **Reviewers**: At least one peer review (or a self-review checklist for solo work) is required.
- **Linear History**: Use Squash and Merge to keep the main branch history clean and readable.
