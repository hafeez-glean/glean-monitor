import { test, expect } from '@playwright/test';

test('Homepage is up', async ({ page }) => {
  await page.goto('https://www.glean.com', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Glean/);
});

test('Get a Demo page is up', async ({ page }) => {
  await page.goto('https://www.glean.com/get-a-demo', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toContainText('Get a Demo');
});

test('Blog page is up', async ({ page }) => {
  await page.goto('https://www.glean.com/blog', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toContainText('What’s new at Glean?');
});
