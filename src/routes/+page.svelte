<script>
    import Card from './Card.svelte';
    import Podium from './Podium.svelte';
</script>

<main class="space-y-8">
    <header class="text-center font-sans">
        <h1 class="text-4xl font-bold text-devcamp-red">DevCamp 2024</h1>
        <h2 class="text-2xl">Leaderboard</h2>
    </header>
    <section class="grid grid-cols-3 items-end justify-center gap-8">
        <Podium place={2} id={98273014} user="Anjellyrika" name="Jelly Raborar" score={69420} />
        <Podium place={1} id={39114273} user="BastiDood" name="Basti Ortiz" score={500} />
        <Podium place={3} id={127301318} user="SteamEngine32" name="wuby kenshin" score={500} />
    </section>
    <section class="space-y-2">
        <Card id={39114273} user="BastiDood" name="Basti Ortiz" score={500} />
        <Card id={98273014} user="Anjellyrika" name="Jelly Raborar" score={69420} />
    </section>
</main>
