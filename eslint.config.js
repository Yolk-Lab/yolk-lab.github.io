import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
    {
        ignores: ['dist', 'node_modules']
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                React: 'readonly'  // Allow React as global for JSX
            },
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                },
                jsxPragma: 'React'
            }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@typescript-eslint': tseslint
        },
        rules: {
            // Only the essential rules to catch real issues
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }],

            // Disable overly strict rules
            'no-undef': 'off', // TypeScript handles this
            'react-hooks/exhaustive-deps': 'warn', // Just warn, don't error
            '@typescript-eslint/no-non-null-assertion': 'off', // Allow ! operator
            '@typescript-eslint/no-explicit-any': 'off',

            // Keep essential ones
            'no-debugger': 'error',
            'prefer-const': 'error',

            // React specific
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ]
        }
    }
] 