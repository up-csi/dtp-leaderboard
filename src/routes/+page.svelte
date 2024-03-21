<script>
    import Avatar from './Avatar.svelte';
    import Profile from './Profile.svelte'
    import Card from './Card.svelte';
</script>

<main class="space-y-8">
    <header class="text-center font-sans">
        <h1 class="text-4xl font-bold text-devcamp-red">DevCamp 2024</h1>
        <h2 class="text-2xl">Leaderboard</h2>
    </header>
    <section class="grid max-h-[80vh] grid-flow-col grid-cols-3 grid-rows-4 gap-x-8">
        <!-- 2nd placer -->
        <div class="row-start-2 self-end">
            <Avatar id={98273014} alt="Anjellyrika" />
        </div>
        <div class="row-span-2 bg-devcamp-dark-red p-3">
            <Profile user="Anjellyrika" name="Jelly Raborar" score={4000} />
        </div>
        <!-- 1st placer -->
        <div class="row-start-1 self-end">
            <Avatar id={39114273} alt="BastiDood" />
        </div>
        <div class="row-span-3 bg-devcamp-dark-red p-3">
            <Profile user="BastiDood" name="Basti Ortiz" score={40000} />
        </div>
        <!-- 3rd placer -->
        <div class="row-start-3 self-end">
            <Avatar id={39114273} alt="BastiDood" />
        </div>
        <div class="row-span-1 bg-devcamp-dark-red p-3">
            <Profile user="BastiDood" name="Basti Ortiz" score={400} />
        </div>
    </section>
    <section class="space-y-2">
        <Card id={39114273} user="BastiDood" name="Basti Ortiz" score={500} />
        <Card id={98273014} user="Anjellyrika" name="Jelly Raborar" score={69420} />
    </section>
</main>
