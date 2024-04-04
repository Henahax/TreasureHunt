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

		for (var i = $eventStore.tasks.length - 1; i >= 0; i--) {
			$eventStore.tasks[i].active = false;

			if ($eventStore.tasks[i].unlocked && activeNotSet) {
				$eventStore.tasks[i].active = true;
				activeNotSet = false;
				console.log(activeNotSet);
			}
		}
	}
</script>

{#if data.id}
	<h2 class="h3">Quest Log</h2>
	<div class="w-full card">
		<Accordion autocollapse width="w-full">
			{#each $eventStore.tasks as task}
				{#if task.unlocked}
					<AccordionItem>
						<svelte:fragment slot="lead">
							{#if task.active}
								<i class="fa-solid fa-question"></i>
							{:else}
								<i class="fa-solid fa-check"></i>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="summary">
							<span class={task.active ? 'text-success-500' : ''}
								>{task.name}<br />{task.description}</span
							>
						</svelte:fragment>
						<svelte:fragment slot="content">
							{#each task.content as content}
								{#if content.type === 'text'}
									<p>{content.text}</p>
								{/if}
								{#if content.type === 'image'}
									<img src={content.src} alt="" />
								{/if}
							{/each}
						</svelte:fragment>
					</AccordionItem>
				{:else}
					<AccordionItem disabled>
						<svelte:fragment slot="lead"><i class="fa-solid fa-lock"></i></svelte:fragment>
						<svelte:fragment slot="summary">{task.name}<br /></svelte:fragment>
						<svelte:fragment slot="content">
							{#each task.content as content}
								{#if content.type === 'text'}
									<p>{content.text}</p>
								{/if}
								{#if content.type === 'image'}
									<img src={content.src} alt="" />
								{/if}
							{/each}
						</svelte:fragment>
					</AccordionItem>
				{/if}
			{/each}
		</Accordion>
	</div>
{:else}
	<h2 class="h2 text-error-500">not found</h2>
	<p class="text-center text-error-500">verify your path</p>
{/if}

<style>
	:global(.accordion-item:has(button[disabled])) {
		@apply text-surface-500;
	}
</style>
