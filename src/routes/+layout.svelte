<script>
    import './app.css';
    import { base } from '$app/paths';
    import favicon from '$lib/assets/favicon.png?url';
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="manifest" href="{base}/manifest.json" />
</svelte:head>

<slot />
