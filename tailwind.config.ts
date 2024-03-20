import type { Config } from 'tailwindcss';
import typo from '@tailwindcss/typography';

export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
    plugins: [typo],
    theme: {
        extend: {
            colors: {
                'devcamp-red': '#f96743',
                'devcamp-dark-red': '#8e3535',
                'devcamp-gray': {
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6d6d6d',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#3d3d3d',
                    '950': '#2a2a2a',
                },
            },
        },
    },
} satisfies Config;
