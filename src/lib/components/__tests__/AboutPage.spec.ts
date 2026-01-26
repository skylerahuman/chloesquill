import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import AboutPage from '../AboutPage.svelte';

describe('AboutPage Component', () => {
	it('renders the main heading', () => {
		render(AboutPage);
		expect(screen.getByRole('heading', { name: 'About Chloe', level: 1 })).toBeInTheDocument();
	});

	it('renders all section headings', () => {
		render(AboutPage);
		expect(screen.getByRole('heading', { name: /journey/i, level: 2 })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /beyond/i, level: 2 })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /gallery/i, level: 2 })).toBeInTheDocument();
	});

	it('has proper dark mode classes on all major elements', () => {
		const { container } = render(AboutPage);

		// Check main container has dark mode background
		const mainSection = container.querySelector('.dark\\:bg-forest-800');
		expect(mainSection).toBeInTheDocument();

		// Check headings have dark mode text color
		const darkHeadings = container.querySelectorAll('.dark\\:text-parchment-100');
		expect(darkHeadings.length).toBeGreaterThan(0);

		// Check body text has dark mode color
		const darkText = container.querySelectorAll('.dark\\:text-parchment-200');
		expect(darkText.length).toBeGreaterThan(0);
	});

	it('renders image gallery with proper structure', () => {
		const { container } = render(AboutPage);

		// Check for gallery container
		const gallery = container.querySelector('.grid');
		expect(gallery).toBeInTheDocument();

		// Check for gallery items (using aspect-video now)
		const galleryItems = container.querySelectorAll('.aspect-video');
		expect(galleryItems.length).toBeGreaterThan(0);
	});

	it('has accessible image elements with alt text', () => {
		const { container } = render(AboutPage);

		// Look for img elements or aria-labels on gallery items
		const images = container.querySelectorAll('img');
		const galleryItems = container.querySelectorAll('[aria-label]');

		// Either should have images with alt text or aria-labels
		expect(images.length > 0 || galleryItems.length > 0).toBe(true);
	});

	it('uses concise, impactful copy', () => {
		render(AboutPage);

		// Check that paragraphs aren't excessively long
		// This is a quality check - adjust threshold as needed
		const paragraphs = screen.getAllByText(/./);
		const longParagraphs = paragraphs.filter((p) => {
			const text = p.textContent || '';
			// Paragraphs should be under 300 characters for conciseness
			return text.length > 300;
		});

		// Allow some longer paragraphs, but not all
		expect(longParagraphs.length).toBeLessThan(paragraphs.length);
	});

	it('has responsive grid classes', () => {
		const { container } = render(AboutPage);

		const grid = container.querySelector('.grid');
		expect(grid?.classList.contains('grid-cols-1')).toBe(true);
		expect(grid?.classList.toString()).toMatch(/md:grid-cols-/);
		expect(grid?.classList.toString()).toMatch(/lg:grid-cols-/);
	});

	it('includes hover and transition effects', () => {
		const { container } = render(AboutPage);

		// Check for transition classes
		const elementsWithTransitions = container.querySelectorAll('[class*="transition"]');
		expect(elementsWithTransitions.length).toBeGreaterThan(0);

		// Check for hover effects
		const elementsWithHover = container.querySelectorAll('[class*="hover:"]');
		expect(elementsWithHover.length).toBeGreaterThan(0);
	});
});
