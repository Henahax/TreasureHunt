<script lang="ts">
	import Heading from '$lib/heading.svelte';
	export let data;

	import { navStore } from '../../store';
	$navStore = "";
</script>

<Heading title={data.name} />

<div class="fixed">
	<button class="btn btn-primary">
		<i class="fa-solid fa-key"></i>
		<div>Unlock Task</div>
	</button>
</div>

<style>
</style>
