<script>
	import './styles.css';
	import { navStore } from './store';
	import { titleStore } from './store';
</script>

<ul
	class="max-lg:btm-nav lg:menu lg:menu-horizontal bg-base-200 fixed z-50 flex w-full flex-row justify-center text-center"
>
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

<main>
	<slot />
</main>
