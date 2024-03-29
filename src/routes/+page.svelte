<script>
    import Avatar from './Avatar.svelte';
    import Card from './Card.svelte';
    import Profile from './Profile.svelte';
    import { assert } from '$lib/assert';
    import upcsi from '$lib/icons/upcsi.svg';

    const lastUpdate = new Date(1711742545772);
    const datetime = lastUpdate.toISOString();
    const localeString = lastUpdate.toLocaleString();

    // eslint-disable-next-line init-declarations
    export let data;
    $: ({
        podium: [first, second, third, ...others],
        rest,
    } = data);
    $: assert(others.length === 0, 'podium is too long');
</script>

<header class="text-center font-sans">
    <a href="https://up-csi.org" target="_blank">
        <img src={upcsi} alt="UP Center for Student Innovations Logo" class="inline size-20" />
    </a>
    <h1 class="text-4xl font-bold text-devcamp-red">DevCamp 2024</h1>
    <h2 class="text-2xl text-gray-50">Leaderboard</h2>
    <p class="text-md text-gray-300">As of <time {datetime}>{localeString}</time>.</p>
</header>
<main class="space-y-8">
    {#if typeof first !== 'undefined'}
        {@const { id, name, user, score } = first}
        <section class="grid h-[60vh] grid-flow-col grid-cols-3 gap-x-8">
            {#if typeof second !== 'undefined'}
                <!-- 2nd placer -->
                {@const { id, name, user, score } = second}
                <div class="col-start-1 flex flex-col justify-end">
                    <Avatar {id} alt={user} />
                    <div class="h-2/4 bg-devcamp-dark-red p-3">
                        <Profile {user} {name} {score} />
                    </div>
                </div>
            {/if}
            <!-- 1st placer -->
            <div class="col-start-2 flex flex-col justify-end">
                <Avatar {id} alt={user} />
                <div class="h-full bg-devcamp-dark-red p-3">
                    <Profile {user} {name} {score} />
                </div>
            </div>
            {#if typeof third !== 'undefined'}
                <!-- 3rd placer -->
                {@const { id, name, user, score } = third}
                <div class="col-start-3 flex flex-col justify-end">
                    <Avatar {id} alt={user} />
                    <div class="h-1/3 bg-devcamp-dark-red p-3">
                        <Profile {user} {name} {score} />
                    </div>
                </div>
            {/if}
        </section>
    {/if}
    <section class="grid grid-flow-row grid-cols-[auto_auto_1fr_auto] items-center gap-2.5">
        {#each rest as { id, rank, name, user, score }}
            {@const index = rank + 1}
            <Card {id} {index} {user} {name} {score} />
        {/each}
    </section>
</main>
<footer class="prose-invert grid grid-cols-[auto_minmax(max-content,1fr)] items-center gap-4 font-sans text-gray-50">
    <a href="https://up-csi.org" target="_blank">
        <img src={upcsi} alt="UP Center for Student Innovations Logo" class="h-24" />
    </a>
    <div>
        <p>
            Coded by Basti Ortiz <a
                href="https://github.com/BastiDood"
                target="_blank"
                class="text-gray-300 hover:underline">(@BastiDood)</a
            >.
        </p>
        <p>
            Designed by Jelly Raborar <a
                href="https://github.com/Anjellyrika"
                target="_blank"
                class="text-gray-300 hover:underline">(@Anjellyrika)</a
            >.
        </p>
        <p>
            Data wrangled by Alquen Sarmiento <a
                href="https://github.com/Arukuen"
                target="_blank"
                class="text-gray-300 hover:underline">(@Arukuen)</a
            >.
        </p>
        <p>
            DevCamp by the UP Center for Student Innovations <a
                href="https://github.com/up-csi"
                target="_blank"
                class="text-gray-300 hover:underline">(@up-csi)</a
            >.
        </p>
        <p><i>Learn. Create. Innovate.</i></p>
    </div>
</footer>
