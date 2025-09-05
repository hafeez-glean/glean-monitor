import { test, expect } from '@playwright/test';

test('Homepage is up', async ({ page }) => {
  await page.goto('https://www.glean.com', { timeout: 30000 });
  await expect(page).toHaveTitle(/Glean/i);
});

test('Get a demo page is up', async ({ page }) => {
  await page.goto('https://www.glean.com/get-a-demo', { timeout: 30000 });
  await expect(page.locator('h1')).toContainText(/Demo|Request/i);
});

test('Blog page is up', async ({ page }) => {
  await page.goto('https://www.glean.com/blog', { timeout: 30000 });
  await expect(page).toHaveTitle(/Blog/i);
});
