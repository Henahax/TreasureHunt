<script lang="ts">
	import type { Task } from '$lib/types';
	import { page } from '$app/stores';
	import { navStore, activeEventStore } from '$lib/store';
	import PageContainer from '$lib/PageContainer.svelte';
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
		<PageContainer>
			<h2>Test</h2>
			<label
				for="my-drawer-2"
				class="btn btn-primary drawer-button absolute bottom-4 w-fit lg:hidden"
			>
				<i class="fa-solid fa-list-check"></i>
			</label>
		</PageContainer>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul
			class="bg-base-100 steps steps-vertical h-full w-fit p-4 pb-16 pt-4 md:pb-4 md:pt-16 lg:pt-4"
		>
			<!-- Sidebar content here -->
			<li class="step step-primary">
				<a class="btn btn-outline w-full" href="/">Register</a>
			</li>
			<li class="step step-primary">
				<a class="btn w-full" href="/">Purchase Purchase</a>
			</li>
			<li class="step">
				<a class="btn w-full" href="/">Purchase</a>
			</li>
			<li class="step">Purchase</li>
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
