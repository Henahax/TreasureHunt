<script lang="ts">
	import type { Task } from '$lib/types';
	import { page } from '$app/stores';
	import { navStore, activeEventStore } from '$lib/store';
	$navStore = 'task';

	let taskId = $page.params.task;

	console.log(taskId);

	console.log($activeEventStore);

	let task: Task = $activeEventStore.find((task: Task) => task.id === taskId);

	console.log(task);
</script>

<h2>Test</h2>
