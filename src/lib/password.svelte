<script lang="ts">
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';

	let password = '';
	let scanning = false;
	let html5Qrcode: any;

	onMount(init);
	onDestroy(closeThing);

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

	function closeThing() {
		if (scanning) {
			stop();
		}
	}

	function success() {
		passwordExists();
	}

	function error() {
		passwordExists();
	}

	function unlockThing() {
		let count = passwordExists();
		if (count === 0) {
			error();
			return;
		}
		success();
	}

	function passwordExists() {
		return 0;
	}
</script>

<form class="card flex w-full flex-col gap-4">
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
		<button class="btn" on:click={start}>
			<i class="fa-solid fa-x"></i>Close
		</button>
	</div>
</form>
