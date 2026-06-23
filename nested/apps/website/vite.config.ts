import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    embeddedLanguageFormatting: 'auto',
  },
  lint: {
    env: {
      browser: true,
      vue: true,
    },
    plugins: ['typescript', 'unicorn', 'vue'],
    rules: {
      'import/no-default-export': 'off',
      'unicorn/filename-case': 'error',
    },
  },
})
