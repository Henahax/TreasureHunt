<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';

	let password = '';
	let scanning = false;
	let html5Qrcode;

	onMount(init);

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

	function onScanFailure(error) {
		//console.warn(`Code scan error = ${error}`);
	}

	async function close() {
		if (scanning) {
			await html5Qrcode.stop();
		}
		modalStore.clear();
	}
</script>

<div class="card p-8 flex flex-col gap-8">
	<h2 class="h3">Unlock task</h2>
	<reader id="reader" class={scanning ? '' : 'hidden'} />
	{#if scanning}
		<button type="button" class="btn variant-filled-primary w-fit self-center" on:click={stop}>
			<i class="fa-solid fa-stop"></i>
			<span>Stop</span>
		</button>
	{/if}
	<label class="label">
		<span>Enter password or scan QR-code</span>
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
			<input type="text" placeholder="Enter password..." bind:value={password} />
			<button class="variant-filled-primary" on:click={start}>
				<i class="fa-solid fa-qrcode"></i>
			</button>
		</div>
	</label>
	<div class="flex justify-between">
		<button type="submit" class="btn variant-filled-primary" on:click={close}>
			<i class="fa-solid fa-check"></i>
			<span>Submit</span>
		</button>
		<button type="button" class="btn variant-ghost" on:click={close}>
			<i class="fa-solid fa-xmark"></i>
			<span>Close</span>
		</button>
	</div>
</div>
