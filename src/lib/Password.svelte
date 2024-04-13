<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { eventStore } from '../routes/eventStore';
	import lang from '../lang/lang.json';

	const modalStore = getModalStore();
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
		modalStore.close();
		toastStore.trigger(toastSuccess);
	}

	function error() {
		passwordExists();
		modalStore.close();
		toastStore.trigger(toastError);
	}

	function unlockThing() {
		let count = passwordExists();
		if (count === 0) {
			error();
			return;
		}
		for (let i = 0; i <= count; i++) {
			$eventStore.tasks[i].locked = false;
		}
		success();
	}

	function passwordExists() {
		for (let i = 0; i < $eventStore.tasks.length; i++) {
			if (
				$eventStore.tasks[i].password !== undefined &&
				password.toLowerCase().trim() === $eventStore.tasks[i].password.toLowerCase()
			) {
				return i;
			}
		}
		return 0;
	}

	import { getToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	const toastSuccess: ToastSettings = {
		message: 'Aufgabe freigeschalten!',
		timeout: 2500,
		background: 'variant-filled-success'
	};

	const toastError: ToastSettings = {
		message: 'Ungültiges Passwort!',
		timeout: 2500,
		background: 'variant-filled-error'
	};

	let unlockTask = 'Unlock Task';
	let enterPasswordScanQR = 'Enter password or scan QR-Code';
	let unlock = 'Unlock';
	let close = 'Close';

	$: $eventStore, changeText();

	function changeText() {
		if (Object.keys($eventStore).length > 0) {
			unlockTask = lang.unlockTask[$eventStore.lang];
			enterPasswordScanQR = lang.enterPasswordScanQR[$eventStore.lang];
			unlock = lang.unlock[$eventStore.lang];
			close = lang.close[$eventStore.lang];
		}
	}
</script>

<form class="card p-4 flex flex-col gap-8">
	<h2 class="h3">{unlockTask}</h2>
	<reader id="reader" class={scanning ? '' : 'hidden'} />

	<label class="label">
		<span>{enterPasswordScanQR}</span>
		<div class="input-group grid-cols-[auto_1fr_auto]">
			<input type="submit" class="hidden" on:click={unlockThing} />
			<button class="variant-filled-primary" on:click={start}>
				<i class="fa-solid fa-qrcode"></i>
			</button>
			<input type="text" placeholder={unlock} bind:value={password} on:submit={unlockThing} />
		</div>
	</label>
	<div class="flex justify-between">
		<button type="button" class="btn variant-filled-primary" on:click={unlockThing}>
			<i class="fa-solid fa-check"></i>
			<span>{unlock}</span>
		</button>
		<button type="button" class="btn variant-ghost" on:click={modalStore.close}>
			<i class="fa-solid fa-xmark"></i>
			<span>{close}</span>
		</button>
	</div>
</form>
