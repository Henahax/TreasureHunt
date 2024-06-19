<script lang="ts">
	import type { Event } from '$lib/types';
	import { allEventsStore } from '$lib/store';

	let code: string = '';

	function testCode() {
		if (code.length === 0) {
			return;
		}

		$allEventsStore.forEach((treasureHunt: Event) => {
			if (treasureHunt.code === code) {
				window.location.href = `/events/${treasureHunt.id}`;
			}
		});
	}
</script>

<div class="join">
	<label class="input input-bordered input-primary join-item flex w-full items-center gap-2">
		<i class="fa-regular fa-map"></i>
		<input type="text" class="grow" placeholder="Treasure Hunt Code" bind:value={code} />
	</label>
	<button class="btn join-item btn-primary" on:click={testCode}>
		<i class="fa-solid fa-check"></i>
	</button>
</div>
