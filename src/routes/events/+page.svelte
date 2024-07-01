<script lang="ts">
	import type { Event } from '$lib/types';
	import TreasureHuntCode from '$lib/TreasureHuntCode.svelte';

	import { navStore, allEventsStore, activeEventStore } from '$lib/store';
	import Tags from '$lib/Tags.svelte';
	$navStore = 'events';

	$: filteredEvents = $allEventsStore.filter((event: Event) => {
		const nameMatch = event.name.toLowerCase().includes(filter.toLowerCase());
		const langMatch = event.lang.toLowerCase().includes(filter.toLowerCase());
		const locationMatch = event.location.toLowerCase().includes(filter.toLowerCase());
		const tagMatch = event.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()));
		return nameMatch || langMatch || locationMatch || tagMatch;
	});
	let filter = '';

	let tutorial = $allEventsStore.filter((event: Event) => {
		const results = event.id === 'tutorial';
		return results;
	})[0];

	let featured = tutorial;
	if ($activeEventStore) {
		featured = $activeEventStore;
	}
</script>

<h2 class="text-2xl">Events</h2>

<div>
	{#if $activeEventStore}
		<span>Active Treasure Hunt</span>
	{:else}
		<span>Featured Treasure Hunt</span>
	{/if}
	<a
		class="card w-full gap-2 bg-cover bg-center p-4 bg-blend-darken shadow-xl"
		style="background-image: url('{featured.image}'); background-color: rgba(0,0,0,0.5);"
		href="events/{featured.id}"
	>
		<h3 class="text-lg">{featured.name}</h3>
		<p>{featured.subtitle}</p>
		<Tags event={featured} position={'start'} />
	</a>
</div>

<TreasureHuntCode />

<div class="bg-base-200 card card-bordered border-neutral-700 shadow-xl">
	<label class="input input-bordered input-sm flex items-center gap-2">
		<i class="fa-solid fa-magnifying-glass"></i>
		<input type="text" class="grow" placeholder="Search" bind:value={filter} />
	</label>
	<ul class="menu rounded-box w-full">
		{#if filteredEvents.length === 0}
			<li>
				<div class="justify-center">no results</div>
			</li>
		{/if}
		{#each filteredEvents as event, index}
			<li>
				<a href="events/{event.id}" class="flex flex-row justify-between">
					<div>{event.name}</div>
					<Tags {event} short={true} position={'end'} />
				</a>
			</li>
			{#if index !== filteredEvents.length - 1}
				<div class="divider m-0"></div>
			{/if}
		{/each}
	</ul>
</div>
