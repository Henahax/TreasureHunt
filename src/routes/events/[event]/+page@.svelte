<script lang="ts">
	import type { Event } from '$lib/types';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { navStore, allEventsStore, activeEventStore } from '$lib/store';
	import Tags from '$lib/Tags.svelte';
	import TreasureHuntCode from '$lib/TreasureHuntCode.svelte';
	$navStore = 'events';

	let eventId = $page.params.event;

	let event: Event = $allEventsStore.find((event: Event) => event.id === eventId) as Event;

	let isActiveEvent = false;
	if ($activeEventStore && event.id === $activeEventStore.id) {
		isActiveEvent = true;
	}

	function resetActiveEvent() {
		if (confirm('?')) {
			activeEventStore.set(undefined);
			isActiveEvent = false;
		}
	}

	function startEvent() {
		//TODO
		//Wirklich überschreiben?

		goto(`/events/${event.id}/${event.tasks[0].id}`);
		activeEventStore.set(event);
	}

	function continueEvent() {
		let taskId;
		event.tasks.forEach((task) => {
			if (task.unlocked === true) {
				taskId = task.id;
			}
		});
		goto('/events/' + event.id + '/' + taskId);
	}
</script>

<div
	class="treasureHunt h-full w-full bg-cover bg-center p-8 bg-blend-darken"
	style="background-image: url('{event.image}'); background-color: rgba(0,0,0,0.66);"
>
	<main class="mx-auto flex h-full w-full max-w-screen-md flex-col justify-center gap-16">
		<div class="flex flex-col gap-4 text-center">
			<div>
				<h2 class="text-3xl">{event.name}</h2>
				<div class="text-lg">{event.subtitle}</div>
			</div>

			<div class="flex justify-center">
				<Tags {event} />
			</div>

			<progress class="progress progress-success w-full" value="1" max={event.tasks.length}>
			</progress>

			<p class="text-justify">{event.description}</p>
		</div>

		{#if event.locked === true}
			<div class="flex flex-col items-center justify-center">
				<button class="btn btn-outline" disabled>
					<i class="fa-solid fa-lock"></i>Locked
				</button>
				<div class="divider">unlock with</div>
				<TreasureHuntCode />
			</div>
		{:else}
			<div class="flex flex-row items-center justify-center gap-4">
				{#if isActiveEvent}
					<button class="btn btn-success max-w-xs grow" on:click={continueEvent}>
						<i class="fa-solid fa-play"></i>Continue
					</button>
				{:else}
					<button class="btn btn-primary max-w-xs grow" on:click={startEvent}>
						<i class="fa-solid fa-play"></i>Start
					</button>
				{/if}

				{#if $activeEventStore}
					<button class="btn btn-neutral" on:click={resetActiveEvent}>
						<i class="fa-solid fa-eject"></i>Reset
					</button>
				{/if}
			</div>
		{/if}
	</main>
</div>

<style>
	.treasureHunt {
		background: rgba(0, 0, 0, 0.5)
			url('https://images.unsplash.com/photo-1608924066819-930edc42986a?q=100');
		background-size: cover;
		background-blend-mode: darken;
		background-position: center;
	}
</style>
