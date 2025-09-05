import { test, expect } from '@playwright/test';

test('Homepage is up', async ({ page }) => {
  await page.goto('https://www.glean.com', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle('Work AI for all.');
});

test('Get a Demo page is up', async ({ page }) => {
  await page.goto('https://www.glean.com/get-a-demo', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toContainText('Put AI to work. At work.');
});

test('Blog page is up', async ({ page }) => {
  await page.goto('https://www.glean.com/blog', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toContainText('What’s new at Glean?');
});
