<script lang="ts">
	import { focusTrap, getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { eventStore } from '../routes/eventStore';
	import lang from '../lang/lang.json';

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

	function unlock() {
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
				password.toLowerCase() === $eventStore.tasks[i].password.toLowerCase()
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
</script>

<form class="card p-4 flex flex-col gap-8">
	<h2 class="h3">{lang.unlockTask[$eventStore.lang]}</h2>
	<reader id="reader" class={scanning ? '' : 'hidden'} />
	<label class="label">
		<span>{lang.enterPasswordScanQR[$eventStore.lang]}</span>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input
				type="text"
				placeholder={lang.enterPassword[$eventStore.lang]}
				bind:value={password}
				on:submit={unlock}
			/>
			<input type="submit" class="hidden" on:click={unlock} />
			<button class="variant-filled-primary" on:click={start}>
				<i class="fa-solid fa-qrcode"></i>
			</button>
		</div>
	</label>
	<div class="flex justify-between">
		<button type="submit" class="btn variant-filled-primary" on:click={unlock}>
			<i class="fa-solid fa-check"></i>
			<span>{lang.submit[$eventStore.lang]}</span>
		</button>
		<button type="button" class="btn variant-ghost" on:click={modalStore.close}>
			<i class="fa-solid fa-xmark"></i>
			<span>{lang.close[$eventStore.lang]}</span>
		</button>
	</div>
</form>
