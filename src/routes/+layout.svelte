<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Modal } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Toast } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { eventStore } from './eventStore';
	import lang from '../lang/lang.json';
	import Events from '$lib/Events.svelte';
	import Password from '$lib/Password.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Modal
	initializeStores();

	const modalStore = getModalStore();
	const modalPassword: ModalComponent = { ref: Password };
	const modalPasswordSettings: ModalSettings = {
		type: 'component',
		component: modalPassword
	};

	const modalTasks: ModalComponent = { ref: Events };
	const modalTasksSettings: ModalSettings = {
		type: 'component',
		component: modalTasks
	};

	function openTasks() {
		modalStore.trigger(modalTasksSettings);
	}

	function openPassword() {
		modalStore.trigger(modalPasswordSettings);
	}

	let textTreasureHunt = 'Treasure Hunt';
	let textEvents = 'Events';
	let textUnlock = 'Unlock';

	$: $eventStore, changeText();

	function changeText() {
		if (Object.keys($eventStore).length > 0) {
			textTreasureHunt = $eventStore.name;
			textEvents = lang.events[$eventStore.lang];
			textUnlock = lang.unlock[$eventStore.lang];
		}
	}
</script>

<Toast />
<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button type="button" class="btn variant-ghost" on:click={openTasks}>
					<i class="fa-solid fa-bars"></i><span class="hidden sm:block">{textEvents}</span>
				</button>
			</svelte:fragment>

			<h1 class="h4 text-center"><strong>{textTreasureHunt}</strong></h1>

			<svelte:fragment slot="trail">
				<button type="button" class="btn variant-ghost-primary" on:click={openPassword}>
					<i class="fa-solid fa-key"></i>
					<span class="hidden sm:block">{textUnlock}</span>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="mx-auto p-4 max-w-screen-md flex flex-col gap-4">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		<div class="text-center p-4 text-xs opacity-50">© henahax.de 2024</div>
	</svelte:fragment>
</AppShell>
