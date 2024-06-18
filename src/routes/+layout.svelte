<script>
	import './styles.css';
	import { onNavigate } from '$app/navigation';
	import { navStore } from '$lib/store';

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
		<ul
			class="max-md:btm-nav md:menu md:menu-horizontal flex h-full w-full flex-row items-center justify-between md:mx-auto md:w-fit"
		>
			<li
				class="flex h-full w-full items-center justify-center md:mx-4 md:w-fit
			{$navStore === 'home' ? 'active' : ''}"
			>
				<a
					href="/"
					class="bg-base-200 flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row"
				>
					<i class="fa-regular fa-map"></i>
					<div class="hidden md:block">Treasure Hunts</div>
				</a>
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
			<li
				class="flex h-full w-full items-center justify-center md:mx-4 md:w-fit
		{$navStore === 'settings' ? 'active' : ''}"
			>
				<a
					href="/settings"
					class="bg-base-200 flex h-full w-full flex-col items-center justify-center gap-2 md:flex-row"
				>
					<i class="fa-solid fa-gear"></i>
					<div class="hidden md:block">Settings</div>
				</a>
			</li>
		</ul>
	</nav>
	<div class="mb-16 flex w-full flex-grow md:mb-0 md:pt-16">
		<slot />
	</div>
</main>
