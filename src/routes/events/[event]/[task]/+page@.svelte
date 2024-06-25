<script lang="ts">
	import PageContainer from '$lib/PageContainer.svelte';
	import type { Task } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { navStore, activeEventStore } from '$lib/store';
	import { Html5Qrcode } from 'html5-qrcode';

	$navStore = 'task';

	let taskId = $page.params.task;

	let task: Task;

	let scanning = false;
	let html5Qrcode: Html5Qrcode;

	let password = '';

	onMount(init);
	onDestroy(close);

	if ($activeEventStore) {
		task = $activeEventStore.tasks.find((task: Task) => task.id === taskId) as Task;
	}

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

	function onScanSuccess(decodedText, decodedResult) {
		password = decodedText;
		stop();
		my_modal_5.close();
	}

	function onScanFailure(error) {}

	function close() {
		if (scanning) {
			stop();
		}
	}

	async function stop() {
		await html5Qrcode.stop();
		scanning = false;
	}

	function success() {
		doStuff();
	}

	function doStuff() {
		alert(password);
		// toast success/failure
		// if success close();
	}
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<PageContainer>
			<h2 class="text-2xl">{task.name}</h2>
			<label
				for="my-drawer-2"
				class="btn drawer-button fixed bottom-20 w-fit md:bottom-4 lg:hidden"
			>
				<i class="fa-solid fa-list-check"></i><span class="hidden sm:block">Steps</span>
			</label>
			<button
				class="btn btn-primary fixed bottom-20 right-4 w-fit md:bottom-4"
				onclick="my_modal_5.showModal()"
				><i class="fa-solid fa-key"></i><span class="hidden sm:block">Password</span>
			</button>
		</PageContainer>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul
			class="bg-base-100 steps steps-vertical h-full w-fit overflow-y-auto p-4 pb-16 pt-4 md:pb-4 md:pt-16 lg:pt-4"
		>
			<!-- Sidebar content here -->
			<li class="step step-primary">
				<a class="btn btn-outline w-full" href="/">Register</a>
			</li>
			<li class="step step-primary">
				<a class="btn w-full" href="/">Purchase Purchase</a>
			</li>
			<li class="step">
				<a class="btn w-full" href="/">Purchase</a>
			</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
			<li class="step">Purchase</li>
		</ul>
	</div>
</div>

<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<div class="flex flex-col gap-4">
			<h3 class="text-lg font-bold">Enter password or scan QR-code</h3>
			<reader id="reader" class="{scanning ? '' : 'hidden'} w-full" />

			<form class="flex flex-col gap-4">
				<div class="inline-flex grow gap-4">
					<label class="input input-bordered flex w-full items-center gap-2">
						<i class="fa-solid fa-key"></i>
						<input type="text" class="grow" placeholder="Enter password" bind:value={password} />
					</label>
					<input type="submit" hidden on:click={doStuff} />
					{#if scanning}
						<button class="btn btn-error" on:click={stop}>
							<i class="fa-solid fa-x"></i>
						</button>
					{:else}
						<button class="btn btn-primary" on:click={start}>
							<i class="fa-solid fa-qrcode"></i>
						</button>
					{/if}
				</div>
				<button class="btn w-fit self-end" type="submit" on:click={doStuff}>
					<i class="fa-solid fa-check"></i>
					Submit
				</button>
			</form>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
