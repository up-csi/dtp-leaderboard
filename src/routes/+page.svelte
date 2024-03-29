<script>
    import Avatar from './Avatar.svelte';
    import Card from './Card.svelte';
    import Profile from './Profile.svelte';
    import { assert } from '$lib/assert';

    // eslint-disable-next-line init-declarations
    export let data;
    $: ({
        podium: [first, second, third, ...others],
        rest,
    } = data.users);
    $: assert(others.length === 0, 'podium is too long');
</script>

<main class="space-y-8">
    <header class="text-center font-sans">
        <h1 class="text-4xl font-bold text-devcamp-red">DevCamp 2024</h1>
        <h2 class="text-2xl">Leaderboard</h2>
    </header>
    {#if typeof first !== 'undefined'}
        {@const { name, user, score } = first}
        <section class="grid h-[60vh] grid-flow-col grid-cols-3 gap-x-8">
            {#if typeof second !== 'undefined'}
                <!-- 2nd placer -->
                {@const { name, user, score } = second}
                <div class="col-start-1 flex flex-col justify-end">
                    <Avatar id={98273014} alt={user} />
                    <div class="h-2/4 bg-devcamp-dark-red p-3">
                        <Profile {user} {name} {score} />
                    </div>
                </div>
            {/if}
            <!-- 1st placer -->
            <div class="col-start-2 flex flex-col justify-end">
                <Avatar id={39114273} alt={user} />
                <div class="h-full bg-devcamp-dark-red p-3">
                    <Profile {user} {name} {score} />
                </div>
            </div>
            {#if typeof third !== 'undefined'}
                <!-- 3rd placer -->
                {@const { name, user, score } = third}
                <div class="col-start-3 flex flex-col justify-end">
                    <Avatar id={39114273} alt={user} />
                    <div class="h-1/3 bg-devcamp-dark-red p-3">
                        <Profile {user} {name} {score} />
                    </div>
                </div>
            {/if}
        </section>
    {/if}
    <section class="space-y-2">
        {#each rest as { rank, name, user, score }}
            {@const index = rank + 1}
            <Card id={39114273} {index} {user} {name} {score} />
        {/each}
    </section>
</main>
