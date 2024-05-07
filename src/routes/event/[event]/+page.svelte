<script lang="ts">
	import { navStore } from '$lib/store';
	import { titleStore } from '$lib/store';

	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';

	let password = '';
	let scanning = false;
	let html5Qrcode: any;

	onMount(init);
	onDestroy(close);

	function init() {
		html5Qrcode = new Html5Qrcode('reader');
	}

	function start() {
		html5Qrcode.start(
			{ facingMode: 'environment' },
			{
				fps: 10,
				qrbox: { width: 250, height: 250 }
			},
			onScanSuccess,
			onScanFailure
		);
		scanning = true;
	}

	async function stop() {
		await html5Qrcode.stop();
		scanning = false;
	}

	function onScanSuccess(decodedText, decodedResult) {
		password = decodedText;
		stop();
	}

	function onScanFailure(error) {}

	function close() {
		if (scanning) {
			stop();
		}
		document.getElementById('closePassword')?.click();
	}

	export let data;

	$navStore = '';
	$titleStore = data.name;
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex w-fit flex-col items-center p-16">
		<label for="my-drawer" class="btn btn-neutral drawer-button fixed bottom-20 left-4 lg:hidden"
			><i class="fa-solid fa-book"></i>Task</label
		>
		<!-- Page content here -->

		<button class="btn btn-primary fixed bottom-20 right-4" onclick="my_modal_5.showModal()"
			><i class="fa-solid fa-key"></i>Unlock Task</button
		>

		<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
			<div class="modal-box flex flex-col gap-4">
				<h3 class="text-lg">Scan QR-code or enter password</h3>
				<reader id="reader" class={scanning ? '' : 'hidden'} />

				<button class="btn w-fit" on:click={start}>
					<i class="fa-solid fa-qrcode"></i>Scan QR-code
				</button>

				<label class="input input-bordered flex items-center gap-2">
					<i class="fa-solid fa-key"></i>
					<input type="text" class="grow" placeholder="Enter password" />
				</label>

				<div class="flex flex-row justify-between gap-4">
					<button class="btn btn-primary" on:click={start}>
						<i class="fa-solid fa-check"></i>Send
					</button>
					<button class="btn" on:click={close}>
						<i class="fa-solid fa-x"></i>Close
					</button>
				</div>
			</div>

			<form method="dialog" class="modal-backdrop">
				<button id="closePassword" on:click={close}></button>
			</form>
		</dialog>

		{#each data.tasks as task}
			{#if task.active}
				<h2>{task.name}</h2>
			{/if}
		{/each}
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="steps steps-vertical bg-base-200 my-auto h-full px-4 py-16">
			{#each data.tasks as task}
				{#if task.active}
					<li data-content="!" class="step step-primary min-h-0">
						<button class="btn btn-link min-h-0">{task.name}</button>
					</li>
				{:else if task.unlocked}
					<li data-content="✓" class="step step-primary">
						<a class="btn btn-link">{task.name}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>

<style>
</style>
