<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import json from '../assets/beta.json';

	const dataStore: any = writable([]);

	let taskId = 0;

	onMount(() => {
		$dataStore = json;
	});
</script>

<div class="mx-auto p-8 w-fit max-w-screen-xl flex flex-col gap-8">
	{#if $dataStore.tasks}
		{#each $dataStore.tasks.filter((task) => task.id === taskId) as task}
			<h2 class="h2 text-center">{task.name}</h2>
			{#each task.content as content}
				{#if content.type === 'text'}
					<p>{content.text}</p>
				{/if}
				{#if content.type === 'image'}
					<img src={content.src} alt="" />
				{/if}
			{/each}
		{/each}
	{/if}
</div>
