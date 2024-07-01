<script lang="ts">
	import type { Event } from '$lib/types';
	import { allEventsStore } from '$lib/store';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';

	let code: string = '';

	function testCode(event: Event) {
		event.preventDefault(); // Prevent form submission

		if (code.length === 0) {
			return;
		}

		const allEvents = get(allEventsStore);
		allEvents.forEach((treasureHunt: Event) => {
			if (treasureHunt.code === code) {
				treasureHunt.locked = false;
				console.log('/events/' + treasureHunt.id);
				goto('/events/' + treasureHunt.id);
			}
		});
	}
</script>

<div class="join">
	<form class="flex w-full flex-row" on:submit={testCode}>
		<label class="input input-bordered join-item flex w-full items-center gap-2">
			<i class="fa-solid fa-scroll"></i>
			<input type="text" class="grow" placeholder="Treasure Hunt Code" bind:value={code} />
		</label>

		<button class="btn join-item" type="submit">
			<i class="fa-solid fa-check"></i>
		</button>
	</form>
</div>
