<script lang="ts">
	import TreasureHuntCode from '$lib/TreasureHuntCode.svelte';
	import { navStore } from '$lib/store';
	$navStore = '';
</script>

<main class="flex h-full w-full flex-grow flex-col justify-center bg-green-900 p-8">
	<div class="mx-auto flex max-w-screen-lg flex-col gap-2">
		<TreasureHuntCode />
		<div class="divider">OR</div>
		<a class="btn" href="/events">
			<i class="fa-solid fa-magnifying-glass"></i>Browse Treasure Hunts
		</a>
	</div>
</main>
