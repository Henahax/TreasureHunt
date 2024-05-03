<script>
	import './styles.css';
	import { navStore } from './store';
	import { titleStore } from './store';
</script>

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

<main class="mx-auto flex max-w-screen-lg flex-col gap-4 p-2 pb-20 lg:pb-2 lg:pt-16">
	<h1 class="text-3xl">{$titleStore}</h1>

	<div class="mx-auto grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
		<slot />
	</div>
</main>

<style>
</style>
