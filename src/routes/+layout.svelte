<script>
	import './styles.css';
	import { navStore } from '$lib/store';
	import { titleStore } from '$lib/store';
	import { langStore } from '$lib/store';
	import { onMount } from 'svelte';
	import lang from '$lib/lang.json';
	onMount(loadLang);

	function loadLang() {
		$langStore = lang;
	}
</script>

<!--
	<ul
	class="max-lg:btm-nav lg:menu lg:menu-horizontal bg-base-200 fixed z-50 flex w-full flex-row justify-center text-center"
>
-->

<!--
<ul class="max-lg:btm-nav lg:menu lg:menu-horizontal bg-base-200 w-full justify-center">
	<li class={$navStore === 'home' ? 'active' : ''}>
		<a href="/" class="flex h-full w-full flex-col items-center justify-center">
			<i class="fa-solid fa-list-ul"></i>
			<div class="hidden sm:block">Treasure Hunts</div>
		</a>
	</li>
	<li class={$navStore === 'about' ? 'active' : ''}>
		<a href="/about" class="flex h-full w-full flex-col items-center justify-center">
			<i class="fa-solid fa-question"></i>
			<div class="hidden sm:block">About</div>
		</a>
	</li>
	<li class={$navStore === 'settings' ? 'active' : ''}>
		<a href="/settings" class="flex h-full w-full flex-col items-center justify-center">
			<i class="fa-solid fa-gear"></i>
			<div class="hidden sm:block">Settings</div>
		</a>
	</li>
</ul>
-->
<nav
	class="md:navbar bg-base-200 fixed bottom-0 flex h-16 w-full flex-row items-center justify-center md:top-0"
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
				<i class="fa-solid fa-list-ul"></i>
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
<main class="mb-16 flex flex-col gap-4 p-4 md:mb-0 md:mt-16">
	<h1 class="text-2xl">{$titleStore}</h1>
	<slot />
</main>
