//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

const fsdImportPatterns = (layers) =>
  layers.flatMap((layer) => [`@/${layer}/**`, `#/${layer}/**`])

export default [
  ...tanstackConfig,
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: fsdImportPatterns([
                'entities',
                'features',
                'widgets',
                'pages',
                'app',
              ]),
              message:
                'shared cannot import from higher FSD layers (entities/features/widgets/pages/app).',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/entities/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: fsdImportPatterns(['features', 'widgets', 'pages', 'app']),
              message:
                'entities cannot import from higher FSD layers (features/widgets/pages/app).',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/features/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: fsdImportPatterns(['widgets', 'pages', 'app']),
              message:
                'features cannot import from higher FSD layers (widgets/pages/app).',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/widgets/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: fsdImportPatterns(['pages', 'app']),
              message:
                'widgets cannot import from higher FSD layers (pages/app).',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/pages/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: fsdImportPatterns(['app']),
              message: 'pages cannot import from app.',
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['eslint.config.js', 'prettier.config.js'],
  },
]
