import { render, fireEvent } from '@testing-library/svelte';
import Button from '../Button.svelte';
import { expect, test, vi } from 'vitest';

test('renders a button with a label', () => {
	const { getByText } = render(Button, { props: { label: 'Click Me' } });
	expect(getByText('Click Me')).toBeInTheDocument();
});

test('handles click events', async () => {
	const handleClick = vi.fn();
	const { getByText } = render(Button, {
		props: { label: 'Click Me', onClick: handleClick }
	});
	await fireEvent.click(getByText('Click Me'));
	expect(handleClick).toHaveBeenCalledTimes(1);
});
