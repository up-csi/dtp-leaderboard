<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let place: number;
    // eslint-disable-next-line init-declarations
    export let id: number;
    // eslint-disable-next-line init-declarations
    export let user: string;
    // eslint-disable-next-line init-declarations
    export let name: string;
    // eslint-disable-next-line init-declarations
    export let score: number;

    let height: string;
    if (place === 1) height = '24';
    else if (place === 2) height = '16';
    else if (place === 3) height = '12';
</script>

<div class="inline-block space-y-2 text-center">
    <img
        src="https://avatars.githubusercontent.com/u/{id}"
        alt={name}
        class="auto-28 aspect-square rounded-full border-4 border-devcamp-red"
    />
    <div class="leading-3">
        <p class="text-lg text-gray-50">{name}</p>
        <p class="text-sm text-gray-300">
            <a target="_blank" href="https://github.com/{user}" class="hover:underline">{user}</a>
        </p>
    </div>
    <span class="font-sans text-xl font-bold text-devcamp-red">{score}</span>
    <div class="bg-devcamp-dark-red h-{height}">
        <p class="leading-10">{place}</p>
    </div>
</div>
