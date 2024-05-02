<script lang="ts">
	export let data;
	import { navStore } from '../../store';
	import { titleStore } from '../../store';
	$navStore = '';
	$titleStore = data.name;
</script>

<div class="fixed">
	<button class="btn btn-primary">
		<i class="fa-solid fa-key"></i>
		<div>Unlock Task</div>
	</button>
</div>

<style>
</style>
