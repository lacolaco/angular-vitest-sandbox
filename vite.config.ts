/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

const isCI = !!process.env['CI'];

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      angular({
        jit: false,
        tsconfig: 'tsconfig.spec.json',
      }),
    ],
    test: {
      globals: true,
      setupFiles: ['src/setup-vitest.ts'],
      include: ['src/**/*.spec.ts'],
      browser: {
        enabled: true,
        name: 'chromium',
        headless: isCI,
        provider: 'playwright',
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
