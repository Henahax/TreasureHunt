<script lang="ts">
	import { page } from '$app/stores';
	import data from '../../../assets/beta.json';
	//todo in store laden, vielleicht schon in layout?
	let treasureHunt = data;
	let task = treasureHunt.tasks[$page.params.taskId];
</script>

{#if task.unlocked}
	<h2 class="h2 text-center">{task.name}</h2>
	{#each task.content as content}
		{#if content.type === 'text'}
			<p>{content.text}</p>
		{/if}
		{#if content.type === 'image'}
			<img src={content.src} alt="" />
		{/if}
	{/each}
{:else}
	<h2 class="h2 text-error-500 text-center">Task locked</h2>
	<p class="text-error-500">Use a password to unlock it.</p>
{/if}
