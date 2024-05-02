<script>
	import './styles.css';
	import Heading from '$lib/heading.svelte';
	import { navStore } from './store';
	import { titleStore } from './store';
</script>

<div class="app flex flex-col">
	<ul
		class="max-lg:btm-nav lg:menu lg:menu-horizontal bg-base-200 fixed z-50 flex w-full flex-row justify-center text-center"
	>
		<li class={$navStore === 'home' ? 'active' : ''}>
			<a href="/">
				<i class="fa-solid fa-list-ul"></i>
				<div class="hidden sm:block">Treasure Hunts</div>
			</a>
		</li>
		<li class={$navStore === 'about' ? 'active' : ''}>
			<a href="/about">
				<i class="fa-solid fa-question"></i>
				<div class="hidden sm:block">About</div>
			</a>
		</li>
		<li class={$navStore === 'settings' ? 'active' : ''}>
			<a href="/settings">
				<i class="fa-solid fa-gear"></i>
				<div class="hidden sm:block">Settings</div>
			</a>
		</li>
	</ul>

	<main class="mx-auto mb-16 mt-0 flex w-full max-w-screen-lg flex-col gap-8 p-4 lg:mb-0 lg:mt-16">
		<Heading title={$titleStore} />

		<slot />
	</main>
</div>

<style>
</style>
