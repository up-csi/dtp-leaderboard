<script>
    import Card from './Card.svelte';
    import Podium from './Podium.svelte';
</script>

<main class="space-y-4">
    <section class="flex justify-center gap-8">
        <Podium id={39114273} user="BastiDood" name="Basti Ortiz" score={500} />
        <Podium id={39114273} user="BastiDood" name="Basti Ortiz" score={500} />
        <Podium id={98273014} user="Anjellyrika" name="Jelly Raborar" score={69420} />
    </section>
    <section class="space-y-2">
        <Card id={39114273} user="BastiDood" name="Basti Ortiz" score={500} />
        <Card id={98273014} user="Anjellyrika" name="Jelly Raborar" score={69420} />
    </section>
</main>
