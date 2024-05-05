<script lang="ts">
	import { navStore } from '../../store';
	import { titleStore } from '../../store';

	export let data;

	$navStore = '';
	$titleStore = data.name;

	let activeEvent = '';
	let activeTask = 0;

	function startEvent() {}
</script>

<section>Progress Drawer</section>

<!-- event info -->
<section>
	<div>
		<img src={data.image} alt={data.name} />
		<p>{data.description}</p>
		<button on:click={startEvent}>Start Event</button>
	</div>
	<div>Task Info</div>
</section>

<style>
</style>
