import { defineConfig, globalIgnores } from 'eslint/config';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import parser from 'svelte-eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    globalIgnores([
        '**/.DS_Store',
        '**/.svelte-kit',
        '**/build',
        '**/node_modules',
        '**/.env',
        '**/.env.*',
        '!**/.env.example',
        '**/pnpm-lock.yaml',
        '**/package-lock.json',
        '**/yarn.lock',
    ]),
    {
        extends: compat.extends(
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:svelte/recommended',
            'prettier',
        ),

        plugins: {
            '@typescript-eslint': typescriptEslint,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module',

            parserOptions: {
                extraFileExtensions: ['.svelte'],
            },
        },

        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                },
            ],

            'no-constant-binary-expression': 'error',
            'no-constructor-return': 'error',
            'no-duplicate-imports': 'error',
            'no-new-native-nonconstructor': 'error',
            'no-promise-executor-return': 'error',
            'no-self-assign': 'off',
            'no-self-compare': 'error',
            'no-template-curly-in-string': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable-loop': 'error',
            'no-unused-private-class-members': 'error',
            'no-unused-vars': 'off',
            'no-use-before-define': 'error',
            'require-atomic-updates': 'error',
            'block-scoped-var': 'error',
            'class-methods-use-this': 'error',
            'consistent-this': ['error', 'self'],
            curly: ['error', 'multi'],
            'default-case': 'error',
            'dot-notation': 'error',
            eqeqeq: 'error',
            'func-style': ['error', 'declaration'],
            'init-declarations': 'error',
            'logical-assignment-operators': 'error',
            'new-cap': 'error',
            'no-alert': 'warn',
            'no-array-constructor': 'error',
            'no-caller': 'error',
            'no-console': 'warn',
            'no-else-return': 'error',
            'no-empty-function': 'error',
            'no-empty-static-block': 'error',
            'no-eq-null': 'error',
            'no-eval': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-implicit-coercion': 'error',
            'no-implicit-globals': 'error',
            'no-implied-eval': 'error',
            'no-invalid-this': 'off',
            'no-iterator': 'error',
            'no-label-var': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            'no-loop-func': 'error',
            'no-nested-ternary': 'warn',
            'no-new': 'error',
            'no-new-func': 'error',
            'no-new-object': 'error',
            'no-new-wrappers': 'error',
            'no-proto': 'error',
            'no-return-assign': 'error',
            'no-script-url': 'error',
            'no-sequences': 'error',
            'no-throw-literal': 'error',
            'no-undef-init': 'error',
            'no-undefined': 'error',
            'no-unneeded-ternary': 'error',
            'no-unused-expressions': 'error',
            'no-useless-call': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-concat': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'no-var': 'error',
            'no-void': 'error',
            'operator-assignment': 'error',
            'prefer-arrow-callback': 'warn',
            'prefer-const': 'error',
            'prefer-destructuring': 'error',
            'prefer-exponentiation-operator': 'warn',
            'prefer-named-capture-group': 'error',
            'prefer-numeric-literals': 'error',
            'prefer-object-has-own': 'error',
            'prefer-object-spread': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            radix: 'error',
            'require-await': 'error',

            'sort-imports': [
                'error',
                {
                    allowSeparatedGroups: true,
                },
            ],

            'spaced-comment': [
                'warn',
                'always',
                {
                    markers: ['/'],
                },
            ],

            yoda: [
                'warn',
                'never',
                {
                    exceptRange: true,
                },
            ],
        },
    },
    {
        files: ['**/*.svelte'],

        languageOptions: {
            parser: parser,
            ecmaVersion: 5,
            sourceType: 'script',

            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    },
]);
