# Chloe's Author Site

A high-performance, component-driven Svelte 5 site for a YA Romance author.

## Design System

To prevent "design creep" and ensure a grounded aesthetic, adhere to the following strict design system.

### Color Palette

- **Forest Green (Primary)**: `#2C5530`
- **Warm Cedar (Accent)**: `#A45A52`
- **Parchment Cream (Background)**: `#F5F1E6`
- **Espresso Brown (Typography)**: `#3B2B25`

### Typography

- **Headings**: Classic Serif (e.g., Merriweather) - Honors the Austen influence.
- **Body**: Modern Sans-Serif (e.g., Inter) - Ensures digital readability.

### UI Style

- **No shadows or gradients.**
- Use flat, organic textures and generous white space.
- Maintain a "Literary" feel on all devices.

## Functional Sitemap

Avoid metaphorical or creative page naming. The site structure is:

- **/home**: Value proposition and mission.
- **/books**: Catalog and creative mission for the genre.
- **/about**: Professional biography and community interests.
- **/journal**: Categorized feed for Literature, Travel, and Faith.

## Creative Tone & Content Strategy (The "Subtle" Mandate)

### Imagery

- Use realistic, high-quality photography of environments (landscapes, cafes, writing desks).
- **Avoid**: "Worldly" or "Lust-focused" stock imagery common in YA Romance.

### Mission

- The site serves an audience seeking romance rooted in character, sincerity, and positive values.

## Technical Constraints for Growth

- **Content Management**: The `/journal` and `/books` sections must be powered by a system (Headless CMS or Markdown) that allows updates without touching code.
- **Mobile Responsiveness**: Design must maintain the "Forest Green & Cedar" accents and literary feel on mobile devices.

## Deployment & SEO

- **SEO Metadata**: Target keywords: "YA Romance Author", "Clean YA Fiction", "Wholesome Romance".
- **CI/CD**: Deploys are automated via GitHub Actions to Vercel/Cloudflare Pages.
- **Performance**: Must meet Lighthouse scores > 90 and load in < 2.0s.

## Developer Guide

See `AGENTS.md` and the `agents/` directory for detailed coding, testing, and workflow rules.

### Setup

```bash
pnpm install
pnpm dev
```
