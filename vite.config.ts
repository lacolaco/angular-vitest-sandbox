/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

const isCI = !!process.env['CI'];

export default defineConfig({
  plugins: [angular({ tsconfig: 'tsconfig.spec.json' })],
  optimizeDeps: {
    // Pre-bundle tslib so a cold run does not reload the browser mid-test.
    include: ['tslib'],
  },
  test: {
    globals: true,
    setupFiles: ['src/setup-vitest.ts'],
    include: ['src/**/*.spec.ts'],
    browser: {
      enabled: true,
      provider: 'webdriverio',
      instances: [{ browser: 'chrome' }],
      headless: isCI,
    },
  },
});
