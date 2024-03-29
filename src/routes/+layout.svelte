<script>
    import './app.css';
    import favicon from '$lib/icons/favicon.png?url';
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<slot />
