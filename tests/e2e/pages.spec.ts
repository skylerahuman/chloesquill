import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About Chloe', level: 1 })).toBeVisible();
});

test('about page has all section headings', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: /journey/i, level: 2 })).toBeVisible();
	await expect(page.getByRole('heading', { name: /beyond/i, level: 2 })).toBeVisible();
	await expect(page.getByRole('heading', { name: /gallery/i, level: 2 })).toBeVisible();
});

test('about page image gallery is interactive', async ({ page }) => {
	await page.goto('/about');

	// Check that gallery exists
	const gallery = page.locator('.grid');
	await expect(gallery).toBeVisible();

	// Check for gallery items
	const galleryItems = page.locator('.aspect-square');
	await expect(galleryItems.first()).toBeVisible();

	// Verify hover effects work (check for hover class)
	const firstItem = galleryItems.first();
	await firstItem.hover();
	// Item should have transition classes
	const classes = await firstItem.getAttribute('class');
	expect(classes).toContain('transition');
});

test('about page is responsive', async ({ page }) => {
	await page.goto('/about');

	// Test mobile view
	await page.setViewportSize({ width: 375, height: 667 });
	await expect(page.getByRole('heading', { name: 'About Chloe', level: 1 })).toBeVisible();

	// Test tablet view
	await page.setViewportSize({ width: 768, height: 1024 });
	await expect(page.getByRole('heading', { name: 'About Chloe', level: 1 })).toBeVisible();

	// Test desktop view
	await page.setViewportSize({ width: 1920, height: 1080 });
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
