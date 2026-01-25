import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About Chloe', level: 1 })).toBeVisible();
});

test('books page has expected h1', async ({ page }) => {
	await page.goto('/books');
	await expect(page.getByRole('heading', { name: 'Books & Projects', level: 1 })).toBeVisible();
});

test('journal page has expected h1', async ({ page }) => {
	await page.goto('/journal');
	await expect(page.getByRole('heading', { name: "Chloe's Journal", level: 1 })).toBeVisible();
});
