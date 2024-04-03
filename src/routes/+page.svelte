<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import json from '../assets/beta.json';
	import Task from '$lib/Task.svelte';

	const dataStore: any = writable([]);

	onMount(() => {
		$dataStore = json;
	});
</script>

{#each $dataStore as data}
	{#each data.tasks as task}
		<Task {task} />
	{/each}
{/each}
