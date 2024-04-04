<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Modal
	import { Modal } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	import { getModalStore } from '@skeletonlabs/skeleton';
	import Events from '$lib/Events.svelte';
	import Password from '$lib/Password.svelte';

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
</script>

<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button type="button" class="btn variant-ghost" on:click={openTasks}>
					<i class="fa-solid fa-bars"></i><span class="hidden sm:block">Events</span>
				</button>
			</svelte:fragment>

			<h1 class="h4 text-center">Treasure Hunt</h1>

			<svelte:fragment slot="trail">
				<button type="button" class="btn variant-ghost-primary" on:click={openPassword}>
					<i class="fa-solid fa-key"></i>
					<span class="hidden sm:block">Unlock</span>
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
