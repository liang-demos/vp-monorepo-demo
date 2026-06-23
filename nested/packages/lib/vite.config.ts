import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    overrides: [
      {
        files: ['src/cli/**'],
        options: {
          printWidth: 100,
        },
      },
    ],
  },
  lint: {
    overrides: [
      {
        files: ['src/cli/**'],
        env: {
          node: true,
        },
        plugins: ['typescript', 'unicorn', 'node'],
        rules: {
          'no-console': 'off',
          'node/no-path-concat': 'error',
        },
      },
    ],
  },
})
