import type { WebAppManifest } from 'web-app-manifest';
import { json } from '@sveltejs/kit';

import logo16 from '$lib/assets/pwa/logo-16.png';
import logo32 from '$lib/assets/pwa/logo-32.png';
import logo64 from '$lib/assets/pwa/logo-64.png';
import logo96 from '$lib/assets/pwa/logo-96.png';

import logo144 from '$lib/assets/pwa/logo-144.png';
import logo256 from '$lib/assets/pwa/logo-256.png';

import svg from '$lib/assets/upcsi.svg';

export const prerender = true;

export function GET() {
    return json({
        name: 'DevCamp',
        description: 'UP Center for Student Innovations - DevCamp 2024',
        icons: [
            { src: logo16, sizes: '9x16' },
            { src: logo32, sizes: '18x32' },
            { src: logo64, sizes: '36x64' },
            { src: logo96, sizes: '55x96' },
            { src: logo144, sizes: '82x144' },
            { src: logo256, sizes: '146x256' },
            { src: svg, sizes: 'any' },
        ],
        start_url: '/',
        display: 'standalone',
    } satisfies WebAppManifest);
}
