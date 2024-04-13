<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { eventStore } from '../routes/eventStore';
	import lang from '../lang/lang.json';
	const modalStore = getModalStore();

	let selectEvent = 'Events';
	let close = 'Unlock';

	$: $eventStore, changeText();

	function changeText() {
		if (Object.keys($eventStore).length > 0) {
			selectEvent = lang.selectEvent[$eventStore.lang];
			close = lang.close[$eventStore.lang];
		}
	}
</script>

<div class="card p-4 flex flex-col gap-4">
	<h2 class="h3">{selectEvent}</h2>
	<nav class="list-nav">
		<ul>
			<li>
				<a href="/beta">
					<span class="badge bg-primary-500">Beta</span>
					<span class="flex-auto">Technische Beta</span>
				</a>
			</li>
		</ul>
	</nav>
	<div class="flex justify-center">
		<button type="button" class="btn variant-ghost" on:click={modalStore.close}>
			<i class="fa-solid fa-xmark"></i>
			<span>{close}</span>
		</button>
	</div>
</div>
