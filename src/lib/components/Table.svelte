<script lang="ts">
    import type { User } from '$lib/models/user';
    // eslint-disable-next-line init-declarations
    export let users: User[];
</script>

<div class="relative overflow-x-auto">
    <table class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">#</th>
                <th scope="col" class="px-6 py-3">Avatar</th>
                <th scope="col" class="px-6 py-3">GitHub</th>
                <th scope="col" class="px-6 py-3">Score</th>
            </tr>
        </thead>
        <tbody>
            {#each users as { id, name, score }, i (id)}
                <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td class="px-6 py-4">{i + 1}</td>
                    <td class="px-6 py-4">
                        <img
                            src="https://avatars.githubusercontent.com/u/{id}"
                            alt={name}
                            class="aspect-square size-8 rounded"
                        />
                    </td>
                    <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        ><a
                            href="https://github.com/{name}"
                            target="_blank"
                            class="font-medium text-blue-600 hover:underline dark:text-blue-500">{name}</a
                        ></th
                    >
                    <td class="px-6 py-4">{score}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
