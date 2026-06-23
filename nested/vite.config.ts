import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
    sortImports: true,
    sortPackageJson: true,
  },
  lint: {
    plugins: ['typescript', 'unicorn'],
    rules: {
      'import/no-default-export': 'warn',
      'no-console': 'error',
      'unicorn/filename-case': 'off',
    },
  },
})
