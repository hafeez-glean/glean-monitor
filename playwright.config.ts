import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    browserName: 'chromium',
    headless: true,
    trace: 'on-first-retry',
  },
  reporter: [['list']],
});
