<script lang="ts">
	import Heading from '$lib/images/heading.svelte';
	export let data;
</script>

<Heading title={data.name} />

<div class="fixed bottom-20 flex w-full max-w-screen-lg flex-row justify-end px-8">
	<button class="btn btn-primary">
		<i class="fa-solid fa-key"></i>
		<div>Unlock Task</div>
	</button>
</div>

<ul class="steps steps-vertical">
	<li class="step step-primary">Register</li>
	<li class="step step-primary">Choose plan</li>
	<li class="step">Purchase</li>
	<li class="step">Receive Product</li>
</ul>

<style>
</style>
