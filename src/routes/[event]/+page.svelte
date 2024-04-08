<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { eventStore } from '../eventStore';
	import lang from '../../lang/lang.json';

	export let data;
	$eventStore = data;

	$: $eventStore, updateActiveTask();

	// Debug
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

	// Open Task, if last unlocked and next no password -> unlock next
	function toggle(event) {
		if (event.detail.open) {
			//unlock
			for (let i = 0; i < $eventStore.tasks.length; i++) {
				if ($eventStore.tasks[i].id === event.detail.id) {
					$eventStore.tasks[i].open = true;
					if (
						$eventStore.tasks[i + 1] !== undefined &&
						$eventStore.tasks[i + 1].password === undefined
					) {
						$eventStore.tasks[i + 1].locked = false;
					}
				} else {
					$eventStore.tasks[i].open = false;
				}
			}
		}
	}
</script>

{#if data.id}
	<h2 class="h3">{lang.questLog[$eventStore.lang]}</h2>
	<Accordion width="w-full" class="text-token card p-2">
		{#each $eventStore.tasks as task, t}
			{#if !($eventStore.hideLocked && task.locked)}
				<AccordionItem
					id={task.id}
					bind:disabled={task.locked}
					on:toggle={toggle}
					bind:open={task.open}
				>
					<!-- TODO: Opionally hide locked tasks -->
					<svelte:fragment slot="lead">
						{#if t === $eventStore.tasks.length - 1}
							<i
								class="fa-solid fa-trophy"
								class:text-success-500={task.active}
								class:animate-pulse={task.active}
							></i>
						{:else if task.active}
							<i class="fa-solid fa-circle-exclamation animate-pulse text-success-500"></i>
						{:else if task.locked}
							<i class="fa-solid fa-lock"></i>
						{:else}
							<i class="fa-solid fa-check"></i>
						{/if}
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<div class:text-success-500={task.active}>
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
								<img src={content.src} class="rounded-2xl" alt="" />
							{/if}
						{/each}
					</svelte:fragment>
				</AccordionItem>
			{/if}
		{/each}
	</Accordion>
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
