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

	<div class="card bg-base-100 w-full border border-neutral-700 shadow-xl">
		<figure class="h-32">
			<img src="https://live.staticflickr.com/7647/16491939584_5416a41768_z.jpg" alt="banner" />
		</figure>
		<div class="card-body p-4">
			<h2 class="card-title">
				{activeEvent.name}
			</h2>
			<p>{activeEvent.description}</p>
			<progress class="progress progress-success w-full" value="33" max="100"></progress>

			<div class="card-actions justify-end">
				{#if activeEvent}
					<a href="event/beta" class="btn btn-primary min-w-20">Continue</a>
				{:else}
					<a href="event/beta" class="btn btn-primary min-w-20">Start</a>
				{/if}
			</div>
		</div>
	</div>
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
								<div class="badge gap-2">{event.tags.length} {' '}tags</div>
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
