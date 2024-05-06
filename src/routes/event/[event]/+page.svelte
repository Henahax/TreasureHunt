<script lang="ts">
	import { navStore } from '../../store';
	import { titleStore } from '../../store';

	import Password from '$lib/password.svelte';

	export let data;

	$navStore = '';
	$titleStore = data.name;
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex w-fit flex-col items-center p-16">
		<label for="my-drawer" class="btn btn-neutral drawer-button fixed bottom-20 left-4 lg:hidden"
			><i class="fa-solid fa-book"></i>Task</label
		>
		<!-- Page content here -->

		<button class="btn btn-primary fixed bottom-20 right-4" onclick="my_modal_5.showModal()"
			><i class="fa-solid fa-key"></i>Unlock Task</button
		>

		<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<div class="modal-action">
					<Password />
				</div>
			</div>
		</dialog>

		{#each data.tasks as task}
			{#if task.active}
				<h2>{task.name}</h2>
			{/if}
		{/each}
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="steps steps-vertical p-4 pt-16">
			{#each data.tasks as task}
				{#if task.active}
					<li data-content="!" class="step step-primary">
						<button class="btn btn-link">{task.name}</button>
					</li>
				{:else if task.unlocked}
					<li data-content="✓" class="step step-primary">
						<a class="btn btn-link h-full w-full">{task.name}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>

<style>
</style>
