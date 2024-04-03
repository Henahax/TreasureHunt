<script lang="ts">
	export let task: any;
	let taskId = 0;
</script>

{#if task.id === taskId && task.unlocked}
	<div class="mx-auto p-8 w-fit max-w-screen-xl flex flex-col gap-8">
		<h2 class="h2 text-center">{task.name}</h2>
		{#each task.content as content}
			{#if content.type === 'text'}
				<p>{content.text}</p>
			{/if}
			{#if content.type === 'image'}
				<img src={content.src} alt="" />
			{/if}
		{/each}
	</div>
{/if}
