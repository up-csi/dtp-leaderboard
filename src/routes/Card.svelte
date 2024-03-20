<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let id: number;
    // eslint-disable-next-line init-declarations
    export let user: string;
    // eslint-disable-next-line init-declarations
    export let name: string;
    // eslint-disable-next-line init-declarations
    export let score: number;
</script>

<div class="grid grid-cols-[auto_auto_1fr_auto] items-center gap-2.5 rounded-md bg-devcamp-gray-900 p-4 shadow-sm">
    <span>#</span>
    <img src="https://avatars.githubusercontent.com/u/{id}" alt={name} class="aspect-square size-8 rounded" />
    <div class="flex flex-col justify-center">
        <span class="text-gray-50">{name}</span>
        <span class="text-sm text-gray-300"
            ><a target="_blank" href="https://github.com/{user}" class="hover:underline">{user}</a></span
        >
    </div>
    <span class="font-sans font-bold text-devcamp-red">{score}</span>
</div>
