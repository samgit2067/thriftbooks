import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  globalSetup: './global-setup.js',
  fullyParallel: false, 
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, 
  reporter: 'html',
  use: {
    baseURL: 'https://www.thriftbooks.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',  
    actionTimeout: 30000,
    navigationTimeout: 30000,
    viewport: { width: 1920, height: 1080 },
  },
  
  expect: {
    timeout: 15000,
  },
  
  projects: [
    {
      name: 'chromium', 
      use: { 
        browserName: 'chromium',
        headless: false, // ThriftBooks blocks headless browsers
      },
    },
  ],
});