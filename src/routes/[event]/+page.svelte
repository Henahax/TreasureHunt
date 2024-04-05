<script lang="ts">
	import { eventStore } from '../store';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let data;
	$eventStore = data;

	$: $eventStore, updateActiveTask();

	//Debug
	//$: $eventStore, console.log($eventStore);

	function updateActiveTask() {
		var activeNotSet = true;

		if ($eventStore.tasks) {
			for (var i = $eventStore.tasks.length - 1; i >= 0; i--) {
				$eventStore.tasks[i].active = false;

				if (!$eventStore.tasks[i].locked && activeNotSet) {
					$eventStore.tasks[i].active = true;
					activeNotSet = false;
				}
			}
		}
	}
</script>

{#if data.id}
	<h2 class="h3">Quest Log</h2>
	<div class="w-full card">
		<Accordion width="w-full">
			{#each $eventStore.tasks as task, t}
				<AccordionItem bind:disabled={task.locked}>
					<svelte:fragment slot="lead">
						{#if task.active}
							<i class="fa-solid fa-question animate-pulse text-success-500"></i>
						{:else if task.locked}
							<i class="fa-solid fa-lock"></i>
						{:else}
							<i class="fa-solid fa-check"></i>
						{/if}
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<div class={task.active ? 'text-success-500' : ''}>
							<p class="text-sm">{task.name}</p>
							{#if !task.locked}
								<p>{task.description}</p>
							{/if}
						</div>
					</svelte:fragment>
					<svelte:fragment slot="content">
						{#each task.content as content}
							{#if content.type === 'text'}
								<p>{@html content.text}</p>
							{:else if content.type === 'image'}
								<img src={content.src} alt="" />
							{/if}
						{/each}
					</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
{:else}
	<div class="text-center text-error-500">
		<h2 class="h2">not found</h2>
		<p>verify your path</p>
	</div>
{/if}

<style>
	:global(.accordion-item:has(button[disabled])) {
		@apply text-surface-500;
	}
</style>
