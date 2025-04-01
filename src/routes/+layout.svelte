<script>
    import './app.css';
    import banner from '$lib/assets/banner.png?url';
    import { base } from '$app/paths';
    import favicon from '$lib/assets/favicon.png?url';
</script>

<svelte:head>
    <meta property="og:image" content="https://devcamp.up-csi.org{banner}" />
    <link rel="icon" href={favicon} />
    <link rel="manifest" href="{base}/manifest.json" />
</svelte:head>

<slot />
