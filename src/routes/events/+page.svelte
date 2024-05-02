<script lang="ts">
	import Heading from '$lib/heading.svelte';

	import { navStore } from '../store';
	$navStore = 'events';

	let filter = '';
</script>

<Heading title="Treasure Hunts" />

<section class="flex flex-col">
	<h2>Active Treasure Hunt:</h2>
	<a
		href="event/beta"
		class="card flex h-fit w-full border border-neutral-700 bg-[url('https://live.staticflickr.com/7647/16491939584_5416a41768_z.jpg')] bg-cover bg-no-repeat"
	>
		<div
			class="card from-base-300 flex h-full w-full flex-col justify-between gap-2 bg-gradient-to-br from-35% to-transparent p-4"
		>
			<div>
				<h2 class="text-3xl font-semibold">Beta Test</h2>
				<div class="text-md">Erste Schatzsuche zum testen</div>
			</div>
			<progress class="progress progress-success w-full" value="33" max="100"></progress>

			<div class="flex w-full flex-row flex-wrap gap-1">
				<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
				<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
				<div class="badge gap-2">Beta-Test</div>
				<div class="badge gap-2">Handy</div>
				<div class="badge gap-2">Desktop</div>
				<div class="badge gap-2">Kamera</div>
				<div class="badge gap-2">Feedback</div>
			</div>
		</div>
	</a>
</section>
<section>
	<h2>Available Treasure Hunts:</h2>
	<div class="bg-base-200 rounded-lg">
		<label class="input input-bordered flex items-center gap-2">
			<i class="fa-solid fa-magnifying-glass text-sm"></i>
			<input type="text" class="grow" placeholder="Search" bind:value={filter} />
		</label>
		<ul class="menu rounded-box w-full">
			<li>
				<div class="justify-center">no results</div>
			</li>
			<div class="divider m-0"></div>

			<li>
				<a href="event/beta" class="flex flex-row justify-between">
					<div>Beta-Test Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
						<div class="badge gap-2">69 Tags</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
			<div class="divider m-0"></div>
			<li>
				<a href="event/dummy" class="flex flex-row justify-between">
					<div>Dummy Schatzsuche</div>
					<div class="text-right">
						<div class="badge gap-2"><i class="fa-solid fa-location-dot"></i>Online</div>
						<div class="badge gap-2"><i class="fa-solid fa-language"></i>de</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</section>
