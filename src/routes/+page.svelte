<script lang="ts">
	import TreasureHuntCode from '$lib/TreasureHuntCode.svelte';
</script>

<main class="treasureHunt flex h-full w-full flex-grow flex-col justify-center p-8">
	<div class="mx-auto flex max-w-screen-lg flex-col gap-2">
		<TreasureHuntCode />
		<div class="divider">OR</div>
		<a class="btn" href="/events">
			<i class="fa-solid fa-magnifying-glass"></i>Browse Treasure Hunts
		</a>
	</div>
</main>

<style>
	.treasureHunt {
		background: rgba(0, 0, 0, 0.5)
			url('https://images.unsplash.com/photo-1612257998095-1feb6bd2bcf9?q=100');
		background-size: cover;
		background-blend-mode: darken;
		background-position: center;
	}
</style>
