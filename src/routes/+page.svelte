<script lang="ts">
	import { navStore } from '$lib/store';
	import { titleStore } from '$lib/store';
	$navStore = 'home';
	$titleStore = 'Welcome!';

	import events from '$lib/events.json';
	let activeEvent = events[0];

	$: filteredEvents = events.filter((event) => {
		const nameMatch = event.name.toLowerCase().includes(filter.toLowerCase());
		const langMatch = event.lang.toLowerCase().includes(filter.toLowerCase());
		const locationMatch = event.location.toLowerCase().includes(filter.toLowerCase());
		const tagMatch = event.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()));
		return nameMatch || langMatch || locationMatch || tagMatch;
	});

	let filter = '';
</script>

<section class="flex flex-col gap-2">
	<h2>Active Treasure Hunt:</h2>
	<a
		href="event/beta"
		class="card flex h-fit w-full border border-neutral-700 bg-[url('https://live.staticflickr.com/7647/16491939584_5416a41768_z.jpg')] bg-cover bg-no-repeat"
	>
		<div
			class="card from-base-300 flex h-full w-full flex-col justify-between gap-2 bg-gradient-to-br from-35% to-transparent p-4"
		>
			<div>
				<h2 class="text-3xl font-semibold">{activeEvent.name}</h2>
				<div class="text-md">{activeEvent.description}</div>
			</div>
			<progress class="progress progress-success w-full" value="33" max="100"></progress>

			<div class="flex w-full flex-row flex-wrap gap-1">
				{#if activeEvent.location}
					<div class="badge gap-2">
						<i class="fa-solid fa-location-dot"></i>{activeEvent.location}
					</div>
				{/if}
				{#if activeEvent.lang}
					<div class="badge gap-2">
						<i class="fa-solid fa-language"></i>{activeEvent.lang}
					</div>
				{/if}
				{#each activeEvent.tags as tag}
					<div class="badge gap-2">{tag}</div>
				{/each}
			</div>
		</div>
	</a>
</section>
<section class="flex flex-col gap-2">
	<h2>Available Treasure Hunts:</h2>
	<div class="bg-base-200 rounded-lg">
		<label class="input input-bordered flex items-center gap-2">
			<i class="fa-solid fa-magnifying-glass text-sm"></i>
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
					<a href="event/{event.id}" class="flex flex-row justify-between">
						<div>{event.name}</div>
						<div class="text-right">
							<div class="badge gap-2">
								<i class="fa-solid fa-location-dot"></i>{event.location}
							</div>
							<div class="badge gap-2"><i class="fa-solid fa-language"></i>{event.lang}</div>
							{#if event.tags.length > 0}
								<div class="badge gap-2">{event.tags.length}tags</div>
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
</section>
