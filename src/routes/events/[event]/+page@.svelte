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

	function resetActiveEvent() {
		//TODO
	}

	function startEvent() {
		//TODO
		//Wirklich überschreiben?

		activeEventStore.set(event);

		goto(`/events/${$activeEventStore.id}/${$activeEventStore.tasks[0].id}`);
	}
</script>

<div class="h-full w-full bg-pink-800 p-8">
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

		<div class="flex flex-col items-center justify-center">
			<button class="btn btn-disabled" disabled>
				<i class="fa-solid fa-lock"></i>Locked
			</button>
			<div class="divider">unlock with</div>
			<TreasureHuntCode />
		</div>

		<div class="flex flex-row items-center justify-center gap-4">
			<button class="btn btn-primary max-w-xs grow" on:click={startEvent}>
				<i class="fa-solid fa-play"></i>Start
			</button>

			<button class="btn btn-success max-w-xs grow">
				<i class="fa-solid fa-play"></i>Continue
			</button>

			<button class="btn btn-neutral" on:click={resetActiveEvent}>
				<i class="fa-solid fa-eject"></i>Reset
			</button>
		</div>
	</main>
</div>
