<script lang="ts">
	import { navStore } from '$lib/store';
	import { titleStore } from '$lib/store';

	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	//import { onDestroy } from 'svelte';
	import type { Event, Task } from '$lib/types';

	let password = '';
	let scanning = false;
	let html5Qrcode: any;

	onMount(init);
	//onDestroy(close);

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

	function onScanSuccess(decodedText: any, decodedResult: any) {
		password = decodedText;
		stop();
	}

	function onScanFailure(error) {}

	function close() {
		password = '';
		if (scanning) {
			stop();
		}
	}

	export let data: Event;

	$navStore = '';
	$titleStore = data.name;

	//temp
	import events from '$lib/events.json';
	let activeEvent = events[0];
</script>

<button class="btn btn-primary fixed bottom-20 right-4" onclick="my_modal_5.showModal()"
	><i class="fa-solid fa-key"></i>Unlock Task</button
>

<dialog id="my_modal_5" on:close={close} class="modal modal-bottom sm:modal-middle">
	<div class="modal-box flex w-full flex-col items-center gap-4">
		<h2 class="text-lg">Scan QR-code or enter password</h2>

		<reader id="reader" class={scanning ? '' : 'hidden'} />

		<button class="btn btn-neutral w-full text-start" on:click={start}>
			<i class="fa-solid fa-qrcode animate-pulse"></i>Scan QR-code
		</button>

		<label class="input input-bordered flex w-full items-center gap-2">
			<i class="fa-solid fa-key"></i>
			<input bind:value={password} type="text" class="grow" placeholder="Enter password" />
		</label>

		<div class="flex w-full flex-row justify-between">
			<button class="btn btn-primary min-w-32 self-end" on:click={start}>
				<i class="fa-solid fa-check"></i>
				Send
			</button>
			<form method="dialog">
				<button class="btn min-w-32">
					<i class="fa-solid fa-xmark"></i>
					Schließen
				</button>
			</form>
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

<style>
	:global(video) {
		width: 100% !important;
	}
</style>
