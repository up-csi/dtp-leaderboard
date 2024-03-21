<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let user: string;
    // eslint-disable-next-line init-declarations
    export let name: string;
    // eslint-disable-next-line init-declarations
    export let score: number;
</script>

<div class="grid grid-rows-[1fr_auto_auto] space-y-2 text-center">
    <div class="leading-3">
        <p class="text-lg text-gray-50">{name}</p>
        <p class="text-sm text-gray-300">
            <a target="_blank" href="https://github.com/{user}" class="hover:underline">{user}</a>
        </p>
    </div>
    <span class="font-sans text-xl font-bold text-devcamp-red">{score}</span>
</div>
