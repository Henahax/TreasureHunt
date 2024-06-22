<script lang="ts">
	import './styles.css';
	import { onNavigate } from '$app/navigation';
	import { navStore, activeEventStore } from '$lib/store';

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<main class="flex min-h-dvh w-full">
	<nav
		class="md:navbar bg-base-200 fixed bottom-0 z-50 flex h-16 w-full flex-row items-center justify-center md:top-0"
	>
		<div class="flex max-w-screen-lg grow">
			<a class="btn hidden text-2xl md:flex" href="/">
				<i class="fa-solid fa-map-location-dot"></i>
			</a>
			<ul
				class="max-md:btm-nav md:menu md:menu-horizontal flex h-full w-full flex-row items-center justify-between md:mx-auto md:w-fit"
			>
				<li
					class="flex h-full w-full items-center justify-center md:mx-4 md:w-fit
			{$navStore === 'events' ? 'active' : ''}"
				>
					<a
						href="/events"
						class="bg-base-200 flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row"
					>
						<i class="fa-solid fa-scroll"></i>

						<div class="hidden md:block">Treasure Hunts</div>
					</a>
				</li>
				<li
					class="flex h-full w-full items-center justify-center md:mx-4 md:w-fit
			{$navStore === 'task' ? 'active' : ''} {$activeEventStore ? 'disabled' : ''}"
				>
					{#if $activeEventStore}
						<button
							disabled
							class="bg-base-200 flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row"
						>
							<i class="fa-solid fa-play"></i>
							<div class="hidden md:block">Continue</div>
						</button>
					{:else}
						<a
							href="/events"
							class="bg-base-200 flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row"
						>
							<i class="fa-solid fa-play"></i>
							<div class="hidden md:block">Continue</div>
						</a>{/if}
				</li>
				<li
					class="flex h-full w-full items-center justify-center md:mx-4 md:w-fit
		{$navStore === 'about' ? 'active' : ''}"
				>
					<a
						href="/about"
						class="bg-base-200 flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row"
					>
						<i class="fa-solid fa-question"></i>
						<div class="hidden md:block">About</div>
					</a>
				</li>
			</ul>
		</div>
	</nav>
	<div id="layoutRoot" class="mb-16 flex w-full flex-grow md:mb-0 md:pt-16">
		<slot />
	</div>
</main>
