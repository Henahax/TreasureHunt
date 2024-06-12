<script lang="ts">
	import { navStore, titleStore } from '$lib/store';

	import type { Event, Task } from '$lib/types';

	export let data: Event;

	$navStore = '';
	$titleStore = '';

	//temp
	import events from '$lib/events.json';
	let activeEvent = events[0];

	function reset() {
		var doReset = confirm('Message?');
		if (doReset) {
			window.location = '/';
			//todo: reset active treasurehunt
		}
	}
</script>

<div class="card bg-base-200 w-full border border-neutral-700 shadow-xl">
	<figure class="h-32">
		<img
			class="h-full w-full object-cover"
			src="https://live.staticflickr.com/7647/16491939584_5416a41768_z.jpg"
			alt="banner"
		/>
	</figure>
	<div class="card-body flex flex-col gap-2 p-4">
		<h2 class="card-title">
			{activeEvent.name}
		</h2>
		<p>{activeEvent.description}</p>

		<div class="flex w-full flex-row flex-wrap gap-1">
			{#if activeEvent.location}
				<div class="badge badge-neutral gap-1">
					<i class="fa-solid fa-location-dot"></i>{activeEvent.location}
				</div>
			{/if}
			{#if activeEvent.lang}
				<div class="badge badge-neutral gap-1">
					<i class="fa-solid fa-language"></i>{activeEvent.lang}
				</div>
			{/if}
			{#each activeEvent.tags as tag}
				<div class="badge badge-neutral gap-1">{tag}</div>
			{/each}
		</div>
		<div class="card-actions justify-end">
			{#if activeEvent}
				<a href="event/beta" class="btn btn-primary min-w-20"
					><i class="fa-solid fa-play"></i>Continue</a
				>
				<button class="btn btn-neutral" on:click={reset}
					><i class="fa-solid fa-trash-can"></i>Reset</button
				>
			{:else}
				<a href="event/beta" class="btn btn-primary min-w-20"
					><i class="fa-solid fa-play"></i>Start</a
				>
			{/if}
		</div>
	</div>
</div>
