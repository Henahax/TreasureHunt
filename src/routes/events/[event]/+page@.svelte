<script lang="ts">
	import type { Event } from '$lib/types';
	import { page } from '$app/stores';
	import { navStore, allEventsStore, activeEventStore } from '$lib/store';
	$navStore = 'events';

	let eventId = $page.params.event;

	let event: Event = $allEventsStore.find((event: Event) => event.id === eventId);

	function resetActiveEvent() {
		confirm(
			'Are you sure you want to reset the active treasure hunt?\n\nAll progress will be lost.\n\nYou can restore progress by restarting the treasure hunt and reentering your last password.'
		) && activeEventStore.set([]);
	}

	function startEvent() {
		if ($activeEventStore.length !== 0) {
			if (
				!confirm(
					'Another treasure hunt is already active. Do you want to overwrite it?\n\nAll progress will be lost.\n\nYou can restore progress by restarting the treasure hunt and reentering your last password.'
				)
			) {
				return;
			}
		}
		console.log(event);
		activeEventStore.set(event);
		window.location.href = `/events/${event.id}/${event.tasks[0].id}`;
	}
</script>

<div class="h-full w-full bg-pink-800 p-8">
	<main class="mx-auto flex h-full w-full max-w-screen-sm flex-col gap-4">
		<div class="grow"></div>
		<div class="text-center">
			<h2 class="text-3xl">{event.name}</h2>
			<div class="text-lg">{event.subtitle}</div>
			<div>tags</div>

			<p class="text-justify">{event.description}</p>
		</div>

		<progress class="progress progress-success w-full" value="40" max="100"></progress>

		<div class="flex flex-row justify-center gap-4">
			<button class="btn btn-success max-w-xs grow" on:click={startEvent}>
				<i class="fa-solid fa-play"></i>
				Start
			</button>
			{#if $activeEventStore.length !== 0}
				<button class="btn btn-neutral" on:click={resetActiveEvent}>
					<i class="fa-solid fa-eject"></i>Reset
				</button>
			{/if}
		</div>
	</main>
</div>
