import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
	test('should display the hero section and take a screenshot', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 720 });
		await page.goto('/');

		await expect(page.locator('h1')).toHaveText('Chloe [Surname] | YA Author');

		await page.screenshot({ path: '/home/jules/verification/home-page.png' });
	});
});
