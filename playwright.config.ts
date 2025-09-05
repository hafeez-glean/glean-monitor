import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './',
  use: {
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
  },
};
export default config;
