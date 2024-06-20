<script lang="ts">
	import type { Event } from '$lib/types';
	export let event: Event;
	export let short: boolean = false;
</script>

<div class="flex w-fit flex-wrap justify-end gap-1 {short ? 'justify-end' : 'justify-center'}">
	<div class="badge badge-neutral gap-1 text-xs">
		<i class="fa-solid fa-location-dot"></i>{event.location}
	</div>
	<div class="badge badge-neutral gap-1 text-xs">
		<i class="fa-solid fa-language"></i>{event.lang}
	</div>
	{#if event.tags.length > 0}
		{#if short}
			<div class="badge badge-neutral gap-1 text-xs">{event.tags.length} {' '}tags</div>
		{:else}
			{#each event.tags as tag}
				<div class="badge badge-neutral gap-1 text-xs">{tag}</div>
			{/each}
		{/if}
	{/if}
</div>
