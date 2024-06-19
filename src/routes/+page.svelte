<script lang="ts">
	import TreasureHuntCode from '$lib/TreasureHuntCode.svelte';
	import { navStore } from '$lib/store';
	$navStore = '';
</script>

<main class="flex h-full w-full flex-col">
	<div class="mx-auto flex max-w-screen-lg flex-col gap-2">
		<TreasureHuntCode />

		<div class="divider">OR</div>
		<a class="btn btn-primary" href="/events"
			><i class="fa-solid fa-magnifying-glass"></i>Browse Treasure Hunts</a
		>
	</div>
</main>
