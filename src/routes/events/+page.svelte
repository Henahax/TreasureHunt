<script lang="ts">
	import type { Event } from '$lib/types';
	import TreasureHuntCode from '$lib/TreasureHuntCode.svelte';

	import { navStore, allEventsStore, activeEventStore } from '$lib/store';
	$navStore = 'events';

	$: filteredEvents = $allEventsStore.filter((event: Event) => {
		const nameMatch = event.name.toLowerCase().includes(filter.toLowerCase());
		const langMatch = event.lang.toLowerCase().includes(filter.toLowerCase());
		const locationMatch = event.location.toLowerCase().includes(filter.toLowerCase());
		const tagMatch = event.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()));
		return nameMatch || langMatch || locationMatch || tagMatch;
	});
	let filter = '';
</script>

<h2 class="text-2xl">Events</h2>

<div>
	{#if $activeEventStore.length === 0}
		<span>Featured Treasure Hunt</span>
	{:else}
		<span>Active Treasure Hunt</span>
	{/if}
	<a class="card w-full bg-pink-800 p-4" href="events/test">
		<h3 class="text-lg">Beta Treasure Hunt</h3>
		<p>Test test test</p>
		<div>Tags</div>
	</a>
</div>

<TreasureHuntCode />

<div class="bg-base-200 rounded-lg shadow-xl">
	<label class="input input-bordered flex items-center gap-2">
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
					<div class="flex flex-wrap justify-end gap-1 text-right">
						<div class="badge badge-neutral gap-1 text-xs">
							<i class="fa-solid fa-location-dot"></i>{event.location}
						</div>
						<div class="badge badge-neutral gap-1 text-xs">
							<i class="fa-solid fa-language"></i>{event.lang}
						</div>
						{#if event.tags.length > 0}
							<div class="badge badge-neutral gap-1 text-xs">{event.tags.length} {' '}tags</div>
						{/if}
					</div>
				</a>
			</li>
			{#if index !== filteredEvents.length - 1}
				<div class="divider m-0"></div>
			{/if}
		{/each}
	</ul>
</div>
