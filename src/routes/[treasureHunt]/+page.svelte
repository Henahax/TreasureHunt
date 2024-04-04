<script lang="ts">
	import data from '../../assets/beta.json';
	let treasureHunt = data;
</script>

{#each treasureHunt.tasks as task}
	<h2 class="h2">{task.name}</h2>
{/each}
