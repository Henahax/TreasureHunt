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

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<main class="h-full w-full p-4">
			<h2>Test</h2>
			<label for="my-drawer-2" class="btn btn-primary drawer-button sticky lg:hidden"
				>Open drawer</label
			>
		</main>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="bg-base-100 steps steps-vertical min-h-full w-fit p-4">
			<!-- Sidebar content here -->
			<li class="step step-primary">
				<a class="btn" href="/">Register</a>
			</li>
			<li class="step step-primary">Choose plan</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>

			<li class="step">Purchase</li>

			<li class="step">Purchase</li>

			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
		</ul>
	</div>
</div>
