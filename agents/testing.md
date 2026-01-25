# Testing Strategy

## TDD Methodology (Red-Green-Refactor)

All feature development must follow the TDD cycle:

1.  **Red Phase**: Write a failing test that defines a specific function or UI behavior (e.g., "The Books page should filter by genre").
2.  **Green Phase**: Write the minimum amount of code necessary to make the test pass.
3.  **Refactor Phase**: Clean up the code while ensuring the test remains green. Optimize for performance and design constraints.

## SDLC Testing Stages

Testing is integrated into every phase of the development lifecycle.

### 1. Unit Testing

- **Focus**: Individual components and utility functions.
- **Standards**: Every UI component (e.g., Book Card) must have a corresponding unit test.
- **Tools**: Vitest (logic), Svelte Testing Library (component rendering).

### 2. Integration Testing

- **Focus**: Interaction between front-end and content source (Markdown/CMS).
- **Standards**: Verify data flow (e.g., "Jane Austen" tags correctly filter the feed).

### 3. End-to-End (E2E) Testing

- **Focus**: Complete user journeys.
- **Critical Paths**:
  - Reader navigating from Home to Book detail.
  - User submitting Contact Form.
  - Responsive toggle on mobile.
- **Tools**: Playwright.

### 4. Visual & Aesthetic Regression Testing

- **Focus**: Visual consistency of the "Forest Green" and "Warm Cedar" palette.
- **Snapshot Testing**: Capture snapshots to ensure CSS changes don't break the design.
- **Cross-Browser**: Validate Serif headings on Safari, Chrome, Firefox.

## Performance & Accessibility Standards

Benchmarks to be met before merge:

- **Lighthouse Score**: > 90 in all categories (Automated CI check).
- **Load Time**: < 2.0 seconds (Optimize images).
- **Accessibility (a11y)**: WCAG 2.1 Level AA. Ensure "Espresso" text has enough contrast against "Parchment".
