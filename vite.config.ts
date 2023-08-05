/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

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
        name: 'chrome',
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
