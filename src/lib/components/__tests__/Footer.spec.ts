import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Footer from '../Footer.svelte';

describe('Footer Component', () => {
	it('renders themed social links with Nerd Font icons', () => {
		const { container } = render(Footer);

		const instagram = screen.getByRole('link', { name: /instagram/i });
		const goodreads = screen.getByRole('link', { name: /goodreads/i });

		expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/chloegracewrites/');
		expect(goodreads).toHaveAttribute(
			'href',
			'https://www.goodreads.com/user/show/169487356-chloe-grace'
		);
		expect(instagram).toHaveAttribute('target', '_blank');
		expect(goodreads).toHaveAttribute('target', '_blank');
		expect(instagram).toHaveClass('text-cedar-500');
		expect(container.querySelectorAll('.nerd-font-icon')).toHaveLength(2);
	});
});
