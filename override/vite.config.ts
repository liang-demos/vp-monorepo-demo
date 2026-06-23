import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
    sortImports: true,
    sortPackageJson: true,
    overrides: [
      {
        files: ['tools/cli/**', 'apps/website/**'],
        options: {
          embeddedLanguageFormatting: 'auto',
        },
      },
      {
        files: ['packages/lib/src/cli/**'],
        options: {
          printWidth: 100,
        },
      },
    ],
  },
  lint: {
    plugins: ['typescript', 'unicorn'],
    rules: {
      'import/no-default-export': 'warn',
      'no-console': 'error',
      'unicorn/filename-case': 'off',
    },
    overrides: [
      {
        files: ['tools/cli/**'],
        env: {
          node: true,
          vue: true,
        },
        plugins: ['typescript', 'unicorn', 'node', 'vue'],
        rules: {
          'no-console': 'off',
          'node/no-path-concat': 'error',
        },
      },
      {
        files: ['tools/cli/src/tui/**/*.vue'],
        rules: {
          'unicorn/filename-case': 'off',
        },
      },
      {
        files: ['apps/website/**'],
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
      {
        files: ['packages/lib/src/cli/**'],
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
