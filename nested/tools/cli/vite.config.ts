import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    embeddedLanguageFormatting: 'auto',
  },
  lint: {
    env: {
      node: true,
      vue: true,
    },
    plugins: ['typescript', 'unicorn', 'node', 'vue'],
    rules: {
      'no-console': 'off',
      'node/no-path-concat': 'error',
    },
    overrides: [
      {
        files: ['src/tui/**/*.vue'],
        rules: {
          'unicorn/filename-case': 'off',
        },
      },
    ],
  },
})
